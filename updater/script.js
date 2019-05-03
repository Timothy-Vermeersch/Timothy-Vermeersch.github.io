function updateCalendar(){
	var d = getMonday();
	var events = getValue("calendar/"+getDateString(d)+"/events");
	document.getElementById('monday').innerHTML = '<ol><li>html data</li></ol>';
}

function getMonday() {
  d = new Date(d);
  var day = d.getDay();
  var diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
  return new Date(d.setDate(diff));
}

function getDateString(d){
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();
	return yyyy+"-"+mm+"-"+dd;
}

function insertHeader(){
	document.getElementById('Topbar').innerHTML = 
			'<h1 id="title">School Interactive Map Project</h1>'+
            '<h2 id="sub">Branham AP CS 2019</h2>'+
            '<div id="tab">'+
            '   <a href="https://timothy-vermeersch.github.io/info/">Information</a>'+
            '    <a href="https://timothy-vermeersch.github.io/updater/">Updater</a>'+
            '    <a href="https://branham.cuhsd.org/apps/events/">Calender</a>'+
            '</div>';
}

function getValue(String keyPath){
	//We currently have no server implementation so server communication will go here and return the value associated with the keyPath such as "calendar/2017-05-02/eventList"
	return "Error: no server implementation, placeholder";
}
insertHeader();
//window.setInterval(updateCalendar,10000);
