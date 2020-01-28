$(document).ready(function(){
    // Computer Random # Array//
       var ranNum= [];
           for(var i = 19; i < 121; i++){
               ranNum.push(i);
           }
           console.log(ranNum);
   // Crystal Random # Array//
       var crystals = [];
           for(var j = 1; j < 13; j++){
               crystals.push(j);
           }
           console.log(j);
   // Global Variables//
           var ranNum;
           var crystalNums = [];
           var btn1;
           var btn2;
           var btn3;
           var btn4;
           var totScore = 0;//Players score//
           var Wins= 0; //Wins//
           var Losses = 0; //Losses//
   
   // Pick Random Number//
           function pickRanNum(arr){
               var x = arr[Math.floor(Math.random() * arr.length)];
               ranNum = x;
               $("#matchNum").html(ranNum);
               console.log("matchNum: " + ranNum);
           }
   // Pick Random Crystal Number//
           function pickRanNumCrystals(arr){
               for( var y = 0; y < 4; y++){
                   var c = arr[Math.floor(Math.random() * arr.length)];
                   crystalNums.push(c);
               }
               console.log("crystalNums: " + crystalNums);
           }
   // Change value each btn according to array//
           function crystalVal(arr){
               for(var i = 0; i < arr.length; i++){
                   $("#btn" + (i +1)).attr("value", arr[i]);
                   console.log(this);
               }
               btn1 = arr[0];
               btn2 = arr[1];
               btn3 = arr[2];
               btn4 = arr[3];
           }
   // Game Start//
           pickRanNum(ranNum);
           pickRanNumCrystals(crystals);
           crystalVal(crystalNums);
   
           $("#btn1").on("click", function(){
               totScore += btn1;
               $("#totNum").html(totScore);
               console.log(btn1);
           });
   
           $("#btn2").on("click", function(){
               totScore += btn2;
               $("#totNum").html(totScore);
               console.log(btn2);
           });
   
           $("#btn3").on("click", function(){
               totScore += btn3;
               $("#totNum").html(totScore);
               console.log(btn3);
           });
   
           $("#btn4").on("click", function(){
               totScore += btn4;
               $("#totNum").html(totScore);
               console.log(btn4);
           });
   // If user Wins/ Losses//
           $("button").on("click", function(){
               if(totScore === ranNum){
                alert("You Winnn!!!!!!");
                   $("#W").html("W: " + Wins);
                   Wins++;
                   reset();
                   } 
                   else if(totScore > ranNum){
                    alert("Womp... You lost...");
                       $("#L").html("L: " + Losses);
                       Losses++;
                       reset();
                   }
               });
    //Game Reset//
    function reset(){
        $("#btn5").on("click", function(){
            pickRanNum(ranNum);
            pickRanNumCrystals(crystals);
            crystalVal(crystalNums);
            totScore= 0;
            $("#totNum").html(totScore);
        });
    }
});
