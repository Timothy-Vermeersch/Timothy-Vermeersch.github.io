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

insertHeader();