   function move() {
	var username = document.getElementById("username").value;
	
	var lootbox = document.getElementById("lootbox").value;
	if(username=="") {
		alert('Please insert your  username or id');
		return false;
	}

	document.getElementById("fillup").style.display = "none";
	document.getElementById("progressbarcontainer").style.display = "block";
	var elem = document.getElementById("progressbar");
	var width = 10;
	var id = setInterval(frame, 369);
	function frame() {
	

		if (width > 10 && width < 20) {
			document.getElementById("progresslog").innerHTML = "Connecting to TikTok server";
		}

		if (width > 20 && width < 30) {
			document.getElementById("progresslog").innerHTML = "Connection to server established";
		}

		if (width > 30 && width < 40) {
			document.getElementById("progresslog").innerHTML = "Connecting to : "+username+"";
		}

		if (width > 40 && width < 50) {
			document.getElementById("progresslog").innerHTML = "Connection to : "+username+" established";
		}

		if (width > 60 && width < 70) {
			document.getElementById("progresslog").innerHTML = "  Checking : "+lootbox+"s  ";
		}

		if (width > 80 && width < 90) {
			document.getElementById("progresslog").innerHTML = "Selected  "+lootbox+"  ready to Download";
		}

		if (width > 90 && width <= 91) {
			document.getElementById("progresslog").innerHTML = "Downloading";
		}

		if (width > 91 && width <= 92) {
			document.getElementById("progresslog").innerHTML = "Downloading.";
		}

		if (width > 92 && width <= 93) {
			document.getElementById("progresslog").innerHTML = "Downloading..";
		}

		if (width > 93 && width <= 94) {
			document.getElementById("progresslog").innerHTML = "Downloading";
		}

		if (width > 94 && width <= 95) {
			document.getElementById("progresslog").innerHTML = "Downloading..";
		}

		if (width > 95 && width <= 96) {
			document.getElementById("progresslog").innerHTML = "Downloading......";
		}

		if (width > 96 && width <= 97) {
			document.getElementById("progresslog").innerHTML = "Downloaded";
		}

	    if (width >= 99) {
	    	document.getElementById("progresslog").innerHTML = "Processing...";
	    	setTimeout(verify, 1000);
			clearInterval(id);
	    } else {
			width++;
			elem.style.width = width + '%';
			document.getElementById("progressbarlabel").innerHTML = width * 1  + '%';
			}
	}
}

function verify() {

	document.getElementById("verifybg").style.display = "block";

}
var randomnumber = setInterval(randomuser,900)
function randomuser() {
document.getElementById("randomnumber").innerHTML = Math.floor(Math.random() * 101);
}



    if(typeof window.ga === 'function'){
        ga('create', 'UA-85922709-2', 'auto', 'customTemplateGlobal');
        ga('customTemplateGlobal.html', 'dimension1', typeof window.CPBContentLocker === 'function' ? 0 : 1);
        ga('customTemplateGlobal.send', 'pageView');
    }
