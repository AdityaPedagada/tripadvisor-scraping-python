$(document).ready(function() {
	$('.header').addClass('big-header');
});

$(document).on('click', '.massive.button', function(){
	$('.header').slideUp('fast');

	var html = '';
	
	$.ajax({
		url: "/activities", 
		method: "GET",
		dataType: 'JSON',
		success: function(data) {
			for (var items in data){
				
				html += '<div class="row">';
				html += '<div class="ui horizontal segments">';
				html += '<div class="ui compact segment">';
				html += '<img class="ui fluid image" src="' + data[items].image_url + '">';
				html += '</div>';
				html += '<div class="ui secondary fluid segment">';
				html += '<h3>' + data[items].title + '</h3>';
				html += generateStarsHTML(data[items].rating) + '<br/>';
				html += '<span>' + data[items].reviews + ' reviews</span><br/>';
				html += '<a href="' + data[items].review_url + '" class="ui inverted basic red button">Check it out!</a>';
				html += '</div>';
				html += '</div>';
				html += '</div>';	
			}
			$('#results').hide().fadeIn('slow').html(html)
		}
	});
	
});

function generateStarsHTML(str){
	var count = str[0]
	var half = false;
	if (str.indexOf('5') === 1){
		half = true;
		count = count.replace('.5', '')
	}
	
	var starHTML = '';
	for (var i=0; i < count.toString(); i++){
		starHTML += '<i class="star icon"></i>'
	}
	
	if (half){
		starHTML += '<i class="star half empty icon"></i>'
	}
	
	return starHTML;
	
}