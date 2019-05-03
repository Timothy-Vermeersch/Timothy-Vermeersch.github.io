function insertHeader(){
	document.getElementById('Topbar').innerHTML = 
			'<h1 id = "title">School Interactive Map Project</h1>'+
            '<h2 id="sub">Branham AP CS 2019</h2>'+
            '<div id = "tab">'+
            '   <a href = "https://bhs.cloud/info.html">Information</a>'+
            '    <a href = "https://bhs.cloud/updater.html">Updater</a>'+
            '    <a href = "https://branham.cuhsd.org/apps/events/">Calendar</a>'+
            '</div>';
}

insertHeader();