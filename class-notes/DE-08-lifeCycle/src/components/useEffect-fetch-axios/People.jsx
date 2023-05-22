import { useState, useEffect } from "react";
import axios from "axios";

const People = () => {
  const [insanlar, setInsanlar] = useState([])


  //! fetch ile veri getirme 1.yol
  // useEffect(()=>{
  //     fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json()).then((data)=>setInsanlar(data))
  // },[])

  // console.log(insanlar);


  //! axios ile veri getirme 2.yol
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => setInsanlar(res.data))
  }, [])



  return (
    <div className="container text-center mt-4">


      <div className="row">
        {insanlar.map((a) => {

          return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-2" key={a.id}>
              {/* https://avatars.dicebear.com/styles */}
              <img alt="" src={`https://avatars.dicebear.com/api/avataaars/${a.id}.svg`} />
              <h5>{a.name}</h5>
              <h6>{a.phone}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default People;