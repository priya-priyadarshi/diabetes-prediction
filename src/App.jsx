import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    pregnancies: "",
    glucose: "",
    bloodPressure: "",
    skinThickness: "",
    insulin: "",
    bmi: "",
    diabetesPedigree: "",
    age: "",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setResult(null);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setResult(null);
    setError("");

    try {
      const response = await fetch(
        "http://127.0.0.1:5001/predict",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Prediction failed");
      }

      setResult(data);
    } catch (error) {
      setError(
        "Unable to connect with the prediction server. Please make sure Flask is running."
      );
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      pregnancies: "",
      glucose: "",
      bloodPressure: "",
      skinThickness: "",
      insulin: "",
      bmi: "",
      diabetesPedigree: "",
      age: "",
    });

    setResult(null);
    setError("");
  };

  const isHighRisk = result?.prediction === "High Risk";

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          DiaPredict
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#prediction">Prediction</a>
          <a href="#about">About</a>
        </div>
      </nav>


      {/* HERO */}
      <section className="hero" id="home">

        <div className="hero-content">

          <p className="tag">
            AI POWERED HEALTHCARE
          </p>

          <h1>
            Diabetes Risk
            <span>Prediction</span>
          </h1>

          <p className="hero-text">
            Enter your health information and
            get a diabetes risk prediction
            powered by machine learning.
          </p>

          <a
            href="#prediction"
            className="hero-button"
          >
            Start Prediction →
          </a>

        </div>


        <div className="hero-card">

          <div className="heart-icon">
            ♥
          </div>

          <h2>
            Health Assessment
          </h2>

          <p>
            Enter your health information
            and get a machine learning
            based risk assessment.
          </p>

          <div className="health-row">
            <span>Glucose</span>
            <strong>Analysis</strong>
          </div>

          <div className="health-row">
            <span>BMI</span>
            <strong>Analysis</strong>
          </div>

          <div className="health-row">
            <span>Blood Pressure</span>
            <strong>Analysis</strong>
          </div>

        </div>

      </section>


      {/* FEATURES */}
      <section className="features">

        <div className="feature-card">

          <div className="feature-icon">
            ♥
          </div>

          <h3>
            Health Focused
          </h3>

          <p>
            Uses important health parameters
            for diabetes risk assessment.
          </p>

        </div>


        <div className="feature-card">

          <div className="feature-icon">
            ✓
          </div>

          <h3>
            Machine Learning
          </h3>

          <p>
            Prediction is generated using
            a trained ML classification model.
          </p>

        </div>


        <div className="feature-card">

          <div className="feature-icon">
            ⚡
          </div>

          <h3>
            Quick Result
          </h3>

          <p>
            Get your prediction immediately
            after submitting the form.
          </p>

        </div>

      </section>


      {/* PREDICTION */}
      <section
        className="prediction"
        id="prediction"
      >

        <div className="section-heading">

          <p className="section-tag">
            MACHINE LEARNING ASSESSMENT
          </p>

          <h2>
            Diabetes Prediction
          </h2>

          <p>
            Enter your health details below.
          </p>

        </div>


        <form
          className="prediction-form"
          onSubmit={handleSubmit}
        >

          <div className="input-group">

            <label>
              Pregnancies
            </label>

            <input
              type="number"
              name="pregnancies"
              placeholder="Example: 2"
              min="0"
              max="20"
              value={formData.pregnancies}
              onChange={handleChange}
              required
            />

            <small>
              Number of pregnancies
            </small>

          </div>


          <div className="input-group">

            <label>
              Glucose Level
            </label>

            <input
              type="number"
              name="glucose"
              placeholder="Example: 120"
              min="0"
              max="300"
              value={formData.glucose}
              onChange={handleChange}
              required
            />

            <small>
              Enter glucose level
            </small>

          </div>


          <div className="input-group">

            <label>
              Blood Pressure
            </label>

            <input
              type="number"
              name="bloodPressure"
              placeholder="Example: 80"
              min="0"
              max="200"
              value={formData.bloodPressure}
              onChange={handleChange}
              required
            />

            <small>
              Diastolic blood pressure
            </small>

          </div>


          <div className="input-group">

            <label>
              Skin Thickness
            </label>

            <input
              type="number"
              name="skinThickness"
              placeholder="Example: 20"
              min="0"
              max="100"
              value={formData.skinThickness}
              onChange={handleChange}
              required
            />

            <small>
              Triceps skin fold thickness
            </small>

          </div>


          <div className="input-group">

            <label>
              Insulin Level
            </label>

            <input
              type="number"
              name="insulin"
              placeholder="Example: 80"
              min="0"
              max="1000"
              value={formData.insulin}
              onChange={handleChange}
              required
            />

            <small>
              Serum insulin level
            </small>

          </div>


          <div className="input-group">

            <label>
              BMI
            </label>

            <input
              type="number"
              step="0.1"
              name="bmi"
              placeholder="Example: 24.5"
              min="0"
              max="80"
              value={formData.bmi}
              onChange={handleChange}
              required
            />

            <small>
              Body Mass Index
            </small>

          </div>


          <div className="input-group">

            <label>
              Diabetes Pedigree Function
            </label>

            <input
              type="number"
              step="any"
              name="diabetesPedigree"
              placeholder="Example: 0.35"
              min="0"
              max="3"
              value={formData.diabetesPedigree}
              onChange={handleChange}
              required
            />

            <small>
              Family history based diabetes score
            </small>

          </div>


          <div className="input-group">

            <label>
              Age
            </label>

            <input
              type="number"
              name="age"
              placeholder="Example: 21"
              min="1"
              max="120"
              value={formData.age}
              onChange={handleChange}
              required
            />

            <small>
              Age in years
            </small>

          </div>


         <button
  type="submit"
  className="predict-button"
  disabled={loading}
