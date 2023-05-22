
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
const BilgiList = () => {
  const url = "https://tutorial-api.fullstack.clarusway.com/tutorials/";





  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {[].map((eleman) => {
          
            return (
              <tr >
                <th>{}</th>
                <td>{}</td>
                <td>{} </td>
                <td className="text-center text-nowrap">
               
             

                  <AiFillDelete
                    type="button"
                    size={22}
                    className="text-danger cursor-pointer"
                    //!burada id göndermek zorunda değiliz title da gönderilebilir

                   
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
   
    
    </div>
  );
};

export default BilgiList;
