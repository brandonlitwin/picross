var gridId = "";
//:P face
var puzzle1 = [
	[0, 1, 1, 1, 0, 0, 1, 1, 1, 0],
	[0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
	[0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
	[0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
	[0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
	[0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
	[0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
	[0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
	[0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
	[0, 0, 0, 1, 1, 1, 1, 0, 0, 0]
];

var hintNumbers = [
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[]
]; //length 20 but there's 18 hint numbers for puzzle 1

function showPuzzleMenu() {
	document.getElementById("puzzleDropdown").classList.toggle("show");
	$("#numbersContainer").hide();
}

function createPuzzle(s, n) {
	if (n == 1) {
		selectedPuzzle = puzzle1;
	}
	if (s == 10) {
		$('#topNumbers').css("width", "470");
		$('#topNumbers').css("right", "2%");
		$('#leftNumbers').css("height", "470");
	} else if (s == 15) {
		$('#topNumbers').css("width", "480");
		$('#topNumbers').css("right", "1%");
		$('#leftNumbers').css("height", "480");
	} else if (s == 20) {
		$('#topNumbers').css("width", "490");
		$('#leftNumbers').css("height", "490");
	}	
	$("#numbersContainer").show();
	// Loop that builds a grid in the container
	for (var rows = 0; rows < s; rows++) {
		for (var columns = 0; columns < s; columns++) {
			/*Create squares */
			gridId = rows + "," + columns;
			$("#puzzle-container").append("<div id=id class='grid' onclick=squareClicked();></div>");
			if (columns == 5 || columns == 10 || columns == 15) {
				$("#id").css("border-left-color", "rgb(231, 170, 101)");
			} 
			if (rows == 5 || rows == 10 || rows == 15) {
				$("#id").css("border-top-color", "rgb(231, 170, 101)");
			}
			$('#id').attr('id', gridId);
			$('#id').attr('clicked', '0');	
		}	
	}
		/*Make size of grid*/
		$(".grid").width(450 / s);
		$(".grid").height(450 / s);
	addHintNumbers(s, selectedPuzzle);	
}

function addHintNumbers(s, selectedPuzzle) {
	for(var rows = 0; rows < s; rows++) {
		var countLeft = 0;
		for(var columns = 0; columns < s; columns++) {
			gridState = selectedPuzzle[rows][columns]; //check state of square in puzzle array
			var i = 0;
			if (gridState == 1) {
				countLeft++; //update count of top nums
			} else {
				if (countLeft > 0) {
					hintNumbers[rows].push(countLeft);
					//console.log(hintNumbers[rows]);
					countLeft = 0;
					i++;
				}
			}
			
			

			/*Add top numbers
			$('#topNumbers').append("<p id=topid class='hintNumber'></p>");
			$('#topid').append(countTop);
			$('#topid').attr('id', rows);*/
		}
		console.log(hintNumbers[rows]);
	}
	for(var rows = 0; rows < s; rows++) {
		//Add left numbers
		$('#leftNumbers').append("<p id=leftid class='hintNumber'></p>");
		$('#leftid').append(hintNumbers[rows]);
		$('#leftid').attr('id', rows);
		/*for(var columns = 0; columns < s; columns++) {
		
			
			
		}*/
	
	}
	
	console.log(hintNumbers.length);
	/*for (var rows = 0; rows < s; rows++) {
		for (var columns = 0; columns < s; columns++) {
			newHintNumbers[rows].push(hintNumbers[rows][columns]);
		}
	}
	console.log(newHintNumbers[rows]);*/
}

function squareClicked() {
	$(function() {
		$(".grid").off().on("click", function() {
			$(this).toggleClass("squareClicked");
		});

	});

}


// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {

	var dropdowns = document.getElementsByClassName("dropdown-content");
	var i;
		for (i = 0; i < dropdowns.length; i++) {
		var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
};