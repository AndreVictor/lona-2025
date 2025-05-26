"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function Vinheta() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showVideo, setShowVideo] = useState(false);
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!containerRef.current || showVideo) return;

    const container = containerRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const rendererInstance = new THREE.WebGLRenderer({ antialias: false });
    rendererInstance.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(rendererInstance.domElement);
    setRenderer(rendererInstance);

    const lastMouse = new THREE.Vector2(0.5, 0.5);
    const uniforms = {
      u_texture: { value: null as THREE.VideoTexture | null  },
      u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
      u_time: { value: 0.0 },
      u_velocity: { value: new THREE.Vector2(0.0, 0.0) }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const newMouse = new THREE.Vector2(e.clientX / window.innerWidth, 1.0 - e.clientY / window.innerHeight);
      uniforms.u_velocity.value = newMouse.clone().sub(lastMouse).multiplyScalar(120.0);
      lastMouse.copy(newMouse);
      uniforms.u_mouse.value.copy(newMouse);
    };

    window.addEventListener("mousemove", handleMouseMove);

    const video = document.createElement("video");
    video.src = "/video-3.mp4";
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.crossOrigin = "anonymous";
    video.style.display = "none";
    document.body.appendChild(video);

    video.addEventListener("loadeddata", () => {
      video.play();

      const texture = new THREE.VideoTexture(video);
      texture.minFilter = THREE.NearestFilter;
      texture.magFilter = THREE.NearestFilter;
      texture.generateMipmaps = false;
      uniforms.u_texture.value = texture;

      const material = new THREE.ShaderMaterial({
        uniforms: uniforms,
        fragmentShader: `
          precision highp float;
          uniform sampler2D u_texture;
          uniform vec2 u_resolution;
          uniform vec2 u_mouse;
          uniform vec2 u_velocity;
          uniform float u_time;

          float rand(vec2 co) {
            return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
          }

          float bayer8(vec2 pos) {
            int x = int(mod(pos.x, 8.0));
            int y = int(mod(pos.y, 8.0));
            int idx = x + y * 8;
            float bayer[64];
            bayer[0]=0.;bayer[1]=48.;bayer[2]=12.;bayer[3]=60.;
            bayer[4]=3.;bayer[5]=51.;bayer[6]=15.;bayer[7]=63.;
            bayer[8]=32.;bayer[9]=16.;bayer[10]=44.;bayer[11]=28.;
            bayer[12]=35.;bayer[13]=19.;bayer[14]=47.;bayer[15]=31.;
            bayer[16]=8.;bayer[17]=56.;bayer[18]=4.;bayer[19]=52.;
            bayer[20]=11.;bayer[21]=59.;bayer[22]=7.;bayer[23]=55.;
            bayer[24]=40.;bayer[25]=24.;bayer[26]=36.;bayer[27]=20.;
            bayer[28]=43.;bayer[29]=27.;bayer[30]=39.;bayer[31]=23.;
            bayer[32]=2.;bayer[33]=50.;bayer[34]=14.;bayer[35]=62.;
            bayer[36]=1.;bayer[37]=49.;bayer[38]=13.;bayer[39]=61.;
            bayer[40]=34.;bayer[41]=18.;bayer[42]=46.;bayer[43]=30.;
            bayer[44]=33.;bayer[45]=17.;bayer[46]=45.;bayer[47]=29.;
            bayer[48]=10.;bayer[49]=58.;bayer[50]=6.;bayer[51]=54.;
            bayer[52]=9.;bayer[53]=57.;bayer[54]=5.;bayer[55]=53.;
            bayer[56]=42.;bayer[57]=26.;bayer[58]=38.;bayer[59]=22.;
            bayer[60]=41.;bayer[61]=25.;bayer[62]=37.;bayer[63]=21.;
            return bayer[idx] / 64.0;
          }

          void main() {
            vec2 uv = gl_FragCoord.xy / u_resolution;

            vec4 color = texture2D(u_texture, uv);
            float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
            float dither = bayer8(gl_FragCoord.xy + rand(gl_FragCoord.xy) * 0.5);
            float result = step(dither, gray);

            gl_FragColor = vec4(vec3(result), 1.0);
          }
        `
      });

      const plane = new THREE.PlaneGeometry(2, 2);
      const mesh = new THREE.Mesh(plane, material);
      scene.add(mesh);

      rendererInstance.setAnimationLoop(() => {
        uniforms.u_time.value += 0.01;
        rendererInstance.render(scene, camera);
      });
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      rendererInstance.dispose();
      container.removeChild(rendererInstance.domElement);
      document.body.removeChild(video);
    };
  }, [showVideo]);

  useEffect(() => {
    if (showVideo && renderer) {
      renderer.setAnimationLoop(null);
    }
  }, [showVideo, renderer]);

  return (
    <div className="vinheta">
      <div
        className="vinheta__bg"
        ref={containerRef}
        style={{ width: "100%", height: "100%" }}
      />

      {!showVideo && (
        <div className="vinheta__info biz">
          <p>27 maio — <br/>8 junho 2025</p>
          <button className="vinheta__btn biz" onClick={() => setShowVideo(true)}>
            → Vinheta
          </button>
        </div>
      )}

      {showVideo && (
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "black", zIndex: 2 }}>
          <iframe
            src="https://player.vimeo.com/video/1087279849?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            title="Vinheta :: LONA :: 2025"
            allowFullScreen
          />
          <button 
            onClick={() => setShowVideo(false)} 
            style={{ position: "absolute", top: 20, right: 20, fontSize: "1.6rem", padding: "0.5rem 1rem", background: "white", color: "black" }}
            className="vinheta__close-btn biz uppercase"
          >
            Fechar
          </button>
        </div>
      )}
    </div>
  );
}