import streamlit as st
from PIL import Image
import numpy as np
from tensorflow import keras


# Function to predict class of the image
def predict_class(probab):
    num = np.argmax(probab)
    classes = ['Arjun', 'Bramhi', 'Curry', 'Mint', 'Neem', 'Rubble']
    return classes[num]

# App title and description
st.title("Plant Identifier")
st.write("Upload an image of the plant.")

# User option to upload image or capture from camera
upload_option = st.radio("Choose an option:", ["Upload Image", "Capture from Camera"])

uploaded_file = None

if upload_option == "Upload Image":
    # Upload image through file uploader
    uploaded_file = st.file_uploader("Choose an image...", type=["jpg", "jpeg", "png"])

    

elif upload_option == "Capture from Camera":
    # Capture image from the camera
    uploaded_file = st.camera_input("Take a picture")
        

# Display the uploaded or captured image
if uploaded_file is not None:
    # Display the image with a caption
    image = Image.open(uploaded_file)
    st.image(image, caption="Uploaded/Captured Image", use_column_width=True)

    # Preprocessing the image for the model to predict
    img = image.resize((128, 128))
    img = np.array(img) / 255.0

    # Add an extra dimension to simulate a batch of size 1
    img = np.expand_dims(img, axis=0)

    ok = st.button("Predict")

    # Load the neural model
    model = keras.models.load_model("my_keras_model.h5")

    if ok:
        

        # Predicting the class of the model
        predictions = model.predict(img)

        # Showing predicted output
        st.write("Image class:", predict_class(predictions))
