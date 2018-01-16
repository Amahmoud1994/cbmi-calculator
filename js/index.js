function calculate() {
	ribCage = document.getElementById("cocname").value;
	limValue = document.getElementById("limname").value;
	result = (((ribCage/0.7067)-limValue)/0.9156)-limValue

    document.getElementById("result").innerHTML = result;
    
}