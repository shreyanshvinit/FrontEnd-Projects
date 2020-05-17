var t1 = document.querySelector("#t1");
var t2 = document.querySelector("#t2");
var t3 = document.querySelector("#t3");
var t4 = document.querySelector("#t4");

var card1 = document.querySelector("#card1");
var card2 = document.querySelector("#card2");
var card3 = document.querySelector("#card3");
var card4 = document.querySelector("#card4");

card1.addEventListener("mouseover", function(){
	t1.classList.remove("text-dark");
	t1.classList.add("text-white");
})

card1.addEventListener("mouseout", function(){
	t1.classList.remove("text-white");
	t1.classList.add("text-dark");
})

card2.addEventListener("mouseover", function(){
	t2.classList.remove("text-dark");
	t2.classList.add("text-white");
})

card2.addEventListener("mouseout", function(){
	t2.classList.remove("text-white");
	t2.classList.add("text-dark");
})

card3.addEventListener("mouseover", function(){
	t3.classList.remove("text-dark");
	t3.classList.add("text-white");
})

card3.addEventListener("mouseout", function(){
	t3.classList.remove("text-white");
	t3.classList.add("text-dark");
})

card4.addEventListener("mouseover", function(){
	t4.classList.remove("text-dark");
	t4.classList.add("text-white");
})

card4.addEventListener("mouseout", function(){
	t4.classList.remove("text-white");
	t4.classList.add("text-dark");
})