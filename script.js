function copyToClipboard(textToCopy, alertMessage) {
  const clipboardItem = new ClipboardItem({
    "text/plain": new Blob([textToCopy], { type: "text/plain" }),
  });

  navigator.clipboard
    .write([clipboardItem])
    .then(alert(`${alertMessage} copied to clipboard.`))
    .catch(function (error) {
      console.error("Error copying text to clipboard: ", error);
    });
}

document.getElementById("discordButton").addEventListener("click", function () {
  copyToClipboard("heisenberg.blue", "Discord username");
});
document.getElementById("sessionButton").addEventListener("click", function () {
  copyToClipboard(
    "0599068c25c5a53516a43308bff35a6092bf82f397cfda0b0dc2f9a2877a263c20",
    "Session ID"
  );
});
