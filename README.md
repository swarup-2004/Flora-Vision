# Flora Vision

## Technologies Used

### BackEnd:
- Python
- Tensorflow
- Keras
- Flask

### FrontEnd:
- React

## Project Description

This project focuses on utilizing machine learning techniques to identify various medicinal plants and provide users with relevant information. Below are the key components of the project:

- **CNN Model Training**: We have trained a Convolutional Neural Network (CNN) model using TensorFlow and Keras. The model is trained on a dataset containing images of medicinal plants.

- **Flask API**: To deploy the trained model and make predictions accessible, we have built a Flask API. This API serves as the interface for users to interact with the model.

- **Plant Classes**: The model can successfully identify images belonging to six different classes of medicinal plants. These classes are:
  - Arjuna
  - Bramhi
  - Curry
  - Mint
  - Neem
  - Rubble

- **Prediction and Information Retrieval**: Upon successful prediction, users receive information about the identified medicinal plant. This information includes various attributes such as medicinal properties, usage, and precautions.

- **Chatbot Integration**: Additionally, we have integrated a chatbot feature to allow users to ask questions related to the identified plant. The chatbot provides informative responses based on the user's queries.

## Installation

1. Clone the repository:

    ```bash
    $ git clone https://github.com/swarup-2004/Flora-Vision.git
    $ cd Flora-Vision
   ```
    
3. Install dependencies:

    ```bash
    $ pip install -r requirements.txt
    ```
    
## Usage
1. Start server:

    ```bash
    $ cd api
    $ python app.py
    ```
    
2. Run Application:

   ```bash
    $ npm run dev
    ```


3. Upload image of Plant and get result
4. Ask Questions to chatbot

## Contributors

- Atharva Zanjad
- Swarup Pokhakar
- Tanmay Shingavi
- Vaishnavi Thakur

## Screenshots

<img src="Screenshot 2024-06-23 160146.png">
<img src="Screenshot 2024-06-23 160246.png">
<img src="Screenshot 2024-06-23 160314.png">
<img src="Screenshot 2024-06-23 160349.png">
