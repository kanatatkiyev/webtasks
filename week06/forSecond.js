let countries = ["Kazakhstan","Russia","England","France"];
let cities_by_country = {"Kazakhstan":["Almaty","Astana","Karagandy"],"Russia":["Moscow","Saint-Petersburg","Kazan"],"England":["London","Manchester","Liverpool"],"France":["Paris","Lyon","Marseille"]};

let country = document.querySelector("#countries");
let city = document.querySelector("#cities");

for(let i = 0; i < countries.length; i++) {
			let n = document.createElement("option");
			n.innerHTML = countries[i];
			country.add(n);
		}

function add() {
	while (city.hasChildNodes()) {
    	city.removeChild(city.lastChild);
	}

	

	var cities = cities_by_country[country.value];
	for(let i = 0; i < cities.length; i++) {
		let n = document.createElement("option");
		n.innerHTML = cities[i];
		city.add(n);
	}
}

country.addEventListener("click", add);
