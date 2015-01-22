
// // function to initialize array and populate with person data
// // use input parameter list rather than people to insulate from global scope
 var victims=[];
 var volunteers=[];

var addPerson=function(list) {
	var name=prompt("name"); 
 	var street=prompt("Street");
	
	list.push({name:name,street:street});	

	return list;
};

// // continue to push people as needed
while (confirm("Enter more people?")) {
	var status=prompt("status");
	
	if (status==="vic") {
		addPerson(victims);
	} else {
		addPerson(volunteers);
	}
}

var matchup=[];
var streetname=prompt("streetname to compare");

for (var i=0; i<victims.length; i++) {
	// console.log(victims[i].street, streetname);
	if (victims[i].street===streetname) {
		matchup.push({status:"vic",name:victims[i].name,street:victims[i].street});
	};
}

for (var i=0; i<volunteers.length; i++) {
	if (volunteers[i].street===streetname) {
		matchup.push({status:"vol",name:volunteers[i].name,street:volunteers[i].street});
	};
}


console.log(matchup);



