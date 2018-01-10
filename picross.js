var gridId = "";

		function showPuzzleMenu() {
			document.getElementById("puzzleDropdown").classList.toggle("show");
			$("#numbersContainer").hide();
		}

		function createPuzzle(s) {
			//$("#numbersContainer").toggleClass("show");	
			$("#numbersContainer").show();
			//document.getElementById("numbersContainer").classList.toggle("show");
			// Loop that builds a grid in the container
			for (var rows = 0; rows < s; rows++) {
				for (var columns = 0; columns < s; columns++) {
					gridId = rows + "," + columns;
					$("#puzzle-container").append("<div id=id class='grid' onclick=squareClicked();></div>");
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