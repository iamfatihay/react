import { useState } from "react";

const GorevEkle = () => {
 
  
 
  return (
    <div>
      <header className="header">
        <h1>TASK TRACKER</h1>
        <button
          className="btn"
          
        >
           ADD TASK BAR
        </button>
      </header>
        <form >
          <div className="form-control">
            <label htmlFor="text">Task</label>
            <input
              id="text"
              type="text"
              name="text"
              placeholder="Add Task"
             
            />
          </div>
          <div className="form-control">
            <label htmlFor="day">Day & Time</label>
            <input
              id="day"
              type="date"
              name="day"
              placeholder="Add Task"
            
            />
          </div>
          <div>
            <button className="btn btn-submit" type="submit">
              SUBMİT
            </button>
          </div>
        </form>
      
    </div>
  );
};

export default GorevEkle;
