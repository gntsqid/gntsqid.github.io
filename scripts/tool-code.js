function copyCode() {
  let code = document.getElementById('code').innerText;
  code = code.split('\n').map(line => line.trim()).join('\n');
  navigator.clipboard.writeText(code);
}



