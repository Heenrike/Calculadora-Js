function inserir(num) {
  document.querySelector("#tela").textContent += num;
}

function Clear() {
  document.querySelector("#tela").textContent = "";
}

function back() {
  let tela = document.querySelector("#tela").textContent;
  document.querySelector("#tela").textContent = tela.substring(0, tela.length - 1);
}

function soma() {
  let tela = document.querySelector("#tela").textContent;

  if (tela) {
    document.querySelector("#tela").textContent = eval(tela);
  }
}
