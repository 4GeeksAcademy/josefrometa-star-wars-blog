import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const PlanetCard = props => {
    const { planets } = props;
    const { store, actions } = useContext(Context);
    const planetImage = planets.uid === 1 ? "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png" : `https://starwars-visualguide.com/assets/img/planets/${planets.uid}.jpg`;
    const planetDetails = ["Population", "Terrain"].map((detail, index) => (
        <p key={index}>{`${detail}: ${planets.properties[detail.toLowerCase()]}`}</p>
    ));

    return (
        <div className="my-card text-light">
            <img src={planetImage} alt="Planets Picture" style={{ width: "347px" }} />
            <div className="p-3">
                <h3>{planets.properties.name}</h3>
                {planetDetails}
            </div>
            <div className="d-flex justify-content-evenly m-4">
                <Link to={`/singlePlanets/${planets.uid}`} className="btn btn-warning">Learn more</Link>
                <button className="btn btn-warning" onClick={() => actions.favorites(planets.properties.name)}>
                    <i className="fa fa-heart"></i>
                </button>
            </div>
        </div>
    );
};

export default PlanetCard;
