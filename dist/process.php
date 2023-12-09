<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Check if the file was uploaded without errors
    if (isset($_FILES['image']) && $_FILES['image']['error'] === 0) {
        $imagePath = $_FILES['image']['tmp_name'];

        // Determine which image type is being uploaded based on the submitted form
        $imageType = $_POST['imageType'];

        // Define the Python script for each image type
        $pythonScript = '';
        switch ($imageType) {
            case 'honeyBee':
                $pythonScript = '../scripts/predict_bee.py';
                break;
            case 'plant':
                $pythonScript = '../scripts/predict_plant.py';
                break;
            // Add more cases for other image types if needed
            default:
                // Handle unexpected image type
                echo "Invalid image type";
                exit;
        }

        // Construct the command to execute the Python script
        $command = 'python3 ' . $pythonScript . ' ' . escapeshellarg($imagePath);

        // Execute the command and capture the output
        exec($command, $output, $returnVar);

        // Check if the execution was successful
        if ($returnVar === 0) {
            // Output the result from the Python script
            echo "Image Classification Result: " . implode("\n", $output);
        } else {
            // Handle errors
            echo "Error executing Python script";
        }
    } else {
        // Handle file upload errors
        echo "Error uploading the image";
    }
}

?>
