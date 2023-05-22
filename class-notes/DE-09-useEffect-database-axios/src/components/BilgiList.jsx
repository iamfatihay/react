
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
const BilgiList = ({bilgiler}) => {
  // const url = "https://tutorial-api.fullstack.clarusway.com/tutorials/";


console.log(bilgiler);


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
          {bilgiler.map((eleman) => {
          
            return (
              <tr >
                <th>{eleman.id}</th>
                <td>{eleman.title}</td>
                <td>{eleman.description} </td>
                <td className="text-center ">
               
             

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
