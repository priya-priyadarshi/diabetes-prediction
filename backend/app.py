from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd

app = Flask(__name__)
CORS(app)

# Load trained ML model
model = joblib.load("diabetes_model.pkl")


@app.route("/")
def home():
    return jsonify({
        "message": "Diabetes Prediction API is running"
    })


@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()

        features = [
            float(data["pregnancies"]),
            float(data["glucose"]),
            float(data["bloodPressure"]),
            float(data["skinThickness"]),
            float(data["insulin"]),
            float(data["bmi"]),
            float(data["diabetesPedigree"]),
            float(data["age"]),
        ]

        columns = [
            "Pregnancies",
            "Glucose",
            "BloodPressure",
            "SkinThickness",
            "Insulin",
            "BMI",
            "DiabetesPedigreeFunction",
            "Age",
        ]

        input_data = pd.DataFrame(
            [features],
            columns=columns
        )

        prediction = model.predict(input_data)[0]
        probability = model.predict_proba(input_data)[0][1]

        if prediction == 1:
            result = "High Risk"
        else:
            result = "Low Risk"

        return jsonify({
            "prediction": result,
            "probability": round(float(probability) * 100, 2)
        })

    except Exception as error:
        return jsonify({
            "error": str(error)
        }), 400


if __name__ == "__main__":
    app.run(
        host="127.0.0.1",
        port=5001,
        debug=True
    )