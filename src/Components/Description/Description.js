import React from "react";
import { useNavigate } from "react-router-dom";


const Description = (props) => {
    const navigate = useNavigate();

  return (
    <div>
      <div className="row">
        <div class="col-6">
          <button className="btn btn-success" style={{ margin: "10px" }} onClick={()=>{navigate("/")}}>
            Back to Products
          </button>
          <img
            src={props.sendDatatoDescripion.imgUrls}
            class="img-fluid"
            alt="Responsive "
            style={{ maxHeight: "100vh", width: "auto" }}
          />
        </div>
        <div class="col-6">
          <button className="btn btn-light" style={{ margin: "10px" }}>
            <h3>{props.sendDatatoDescripion.company}</h3>
          </button>
          <div class="card">
            <div class="card-body" > 
            <h5 class="card-title" style={{ padding: '10px' }}>{props.sendDatatoDescripion.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted" style={{ padding: '10px' }}>Rating: {props.sendDatatoDescripion.stars}</h6>
            <h6 class="card-subtitle mb-2 text-muted" style={{ padding: '10px' }}> ({props.sendDatatoDescripion.customerRevs} Customer Review)</h6>
             <h3 class="card-subtitle mb-2 " style={{color:"green",padding: '10px' }}> $ {props.sendDatatoDescripion.price} </h3>
             <p class="card-text" style={{ padding: '10px' }}>{props.sendDatatoDescripion.desc}</p>
             <h5 style={{ padding: '10px' }}> available: In Stock </h5>
             <h5 style={{ padding: '10px' }}> sku: {props.sendDatatoDescripion.sku}   </h5>
             <h5 style={{ padding: '10px' }}> Brand: {props.sendDatatoDescripion.company}</h5>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
