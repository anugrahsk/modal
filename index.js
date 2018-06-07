$(document).ready(function(){
    $("#roll").click(function(){
				
		$(".mod").show("fast");
	
        $(".mod").animate({
            top: '10vh',
			right:'25vw',
			left:'25vw',
            opacity: '5',
            height: '75%',
 	        width: '50%'
           
        });
		
		$("#bt").click(function(){
        $(".mod").animate({
            top: '-10vh',
			right:'25vw',
			left:'25vw',
            opacity: '-5',
            height: '-75%',
 	        width: '-50%'
           
        });
		});
		
		$(".cr").click(function(){
        $(".mod").animate({
            top: '-10vh',
			right:'25vw',
			left:'25vw',
            opacity: '-5',
            height: '-75%',
 	        width: '-50%'
           
        });
		});
		
   
        
   });
   
   
   
   
   
});