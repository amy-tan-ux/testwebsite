import React, { useState, useEffect } from "react";
import "./App.css"; // Ensure this file exists for styling

function App() {
  const [showForm, setShowForm] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowForm(true);
  };

  const [response, setResponse] = useState("");
  
  useEffect(() => {
      if (window.puter) {
        window.puter.ai.chat("Tell me a fun fact!")
          .then((res) => setResponse(res.message.content))
          .catch((err) => console.error("Error:", err));
      } else {
        console.error("Puter.js is not loaded");
      }
    }, []);

    console.log("ai response:" + response)
    console.log(response)

  return (
    <div className="parallax">
      <div className="container">
        <h1 className="wedding-title">Wedding RSVP</h1>
        <h1>Puter.js Response:</h1>
      <p>{ response || "Loading..."}</p>
        <p className="subtext">Join us for our special day!</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            required
            className="input-box"
          />
          <br />
          <button type="submit" className="btn">RSVP</button>
        </form>

        {showForm && (
          <div className="form-container">
            <h3>Enter Guest Details</h3>
            <form>
              <label>Name:
                <input type="text" placeholder="Enter name" className="input-box" />
              </label>
              <br />
              <label>Email:
                <input type="email" placeholder="Enter email" className="input-box" />
              </label>
              <br />
              <label>Message to the couple:
                <textarea placeholder="Write a sweet message..." className="input-box"></textarea>
              </label>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
