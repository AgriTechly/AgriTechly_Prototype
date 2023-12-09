# by @aek426rahmani
# 09-12-2023
"""
this file is the server of the project
"""

# import the necessary packages
from flask import Flask, request, jsonify, render_template
import subprocess
import json
import os

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload():
    try:
        uploaded_file = request.files['image']
        if uploaded_file:
            # Save the uploaded file
            uploaded_file.save('uploaded_image.jpg')

            # Run plant prediction script
            plant_result = subprocess.run(['python', '/scripts/predict_plant.py', 'uploaded_image.jpg'], capture_output=True, text=True)
            update_json('plant', plant_result.stdout)

            """
            # Run bee prediction script
            bee_result = subprocess.run(['python', 'predict_bee.py', 'uploaded_image.jpg'], capture_output=True, text=True)
            update_json('bee', bee_result.stdout)
            """

            return jsonify({'success': True, 'message': 'File uploaded and processed successfully'})
        else:
            return jsonify({'success': False, 'message': 'No file uploaded'})
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)})

def update_json(category, result):
    # Update your JSON file based on the result
    script_dir = os.path.dirname(os.path.abspath(__file__))
    result_number = len(os.listdir(os.path.join(script_dir, 'results'))) + 1
    result_dict = {
        "category": category,
        "result": json.loads(result)
    }
    with open(os.path.join(script_dir, 'results', f'result{result_number}_{category}.json'), 'w') as outfile:
        json.dump(result_dict, outfile)

if __name__ == '__main__':
    app.run(debug=True)
