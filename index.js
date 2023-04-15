document.addEventListener("DOMContentLoaded", function () {
  var trocarTemaBotao = document.getElementById("trocarTemaBotao");
  var temaLink = document.getElementById("temaLink");
  var imagemTema = document.getElementById("box-img");
  var iconTema = document.getElementById("alert-icon");
  var iconAstro = document.getElementById("astro");

  function alternarTema() {
    // Altera o href do link do tema para alternar entre os estilos dos temas
    if (temaLink.getAttribute("href") === "index.css") {
      temaLink.setAttribute("href", "theme2.css");
      imagemTema.setAttribute("src", "assets/svg/azul.svg");
      iconTema.setAttribute("src", "assets/svg/alertblue.svg");
      iconAstro.setAttribute("src", "assets/svg/lua.svg");
    } else {
      temaLink.setAttribute("href", "index.css");
      imagemTema.setAttribute("src", "assets/svg/roxo.svg");
      iconTema.setAttribute("src", "assets/svg/alert.svg");
      iconAstro.setAttribute("src", "assets/svg/sol.svg");
    }
  }

  // Adiciona um ouvinte de evento de clique ao botão
  trocarTemaBotao.addEventListener("click", alternarTema);
});

function criptografar() {
  // Obtém o valor do input de texto
  const texto = document.getElementById("text-input").value;

  // Define as substituições a serem realizadas em um objeto
  const substituicoes = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };

  // Verifica se o texto contém letras maiúsculas, acentos, caracteres especiais ou números
  if (
    /[A-ZÀ-ÖØ-ÝÂ-ÛÄ-Üáàâãäåæçéèêëíìîïñóòôõöøœúùûüýÿ^$.*+?()[\]{}|\\]/.test(
      texto
    ) ||
    /\d/.test(texto)
  ) {
    alert("A resposta deve conter apenas letras minúsculas e sem acentos.");
    return;
  }

  // Aplica as substituições no texto
  let criptografado = texto;
  for (const chave in substituicoes) {
    criptografado = criptografado.replace(
      new RegExp(chave, "g"),
      substituicoes[chave]
    );
  }

  // Atualiza o valor do input de texto criptografado
  const boxElement = document.getElementById("box");
  boxElement.value = criptografado;

  // Define os estilos de exibição dos elementos
  boxElement.style.display = "block";
  document.getElementById("box-img").style.display = "none";
  document.getElementById("box-h3").style.display = "none";
  document.getElementById("box-p").style.display = "none";
  document.getElementById("copiar").style.display = "block";
}

function descriptografar() {
  const criptografado = document.getElementById("text-input").value;

  const substituicoes = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };

  // Aplica as substituições no texto criptografado
  let texto = criptografado;
  for (const chave in substituicoes) {
    // Utiliza uma expressão regular para substituir todas as ocorrências
    // da chave pela substituição correspondente
    texto = texto.replace(new RegExp(chave, "g"), substituicoes[chave]);
  }

  // Atualiza o valor do input de texto descriptografado
  const boxElement = document.getElementById("box");
  boxElement.value = texto;

  // Define os estilos de exibição dos elementos
  boxElement.style.display = "block";
  document.getElementById("box-img").style.display = "none";
  document.getElementById("box-h3").style.display = "none";
  document.getElementById("box-p").style.display = "none";
  document.getElementById("copiar").style.display = "block";
}

function copiar() {
  let texto = document.getElementById("box").value;
  navigator.clipboard
    .writeText(texto) // Escreve o texto na área de transferência
    .then(() => {
      alert("Texto copiado para a área de transferência!");
    })
    .catch((err) => {
      console.error(
        "Erro ao copiar o texto para a área de transferência: ",
        err
      );
    });
}
