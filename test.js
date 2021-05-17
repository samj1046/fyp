const myForm = document.getElementById("myForm");
const apidelete = document.getElementById("apidelete");





function get (){
  fetch("https://api.apispreadsheets.com/data/12112/?query=deletefrom12112whereteamname='apidelete' ").then(res=>{
	if (res.status === 200){
		// SUCCESS
	}
	else{
		// ERROR
	}
})
}
