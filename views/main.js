var countDownDate = new Date("Oct 15, 2021 17:00:00").getTime();
if (window.location.pathname == '/schedule.html') {
  var y = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
    if (distance < 0) {
      clearInterval(y);
      document.getElementById("countdown").innerHTML = "In Progress!";
    }
  }, 1000);
}


var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}




let toggle = document.getElementById("hamburger");

toggle.addEventListener("click", function () {
  if (toggle.className === "fa fa-bars hamburger fa-lg"){
    toggle.className = "fa fa-times hamburger fa-lg";
    var smenu = document.createElement("nav");
    smenu.id = "menu-on-small";
    document.body.appendChild(smenu);
    document.getElementById("navigation").style.boxShadow = "none";
    var x;
	
	
    x = smenu.appendChild(document.createElement("a"));
    x.href = "/schedule.html";
    x.innerHTML = "Schedule";
    x.className = "menu-item"

    x = smenu.appendChild(document.createElement("a"));
    x.href = "/team.html";
    x.innerHTML = "Team";
    x.className = "menu-item"

    x = smenu.appendChild(document.createElement("a"));
    x.href = "/sponsorship-information.pdf";
    x.innerHTML = "Sponsor Us";
    x.className = "menu-item"

    x = smenu.appendChild(document.createElement("a"));
    x.href = "https://docs.google.com/forms/d/e/1FAIpQLSfd1cNojHTgsXazii8Q-WoecmSdOxn94rCEJb_q_A6R29Ribw/viewform";
    x.innerHTML = "Register";
    x.className = "menu-item"

    x = smenu.appendChild(document.createElement("a"));
    x.href = "https://bank.hackclub.com/donations/start/treasure-hacks";
    x.innerHTML = "Donate";
    x.className = "menu-item"
	
	
	
  }
  else{
    document.getElementById("menu-on-small").remove();
    toggle.className = "fa fa-bars hamburger fa-lg";
    document.getElementById("navigation").style.boxShadow = "0px 0px 8px 0px rgb(0 0 0)";
  }
});



window.addEventListener('mouseover', function(e) {
    categoryDetails(e.target);
});
window.addEventListener('click', function(e) {
    categoryDetails(e.target);
});
function categoryDetails(target){
	resetall();
	switch(target.id) {
		case "best-overall": {
			target.style.borderBottom = "3px solid black";
			target.style.paddingBottom = "10px";
			break;
		}
		case "best-solo": {
			target.style.borderBottom = "3px solid black";
			target.style.paddingBottom = "10px";
			break;
		}
		case "best-duo": {
			target.style.borderBottom = "3px solid black";
			target.style.paddingBottom = "10px";
			break;
		}
	}
}
function resetall(){
	var list = ["best-overall","best-solo","best-duo","most-aesthetically-pleasing","most-people-helped","qoom","sashido"];
	for (var i = 0; i < list.length; i++){
		document.getElementById(list[i]).style.border = "none";
		document.getElementById(list[i]).style.paddingBottom = "13px";
	}
}