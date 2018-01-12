var gridId = "";
//boots
var puzzle1 = [
	[0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
	[0, 0, 1, 0, 0, 0, 1, 1, 1, 1],
	[0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
	[0, 0, 0, 1, 0, 0, 1, 1, 1, 1],
	[0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
	[0, 1, 1, 1, 0, 0, 1, 0, 0, 1],
	[1, 0, 0, 0, 0, 1, 1, 1, 0, 1],
	[0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
	[0, 0, 0, 1, 1, 1, 1, 1, 1, 0]
];
//spiny
var puzzle2 = [
	[0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,],
	[0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,],
	[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0,],
	[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0,],
	[0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1,],
	[0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1,],
	[0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1,],
	[0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,],
	[0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1,],
	[0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1,],
	[0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1,],
	[1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0,],
	[1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0,],
	[0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0,],
	[0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1]
];
var leftHintNumbers = [];
var topHintNumbers = [];

function showPuzzleMenu() {
	document.getElementById("puzzleDropdown").classList.toggle("show");
	$("#numbersContainer").hide();
}

function createPuzzle(s, n) {
	//destroy old grid
	for (var rows = 0; rows < s; rows++) {
		for (var columns = 0; columns < s; columns++) {
			$("#puzzle-container").children(".grid").remove();
			$("#topNumbers").children("p").remove();
			$("#leftNumbers").children("p").remove();
		}
	}
	if (n == 1) {
		selectedPuzzle = puzzle1;
	} else if (n == 2) {
		selectedPuzzle = puzzle2;
	}
	if (s == 10) {
		leftHintNumbers = [[], [], [], [], [], [], [], [], [], []];
		topHintNumbers = [[], [], [], [], [], [], [], [], [], []];
		$('#topNumbers').css("width", "470px");
		$('#topNumbers').css("right", "2%");
		$('#leftNumbers').css("height", "470px");
	} else if (s == 15) {
		leftHintNumbers = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
		topHintNumbers = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], []];	
		$('#topNumbers').css("width", "480px");
		$('#topNumbers').css("right", "1%");
		$('#leftNumbers').css("height", "480px");
	} else if (s == 20) {
		leftHintNumbers = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
		topHintNumbers = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];	
		$('#topNumbers').css("width", "490px");
		$('#leftNumbers').css("height", "490px");
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
	//count left numbers
	for (var rows = 0; rows < s; rows++) {
		var countLeft = 0;
		for (var columns = 0; columns < s; columns++) {
			var gridState = selectedPuzzle[rows][columns]; //check state of square in puzzle array
			//console.log("state is " + gridState);
			//console.log("column is " + columns);
			//var i = 0;
			if (gridState == 1) {
				countLeft++; //update count of top nums
			} else {
				//console.log("this happened");
				if (countLeft > 0) {
					leftHintNumbers[rows].push(countLeft);
					//console.log(hintNumbers[rows]);
					countLeft = 0;
					//i++;
				}
			}

		}
		//console.log("out here");
		if (countLeft > 0) {
			leftHintNumbers[rows].push(countLeft);
			//console.log(hintNumbers[rows]);
			countLeft = 0;
			//i++;
		}
		//console.log(leftHintNumbers[rows]);
	}
	//Add left numbers
	for (var rows = 0; rows < s; rows++) {
		$('#leftNumbers').append("<p id=leftid class='hintNumber'></p>");
		$('#leftid').append(leftHintNumbers[rows] + " ");
		$('#leftid').attr('id', rows);
		if (s == 10) {
			$('#leftNumbers p').css('height', '6.5%');
		} else if (s == 15) {
		$('#leftNumbers p').css('height', '3.05%');
		} else if (s == 20) {
			$('#leftNumbers p').css('height', '5%');
		}	
	}
	//count top numbers
	for (var columns = 0; columns < s; columns++) {
		var countTop = 0;
		for (var rows = 0; rows < s; rows++) {
			var gridState = selectedPuzzle[rows][columns]; //check state of square in puzzle array
			//var i = 0;
			//console.log("state is " + gridState);
			if (gridState == 1) {
				countTop++; //update count of top nums
				//console.log("count is " + countTop);
			} else {
				if (countTop > 0) {
					//console.log("here");
					topHintNumbers[columns].push(countTop);
					//console.log(hintNumbers[columns]);
					countTop = 0;
					//i++;
				}
			}

		}
		if (countTop > 0) {
			topHintNumbers[columns].push(countTop);
			//console.log(hintNumbers[rows]);
			countTop = 0;
			//i++;
		}
		//console.log(topHintNumbers[columns]);
	}
	//Add top numbers
	for (var columns = 0; columns < s; columns++) {
		$('#topNumbers').append("<p id=topid class='hintNumber'></p>");
		$('#topid').append(topHintNumbers[columns] + " ");
		$('#topid').attr('id', columns);
		if (s == 10) {
			$('#topNumbers p').css('width', '10%');
		} else if (s == 15) {
			$('#topNumbers p').css('width', '6.67%');
		} else if (s == 20) {
			$('#topNumbers p').css('width', '5%');
		}
	}

}

function squareClicked() {
	$(function () {
		$(".grid").off().mousedown(function (event) {
			if (event.which == 1) {
				$(this).toggleClass("squareClicked");
			} else if (event.which == 3) {
				$(this).toggleClass("squareRClicked");
			}
			
		});

	});

}


// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
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