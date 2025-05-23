import grafismo from '@/assets/grafismo.png';

type BackgroundImageProps = {
  inverted?: boolean;
};

export default function Grafismo({ inverted = false }: BackgroundImageProps) {
  return (
    <div
      style={{
        backgroundImage: `url(${grafismo.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        transform: inverted ? "rotate(180deg)" : undefined,
      }}
      className='grafismo'
    >
      &nbsp;
    </div>
  );
}