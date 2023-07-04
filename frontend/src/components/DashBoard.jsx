import React, { useState } from "react";
import "../styles/dashboard.css";

const Dashboard = ({ name, email, country, state, city, language }) => {
  async function signOut(event) {
    event.preventDefault();
    event.stopPropagation();
    localStorage.clear();
  }

  return (
    <div className="dashboard">
      <h2>Hello Aaditya</h2>
      <p>Stay updated with NewsAggregator</p>

      <div className="dashboard-card">
        <div className="dash-item">
          <div className="dash-attri">Name</div>
          <div className="dash-val">Aaditya</div>
        </div>
        <div className="dash-item">
          <div className="dash-attri">Email</div>
          <div className="dash-val">aaditya@gmail.com</div>
        </div>
        <div className="dash-item">
          <div className="dash-attri">Country</div>
          <div className="dash-val">India</div>
        </div>
        <div className="dash-item">
          <div className="dash-attri">Languages</div>
          <div className="dash-val">English, Hindi</div>
        </div>
        <div className="dash-item">
          <button type="button" onClick={signOut} className="signout-btn">
            SignOut
          </button>
          <button type="button" onClick={signOut} className="signout-btn">
            Update Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
