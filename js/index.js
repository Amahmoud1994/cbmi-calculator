function calculate() {
	ribCage = document.getElementById("cocname").value;
	limValue = document.getElementById("limname").value;
	catName = document.getElementById("cname").value;

	if (catName == "") {
		catName = "Your cat";
	}
	console.log(catName);
	result = (((ribCage/0.7067)-limValue)/0.9156)-limValue

    document.getElementById("result").innerHTML =  "CBMI is = " + result;
    // document.getElementById("catimage").style.visibility = "visible";

    if (result>30) {
	    // document.getElementById("catimage").style.width = "100%";
	    document.getElementById("catstatus").innerHTML = "Please visit the nearest vet. "+ catName + " needs Help.";
	}
    else{
    	if (result<12) {
    		// document.getElementById("catimage").style.width = "30%";
    		document.getElementById("catstatus").innerHTML = "Please visit the nearest vet. "+ catName + " needs Help.";
    	}
    	else
    	{
    		// document.getElementById("catimage").style.width = "70%";
    		document.getElementById("catstatus").innerHTML = catName + " is Normal";

    	}
    }

    return false;
    
}