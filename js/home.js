

function getRoomInfo(){
	return "7_Social Science_Salberg_12_Social Science_Donald Mason_19_AVID 1, IM3, Future Business Leaders of America_Neeraja Nambula_20_IM3/IM3 STEM_Amanda Wilson_21_ Latinos Student Union,English_ Michael Espinoza_	21_ SAI, Gay Straight Alliance_ Leanne Haghighi_8_ SAI, Gay Straight Alliance_ Leanne Haghighi_22_ English_Chelsea Follett_23_ English_ Lily Salinas_24_English, ATHENA_Barbara Arduini_25_National Honor Society,English_ Melanie Vega_26_Lighthouse, SAI_Weir, Maryjane Gertz_27_ English_ Carl Ponzio_28_English, Bruin to Bruin, Super Ultra Meme Club, California Scholarship Federation, Model UN _Amanatullah_	29_ English_Dietrich Lei_		30_ English_Elizabeth Kile Herchkorn, Niki Hinds_32_ SAI_Maryjane Gertz_33_ SAI, SH_Renee Hardin_		36_ AP Physics 1, Physics, SPARE Club_Chris Chidester_37_ Physics, AP Physics 2_Ioanna Theodosopoulou_38_English,Acoustic_Schweizer_39_ English_ Nancy Freschi_	41_DE, EDD, IED, Bionic Bruins Robotics, Girls Who Code_Schremp, Torrecillas, Turner_43_ Chemistry, Physics, Key Club, Branham Biotech Club_ Alex Johnson_44_Chemistry_Fitzgerald Vo_46_ Spanish_ Merry Sara Maddelein_47_ Spanish_ Maria Meunier_48_Speech and Debate, English, Junior Statesmen of America_Murphy_49_ _ Erica Marquez_50_French, French Club_Garceau_51_Spanish/French, Quizbowl_MacKinnon_52_ Spanish	_ Damian Fragano_53_Social Science, Days for Girls, Photography Club_ Tania Eaton_ 54_ Social Science_Michael Dickey_55_ Social Science, American Cancer Society_Jennifer Ozdinski_56_Social Science, Liberty in North Korea_Brett Johanson_57_ Social Science, Spikeball Club_Kirk Selfridge_58_ Visual Arts_Jessica Bender_59_Visual Arts, Art,Random Acts of Kindness _Anita Su, Eileen Bertron_60_Art,Kpop Dance Team_Cristina Prates_61_Chemistry/POE_Liu Qi Chen_ 	62_Biology, Chemistry, Interact_Juan Fernandez Maculet_63_BLISS Club, Music, English, Intersectional Feminist_Barabara West, Rachelle Burnside_64_ Music, Band_Christopher Nalls_65_ SAI-TM	_Leif Bostrom_67_ SAI-TM, Black Student Union_Tobias Mc Leod_69_Spanish, Spanish Club, Pen Pal Club_Molina_70_ IM3, IM1_ Barbara Shcremp, Torrecillas_	71_Social Science_ Sarah MacInnes_72_AP Comp Sci, IM3, Gaming Club, Wii Club, Dungeon And Dragons Club, Suit Club_Steven Turner_73_Mandarin, Spanish, Mandarin Club_Linda Chen, Heather Votava_74_Biology, Fashion Club_ Kevin Kalman_75_ Biology_ Victoria Keuth_76_ Hum Anatomy, Biology, Multicultural Club_ David Mackey_77_ AVID 2,Biology,Human Anatomy_ Jessica Overby_78_ Biology_ Kori Reynolds_79_ IM2, IM1_ James Ferguson_		80_ IM2, AP Stats, Chess Club_ Sue Seden_81_IM2,AP Calc AB, Math Olympiad Club_ Anuradha Satyapal_82_ _ Michele Bayer_	83_AP Calc AB, IM1_ Jennifer Brady_84_APCalc BC, IM2, Branham Eclipse, Visvanathan Rocketry Club_Ramani Visvanathan_85_IM1_ Meredith Allen"

}

function search(searchInfo){
	var info = getRoomInfo().split("_");
	var returnInfo = [];
	var i = 0;
	/**
	for(var count in info) {
		  if(info[count].includes(searchInfo)){;
		  	if(i%3==0){
			  returnInfo.push(info[i+1]);
			  returnInfo.push(info[i+2]);
		  	}else if(i%3==1){
				  returnInfo.push(info[i-1]);
				  returnInfo.push(info[i+1]);
		  	}else if(i%3==2){
				  returnInfo.push(info[i-1]);
				  returnInfo.push(info[i+1]);
		  	}
		  }
		  i++
	}
	**/
	for(var count in info) {
		  if(info[count].includes(searchInfo)){;
		  	if(i%3==0){
		  	  document.getElementById("r1").innerHTML = searchInfo;
		  	  document.getElementById("c1").innerHTML = info[i+1];
		  	  document.getElementById("t1").innerHTML = info[i+2];
		  	}else if(i%3==1){
		  		document.getElementById("c1").innerHTML = searchInfo;
			  	  document.getElementById("r1").innerHTML += info[i-1] + ", ";
			  	  document.getElementById("t1").innerHTML += info[i+1] + "' ";
		  	}else if(i%3==2){
		  		document.getElementById("t1").innerHTML = info[i];
			  	  document.getElementById("r1").innerHTML = info[i-2];
			  	  document.getElementById("c1").innerHTML = info[i-1];
		  	}
		  }
		  i++
	}
	return returnInfo;
}

