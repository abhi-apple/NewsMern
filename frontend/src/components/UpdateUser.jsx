import React from "react";
import "../styles/signup.css";

const UpdateUser = () => {
  return (
    <div className="signup-container">
      <div className="signup">
        <h2>Update User</h2>
        <form action="POST">
          <div className="form-ele">
            <label htmlFor="name">Name </label>
            <input
              type="text"
              placeholder="Enter name"
              onChange={updateFormData}
              name="name"
              value={formData.name}
            />
          </div>
          <div className="form-ele">
            <label htmlFor="email">Email </label>
            <input
              type="text"
              placeholder="Enter email"
              onChange={updateFormData}
              name="email"
              value={formData.email}
            />
          </div>
          <div className="form-ele">
            <label htmlFor="password">Password </label>
            <input
              type="text"
              placeholder="Enter password"
              onChange={updateFormData}
              name="password"
              value={formData.password}
            />
          </div>
          <div className="form-ele">
            <label htmlFor="age">Age: </label>
            <input
              type="text"
              placeholder="Enter age"
              onChange={updateFormData}
              name="age"
              value={formData.age}
            />
          </div>
          <div className="form-ele">
            <label htmlFor="country">Coutry </label>
            <input
              type="text"
              placeholder="Enter password"
              onChange={updateFormData}
              name="country"
              value={formData.country}
            />
          </div>
          <div className="form-ele">
            <label htmlFor="state">State </label>
            <input
              type="text"
              placeholder="Enter state"
              onChange={updateFormData}
              name="state"
              value={formData.state}
            />
          </div>
          <div className="form-ele">
            <label htmlFor="city">City </label>
            <input
              type="text"
              placeholder="Enter city"
              onChange={updateFormData}
              name="city"
              value={formData.city}
            />
          </div>
          <div className="form-ele">
            <label htmlFor="planguages">Primary Languages </label>
            <input
              type="text"
              placeholder="Enter primary languages"
              onChange={updateFormData}
              name="planguages"
              value={formData.planguages}
            />
          </div>

          <button type="submit" onClick={submitData} className="signup-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
