import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import '../../styles/index.css'

const DetailsCharacters = () => {
    const {id} = useParams()
    const {store, actions} = useContext(Context)
    const [detailCharacter, setDetailCharacter] = useState({})
    useEffect(() =>{
        actions.getCharacter(id)
        setDetailCharacter(store.oneCharacter)
    }, [store.oneCharacter])

    return(
        <>
        <div className="container d-flex justify-content-center mt-2">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${detailCharacter.uid}.jpg`} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <div className="mb-3">
                                <h5 className="card-title">{detailCharacter?.properties?.name}</h5>
                                <p className="card-text">{detailCharacter?.properties?.description}</p>
                                </div>
                                <div className="detail-divider mt-3 d-flex text-danger">
                                    <div className="row my-2">
                                        <p className="m-1 p-1 fw-bold">Name</p>
                                        <p className="m-1 p-1">{detailCharacter?.properties?.name}</p>
                                    </div>
                                    <div className="row my-2 ">
                                        <p className="m-1 p-1 fw-bold">Birth Year</p>
                                        <p className="m-1 p-1">{detailCharacter?.properties?.birth_year}</p>
                                    </div>
                                    <div className="row my-2">
                                        <p className="m-1 p-1 fw-bold">Gender</p>
                                        <p className="m-1 p-1">{detailCharacter?.properties?.gender}</p>
                                    </div>
                                    <div className="row my-2">
                                        <p className="m-1 p-1 fw-bold">Height</p>
                                        <p className="m-1 p-1">{detailCharacter?.properties?.height}</p>
                                    </div>
                                    <div className="row my-2">
                                        <p className="m-1 p-1 fw-bold">Skin Color</p>
                                        <p className="m-1 p-1">{detailCharacter?.properties?.skin_color}</p>
                                    </div>
                                    <div className="row my-2">
                                        <p className="m-1 p-1 fw-bold">Eye Color</p>
                                        <p className="m-1 p-1">{detailCharacter?.properties?.eye_color}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailsCharacters