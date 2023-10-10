import React from "react"

const characterCard = () => {
    return (
        <>
           
                <div className="my-card">
                    <img src="..." alt="..." />
                    <div className="p-3">
                        <h3>Jose frometa</h3>
                        <p>Gender</p>
                        <p>Hair-Color</p>
                        <p>Eye Color</p>
                    </div>
                    <div className="d-flex justify-content-between p-3">
                        <button className="btn btn-primary">learn more</button>
                        <button className="btn btn-warning">learn more</button>
                    </div>
                </div>
            
        </>
    )
};

export default characterCard;