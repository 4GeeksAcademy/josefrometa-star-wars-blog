import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CharacterCard = props => {
    const { person } = props;
    const { store, actions } = useContext(Context);
    const characterImage = `https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`;
    const characterDetails = ["Gender", "Hair-color", "Eye-color"].map((detail, index) => (
        <p key={index}>{`${detail}: ${person.properties[detail.toLowerCase().replace("-", "_")]}`}</p>
    ));

    return (
        <div className="my-card text-light">
            <img src={characterImage} alt="Character Picture" style={{width:"347px"}} />
            <div className="p-3">
                <h3>{person.properties.name}</h3>
                {characterDetails}
            </div>
            <div className="d-flex justify-content-evenly m-4">
                <Link to={`/single/${person.uid}`} className="btn btn-warning">Learn more</Link>
                <button className="btn btn-warning" onClick={() => actions.favorites(person.properties.name)}>
                    <i className="fa fa-heart"></i>
                </button>
            </div>
        </div>
    );
};

export default CharacterCard;
