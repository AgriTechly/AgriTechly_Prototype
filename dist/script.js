function activateImageInput(inputId) {
  const imageInput = document.getElementById(inputId);
  imageInput.click();
}

function handleImageUpload(input) {
  const selectedFile = input.files[0];

  if (selectedFile) {
      // You can handle the selected file here
      console.log("Selected File:", selectedFile);

      // You may want to display the selected image
      const imgElement = input.previousElementSibling.previousElementSibling; // Assuming the img element is two elements before the input
      imgElement.src = URL.createObjectURL(selectedFile);

      // Automatically submit the form using JavaScript
      input.form.submit();
  }
}

// Disable the default form submission behavior
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('form').addEventListener('submit', function (e) {
      e.preventDefault();
  });
});

// Optional: Trigger the image input click when the page loads (you can remove this if not needed)
document.addEventListener('DOMContentLoaded', function () {
  activateImageInput('imageInput-honeyBee'); // Replace with the actual input ID
});
