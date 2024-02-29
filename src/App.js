import React, { useState } from 'react';
import './App.css';

function App() {
  const [step, setStep] = useState(1);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    dietaryRestrictions: '',
    eatingHabits: '',
  });

  const handleInputChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleSubmit = () => {
    // Save user info to local JSON file (simulate backend)
    const jsonData = JSON.stringify(userInfo, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'user-info.json';
    a.click();

    alert('Thank you! Your information has been submitted.');
  };

  return (
    <div className="App">
      <div className="onboarding-container">
        <div id="guide">
          Welcome to our Meal-Prep Service!
        </div>

        <form
          id="user-info-form"
          
        >
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleInputChange}
            value={userInfo.name}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleInputChange}
            value={userInfo.email}
            required
          />

          <label htmlFor="dietaryRestrictions">Dietary Restrictions:</label>
          <input
            type="text"
            id="dietaryRestrictions"
            name="dietaryRestrictions"
            onChange={handleInputChange}
            value={userInfo.dietaryRestrictions}
            required
          />

          <label htmlFor="eatingHabits">Eating Habits:</label>
          <textarea
            id="eatingHabits"
            name="eatingHabits"
            onChange={handleInputChange}
            value={userInfo.eatingHabits}
            required
          />

          {step < 3 ? (
            <button type="button" onClick={handleNextStep}>
              Next
            </button>
          ) : (
            <button type="button" onClick={handleSubmit}>
              Submit
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default App;
