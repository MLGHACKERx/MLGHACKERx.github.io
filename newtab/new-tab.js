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

var inputGoogle = document.getElementById("google_input");
inputGoogle.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("search_google").click();
  }
});

var inputDuck = document.getElementById("duck_input");
inputDuck.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("search_duck").click();
  }
});

var inputBing = document.getElementById("bing_input");
inputBing.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("search_bing").click();
  }
});

var inputEcosia = document.getElementById("ecosia_input");
inputEcosia.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("search_ecosia").click();
  }
});


function searchSite(site) {
	if (site == "GOOGLE") {
		inputText = inputGoogle.value;
		window.open("https://google.com/search?q=" + inputText, "_blank", "noreferrer");
	} else if (site == "DUCK") {
		inputText = inputDuck.value;
		window.open("https://duckduckgo.com/?q=" + inputText, "_blank", "noreferrer");
	} else if (site == "BING") {
		inputText = inputBing.value;
		window.open("https://www.bing.com/search?q=" + inputText, "_blank", "noreferrer");
	} else if (site == "ECOSIA") {
		inputText = inputEcosia.value;
		window.open("https://www.ecosia.org/search?method=index&q=" + inputText, "_blank", "noreferrer");
	}
}