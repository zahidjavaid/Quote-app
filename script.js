let celebrities = [
	{	
		id: 1,
		name: "Abdul Sattar Edhi",
		title: "Founder, Edhi Foundation",
		readMoreUrl: "https://en.wikipedia.org/wiki/Abdul_Sattar_Edhi",
		imgURL: "abdul-sattar.JPG",
		quote: "No religion is higher than Humanity"
	},

	{
		id: 2,
		name: "Liaquat Ali Khan",
		title: "One of the leading founding fathers of Pakistan",
		readMoreUrl: "https://en.wikipedia.org/wiki/Liaquat_Ali_Khan",
		imgURL: "liaquat-ali-khan.jpg",
		quote: "Who became and served as the first Prime Minister of Pakistan."
	},

	{
		id: 3,
		name: "Abdul Qadeer Khan",
		title: "Nuclear Physiciat",
		readMoreUrl: "https://en.wikipedia.org/wiki/Abdul_Qadeer_Khan",
		imgURL: "abdul-qadeer.jpg",
		quote: "I am proud of my work for my country"
	},

	{
		id: 4,
		name: "Quaid-e-Azam",
		title: "Mohammad Ali Jinnah",
		readMoreUrl: "https://en.wikipedia.org/wiki/Muhammad_Ali_Jinnah",
		imgURL: "quaid-e-azam.jpg",
		quote: "With faith, discipline and selfless devotion to duty, there is nothing worthwhile that you cannot achieve."
	},

	{
		id: 5,
		name: "Arfa Karim",
		title: "Computer Prodigy",
		readMoreUrl: "https://en.wikipedia.org/wiki/Arfa_Karim",
		imgURL: "arfa.jpg",
		quote: "If you think shy, you act shy. If you think confident you act confident."
	},

	{
		id: 6,
		name: "Allama Iqbal",
		title: "Poet, Philosopher and Politician.",
		readMoreUrl: "https://en.wikipedia.org/wiki/Muhammad_Iqbal",
		imgURL: "allama-iqbal.jpg",
		quote: "He is called the Spiritual Father of Pakistan. He is considered one of the most important figures in Urdu literature, with literary work in both Urdu and Persian."
	},


	{
		id: 7,
		name: "Rashid Minhas",
		title: "Pilot Officer",
		readMoreUrl: "https://en.wikipedia.org/wiki/Rashid_Minhas",
		imgURL: "Rashidminhas.jpg",
		quote: "Rashid Minhas Shaheed, NH, PAF was a Pilot in the Pakistan Air Force. Minhas, a newly commissioned officer of 1971, is the only PAF officer to receive the highest valour award, the Nishan-e-Haider."
	},

 // "edhi", "malala", "quaid-e-azam"
 ];
	

function initialize() {
	// console.log("assad")
	let celebritiesGroupEl = document.querySelector("#celebritries-List");
	for(let i = 0; i < celebrities.length; i ++){
		// console.log(celebrities[i])
		// bodyEl.innerHTML += "<div class='celebrity-img-div' style='background-image: url(images/"+ celebrities[i].imgURL+" )'> </div> "+ celebrities[i].name ;
		// bodyEl.innerHTML += celebrities[i].name;
		celebritiesGroupEl.innerHTML += `
					<div class="celebrity-img-div" 
					  style="background-image: url(images/${celebrities[i].imgURL})"
					  onclick="changeCeleb(${i})">
					  <p class="celebrity-img-text">${celebrities[i].name}</p>
				    </div>`
	}
	changeCeleb(0);
// 	function info(x){

// 	let display =parseInt(document.querySelector("div").id);
// 	console.log(display);
	
// 		display.innerHTML = celebrities[x].name+"\n"+celebrities[x].quote;

// }

}

function changeCeleb(celeIndex){
	document.querySelector("#celebrity-name").innerHTML = celebrities[celeIndex].name;
	document.querySelector("#celebrity-title").innerHTML = celebrities[celeIndex].title;
	document.querySelector("#celebrity-img").style["background-image"] = `url(images/${celebrities[celeIndex].imgURL})`;
	document.querySelector("#celebrity-quote").innerHTML = celebrities[celeIndex].quote;
	document.querySelector("#celebrity-link a").href = celebrities[celeIndex].readMoreUrl;
	
	// let rand1 = Math.floor(Math.random() * 255);
	// let rand2 = Math.floor(Math.random() * 255);
	// let rand3 = Math.floor(Math.random() * 255);
}


// function changeCeleb(){
// 	console.log("hi" + celeIndex);
// }