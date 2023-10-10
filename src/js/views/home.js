import React from "react";
import "../../styles/home.css";
import CharacterCard from "../component/CharacterCard.jsx";
import PlanetCard from "../component/PlanetCard.jsx";

export const Home = () => {
	return (
		<>
			<div className="container mt-5">
				<h1 className="text-danger">Characters</h1>
				<div className="my-carrousel">
					<CharacterCard />
					<CharacterCard />
					<CharacterCard />
					<CharacterCard />
					<CharacterCard />
					<CharacterCard />
					<CharacterCard />
				</div>
			</div>

			<div className="container mt-5">
				<h1 className="text-danger">Planets</h1>
				<div className="my-carrousel">
					<PlanetCard />
					<PlanetCard />
					<PlanetCard />
					<PlanetCard />
					<PlanetCard />
					<PlanetCard />
				</div>
			</div>
		</>

	)
};


