import "./Card.css";
import germany from "../../assets/images/germany-flag.png";
import usa from "../../assets/images/usa-flag.png";
import brazil from "../../assets/images/brazil-flag.png";
import iceland from "../../assets/images/iceland-flag.png";
import afganistan from "../../assets/images/afganistan-flag.png";
import islands from "../../assets/images/islands-flag.png";
import albania from "../../assets/images/albania-flag.png";
import algeria from "../../assets/images/algeria-flag.png";

const Card = () => {
  return (
    <div className="card">
      <ul className="card-list">
        <li className="card-item">
          <img src={germany} alt="Geramany flag" />
          <div className="text-wrapper">
            <h3 className="card-title">Germany</h3>
            <p className="card-text">Population:</p>
            <p className="card-text">Region:</p>
            <p className="card-text">Capital:</p>
          </div>
        </li>
        <li className="card-item">
          <img src={usa} alt="Usa flag" />
          <div className="text-wrapper">
            <h3 className="card-title">United States of America</h3>
            <p className="card-text">Population:</p>
            <p className="card-text">Region:</p>
            <p className="card-text">Capital:</p>
          </div>
        </li>
        <li className="card-item">
          <img src={brazil} alt="Brazil flag" />
          <div className="text-wrapper">
            <h3 className="card-title">Brazil</h3>
            <p className="card-text">Population:</p>
            <p className="card-text">Region:</p>
            <p className="card-text">Capital:</p>
          </div>
        </li>
        <li className="card-item">
          <img src={iceland} alt="Iceland flag" />
          <div className="text-wrapper">
            <h3 className="card-title">Iceland</h3>
            <p className="card-text">Population:</p>
            <p className="card-text">Region:</p>
            <p className="card-text">Capital:</p>
          </div>
        </li>
        <li className="card-item">
          <img src={afganistan} alt="Afganistan flag" />
          <div className="text-wrapper">
            <h3 className="card-title">Afghanistan</h3>
            <p className="card-text">Population:</p>
            <p className="card-text">Region:</p>
            <p className="card-text">Capital:</p>
          </div>
        </li>
        <li className="card-item">
          <img src={islands} alt="Islands flag" />
          <div className="text-wrapper">
            <h3 className="card-title">Islands</h3>
            <p className="card-text">Population:</p>
            <p className="card-text">Region:</p>
            <p className="card-text">Capital:</p>
          </div>
        </li>
        <li className="card-item">
          <img src={albania} alt="Albania flag" />
          <div className="text-wrapper">
            <h3 className="card-title">Albania</h3>
            <p className="card-text">Population:</p>
            <p className="card-text">Region:</p>
            <p className="card-text">Capital:</p>
          </div>
        </li>
        <li className="card-item">
          <img src={algeria} alt="Algeria flag" />
          <div className="text-wrapper">
            <h3 className="card-title">Algeria</h3>
            <p className="card-text">Population:</p>
            <p className="card-text">Region:</p>
            <p className="card-text">Capital:</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Card;