function searchBar(){
	var searchInfo = document.getElementById("search").value;
	if(searchInfo =="emergency"){
		document.getElementById("Map").src = "css/Resources/branhamMapEmergency.jpg";
		document.getElementById("Topbar").style.backgroundColor = "red";
		document.getElementById("BottomBar").style.backgroundColor = "red";
	}
	var info = getRoomInfo().split("_");
	var returnInfo = [];
	var i = 0;
	console.log(searchInfo);
	for(var count in info) {
		  if(info[count].includes(searchInfo)){;
		  	if(i%3==0){
		  	  document.getElementById("r1").innerHTML = searchInfo;
		  	  document.getElementById("c1").innerHTML = info[i+1];
		  	  document.getElementById("t1").innerHTML = info[i+2];
		  	}else if(i%3==1){
		  		document.getElementById("c1").innerHTML = info[i];
			  	  document.getElementById("r1").innerHTML = info[i-1];
			  	  document.getElementById("t1").innerHTML = info[i+1];
		  	}else if(i%3==2){
		  		document.getElementById("t1").innerHTML = info[i];
			  	  document.getElementById("r1").innerHTML = info[i-2];
			  	  document.getElementById("c1").innerHTML = info[i-1];
		  	}
		  }
		  i++
	}
<<<<<<< HEAD
}

=======
	console.log(returnInfo);
}

function FindPosition(oElement)
{
  if(typeof( oElement.offsetParent ) != "undefined")
  {
    for(var posX = 0, posY = 0; oElement; oElement = oElement.offsetParent)
    {
      posX += oElement.offsetLeft;
      posY += oElement.offsetTop;
    }
      return [ posX, posY ];
    }
    else
    {
      return [ oElement.x, oElement.y ];
    }
}

function GetCoordinates(e)
{
  var PosX = 0;
  var PosY = 0;
  var ImgPos;
  ImgPos = FindPosition(myImg);
  if (!e) var e = window.event;
  if (e.pageX || e.pageY)
  {
    PosX = e.pageX;
    PosY = e.pageY;
  }
  else if (e.clientX || e.clientY)
    {
      PosX = e.clientX + document.body.scrollLeft
        + document.documentElement.scrollLeft;
      PosY = e.clientY + document.body.scrollTop
        + document.documentElement.scrollTop;
    }
  PosX = PosX - ImgPos[0];
  PosY = PosY - ImgPos[1];
  console.log(PosX, PosY);
  search(getRoom(PosX, PosY));
  //return (String)PosX+"-"+(String)PosY;
}

function getRoom(px, py){
	for (var key in rooms){
	 	var x = parseInt(key.split("-")[0]);
	 	var y = parseInt(key.split("-")[1]);
	 	var diffX = Math.abs(px-x);
	 	var diffY = Math.abs(py-y);
	 	if(diffX < 20 && diffY < 20){
	 		console.log(rooms[key], key);
	 		return rooms[key]
	 	}
	}
}

function fillDictionary(){
	rooms["506-882"] = 7;
	rooms["590-852"] = 8;
	rooms["506-916"] = 12;
	rooms["590-934"] = 11;
	rooms["546-1174"] = 26;
	rooms["530-1214"] = 27;
	rooms["518-1256"] = 28;
	rooms["498-1296"] = 29;
	rooms["480-1332"] = 30;
	rooms["468-1368"] = 31;
	rooms["446-1406"] = 32;
	rooms["674-1184"] = 33;
	rooms["656-1238"] = 34;
	rooms["636-1290"] = 35;
	rooms["608-1348"] = 36;
	//rooms["608-1348"] = 37;
	rooms["590-1406"] = 37;
	rooms["836-1168"] = 38;
	rooms["822-1212"] = 39;
	rooms["788-1278"] = 40;
	rooms["744-1388"] = 41;
	rooms["948-1312"] = 43;
	rooms["902-1352"] = 44;
	rooms["1122-1176"] = 46;
	rooms["1106-1214"] = 47;
	rooms["1090-1256"] = 48;
	rooms["1070-1296"] = 49;
	rooms["1056-1332"] = 50;
	rooms["1044-1368"] = 51;
	rooms["1026-1410"] = 52;
	rooms["1252-1176"] = 53;
	rooms["1232-1214"] = 54;
	rooms["1220-1256"] = 55;
	rooms["1198-1292"] = 56;
	rooms["1182-1330"] = 57;
	rooms["1160-1390"] = 58;
	rooms["1404-1176"] = 59;
	rooms["1344-1320"] = 60;
	rooms["1300-1406"] = 61;



}

var rooms = {};
var myImg = document.getElementById("Map");
myImg.onmousedown = GetCoordinates;

fillDictionary();

console.log(search("Social Science"));
>>>>>>> 61e3f85836965fb1adad346db3a830122914add7
