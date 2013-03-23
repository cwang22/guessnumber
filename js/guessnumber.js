var numberlist = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
var setnum = new Array();
var times = 0;

function guessNumber() {
	times++;
	var attempt = new Array($("#guess0").val(), $("#guess1").val(), $("#guess2").val(), $("#guess3").val());
	var a = 0;
	var b = 0;
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			if (attempt[j] == setnum[i]) {
				if (j == i) {
					a = a + 1;
				} else {
					b = b + 1;
				}
			}

		}
	}

	if (a == 4) {
		alert("yeah!");
	} else {
		$('#result').append('<tr><td>' + times + '</td><td>' + attempt + '</td><td>' + a + "A" + b + "B</td></tr>");
	}
}


$(document).ready(function() {

	for (var i = 0; i < 4; i++) {
		var r = Math.floor(Math.random() * numberlist.length);
		setnum[i] = numberlist[r];
		numberlist.splice(r, 1);
	}

});
