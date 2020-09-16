window.onload = function () {
	let initiallist = [];

	if (localStorage.getItem("updatelists") == null) {
		localStorage.setItem("updatelists", JSON.stringify(initiallist));
	}
};

let updateIndex;

function display(superarray = undefined) {
	let tabledata = "";
	let updatelist;

	if (superarray == undefined) {
		updatelists = JSON.parse(localStorage.getItem("updatelists"));
	} else {
		updatelists = superarray;
	}

	updatelists.forEach(function (updatelist, index) {
		let currentrow = `<tr>
        <td>${index + 1}</td>
        <td>${updatelist.name}</td>
        <td>${updatelist.source}</td>
        <td>${updatelist.destination}</td>
        <td>${updatelist.num}</td>
        <td>${updatelist.cap}</td>
        <td><button onclick='showModal(${index})'>Update</button></td>
        </tr>`;

		tabledata += currentrow;
	});

	document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
	// document.getElementById("tdata").innerHTML = tabledata;
}

display();

function addBus(event) {
	event.preventDefault();
	let updatelist = {};

	let name = document.getElementById("name").value;
	let source = document.getElementById("source").value;
	let destination = document.getElementById("destination").value;
	let num = document.getElementById("num").value;
	let cap = document.getElementById("cap").value;

	updatelist.name = name;
	updatelist.source = source;
	updatelist.destination = destination;
	updatelist.num = Number(num);
	updatelist.cap = Number(cap);

	console.log(updatelist);
	let updatelists = JSON.parse(localStorage.getItem("updatelists"));
	updatelists.push(updatelist);
	localStorage.setItem("updatelists", JSON.stringify(updatelists));

	display();

	document.getElementById("name").value = "";
	document.getElementById("source").value = "";
	document.getElementById("destination").value = "";
	document.getElementById("num").value = "";
	document.getElementById("cap").value = "";
}

function updateSuperhero(event) {
	event.preventDefault();
	let updatelists = JSON.parse(localStorage.getItem("updatelists"));
	let updatelist = updatelists[updateIndex];

	let name = document.getElementById("upname").value;
	let source = document.getElementById("upsource").value;
	let destination = document.getElementById("updestination").value;
	let num = document.getElementById("upnum").value;
	let cap = document.getElementById("upcap").value;

	updatelist.name = name;
	updatelist.source = source;
	updatelist.destination = destination;
	updatelist.num = Number(num);
	updatelist.cap = Number(cap);
	localStorage.setItem("updatelists", JSON.stringify(updatelists));
	console.log(updatelist);
	display(updatelists);

	let modal = document.getElementsByClassName("modal")[0];
	modal.style.display = "none";
}

function showModal(index) {
	let modal = document.getElementsByClassName("modal")[0];
	modal.style.display = "block";

	copyData(index);
}

function hideModal(event) {
	if (event.target.className == "modal") {
		let modal = document.getElementsByClassName("modal")[0];
		modal.style.display = "none";
	}
}

function copyData(index) {
	let updatelists = JSON.parse(localStorage.getItem("updatelists"));
	updateIndex = index;
	let updatelist = updatelists[index];

	document.getElementById("upname").value = updatelist.name;
	document.getElementById("upsource").value = updatelist.source;
	document.getElementById("updestination").value = updatelist.destination;
	document.getElementById("upnum").value = updatelist.num;
	document.getElementById("upcap").value = updatelist.cap;
}

function searchBySource() {
	let searchValue = document.getElementById("searchSource").value;
	let updatelists = JSON.parse(localStorage.getItem("updatelists"));
	let newdata = updatelists.filter(function (updatelist) {
		return (
			updatelist.source.toLowerCase().indexOf(searchValue.toLowerCase()) != -1
		);
	});

	display(newdata);
}

function searchByDestination() {
	let searchValue = document.getElementById("searchDestination").value;
	let updatelists = JSON.parse(localStorage.getItem("updatelists"));
	let newdata = updatelists.filter(function (updatelist) {
		return (
			updatelist.destination.toLowerCase().indexOf(searchValue.toLowerCase()) !=
			-1
		);
	});

	display(newdata);
}
