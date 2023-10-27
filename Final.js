import React, { useState } from "react";

import './Final.css'
function Header() {
  const [email, setEmail] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setEmail("");
        console.log("Email sent successfully!");
      } else {
        console.error("Error sending email:", response.statusText);
      }
    } catch (error) {
      console.error("Error sending email:", error.message);
    }
  };

  return (
    <div className="Main_Div">
      <form onSubmit={handleSubscribe}>
        <span>
        <label >SIGN UP FOR OUR DAILY INSIDER</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="subscribe">Subscribe</button>
        </span>
      </form>
    </div>
  );
}

export default Header;