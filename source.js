$(document).ready(function () {

var cardState;
var qbank=new Array;
var color1="#1E8BC3";
var color2="#3A4147";

loadDB();

function loadDB(){
  $.get("data.csv", function(data) {
    qbank=$.csv.toArrays(data);
    // console.log(qbank)
    beginActivity();
  })//get

}//loadDB

function beginActivity(){
 cardState=0;

 $("#cardArea").empty();
 var cardid = Math.floor(Math.random()*qbank.length);
 $("#cardArea").append('<div id="card1" class="card">' + qbank[cardid][0] + '</div>');
 $("#cardArea").append('<div id="card2" class="card">' + qbank[cardid][1] + '</div>');

 $("#card1").css("background-color",color1);
 $("#card2").css("background-color",color2);
 $("#card2").css("top","200px");
 $("#cardArea").on("click",function(){
  if(cardState!=1){
   cardState=1;
   //togglePosition();
   $("#card1").animate({top: "-=200"}, 150, function() {cardState=0;togglePosition();});
   $("#card2").animate({top: "-=200"}, 150, function() {togglePosition2();});
  }//if
 });//click function

 $("#buttonArea").empty();
 $("#buttonArea").append('<div id="nextButton">NEXT</div>');
 $("#nextButton").on("click",function(){
  beginActivity();  
 });//click function
}//beginactivity

function togglePosition(){
 if($("#card1").position().top==-200){$("#card1").css("top","200px");};
}//toggle

function togglePosition2(){
 if($("#card2").position().top==-200){$("#card2").css("top","200px");};
}//toggle2

});
