$(function(){
            $('#button').on('click',function(){
                $('body').append('<div id="mordal">modal<a id="close">×</a></div>');
                $('body').append('<div id="cover"></div>');
                $('#close').on('click',function(){
                    $('#mordal,#cover').remove();
                });
            });
        });


$(function(){
	$('#button').on('click',function(){
		$('body').append('<div id="mordal">modal<a id="close">×</a></div>');
		$('body').append('<div id="cover"></div>');
		$('#close').on('click',function(){
			$('#mordal,#cover').remove();
		});
	});
});