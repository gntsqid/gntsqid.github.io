function highlightCode(codeBlock, language) {
  var languageCode = "language-" + language;
  var codeContainer = document.querySelector(".code-container");
  var code = codeBlock.querySelector(".code");

function copyCode() {
  let code = document.getElementById('code').innerText;
  code = code.split('\n').map(line => line.trim()).join('\n');
  navigator.clipboard.writeText(code);
}

