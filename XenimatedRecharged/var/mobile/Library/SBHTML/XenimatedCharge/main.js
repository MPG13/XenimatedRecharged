var wallpaper = "url('../../XenimatedCharge/"+wallgif+"')";



function mainUpdate(type){
    if(type == "battery"){
		var chargeText = (batteryCharging);
		if (chargeText){
			document.body.style.backgroundImage = wallpaper;
		}
		else{
			document.body.style.backgroundImage = "none";
		}
    }
}