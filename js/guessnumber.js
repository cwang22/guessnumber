var numberlist = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
var setnum = new Array();
var times = 0;

function guess() {
	times++;
	var attempt = new Array($("#guess0").val(), $("#guess1").val(), $("#guess2").val(), $("#guess3").val());
	var a = 0;
	var b = 0;
	/*
	 var attempt0 = $("#guess0").val();
	 var attempt1 = $("#guess1").val();
	 var attempt2 = $("#guess2").val();
	 var attempt3 = $("#guess3").val();*/

	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			//alert(attempt[j]);
			//alert(setnum[i]);
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
		$('#result').append('<div class="row"><div class="span4">' + times + '</div><div class="span4">' + attempt + '</div><div class="span4">' + a +"A" + b +"B</div></div>");
	}

	//alert("hi");
}


$(document).ready(function() {

	for (var i = 0; i < 4; i++) {
		var r = Math.floor(Math.random() * numberlist.length);
		setnum[i] = numberlist[r];
		numberlist.splice(r, 1);
	}

	/*
	 for(var i=0;i<setnum.length;i++){
	 alert(setnum[i]);
	 }*/

});
