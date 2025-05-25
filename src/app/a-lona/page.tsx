import { getALona } from "@/utils/getALona";
import HeaderSessao from "@/components/ui/HeaderSessao";

export default async function Page() {
  const data = await getALona();

  if (!data) {
    return <div>Erro ao carregar dados da página. Tente novamente.</div>;
  }

  return (
    <section className="lona">
      <div className="lona__sidebar">
        <h1 className="lona__title archivo condensed uppercase">
          A lona
        </h1>
        <nav className="lona__nav">
          <ul>
            <li><a className="biz" href="#a-lona">→ Sobre a Lona</a></li>
            <li><a className="biz" href="#o-mlb">→ Sobre o MLB</a></li>
            <li><a className="biz" href="#equipe">→ Equipe</a></li>
          </ul>
        </nav>
      </div>

      <div className="lona__content">
        <div id="a-lona" className="lona__card">
          <HeaderSessao nome="sobre a lona" font="archivo" />
          <div
            className="lona__card-text"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </div>

        <div id="o-mlb" className="lona__card">
          <HeaderSessao nome="Sobre o MLB" font="archivo" />
          <div 
            className="lona__card-text"
            dangerouslySetInnerHTML={{__html: data.informacoesLona.sobreMlb}}
          />
        </div>
        <div id="equipe" className="lona__equipe">
          <HeaderSessao nome="Equipe" font="archivo" />
          <div 
            className="lona__equipe-content"
            dangerouslySetInnerHTML={{__html: data.informacoesLona.equipe}}
          />
        </div>
      </div>
    </section>
  );
}