

function getRoomInfo(){
	return "7_Social Science_Salberg_12_Social Science_Donald Mason_19_AVID 1, IM3, Future Business Leaders of America_Neeraja Nambula_20_IM3/IM3 STEM_Amanda Wilson_21_ Latinos Student Union,English_ Michael Espinoza_	21_ SAI, Gay Straight Alliance_ Leanne Haghighi_8_ SAI, Gay Straight Alliance_ Leanne Haghighi_22_ English_Chelsea Follett_23_ English_ Lily Salinas_24_English, ATHENA_Barbara Arduini_25_National Honor Society,English_ Melanie Vega_26_Lighthouse, SAI_Weir, Maryjane Gertz_27_ English_ Carl Ponzio_28_English, Bruin to Bruin, Super Ultra Meme Club, California Scholarship Federation, Model UN _Amanatullah_	29_ English_Dietrich Lei_		30_ English_Elizabeth Kile Herchkorn, Niki Hinds_32_ SAI_Maryjane Gertz_33_ SAI, SH_Renee Hardin_		36_ AP Physics 1, Physics, SPARE Club_Chris Chidester_37_ Physics, AP Physics 2_Ioanna Theodosopoulou_38_English,Acoustic_Schweizer_39_ English_ Nancy Freschi_	41_DE, EDD, IED, Bionic Bruins Robotics, Girls Who Code_Schremp, Torrecillas, Turner_43_ Chemistry, Physics, Key Club, Branham Biotech Club_ Alex Johnson_44_Chemistry_Fitzgerald Vo_46_ Spanish_ Merry Sara Maddelein_47_ Spanish_ Maria Meunier_48_Speech and Debate, English, Junior Statesmen of America_Murphy_49_ _ Erica Marquez_50_French, French Club_Garceau_51_Spanish/French, Quizbowl_MacKinnon_52_ Spanish	_ Damian Fragano_53_Social Science, Days for Girls, Photography Club_ Tania Eaton_ 54_ Social Science_Michael Dickey_55_ Social Science, American Cancer Society_Jennifer Ozdinski_56_Social Science, Liberty in North Korea_Brett Johanson_57_ Social Science, Spikeball Club_Kirk Selfridge_58_ Visual Arts_Jessica Bender_59_Visual Arts, Art,Random Acts of Kindness _Anita Su, Eileen Bertron_60_Art,Kpop Dance Team_Cristina Prates_61_Chemistry/POE_Liu Qi Chen_ 	62_Biology, Chemistry, Interact_Juan Fernandez Maculet_63_BLISS Club, Music, English, Intersectional Feminist_Barabara West, Rachelle Burnside_64_ Music, Band_Christopher Nalls_65_ SAI-TM	_Leif Bostrom_67_ SAI-TM, Black Student Union_Tobias Mc Leod_69_Spanish, Spanish Club, Pen Pal Club_Molina_70_ IM3, IM1_ Barbara Shcremp, Torrecillas_	71_Social Science_ Sarah MacInnes_72_AP Comp Sci, IM3, Gaming Club, Wii Club, Dungeon And Dragons Club, Suit Club_Steven Turner_73_Mandarin, Spanish, Mandarin Club_Linda Chen, Heather Votava_74_Biology, Fashion Club_ Kevin Kalman_75_ Biology_ Victoria Keuth_76_ Hum Anatomy, Biology, Multicultural Club_ David Mackey_77_ AVID 2,Biology,Human Anatomy_ Jessica Overby_78_ Biology_ Kori Reynolds_79_ IM2, IM1_ James Ferguson_		80_ IM2, AP Stats, Chess Club_ Sue Seden_81_IM2,AP Calc AB, Math Olympiad Club_ Anuradha Satyapal_82_ _ Michele Bayer_	83_AP Calc AB, IM1_ Jennifer Brady_84_APCalc BC, IM2, Branham Eclipse, Visvanathan Rocketry Club_Ramani Visvanathan_85_IM1_ Meredith Allen"

}

function search(searchInfo){
	var info = getRoomInfo().split("_");
	var returnInfo = [];
	var i = 0;
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
	return returnInfo;
}

function searchBar(){
	var searchInfo = document.getElementById("search").value;
	var info = getRoomInfo().split("_");
	var returnInfo = [];
	var i = 0;
	console.log(searchInfo);
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
	console.log(returnInfo);
}



console.log(search("Social Science"));