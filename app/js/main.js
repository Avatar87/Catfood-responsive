
$(document).ready(function(){
	var clicks = 0;
	var clicks2 = 0;
	var items = document.getElementsByClassName('item');
			$("#item1").click(function(){
			clicks++;
			$("#item1").mouseout(function(){
			$("#item1").addClass('itemselected');
			$("#item__weight1").addClass('weightselected');
			$("#buy__link1").html("");
			$("#buy__text1").html("Печень утки разварная с артишоками.");
				if ($("#item1").hasClass('itemselected')&& clicks%2 == 0) {
				 $("#item1").removeClass('itemselected');
				 $("#item__weight1").removeClass('weightselected');
				 $("#buy__text1").html("Чего сидишь? Порадуй котэ,&nbsp;");
				 $("#buy__link1").html("купи.");
				}
			});
		});	

	$("#item2").click(function(){
		clicks2++;
		$("#item2").mouseout(function(){
		$("#item2").addClass('itemselected');
		$("#item__weight2").addClass('weightselected');
		$("#buy__link2").html("");
		$("#buy__text2").html("Головы щучьи с чесноком да свежайшая сёмгушка.");
			if ($("#item2").hasClass('itemselected') && clicks2%2 == 0) {
			 $("#item2").removeClass('itemselected');
			 $("#item__weight2").removeClass('weightselected');
			 $("#buy__text2").html("Чего сидишь? Порадуй котэ,&nbsp;");
			 $("#buy__link2").html("купи.");
			}
		});
	});
	$("#buy__link1").click(function(){
		clicks++;
		$("#item1").addClass('itemselected');
		$("#item__weight1").addClass('weightselected');
		$("#buy__link1").html("");
		$("#buy__text1").html("Печень утки разварная с артишоками.");
	});
	$("#buy__link2").click(function(){
		clicks2++;
		$("#item2").addClass('itemselected');
		$("#item__weight2").addClass('weightselected');
		$("#buy__link2").html("");
		$("#buy__text2").html("Головы щучьи с чесноком да свежайшая сёмгушка.");
	});

});