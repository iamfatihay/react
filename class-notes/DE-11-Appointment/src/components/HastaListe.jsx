import React from 'react';
import { FaTimesCircle } from "react-icons/fa";

const HastaListe = ({ hastalar, setHastalar }) => {

  return (
    <div>
      {hastalar.map((hasta) => {
        return (
          <div key={hasta.id} >
            <div className={hasta.bittiMi ? "trueBittiStil" : "falseBittiStil"}
              onDoubleClick={() => setHastalar(hastalar.map((a) => a.id === hasta.id ? { ...a, bittiMi: !a.bittiMi } : a))} >
              <div>
                <h2>
                  {hasta.text}
                </h2>
                <h4>
                  {hasta.day}
                </h4>
                <h3>
                  {hasta.doktorum}
                </h3>
              </div>
              <FaTimesCircle style={{ color: "red" }} />
            </div>
          </div>
        )


      })}


    </div>
  )
}

export default HastaListe