import PageFormacao from "@/components/PageFormacao";

export default async function Page() {
  return (
    <PageFormacao
      titulo="Publicações"
      descricao="As publicações da LONA se somam às outras ações da plataforma que visam construir um espaço de formação contínuo e diversificado. A partir da edição de 2022, os Cadernos LONA foram produzidos visando fortalecer o campo da reflexão e pesquisa em torno dos atravessamentos dos filmes e territórios que a mostra proporciona. Sem se prender a uma linguagem ou campo de conhecimento específico, as publicações tem uma diversidade de vozes e gêneros textuais. Os Cadernos LONA são um espaço em que a crítica de cinema, o pensamento teórico e a prática militante possam se entrelaçar. Os três primeiros Cadernos LONA, foram divididos em três eixos: IMAGEM, TEMPO E TERRITÓRIO, e podem ser conferidos logo abaixo."
      anchorLinks={['VOL.1 – IMAGEM', 'VOL.2 – TEMPO', 'VOL.3 – TERRITÓRIO']}
    />
  );
}