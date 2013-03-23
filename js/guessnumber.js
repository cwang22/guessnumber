var setnum = new Array();
var times = 0;

function guessNumber() {
	
	var a = 0;
	var b = 0;
	var attempt = new Array($("#guess0").val(), $("#guess1").val(), $("#guess2").val(), $("#guess3").val());
	
	//check duplicate
	var duplicatecheck = attempt.slice();
	duplicatecheck.sort();
	for (var i = 0; i < duplicatecheck.length - 1; i++) {
		if (duplicatecheck[i] == duplicatecheck[i + 1]) {
			$(".tip").html('<div class="alert alert-error hide"><button type="button" class="close" data-dismiss="alert">&times;</button> <strong>Oops!</strong>&nbsp;Something went wrong.</div>');
			$('.alert').fadeIn();
			document.forms[0].reset();
			return false;
		}
	}

	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			if (isNaN(attempt[j]) || attempt[j] == "") {//validator
				$(".tip").html('<div class="alert alert-error hide"><button type="button" class="close" data-dismiss="alert">&times;</button> <strong>Oops!</strong>&nbsp;Something went wrong.</div>');
				$('.alert').fadeIn();
				document.forms[0].reset();
				return false;
			} else if (attempt[j] == setnum[i]) {
				if (j == i) {
					a = a + 1;
				} else {
					b = b + 1;
				}
			}
		}
	}

	if (a == 4) {
		$('#winModal').modal('show');
	} else {
		times++;
		if(times >= 10){
			$('#loseModal').modal('show');
			return false;
		}
		$('#result').append('<tr><td>' + times + '</td><td>' + attempt + '</td><td>' + a + "A" + b + "B</td></tr>");
	}
}


$(document).ready(function() {
	var numberlist = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
	
	//set random numbers
	for (var i = 0; i < 4; i++) {
		var r = Math.floor(Math.random() * numberlist.length);
		setnum[i] = numberlist[r];
		numberlist.splice(r, 1);
	}
});
