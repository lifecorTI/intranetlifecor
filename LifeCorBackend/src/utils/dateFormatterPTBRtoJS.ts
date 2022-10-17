export function dateFormatterPTBRtoJS(date: any) {
  const [dia, mes, ano] = date.split("/");

  if (ano === undefined) {
    return new Date(date)

  }


  const newDate = new Date(`${mes}-${dia}-${ano}`);



  return newDate;
}
