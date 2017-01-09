var gridSize = 16;
var rainbow = false;
var penColor = '#66ccff';

$(document).ready(function(){
  reset();
});

function reset(){
  gridSize = $('#size').val();
  $("#grid").empty();
  for (var i = 1; i <= Math.pow(gridSize, 2); i++) {
		$("#grid").append("<div class='box'></div>");
	};
  $('#grid div').height(700/gridSize);
  $('#grid div').width(700/gridSize);
};

$(document).on('mouseenter', '#grid div', function(){
  if(rainbow == false){
    $(this).css("background-color", penColor);
  }
  else{
    var rgbR = Math.floor((Math.random() * 256));
    var rgbB = Math.floor((Math.random() * 256));
    var rgbG = Math.floor((Math.random() * 256));
    var randomColor = "rgb(" + rgbR + "," + rgbG + "," + rgbB + ")"
    $(this).css("background-color", randomColor);
  }
})

$(document).on('click', '.colorPicker', function(){
  rainbow = false;
  penColor = $(this).val();
})


function rainbowToggle(){
  rainbow = !rainbow;
}
