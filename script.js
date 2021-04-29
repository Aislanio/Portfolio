const body = document.querySelector("body");
const checbox =document.querySelector("#dark");
checbox.addEventListener("change", () =>{
	body.classList.toggle("darkmode");
	console.log("darkmode");
});