>
  {loading ? (
    <>
      <span className="loader"></span>
      Analyzing...
    </>
  ) : (
    "Predict Diabetes Risk"
  )}
</button>

        </form>


        {/* ERROR */}
        {error && (

          <div className="result-card high">

            <div className="result-icon">
              !
            </div>

            <p>
              Connection Error
            </p>

            <h3>
              Server Unavailable
            </h3>

            <span>
              {error}
            </span>

          </div>

        )}


        {/* RESULT */}
        {result && (

          <div
            className={`result-card ${
              isHighRisk ? "high" : "low"
            }`}
          >

            <div className="result-icon">
              {isHighRisk ? "!" : "✓"}
            </div>


            {/* STATUS BADGE */}
            <div
              className={`risk-badge ${
                isHighRisk
                  ? "risk-high"
                  : "risk-low"
              }`}
            >
              {isHighRisk
                ? "HIGH RISK"
                : "LOW RISK"}
            </div>


            <p>
              ML Prediction Result
            </p>


            <h3>
              {result.prediction}
            </h3>


            <span>
              Model probability:
            </span>


            {/* CONFIDENCE */}
            <div className="confidence-section">

              <div className="confidence-header">

                <span>
                  Risk Probability
                </span>

                <strong>
                  {result.probability}%
                </strong>

              </div>


              <div className="confidence-bar">

                <div
                  className={`confidence-fill ${
                    isHighRisk
                      ? "high-fill"
                      : "low-fill"
                  }`}
                  style={{
                    width: `${result.probability}%`,
                  }}
                />

              </div>

            </div>


            <p className="result-message">

              {isHighRisk
                ? "The machine learning model indicates a higher predicted risk based on the entered parameters."
                : "The machine learning model indicates a lower predicted risk based on the entered parameters."
              }

            </p>


            <button
              className="try-button"
              onClick={resetForm}
            >
              Try Again
            </button>


            <small>
              This project is for educational
              purposes and is not a medical diagnosis.
            </small>

          </div>

        )}

      </section>


      {/* ABOUT */}
      <section
        className="about"
        id="about"
      >

        <p className="section-tag">
          ABOUT PROJECT
        </p>

        <h2>
          About DiaPredict
        </h2>

        <p>
          DiaPredict is a React and Flask based
          diabetes risk prediction project.
          The frontend collects health parameters,
          Flask provides the API, and a trained
          machine learning model generates the
          prediction.
        </p>

      </section>


      {/* FOOTER */}
      <footer>

        <h3>
          DiaPredict
        </h3>

        <p>
          Diabetes Risk Prediction System
        </p>

        <p>
          React • Flask • Machine Learning
        </p>

        <p>
          © 2026 DiaPredict
        </p>

      </footer>

    </div>
  );
}

export default App;