$(document).ready(function(){
	var val = new Array();
	var bkg = $('body').css('background-color');
	var rgba = bkg.match(/\d+/g);
	
	//for (var i in rgb){
	$('#res').html("The color is red: "+rgba[0]+" green: "+rgba[1]+" blue: "+rgba[2]+" opacity: 1");
	//}
	$("#red").keyup(function(){
		var red=$(this).val();
		rgba[0] = red;
		$('body').css("background-color","rgba("+rgba[0]+","+rgba[1]+","+rgba[2]+",1)");
		//$("body").css("background-color","rgba("+rgba[0]+",0,0,1)");
		// $('#res').html("The color is red: "+rgba[0]+" green: "+rgba[1]+" blue: "+rgba[2]+" opacity: "+rgba[3]);
		bkg=$("body").css("background-color");
		$('#res').html("The color is: rgba("+rgba[0]+","+rgba[1]+","+rgba[2]+",1)");
	});
	
	$("#green").keyup(function(){
		var green=$(this).val();
		rgba[1] = green;
		$('body').css("background-color","rgba("+rgba[0]+","+rgba[1]+","+rgba[2]+",1)");
		//$("body").css("background-color","rgba("+rgba[0]+",0,0,1)");
		// $('#res').html("The color is red: "+rgba[0]+" green: "+rgba[1]+" blue: "+rgba[2]+" opacity: "+rgba[3]);
		bkg=$("body").css("background-color");
		$('#res').html("The color is: rgba("+rgba[0]+","+rgba[1]+","+rgba[2]+",1)");
	});
	
	$("#blue").keyup(function(){
		var blue=$(this).val();
		rgba[2] = blue;
		$('body').css("background-color","rgba("+rgba[0]+","+rgba[1]+","+rgba[2]+",1)");
		//$("body").css("background-color","rgba("+rgba[0]+",0,0,1)");
		// $('#res').html("The color is red: "+rgba[0]+" green: "+rgba[1]+" blue: "+rgba[2]+" opacity: "+rgba[3]);
		bkg=$("body").css("background-color");
		$('#res').html("The color is: rgba("+rgba[0]+","+rgba[1]+","+rgba[2]+",1)");
	});
	
	/*$("#opacity").keyup(function(){
		var opacity=$(this).val();
		//rgba[2] = blue;
		$('body').css("background-color","rgba("+rgba[0]+","+rgba[1]+","+rgba[2]+","+opacity+")");
		//$("body").css("background-color","rgba("+rgba[0]+",0,0,1)");
		// $('#res').html("The color is red: "+rgba[0]+" green: "+rgba[1]+" blue: "+rgba[2]+" opacity: "+rgba[3]);
		bkg=$("body").css("background-color");
		$('#res').html("The color is: rgba("+rgba[0]+","+rgba[1]+","+rgba[2]+",1)");
	});*/
});