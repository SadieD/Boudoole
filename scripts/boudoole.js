
$(document).ready(function() {
	makeGrid(32);
	$(this).on('mouseenter','.boudoole_dot', function(){
		$(this).css({"background-color":"green"});
	});
	$('.clear').click(function(){
		clearDots();
	});
	$('.size').click(function(){
		var newSize = parseInt(prompt("Enter a grid size", "8"));
		removeGrid();
		makeGrid(newSize);
	});
});

function makeGrid(gridSize) {
	if (gridSize > 64 || gridSize < 2) {
		gridSize = 32;
	} else if (!Number.isInteger(gridSize)) {
		gridSize = 32;
	}
	
	var dotSize = (512 / gridSize) - 2;
	var count = 0
	for (var i = 0; i < gridSize; i++) {
		for (var j = 0; j < gridSize; j++) {
			$('.boudoole_box').append("<div class='boudoole_dot'></div>");
			count++;
		}
	}
	$('.boudoole_dot').height(dotSize);
	$('.boudoole_dot').width(dotSize);
}

function removeGrid() {
	$('.boudoole_dot').remove();
}

function clearDots() {
	$('.boudoole_dot').css({"background-color":"white"});
}