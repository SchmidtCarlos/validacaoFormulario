const botaoEnviar = document.querySelector(".botaoEnviar")
const inputs = document.querySelectorAll(".input")
const aviso = document.querySelectorAll(".campo-obrigatorio")

///// Funções para estilizar conforme a validação 

function setError(index) {
  inputs[index].style.border = "red 1px solid";
  aviso[index].innerHTML = "<p>Campo obrigatório</p>";
}

function removeError(index) {
  inputs[index].style.border = "#34b375 1px solid"
  aviso[index].innerHTML = ""
}

///// Duas formas para validar os formulários:
/////  1- É necessário replicar o código, ficando muito extenso, passando por cada uma das posições dos inputs manualmente (deixei comentado para poder enxergar as duas formas).
///// 2- Automatizado: passa por todas as posições automaticamente e verifica se tem conteúdo nelas.

// botaoEnviar.addEventListener("click", function () {
//   if (inputs[0].value === "") {
//     setError(0)
//   } else {
//     removeError(0)
//   }
//   if (inputs[1].value === "") {
//     setError(1)
//   } else {
//     removeError(1)
//   }
//   if (inputs[2].value === "") {
//     setError(2)
//   } else {
//     removeError(2)
//   }
//   if (inputs[3].value === "") {
//     setError(3)
//   } else {
//     removeError(3)
//   }
// });

botaoEnviar.addEventListener("click", function () {
  inputs.forEach((element, index) => {
    if (element.value === '') {
      setError(index)
    } else {
      removeError(index)
    }
  })
})