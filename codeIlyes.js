// Define a function named TestFunction that takes some parameters
function TestFunction(param1,param2,....)
{

}

// Call TestFunction
TestFunction(param1,param2,....);


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
