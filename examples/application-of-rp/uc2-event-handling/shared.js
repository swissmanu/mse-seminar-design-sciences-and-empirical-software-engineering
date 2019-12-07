function logInteraction(time) {
  const log = document.getElementById("log");
  const entry = document.createElement("li");
  entry.textContent = time.toUTCString();
  log.appendChild(entry);
}

function getButton() {
  return document.getElementById("button");
}
