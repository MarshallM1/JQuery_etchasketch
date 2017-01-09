var gridSize = 16;

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
  $(this).css("background-color", "#66ccff");
})
