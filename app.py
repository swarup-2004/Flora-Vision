import streamlit as st
from PIL import Image
import numpy as np
import tensorflow as tf 
from tensorflow import keras




#function to predict class of the image
def predict_class(probab):
    num = np.argmax(probab)
    classes = ['Arjun', 'Bramhi', 'Curry', 'Mint', 'Neem', 'Rubble']
    return classes[num]

#app title and description
st.title("Medicinal Plant Classifier")
st.write("Upload an image of the plant.")

#upload image through file uploader
uploaded_file = st.file_uploader("Choose an image...", type=["jpg", "jpeg", "png"])

#display the uploaded image
if uploaded_file is not None:
    #read and display the image
    image = Image.open(uploaded_file)

    #display the image with a caption
    st.image(image, caption="Uploaded Image", use_column_width=True)

    #preprocessing the image for the model to predict
    img = image.resize((128, 128))
    img = np.array(img)

    #add an extra dimension to simulate a batch of size 1
    img = np.expand_dims(img, axis=0)

    ok = st.button("Predict")

    #loadig the neural model
    model = keras.models.load_model("my_keras_model.h5")

    if ok:

        

        #predicting the class of the model
        predictions = model.predict(img)


        #showing predicted output
        st.write("Image class:", predict_class(predictions))



    
