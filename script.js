function abrirmenu(){
  let barraMenuAberto = document.getElementById('barra-menu')
  if (barraMenuAberto.style.width == "0px")
  barraMenuAberto.style.width = "300px"
  else{
    barraMenuAberto.style.width = "0px"
  }
}
