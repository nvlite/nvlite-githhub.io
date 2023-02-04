
///FINDING DIAGONAL 

  
function findDiagonal(s){
    return Math.sqrt(2) * s;
}
 
// Driver Code
var S = 9;
 
document.write(findDiagonal(S).toFixed(6));

findDiagonal(s); 


///FINDING AREA OF TRIANGLE 


var side1 = 5; 
var side2 = 6; 
var side3 = 7; 
var s = (side1 + side2 + side3)/2;
var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
console.log(area);

/// FINDING CIRCUMFERENCE & SURFACE AREA 

function circle(radius)
{
    this.radius = radius;
  // area method
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    };
  // perimeter method
    this.perimeter = function ()
    {
        return 2*Math.PI*this.radius;
    };
}
var c = new circle(4);
console.log('Area =', c.area().toFixed(2));
console.log('perimeter =', c.perimeter().toFixed(2));

/// FINDING LARGER OF TWO INTEGERS

var num1 = 10;
var num2 = 5;
//num1 = window.prompt("Input the First integer", "0");
//num2 = window.prompt("Input the second integer", "0");
                                                 
if(parseInt(num1) > parseInt(num2)) 
  { 
  console.log(num1);
  }   
else
  if(parseInt(num2) > parseInt(num1)) 
  {
  console.log(num2);
  }                  
else
  {
   console.log(num1+ " and "+num2+ " are equal.");
  }


  // CHECKING IF A NUMBER IS EVEN OR ODD

  var num=10;
  if(num%2==0)
    console.log(num + " is an Even Number");
  else
    console.log(num + " is an Odd Number");



    
