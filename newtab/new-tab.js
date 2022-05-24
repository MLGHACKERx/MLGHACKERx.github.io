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

var input = document.getElementById("search");

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("searchGoogle").click();
  }
});

function searchGoogle() {
	inputText = input.value;
	window.open("https://google.com/search?q=" + inputText, "_blank", "noreferrer");
}
