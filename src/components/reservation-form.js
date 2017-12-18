import React from 'react';

const Reservations = props => {
  return (
    <div className="container">
    <h2>Reservations</h2>
      <br />
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <form action="" className="form-group">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Full Name"
            />
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="email"
            />
            <input
              type="text"
              className="form-control"
              name="number"
              placeholder="Number in Party"
            />
            <input
              type="text"
              className="form-control"
              name="time"
              placeholder="Time of Reservation"
            />
            <br />
            <input
              type="submit"
              className="btn btn-success"
              value="Place Reservation"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservations;
