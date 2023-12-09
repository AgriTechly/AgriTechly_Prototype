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
    }
  }