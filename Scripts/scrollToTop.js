// When the user scrolls down 20px from the top of the document, show the button
//alert("COPYRIGHT DISCLAIMER! If anyone has any issues with any of the pictures used on this website, Please contact me by email at b.versteegh@hotmail.com");

let step = 0;
var interval;
var shouldShow = true;
window.onscroll = function() {scrollFunction()};

function scrollFunction() {

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        if (shouldShow == true){
            document.getElementById("myBtn").style.display = "block";
        }
    } else {
        document.getElementById("myBtn").style.display = "none";
    }

}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {

    shouldShow = false;
    document.getElementById("myBtn").style.display = "none";

    interval = setInterval(scroll, 50);

}


function scroll() {

    if (document.documentElement.scrollTop <= 10) {

        stop();
        return;

    }
	if (document.body.scrollTop <= 10){
		
        stop();
        return;
		
	}

	step = step + 2;
	if (step >= 200) {step = 200}

	document.documentElement.scrollTop -= step; // For Chrome, Firefox, IE and Opera
	document.body.scrollTop -= step;
	console.log(step);

}
function stop(){


    clearInterval(interval);
    step = 0;
    shouldShow = true;  
    document.getElementById("myBtn").style.display = "none";
    console.log("uitgevoerd");
    
}