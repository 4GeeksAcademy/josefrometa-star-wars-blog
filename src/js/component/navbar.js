import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 d-flex">
			<Link to="/">
				<span className="navbar-brand mb-0 ">
					<img className=" mx-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/100px-Star_Wars_Logo.svg.png">

					</img>
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary mx-3">Favorites</button>
				</Link>
			</div>
		</nav>
	);
};
