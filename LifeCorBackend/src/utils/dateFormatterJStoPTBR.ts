var formatter = new Intl.DateTimeFormat("pt-BR");

function dateFormatter(date: any) {
  const newDate = formatter.format(date);

  return newDate;
}

export default dateFormatter;
