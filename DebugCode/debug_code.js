function performOperation() {
// Get user input from input fields
let num1 = parseInt(document.getElementById('input1').value);
let num2 = parseInt(document.getElementById('input2').value);
// Check if inputs are valid numbers
if (!isNaN(num1) && !isNaN(num2)) {
// Perform the operation
    operations(num1, num2);
    
            } else {
                displayResult('Please enter valid numbers');
            }
        }

        function operations(a, b) {
            // Introduce a debugger statement to pause execution
            debugger;
            var sum =a+b;
            var mul= a*b;
            var div=a % b;
            displayResult(sum,mul,div); 
            
        }

        function displayResult(sum,mul,div) {
            // Display the result in the paragraph element
            const additionElement = document.getElementById('addition');
            const multiplicationElement = document.getElementById('multiplication');
            const divisionElement = document.getElementById('division');
            additionElement.textContent = `The result of addition is: ${sum}`;
            multiplicationElement.textContent = `The result of multiplication is: ${mul}`;
            divisionElement.textContent = `The result of division is: ${div}`;

        }
    