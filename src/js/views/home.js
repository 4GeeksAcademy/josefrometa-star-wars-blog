import React, { useContext } from "react";
import CharacterCard from "../component/CharacterCard.jsx";
import PlanetCard from "../component/PlanetCard.jsx";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom"

export const Home = () => {
	const { store } = useContext(Context)
	// const { actions } = useContext(Context)
	return (
		<>
			<div className="container">
				<h1 className="text-warning text-center">Characters</h1>
				<div className="my-carrousel">
					{
						store.characters.map((person) => {
							return (
								<CharacterCard key={person._id} person={person} />
							)
						})
					}

				</div>
			</div>
			<div className="container mt-5 text-center">
				<h1 className="text-warning">Planets</h1>
				<div className="my-carrousel">
					{
						store.planets.map((planets) => {
							return (
								<PlanetCard key={planets._id} planets={planets} />
							)
						})
					}
				</div>
			</div>
		</>

	)
};


