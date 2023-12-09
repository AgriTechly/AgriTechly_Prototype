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

  function runPlantScript(input){
    const { exec } = require('child_process');

  // Replace 'your_script.py' with the actual name of your Python script
  const pythonScript = '../scripts/predict_plant.py';

  exec(`python ${pythonScript} ${input}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing the Python script: ${error}`);
      return;
    }

    console.log(`Python script output:\n${stdout}`);
  });

  }