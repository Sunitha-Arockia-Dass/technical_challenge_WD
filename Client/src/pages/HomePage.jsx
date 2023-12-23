import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SinglePhone from "../components/SinglePhone";
import Spinner from '../components/Spinner'

function HomePage() {
  const [phones, setPhones] = useState([]);
  const [singlePhone, setSinglePhone] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5005/phones")
      .then((response) => {
        setPhones(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  function singlePhoneDetails(phone) {
    setSinglePhone(phone);
  }
  console.log(singlePhone);

  return (
    <div className="phone-container">
    {loading ? (
      <Spinner /> // Show the Spinner component while loading
    ) : (
      <>
        {singlePhone ? (
          <SinglePhone phone={singlePhone} setSinglePhone={setSinglePhone} />
        ) : (
          phones.map((phone) => (
            <div key={phone.id} className="phone-short" onClick={() => singlePhoneDetails(phone)}>
              <div>
                <img src={`../../images/${phone.imageFileName}`} alt={phone.name} />
              </div>
              <div className="phone-short-details">
                <h2>{phone.name}</h2>
              </div>            
            </div>
          ))
        )}
      </>
    )}
  </div>
  );
}

export default HomePage;
