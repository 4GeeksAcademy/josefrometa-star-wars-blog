import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const { store, actions } = useContext(Context)
	return (

		<nav className="navbar nav-bg">
			<div className="container-fluid">
				<Link to="/">
					<a className="navbar-brand"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png" style={{ width: "100px" }} /></a>
				</Link>
				<form className="d-flex" role="search">


				<button className="nav-link dropdown-toggle btn btn-warning text-dark" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Favorites
</button>
<ul className="dropdown-menu dropdown-menu-end bg-warning">
    {store.fav.length === 0 ? (
        <li><a className="dropdown-item">There are no favorites</a></li>
    ) : (
        store.fav.map((item, id) => (
            <li key={id}><a className="dropdown-item" onClick={() => actions.favorites(item)}>{item}</a></li>
        ))
    )}
</ul>


				</form>
			</div>
		</nav>


	);
};