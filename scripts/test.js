function highlightCode(codeBlock, language) {
  var languageCode = "language-" + language;
  var codeContainer = document.querySelector(".code-container");
  var code = codeBlock.querySelector(".code");

  code.classList.add(languageCode);
}
