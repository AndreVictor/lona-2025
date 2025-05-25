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
            <li><a className="biz" href="#destaque">→ Próxima exibição</a></li>
            <li><a className="biz" href="#sessões">→ Sessões</a></li>
            <li><a className="biz" href="#filmes">→ Filmes</a></li>
            <li><a className="biz" href="#anteriores">→ Edições anteriores</a></li>
          </ul>
        </nav>
      </div>

      <div className="lona__content">
        <div className="lona__card">
          <HeaderSessao nome="sobre" font="archivo" />
          <div
            className="lona__card-text"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </div>

        <div className="lona__equipe">
          <HeaderSessao nome="Sobre o MLB" font="archivo" />
          <div className="lona__equipe-content">
            <p>{data.informacoesLona.sobreMlb}</p>
          </div>
        </div>
      </div>
    </section>
  );
}