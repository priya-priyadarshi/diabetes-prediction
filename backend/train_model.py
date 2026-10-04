import pandas as pd
import joblib

from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import Pipeline
from sklearn.metrics import accuracy_score


# Dataset columns
columns = [
    "Pregnancies",
    "Glucose",
    "BloodPressure",
    "SkinThickness",
    "Insulin",
    "BMI",
    "DiabetesPedigreeFunction",
    "Age",
    "Outcome",
]


# Load dataset
data = pd.read_csv(
    "diabetes.csv",
    names=columns
)


# Features and target
X = data.drop("Outcome", axis=1)
y = data["Outcome"]


# Train-test split
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
    stratify=y,
)


# ML Pipeline
model = Pipeline(
    [
        ("scaler", StandardScaler()),
        ("classifier", LogisticRegression(max_iter=1000)),
    ]
)


# Train model
model.fit(X_train, y_train)


# Test model
predictions = model.predict(X_test)

accuracy = accuracy_score(
    y_test,
    predictions,
)


print("Model trained successfully!")
print(f"Model Accuracy: {accuracy * 100:.2f}%")


# Save model
joblib.dump(
    model,
    "diabetes_model.pkl",
)


print("Model saved as diabetes_model.pkl")