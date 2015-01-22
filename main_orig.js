/*
var victims=prompt("How many victims will you be entering?");

var vicName=[];
var vicPhone=[];
var vicStreet=[];

for (i=1; i<=victims; i++) {
	vicName.push(prompt("enter victim"+i+" name"));
	vicPhone.push(prompt("enter victim"+i+" phone"));
	vicStreet.push(prompt("enter victim"+i+" street"));
}

var volunteers=prompt("How many volunteers will you be entering?");
var volName=[];
var volPhone=[];
var volStreet=[];

for (i=1; i<=volunteers; i++) {
	volName.push(prompt("enter volunteer"+i+" name"));
	volPhone.push(prompt("enter volunteer"+i+" phone"));
	volStreet.push(prompt("enter volunteer"+i+" street"));
}

var message = "# Victims: " + victims + "\n" +
	"# Volunteers: " + volunteers + "\n";

message += "Victims:\n";
for(var i=0; i<victims; i++) {
	message += "  Name: " + vicName[i] + ", " +
		"Phone: " + vicPhone[i] + ", " + 
		"Street: " + vicStreet[i] + "\n";
}

message += "Volunteers:\n";
for(var i=0; i<volunteers; i++) {
	message += "  Name: " + volName[i] + ", " +
		"Phone: " + volPhone[i] + ", " + 
		"Street: " + volStreet[i] + "\n";
}

//alert(message);
document.write(message);


*/
var people=[];
people.push({status:"vol",name:"jon",phone:"111"});
people.push({status:"vic",name:"sam",phone:"222"});


// var person={
// 	status:"vic",name:"name",phone:"phone"
// }


while (confirm("continue?")) {
var status=prompt("status");
var name=prompt("name");
var phone=prompt("phone");

people.push({status:status,name:name,phone:phone});
}

// var status=prompt("status");
// var name=prompt("name");
// var phone=prompt("phone");

// people.push([status,name,phone]);








