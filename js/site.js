//get the start and end values from the inputs
//Entry point AKA controller function
function getValues() {
  let startValue = document.getElementById("startValue").value;
  let endValue = document.getElementById("endValue").value;

  let startNumber = parseInt(startValue); //startNumber = 0
  //parseint forces the value to be an integer; this is because any info from html is text by default
  let endNumber = parseInt(endValue); //startNumber = 100

  if (Number.isInteger(startNumber) == true && Number.isInteger(endNumber)) {

    // if they are valid numbers then proceed to next step

    let numberArray = generateNumbers(startNumber, endNumber);
  displayNumbers(numberArray);
  } else {
    //else, display an error and stop the js
    Swal.fire({
        icon: 'error',
        title: "Oops!",
        text: 'Please enter valid numbers for the start and end values.'
      });
  }
}

// generate the range of numbers to display
//Business/logic function
function generateNumbers(start, end) {
  let basketOfNumbers = [];

  //loop!
  for (let number = start; number <= end; number++) {
    basketOfNumbers.push(number);
  }

  return basketOfNumbers; // [0, 1, 2, 3, 4, 5...., 100]
}

//placing the generated numbers on the page AND BOLD even numbers
//View function
function displayNumbers(numbers) {
  let results = "";

  for (let index = 0; index < numbers.length; index = index + 1) {
    let currentNumber = numbers[index];

    if (currentNumber % 2 == 0) {
      results += `<tr><td class="evenNumber">${currentNumber}</td></tr>`;
    } else {
      results += `<tr><td>${currentNumber}</td></tr>`;
    }
  }

  let tableBody = document.getElementById("results");
  tableBody.innerHTML = results;
}
