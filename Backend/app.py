from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.utils import secure_filename

app = Flask(__name__)
CORS(app)

@app.route('/api/submit_data', methods=['POST'])
def submit_data():
    if 'image' not in request.files:
        return jsonify({'message': 'No file part in the request'}), 400

    file = request.files['image'] 

    return jsonify({'plantName': 'Brahmi'})

if __name__ == '__main__':
    app.run(debug=True)