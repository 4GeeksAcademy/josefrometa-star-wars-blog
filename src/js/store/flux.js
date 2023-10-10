import { object } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: [],
			urlBase: "https://www.swapi.tech/api",
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getCharacter: async () => {
				let store = getStore() 
				try {
					let response = await fetch(`${store.urlBase}/people`)
					let data = await response.json()
						for (let person of data.results) {
							let responseTwo = await fetch(person.url) 
							let dataTwo = await responseTwo.json()
							setStore({
								characters: [
									...store.characters, dataTwo.result
								]
							})
						}
					console.log(data)
				} catch (error) {
					console.log(error)
				}
			}
		}
	};
};

export default getState;
