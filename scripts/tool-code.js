function copyCode() {
  const code = document.getElementById('code').innerText;
  navigator.clipboard.writeText(code);
}

