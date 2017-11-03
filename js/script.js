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

moreAdult.addEventListener("click", function(event){
	event.preventDefault();
	contAdults.value++;
});

lessAdult.addEventListener("click", function(event){
	event.preventDefault();
	if(contAdults.value == 1){

	} else{
	   contAdults.value--;
	}
	
});