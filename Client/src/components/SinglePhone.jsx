import { useNavigate, useLocation } from "react-router-dom";

function SinglePhone({ phone ,setSinglePhone}) {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const phone = location.state?.phone || singlePhone;
  return (
    // <div >
    // <img src='../../public/images/216436_arrow_back_icon.svg' alt='error' onClick={()=>setSinglePhone(null)} className="back-img"/>
    //   <h1>{phone.name}</h1>
    //   <p>Price: ${phone.price}</p>
    //   <img src={`../../public/images/${phone.imageFileName}`} alt={phone.name} />
    //   <p>Screen : {phone.screen}</p>
    //   <p>Processor : {phone.processor}</p>
    //   <p>Color : {phone.color}</p>
    //   <p>Description : {phone.description}</p>
    //   <p>Manufacturer : {phone.manufacturer}</p>
    // </div>
    <div className="container mt-4">
        {/* <img src="../../public/images/216436_arrow_back_icon.svg" alt="error" className="back-img btn btn-light mb-3"/> */}
        <img src='../../images/216436_arrow_back_icon.svg' alt='error' onClick={()=>setSinglePhone(null)} className="back-img mb-3"/>
      <div className="card">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={`../../images/${phone.imageFileName}`} className="card-img" alt={phone.name} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">{phone.name}</h3>
              <p className="card-text details">
               <strong>Price : </strong> ${phone.price}
                <br />
               <strong>Manufacturer : </strong>   {phone.manufacturer}
                <br />
                <strong>Processor :  </strong>{phone.processor}
                <br />
                <strong>Screen : </strong> {phone.screen}
                <br />
                <strong>Color : </strong> {phone.color}
                <br />
                <strong>Description : </strong>{phone.description}
                <br />
                {/* Add other phone details */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePhone;
