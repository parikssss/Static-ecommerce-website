

function Login(){
	
	var uid = document.getElementById('Username').value; 
	var pass = document.getElementById('Password').value;
	
	if(uid=="" || pass==""){
		alert("Empty field found. Please enter all the details.")
		
	}
		else {
		alert("Log in was successful.")
	}
}