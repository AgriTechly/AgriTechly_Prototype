function activateImageInput(inputId) {
    const imageInput = document.getElementById(inputId);
    imageInput.click();
  }

  function handlePlantImageUpload(input) {
    const selectedFile = input.files[0];

    if (selectedFile) {
      // You can handle the selected file here
      console.log("Selected File:", selectedFile);

      // You may want to display the selected image
      const imgElement = input.previousElementSibling.previousElementSibling; // Assuming the img element is two elements before the input
      imgElement.src = URL.createObjectURL(selectedFile);
    }
  }
  
  function handleBeeImageUpload(input) {
    const selectedFile = input.files[0];

    if (selectedFile) {
      // You can handle the selected file here
      console.log("Selected File:", selectedFile);

      // You may want to display the selected image
      const imgElement = input.previousElementSibling.previousElementSibling; // Assuming the img element is two elements before the input
      imgElement.src = URL.createObjectURL(selectedFile);
    }
  }

  function submitForm() {
    // Get the form data
    var formData = new FormData(document.forms[0]);

    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Configure it: POST-request for the process.php script
    xhr.open('POST', 'process.php', true);

    // Set up the callback function to handle the response
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Parse the JSON response
            var response = JSON.parse(xhr.responseText);

            // Update the page with the result or error
            if (response.result) {
                alert('Image Classification Result: ' + response.result);
                // You can update the page content dynamically here
            } else if (response.error) {
                alert('Error: ' + response.error);
            }
        }
    };

    // Send the form data
    xhr.send(formData);
}