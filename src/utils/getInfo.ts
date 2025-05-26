export function getInfo(sessao: any) {
  const info = sessao.informacoesSessao || sessao.informacoesMostraAcervo;
  if (!info) {
    console.warn("Nenhuma informação encontrada para a sessão:", sessao);
  }
  return info;
}