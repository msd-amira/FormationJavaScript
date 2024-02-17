// Define a function named TestFunction that takes some parameters
function TestFunction(param1,param2,....)
{

}

// Call TestFunction
TestFunction(param1,param2,....);

//***EXERCICE ***

//***EXERCICE 2***

//***EXERCICE 3***
function testInt(number) {
  if (!Number.isInteger(number)) {
    console.log("Number is not an integer.");
  }
  else
  {
      console.log(number + " is an integer.");
  }
}


testInt(3);
testInt(3.14);
testInt("hello");

//***EXERCICE 4***
function checkArray(arr) {
  if (arr.length === 0) {
      throw new Error("Array is empty.");
  }
  else
  {
      console.log("Array is not empty.");
  }
}

const myArray = [1,3,5];
checkArray(myArray);

//***EXERCICE 5***
function split(String) {
  return string.split('\n');
}


const string = `This is line 1.
This is line 2.
And this is line 3.`;

const lines = split(string);
console.log(lines);

//***EXERCICE 6***
const Color = ["Red", "Green", "White", "Black"];


const result1 = Color.join(',');


console.log(result1);

//METHOD n2
let result2 = Color[0];
for (let i=1; i<Color.length; i++){
    result2 = result2 + ',' + Color[i];
}

console.log(result2);

//***EXERCICE 7***
function checkArray(input) {
  return Array.isArray(input);
}

const userInput = prompt("Enter a value to test if it's an array:");
console.log(checkArray(userInput));

//***EXERCICE 8***
function popDouble(array)
{
    const array2 = ["Ali"];
    for (let i=0; i<array.length;i++){
        if (verif(array[i])){
            array2.push(array[i]);
        }
    return array2;
}

function verif(index){
    let compteur = 1;
    for (let i=0; i<array.length;i++)
    {
        if (array[i] == index){
            compteur += 1;
        }
    }
    if (compteur > 1){
        return false;
    }
    else{
        return true;
    }
}

const array1 = ["Ali", "Elyes", "Ahmad", "Kacem", "Elyes", "Mazen"];
popDouble(array1);
console.log(array2);


//***EXERCICE 9***

//***EXERCICE 10***
