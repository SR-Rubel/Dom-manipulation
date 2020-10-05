
function syntex()
{
    document.querySelector(".hlw").innerHTML="Hello world!"
}

function vara(){
    var int=5;
    var float=3.5;
    var string="This is a string text";
    function local(){
        var a=5;
        var b=6;
        document.querySelector(".hlw").innerHTML="these ar local variable: a= "+a+" and b= "+b+'<br>';
    }
    local();
    document.querySelector(".hlw").innerHTML +=int+'<br>'+float+'<br>'+string;
}

function alr(){
    alert("This an assignment about javascript");
}
function op(){
    var a=33;
    var b=10;
    var c="text";
    
    var res="a+b: "+(a+b)+'<br>'+"a-b: "+(a-b)+'<br>'+"a/b: "+(a/b)+'<br>'+"a%b: "+(a%b)+'<br>'+"a+b+c: "+(a+b+c)+'<br>'+"++a: "+(++a)+'<br>'+"--b: "+(--b)+'<br>';

    document.querySelector(".o-2").innerHTML=res;

}

function if_else(){
   var age=prompt("enter your age");
   if(age>18){
    document.querySelector(".o-2").innerHTML="your are eligible for cradit card";
   }
   else{
    document.querySelector(".o-2").innerHTML="your are not eligible for cradit card";
   }
}

function swth(){
    var grade = prompt("enter your grade");
    switch (grade) {
       case 'A': document.querySelector(".o-2").innerHTML="Good job<br />"
       break;
    
       case 'B': document.querySelector(".o-2").innerHTML="Pretty good<br />"
       break;
    
       case 'C': document.querySelector(".o-2").innerHTML="Passed<br />"
       break;
    
       case 'D': document.querySelector(".o-2").innerHTML="Not so good<br />"
       break;
    
       case 'F': document.querySelector(".o-2").innerHTML="Failed<br />"
       break;
    
       default:  document.querySelector(".o-2").innerHTML="Unknown grade<br />"
    }
}


    function whl(){
        function fib(n) 
    { 
    var a = 0,b = 1,c,i; 
    if (n == 0) 
        return a; 
    i=2
    while(i <= n) { 
        c = a + b; 
        a = b; 
        b = c; 
        i++;
    } 
    return b; 
    }
  
     var v=prompt("enter a number: ");
     
     v=fib(v);
     document.querySelector(".o-3").innerHTML=v;
    
    }

    function forlp(){
        var i;
        var n=prompt("enter a number: ");
        document.querySelector(".o-3").innerHTML =" ";
        for(i=1;i<=10;i++){
            document.querySelector(".o-3").innerHTML +=n+" X "+i+" = "+n*i+'<br>';
        }
    }
    function lpcntrl(){
        document.querySelector(".o-3").innerHTML =" ";

        document.querySelector(".o-3").innerHTML +="Entering the loop!<br />";
        outerloop:        // This is the label name         
        for (var i = 0; i < 5; i++) {
           document.querySelector(".o-3").innerHTML +="Outerloop: " + i + "<br />";
           innerloop:
           for (var j = 0; j < 5; j++) {
              if (j > 3 ) break ;           // Quit the innermost loop
              if (i == 2) break innerloop;  // Do the same thing
              if (i == 4) break outerloop;  // Quit the outer loop
              document.querySelector(".o-3").innerHTML +="Innerloop: " + j + " <br />";
           }
        }        
        document.querySelector(".o-3").innerHTML +="Exiting the loop!<br /> ";
    }

// =========================event====================================
    document.querySelector('.b1').addEventListener('click',function(){
        document.querySelector('.event').classList.add('demo');

    })
    document.querySelector('.b2').addEventListener('click',function(){
        
        document.querySelector('.event').classList.remove('demo');
    })
//========================event=========================================


function WriteCookie() {
    if( document.myform.customer.value == "" ) {
       alert("Enter some value!");
       return;
    }
    cookievalue = escape(document.myform.customer.value) + ";";
    document.cookie = "name=" + cookievalue;
    document.querySelector(".o-4").innerHTML = ("Setting Cookies : " + "name=" + cookievalue );
 }


 function ReadCookie() {
    var allcookies = document.cookie;
    document.querySelector(".o-4").innerHTML +="All Cookies : " + allcookies ;
    
    // Get all the cookies pairs in an array
    cookiearray = allcookies.split(';');
    
    // Now take key value pair out of this array
    for(var i=0; i<cookiearray.length; i++) {
       name = cookiearray[i].split('=')[0];
       value = cookiearray[i].split('=')[1];
       document.querySelector(".o-4").innerHTML +="Key is : " + name + " and Value is : " + value;
    }
 }

 function coki(){
    document.getElementById("frm").style.display='block';
    document.querySelector(".o-4").style.display="none";
 }

function obj(){
    var person=function(firstname,lastname,age){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
        this.full_obj=function() {
            return this.firstname+" "+this.lastname+""+this.age;
        }
    }
    
    person.prototype.p_obj=function(){
        return "Name: "+this.firstname+" "+this.lastname+"<br>Age: "+this.age;
    }
    
    var Rubel=new person('Rubel','Hossain',21);

    document.getElementById("frm").style.display='none';
    document.querySelector(".o-4").style.display="block";
    document.querySelector(".o-4").innerHTML=Rubel.p_obj();
}
function arr(){
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
  fruits.push("Kiwi");
  document.getElementById("demo").innerHTML = fruits;
}
}




function arr(){
    document.getElementById("frm").style.display='none';
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.querySelector(".o-4").innerHTML = fruits+'<button class="btn btn-dark" id="add" onclick="addel()">add</button>';

function addel() {
  fruits.unshift("Lemon");
  document.querySelector(".o-4").innerHTML = fruits;
}
}