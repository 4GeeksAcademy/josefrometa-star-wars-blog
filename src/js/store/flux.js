import { object } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			characters: [],
			urlBase: "https://www.swapi.tech/api/",
			planets: [],
			character: {},
			fav: [],
			planet: {},

		},

		actions: {

			favorites: (item) => {
				const { fav } = getStore();
				const updatedFav = fav.includes(item) ? fav.filter((element) => element !== item) : [...fav, item];
				setStore({ fav: updatedFav });
			},
			
			getCharacters: async () => {
				const { urlBase, characters } = getStore();
				try {
					const response = await fetch(`${urlBase}/people`);
					const data = await response.json();
					const updatedCharacters = await Promise.all(data.results.map(async (person) => {
						const responseTwo = await fetch(person.url);
						const dataTwo = await responseTwo.json();
						return dataTwo.result;
					}));
					setStore({ characters: [...characters, ...updatedCharacters] });
				} catch (error) {
					console.error(error);
				}
			},
			
			getSingleCharacter: async (id) => {
				const { urlBase } = getStore();
				try {
					const response = await fetch(`${urlBase}/people/${id}`);
					const data = await response.json();
					setStore({ character: data.result.properties });
				} catch (error) {
					console.error(error);
				}
			},
			
			getSinglePlanet: async (id) => {
				const { urlBase } = getStore();
				try {
					const response = await fetch(`${urlBase}/planets/${id}`);
					const data = await response.json();
					setStore({ planet: data.result.properties });
				} catch (error) {
					console.error(error);
				}
			},
			
			getPlanets: async () => {
				const { urlBase, planets } = getStore();
				try {
					const response = await fetch(`${urlBase}/planets`);
					const data = await response.json();
					const updatedPlanets = await Promise.all(data.results.map(async (planet) => {
						const responseTwo = await fetch(planet.url);
						const dataTwo = await responseTwo.json();
						return dataTwo.result;
					}));
					setStore({ planets: [...planets, ...updatedPlanets] });
				} catch (error) {
					console.error(error);
				}
			},
			
		},
	};
};

export default getState;
