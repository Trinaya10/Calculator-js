document.addEventListener('DOMContentLoaded', function() {
    const resultInput = document.querySelector('input[name="result"]');
    
    // Function to handle key press events
    function handleKeyPress(event) {
        const keyPressed = event.key;
        const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', 'Backspace', 'Delete', 'Enter'];
        
        // If the pressed key is not in the allowedKeys array and it's not a number key, show alert
        if (!allowedKeys.includes(keyPressed) && isNaN(parseInt(keyPressed))) {
            event.preventDefault(); // Prevent the default action (e.g., typing the key into the input)
            alert('Only numbers are allowed!');
        }
    }

    // Add event listener for keydown event
    document.addEventListener('keydown', handleKeyPress);

    // Function to handle keyup event
    function handleKeyUp(event) {
        const keyPressed = event.key;

        // If the pressed key is "Enter", evaluate the expression
        if (keyPressed === 'Enter') {
            resultInput.value = eval(resultInput.value);
        }
    }

    // Add event listener for keyup event
    document.addEventListener('keyup', handleKeyUp);
});
