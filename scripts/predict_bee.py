# by @aek426rahmani
# 08-12-2023
"""
this file is used to predict and return the result in results/result[i].json file the i is the number of the result to save history of the results
it will be executed by the server
"""

# import the necessary packages
import sys
import os
import json
import cv2
import tensorflow as tf
import numpy as np

# loading and preprocessing the image
def load_and_preprocess_image(image_path):
    """
    this function is used to load and preprocess the image
    """
    # load the image
    img = cv2.imread(image_path)
    # Resize the image to match the model's input shape
    img = cv2.resize(img, (100, 100))
    # Preprocess the image (you may need to adjust preprocessing based on your model)
    img = img / 255.0  # Normalize pixel values to be between 0 and 1
    img = np.expand_dims(img, axis=0)  # Add batch dimension
    return img
