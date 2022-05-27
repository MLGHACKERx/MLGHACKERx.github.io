// Clock
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds() + 1;
  m = checkTime(m);
  s = checkTime(s);
  var AMPM;
  if (h>=12) {
  	h=h-12;
  	AMPM = "PM";
  }
  else {
  	AMPM = "AM";
  }
  if (s == 60) {
  	s=0;
  	m = m + 1;
  }
  if (m == 60) {
  	m = 0;
  	h = h + 1;
  }
  document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s + " " + AMPM;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
// End of clock

// Google single search
var inputGoogle = document.getElementById("google_input");
inputGoogle.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("search_google").click();
  }
});

function searchGoogle() {
  searchSite("GOOGLE", inputGoogle.value);
}
//

// Duck Duck Go single search
var inputDuck = document.getElementById("duck_input");
inputDuck.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("search_duck").click();
  }
});

function searchDuck() {
  searchSite("DUCK", inputDuck.value);
}
//

// Bing single search
var inputBing = document.getElementById("bing_input");
inputBing.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("search_bing").click();
  }
});

function searchBing() {
  searchSite("BING", inputBing.value);
}
//

// Ecosia single search
var inputEcosia = document.getElementById("ecosia_input");
inputEcosia.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("search_ecosia").click();
  }
});

function searchEcosia() {
  searchSite("ECOSIA", inputEcosia.value);
}
//


var all_input = document.getElementById("all_input");
all_input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    forward_to_searchSite();
  }
});

function forward_to_searchSite () {
  var selection_list = document.getElementById("search_engines");
  var selected_engine = selection_list.options[selection_list.selectedIndex].value;
  searchSite(selected_engine, all_input.value);
}

function searchSite(site, inputText) {
	if (site == "GOOGLE") {
		window.open("https://google.com/search?q=" + inputText, "_self", "noreferrer");
	} else if (site == "DUCK") {
		window.open("https://duckduckgo.com/?q=" + inputText, "_self", "noreferrer");
	} else if (site == "BING") {
		window.open("https://www.bing.com/search?q=" + inputText, "_self", "noreferrer");
	} else if (site == "ECOSIA") {
		window.open("https://www.ecosia.org/search?method=index&q=" + inputText, "_self", "noreferrer");
	}
}