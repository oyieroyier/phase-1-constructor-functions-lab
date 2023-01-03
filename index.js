class Scooter {
	constructor(year, color, model) {
		this.year = year;
		this.color = color;
		this.model = model;
	}
}

let scooters = new Scooter(2020, "red", "Honda");

console.log(scooters);

class Driver {
	constructor(name, age, experience) {
		this.name = name;
		this.age = age;
		this.experience = experience;
	}
}


let drivers = new Driver("Mike", 25, "5 years")
console.log(drivers);

class PickupLocation {
	constructor(address, city) {
		this.address = address;
		this.city = city;
	}
}

let pickups = new PickupLocation("Hatheru Road, Lavington", "Nairobi")
console.log(pickups);