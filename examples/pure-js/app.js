var g = document.getElementById('greetingInput');
var s = document.getElementById('subjectInput');

g.onchange = function() {
	document.getElementById('greeting').innerHTML = this.value;
};

s.onkeypress = s.onkeyup = function() {
	document.getElementById('subject').innerHTML = this.value;
};
