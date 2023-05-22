import React from 'react'

const People = () => {
    import { useState, useEffect } from "react";
    import axios from "axios";
    
    const People = () => {
        const[insanlar,setInsanlar]=useState([])
    
     
    
      
      return (
        <div className="container text-center mt-4">
       
          
          <div className="row">
            {[].map((a) => {
    
              return (
                <div className="col-12 col-sm-6 col-md-4 col-lg-2" >
                  {/* https://avatars.dicebear.com/styles */}
                  <img
                    
                    alt=""
                  />
                  <h5>{}</h5>
                  <h6>{}</h6>
                </div>
              );
            })}
          </div>
        </div>
      );
    };
    
    export default People;