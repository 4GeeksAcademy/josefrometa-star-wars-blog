import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.getSingleCharacter(params.theid);
	}, []);

	const characterDetails = ["birth year", "gender", "height", "mass", "eye color", "hair color"].map((detail, index) => (
		<div class="col" key={index}>
			<p className="card-text text-warning">{`${detail}: ${store.character[detail.replace(" ", "_")]}`}</p>
		</div>
	));

	return (
		<div className="container">
			<div className="card mb-3 bg-dark w-100">
				<div className="row g-0">
					<div className="col-md-4">
						<img src={`https://starwars-visualguide.com/assets/img/characters/${params.theid}.jpg`} className="img-fluid rounded-start" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title text-warning">{store.character.name}</h5>
							<p className="text-warning">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus quis tellus facilisis sodales. Aliquam viverra tempor gravida. Phasellus eu mattis ipsum. Integer suscipit consectetur tortor sed placerat. Etiam convallis viverra luctus. Duis mauris nisl, cursus laoreet viverra sed, congue sit amet orci. Nullam diam elit, semper eu posuere in, semper sed ligula. Aliquam nec eros in dui consequat rhoncus ac a massa. Fusce ac dolor sapien. Integer rutrum ut eros sit amet sollicitudin. Fusce dictum risus risus, aliquam fermentum magna ultricies et. Proin lobortis ante nec luctus faucibus. Phasellus eu efficitur augue. Sed volutpat laoreet imperdiet. Cras ultrices sem ut leo efficitur posuere.</p>
							<hr className="bg-warning" />
							<div class="container text-center">
								<div class="row">
									{characterDetails}
									<Link to="/">
										<button className="btn btn-warning m-4">Get back to home</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};