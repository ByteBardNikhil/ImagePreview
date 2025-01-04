const previewText = document.getElementById("previewText");
const imagePreview = document.getElementById("imagePreview");

// Listen for paste events
document.addEventListener("paste", (event) => {
  const items = event.clipboardData.items;
  for (let item of items) {
    if (item.type.startsWith("image/")) {
      const file = item.getAsFile();
      const reader = new FileReader();

      // When the file is read
      reader.onload = function (e) {
        previewText.style.display = "none";
        imagePreview.style.display = "block";
        imagePreview.src = e.target.result;
      };

      reader.readAsDataURL(file);
      return;
    }
  }
  alert("No image found in the clipboard!");
});
