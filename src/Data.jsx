import React from 'react';

const Data = (props) => {

    const {name,img,btn1,btn2}=props;
  return (
    <>
        <div className="card">
         <div className="card-header">
              <h2 className="text-center font-weight-bold">{name}</h2>
         </div>
          <div className="card-body text-center">
             <img src={img} className="img-fluid" style={{height:'200px'}}/>
          </div>
          <div className="card-footer">                 
             <button className="btn btn-danger px-4 fw-bold mx-3">{btn1}</button>
             <button className="btn btn-outline-dark px-4 fw-bold">{btn2}</button>
          </div>
     </div>  

    </>
  )
}

export default Data;
