var openNav=document.querySelector(".mainNavigationToggleBtn");
var mainNav=document.querySelector(".mainNavigation");
var openSearchForm=document.querySelector(".mainInfo .btn");
var searchHotel=document.querySelector(".searchHotel")

openNav.addEventListener("click",function(event){
	event.preventDefault();
	openNav.classList.toggle("mainNavigationToggleBtnHide");
	mainNav.classList.toggle("mainNavigationShow");

	
});

openSearchForm.addEventListener("click",function(event){
	event.preventDefault();
	searchHotel.classList.toggle("searchHotelShow");
})

var moreAdult=document.querySelector(".adults .morePers");
var lessAdult=document.querySelector(".adults .lessPers");
var contAdults=document.querySelector(".adults input");
var blockAdults=document.querySelector(".adults");

moreAdult.addEventListener("click", function(event){
	event.preventDefault();
	contAdults.value++;
});

lessAdult.addEventListener("click", function(event){
	event.preventDefault();
	if(contAdults.value == 1){
		blockAdults.classList.add("wrongAction");
		setTimeout(function () {
            blockAdults.classList.remove("wrongAction");
        }, 1000);
		
	} else{
	   contAdults.value--;
	}
	
});

var moreChildren=document.querySelector(".Children .morePers");
var lessChildren=document.querySelector(".Children .lessPers");
var contChildren=document.querySelector(".Children input");
var blockChildren=document.querySelector(".Children");

moreChildren.addEventListener("click", function(event){
	event.preventDefault();
	contChildren.value++;
});

lessChildren.addEventListener("click", function(event){
	event.preventDefault();
	if(contChildren.value == 0){
		blockChildren.classList.add("wrongAction");
		setTimeout(function () {
            blockChildren.classList.remove("wrongAction");
        }, 1000);
		
	} else{
	   contChildren.value--;
	}
	
});