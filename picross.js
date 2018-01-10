var gridId = "";

		function showPuzzleMenu() {
			document.getElementById("puzzleDropdown").classList.toggle("show");
			$("#numbersContainer").hide();
		}

		function createPuzzle(s) {
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
			$(".grid").width(450 / s);
			$(".grid").height(450 / s);

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