function insertHeader(){
	document.getElementById('Topbar').innerHTML = 
			'<link rel="icon" href="Resources/ICON.png">'+
			'<h1 id = "title" text-align="left">Main Page?</h1>'+
            '<h2 id="sub">Branham AP CS 2019</h2>'+
            '<div id = "tab">'+
            '   <a href = "">Home</a>'+
            '    <a href = "/info.html">Information</a>'+
            '    <a href = "https://branham.cuhsd.org/apps/events/">Calendar</a>'+
            '</div>';
}

insertHeader();