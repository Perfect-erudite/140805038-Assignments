function first(){
	var name = document.getElementById('name').value;
	if (name !== "") {
		document.getElementById('level').style.visibility = "visible"; 
	}
	else{
		document.getElementById('level').style.visibility = "hidden"; 
		document.getElementById('matric').style.visibility = "hidden"; 
		document.getElementById('dept').style.visibility = "hidden"; 
		document.getElementById('fac').style.visibility = "hidden"; 
		document.getElementById('cgpa').style.visibility = "hidden"; 
		document.getElementById('num').style.visibility = "hidden"; 
		document.getElementById('state').style.visibility = "hidden"; 
		document.getElementById('status').style.visibility = "hidden"; 
		document.getElementById('grad').style.visibility = "hidden"; 
	
	}
}

function second(){
	var level = document.getElementById('level').value;
	if (level !== "") {
		document.getElementById('matric').style.visibility = "visible"; 
	}
	else{
		document.getElementById('matric').style.visibility = "hidden"; 
		document.getElementById('dept').style.visibility = "hidden"; 
		document.getElementById('fac').style.visibility = "hidden"; 
		document.getElementById('cgpa').style.visibility = "hidden"; 
		document.getElementById('num').style.visibility = "hidden"; 
		document.getElementById('state').style.visibility = "hidden"; 
		document.getElementById('status').style.visibility = "hidden"; 
	}	document.getElementById('grad').style.visibility = "hidden"; 
}
function third(){
	var matric = document.getElementById('matric').value;
	if (matric !== "") {
		document.getElementById('dept').style.visibility = "visible";
	}
	else{
		document.getElementById('dept').style.visibility = "hidden"; 
		document.getElementById('fac').style.visibility = "hidden"; 
		document.getElementById('cgpa').style.visibility = "hidden"; 
		document.getElementById('num').style.visibility = "hidden"; 
		document.getElementById('state').style.visibility = "hidden"; 
		document.getElementById('status').style.visibility = "hidden"; 
		document.getElementById('grad').style.visibility = "hidden"; 
	}
}

function fourth(){
	var mail = document.getElementById('dept').value;
	if (mail !== "") {
		document.getElementById('fac').style.visibility = "visible"; 
	}
	else{
		document.getElementById('fac').style.visibility = "hidden"; 
		document.getElementById('cgpa').style.visibility = "hidden"; 
		document.getElementById('num').style.visibility = "hidden"; 
		document.getElementById('state').style.visibility = "hidden"; 
		document.getElementById('status').style.visibility = "hidden"; 
		document.getElementById('grad').style.visibility = "hidden"; 
	}
	
}

function fifth(){
	var fac = document.getElementById('fac').value;
	if (fac !== "") {
		document.getElementById('cgpa').style.visibility = "visible";
	}
	else{
		document.getElementById('cgpa').style.visibility = "hidden"; 
		document.getElementById('num').style.visibility = "hidden"; 
		document.getElementById('state').style.visibility = "hidden"; 
		document.getElementById('status').style.visibility = "hidden"; 
		document.getElementById('grad').style.visibility = "hidden"; 
	}
}

function sixth(){
	var cgpa = document.getElementById('cgpa').value;
	if (cgpa !== "") {
		document.getElementById('num').style.visibility = "visible"; 
	}
	else{
		document.getElementById('num').style.visibility = "hidden"; 
		document.getElementById('state').style.visibility = "hidden"; 
		document.getElementById('status').style.visibility = "hidden"; 
		document.getElementById('grad').style.visibility = "hidden";
	}
}

function seventh(){
	var num = document.getElementById('num').value;
	if (num !== "") {
		document.getElementById('state').style.visibility = "visible"; 

	} else{
		document.getElementById('state').style.visibility = "hidden"; 
		document.getElementById('status').style.visibility = "hidden"; 
		document.getElementById('grad').style.visibility = "hidden";
	}
}

function eight(){
	var state = document.getElementById('state').value;
	if (state !== "") {
		document.getElementById('status').style.visibility = "visible"; 
	}
	else{
		document.getElementById('status').style.visibility = "hidden"; 
		document.getElementById('grad').style.visibility = "hidden";
	}
}

function last(){
	var status = document.getElementById('status').value;
	if (status !== "") {
		document.getElementById('grad').style.visibility = "visible"; 
	}
	else{
		document.getElementById('grad').style.visibility = "hidden"; 
	}
}
