function highlightCode(codeBlock, language) {
  var languageCode = "language-" + language;
  var codeContainer = document.querySelector(".code-container");
  var code = codeBlock.querySelector(".code");

  code.classList.add(languageCode);
}

function copyCodeToClipboard() {
  var codeBlock = document.querySelector(".code-container");
  var code = codeBlock.querySelector(".code");

  var copyText = code.textContent;
  var copyTextElement = document.createElement("input");
  copyTextElement.value = copyText;
  copyTextElement.type = "text";
  copyTextElement.style.display = "none";

  document.body.appendChild(copyTextElement);
  copyTextElement.select();
  document.execCommand("copy");
  copyTextElement.remove();
}

var copyButton = document.createElement("button");
copyButton.textContent = "Copy";
copyButton.onclick = copyCodeToClipboard;

var codeContainer = document.querySelector(".code-container");
codeContainer.appendChild(copyButton);
