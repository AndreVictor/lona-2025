export function formatDate(dataString: string, comHora = true) {
  if (!dataString) return "";

  const [datePart, timePartRaw] = dataString.split(" ");

  const [part1, part2, year] = datePart.split("/").map(str => str.trim());

  let dia, mes;

  if (parseInt(part1) > 12) {
    dia = part1;
    mes = part2;
  } else {
    mes = part1;
    dia = part2;
  }

  const horasFormatadas = timePartRaw ? formatTime(timePartRaw) : "";

  const dataFormatada = `${dia} ${getNomeMes(mes)} ${year}`;

  return comHora && horasFormatadas
    ? `${dataFormatada} – ${horasFormatadas}`
    : dataFormatada;
}

function formatTime(timeString: string) {
  if (!timeString) return "";

  const time = timeString.replace(/(am|pm)/i, "").trim();
  const [hora, minuto] = time.split(":");
  const horaFormatada = hora.padStart(2, "0");
  const minutoFormatado = (minuto ?? "00").padStart(2, "0");

  return `${horaFormatada}h${minutoFormatado}`;
}

function getNomeMes(mes: string) {
  const meses = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro",
  ];
  return meses[parseInt(mes, 10) - 1] || mes;
}