
//get the start and end values from the inputs
//Entry point AKA controller function
function getValues() {
    let startValue = document.getElementById('startValue').value;
    let endValue = document.getElementById('endValue').value;

    let startNumber = parseInt(startValue); //startNumber = 0
    //parseint forces the value to be an integer; this is because any info from html is text by default
    let endNumber = parseInt(endValue); //startNumber = 100

   let numberArray = generateNumbers(startNumber, endNumber);
   displayNumbers(numberArray);

}

// generate the range of numbers to display
//Business/logic function
function generateNumbers(start, end) {
    
    let basketOfNumbers = [];

    //loop!
    for (let number = start; number <= end; number = number + 1) {
        basketOfNumbers.push(number);
    }

    return basketOfNumbers; // [0, 1, 2, 3, 4, 5...., 100]
}

//placing the generated numbers on the page AND BOLD even numbers
//View function
function displayNumbers(numbers) { 
    let results = '';

    for (let index = 0; index < numbers.length; index = index + 1) {
        let currentNumber = numbers[index];

        results = results + `<tr><td>${currentNumber}</td></tr>`;
    }

    let tableBody = document.getElementById('results');
    tableBody.innerHTML = results;
}