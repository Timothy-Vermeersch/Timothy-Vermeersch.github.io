function insertHeader(){
	document.getElementById('Topbar').innerHTML = 
			'<link rel="icon" href="Resources/ICON.png">'+
			'<h1 id = "title">School Interactive Map Project</h1>'+
            '<h2 id="sub">Branham AP CS 2019</h2>'+
            '<div id = "tab">'+
            '   <a href = "/info.html">Information</a>'+
            '    <a href = "/updater.html">Updater</a>'+
            '    <a href = "https://branham.cuhsd.org/apps/events/">Calendar</a>'+
            '</div>';
}

insertHeader();