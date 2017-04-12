
$(document).ready(function() {
	makeGrid(32);
	$(this).on('mouseenter','.boudoole_dot', function(){
		if ($(this).css("background-color") === 'transparent') {
			$(this).css({"background-color": '#'+Math.floor(Math.random()*16777215).toString(16) });
		} else {
			$(this).css({"background-color": getTintedColor(rgb2hex($(this).css("background-color")), -32) });
		}
		
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
	$('.boudoole_dot').css({"background-color":"transparent"});
}

//Function to convert rgb color to hex format
//http://wowmotty.blogspot.com/2009/06/convert-jquery-rgb-output-to-hex-color.html
var hexDigits = new Array
        ("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"); 

function rgb2hex(rgb) {
 rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
 return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function hex(x) {
  return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
 }
 
// richard maloney 2006 for engineX
function getTintedColor(color, v) {
    if (color.length >6) { color= color.substring(1,color.length)}
    var rgb = parseInt(color, 16); 
    var r = Math.abs(((rgb >> 16) & 0xFF)+v); if (r>255) r=r-(r-255);
    var g = Math.abs(((rgb >> 8) & 0xFF)+v); if (g>255) g=g-(g-255);
    var b = Math.abs((rgb & 0xFF)+v); if (b>255) b=b-(b-255);
    r = Number(r < 0 || isNaN(r)) ? 0 : ((r > 255) ? 255 : r).toString(16); 
    if (r.length == 1) r = '0' + r;
    g = Number(g < 0 || isNaN(g)) ? 0 : ((g > 255) ? 255 : g).toString(16); 
    if (g.length == 1) g = '0' + g;
    b = Number(b < 0 || isNaN(b)) ? 0 : ((b > 255) ? 255 : b).toString(16); 
    if (b.length == 1) b = '0' + b;
    return "#" + r + g + b;
} 

