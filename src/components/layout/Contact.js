


 import React from 'react';

const Contact = () => {
  return (
    <>
      

      <form className="form">
        <h3>Contact Us</h3>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="boto">
          <button type="submit" className="btn btn-primary bot">
            Send
          </button>
        </div>
      </form>
    </>
  );
};

export default Contact;


