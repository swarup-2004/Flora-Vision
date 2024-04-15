from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.utils import secure_filename
from PIL import Image
import numpy as np
from tensorflow import keras

app = Flask(__name__)
CORS(app)

# Function to predict class of the image
def predict_class(probab):
    num = np.argmax(probab)
    classes = ['Arjun', 'Bramhi', 'Curry', 'Mint', 'Neem', 'Rubble']
    return classes[num], num

@app.route('/api/submit_data', methods=['POST'])
def submit_data():
    if 'image' not in request.files:
        return jsonify({'message': 'No file part in the request'}), 400

    image = request.files['image']
    img = image.resize((128, 128))
    img = np.array(img) / 255.0

    # Add an extra dimension to simulate a batch of size 1
    img = np.expand_dims(img, axis=0)

    # Load the neural model
    model = keras.models.load_model("CNN_Model.h5")

    # Predicting the class of the model
    predictions = model.predict(img)
    
    category, score = predict_class(predictions)

    return jsonify({'plantName': category, "score" : score})

if __name__ == '__main__':
    app.run(debug=True)