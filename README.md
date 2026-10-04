# 🩺 DiaPredict - Diabetes Risk Prediction System

DiaPredict is a machine learning based web application that predicts diabetes risk using important health parameters.

The project combines a **React frontend**, **Flask backend**, and a **Machine Learning classification model** to generate a diabetes risk prediction.

---

## 🚀 Features

- 🩺 Diabetes risk prediction
- 🤖 Machine Learning based prediction
- ⚡ Fast prediction results
- 📊 Risk probability display
- 🔴 High Risk / 🟢 Low Risk status
- 📱 Responsive user interface
- ✅ Input validation
- 🔄 Try Again functionality
- 🔗 React frontend connected with Flask API

---

## 🧠 Machine Learning

The project uses the **Pima Indians Diabetes Dataset**.

The model uses the following health parameters:

- Pregnancies
- Glucose Level
- Blood Pressure
- Skin Thickness
- Insulin
- BMI
- Diabetes Pedigree Function
- Age

### Machine Learning Algorithm

**Logistic Regression**

The model pipeline includes:

1. Data preprocessing
2. Feature scaling using StandardScaler
3. Logistic Regression classification
4. Model evaluation
5. Model serialization using Joblib

---

## 🛠️ Technologies Used

### Frontend

- React.js
- Vite
- HTML
- CSS
- JavaScript

### Backend

- Python
- Flask
- Flask-CORS

### Machine Learning

- Pandas
- Scikit-learn
- Joblib

---

## 📁 Project Structure

```text
diabetes-prediction/
│
├── backend/
│   ├── app.py
│   ├── diabetes.csv
│   ├── diabetes_model.pkl
│   └── train_model.py
│
├── public/
│
├── src/
│   ├── assets/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js