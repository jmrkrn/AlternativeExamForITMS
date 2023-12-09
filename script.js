
// Function implementations

function factorial(n) {
    if (n == 0 || n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function permutation(n, r) {
    return factorial(n) / factorial(n - r);
}

function combination(n, r) {
    return permutation(n, r) / factorial(r);
}

function lucasSequence(n) {
    if (n == 0) {
        return 2;
    } else if (n == 1) {
        return 1;
    } else {
        return lucasSequence(n - 1) + lucasSequence(n - 2);
    }
}

function fibonacciSequence(n) {
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else {
        return fibonacciSequence(n - 1) + fibonacciSequence(n - 2);
    }
}

function tribonacciSequence(n) {
    if (n == 0) {
        return 0;
    } else if (n == 1 || n == 2) {
        return 1;
    } else {
        return tribonacciSequence(n - 1) + tribonacciSequence(n - 2) + tribonacciSequence(n - 3);
    }
}

function showSubMenu(subMenu) {
    document.getElementById('permutation').style.display = 'none';
    document.getElementById('sequence').style.display = 'none';
    document.getElementById('factorial').style.display = 'none';
    document.getElementById('surprise').style.display = 'none';

    document.getElementById(subMenu).style.display = 'block';
}

function computePermutation() {
    var n = document.getElementById('n').value;
    var r = document.getElementById('r').value;
    console.log('n:', n, 'r:', r);  // Check if values are correctly retrieved
    var result = permutation(parseInt(n), parseInt(r));
    console.log('Result:', result);  // Check the result
    document.getElementById('permutationResult').innerHTML = '<strong>Permutation:</strong> ' + result;
}

function computeCombination() {
    var n = document.getElementById('n').value;
    var r = document.getElementById('r').value;
    var result = combination(parseInt(n), parseInt(r));
    document.getElementById('combinationResult').innerHTML = '<strong>Combination:</strong> ' + result;
}

function computeSequence() {
    var sequenceType = document.getElementById('sequenceType').value;
    var n = document.getElementById('nSequence').value;
    var result;

    switch (sequenceType) {
        case 'lucas':
            result = lucasSequence(parseInt(n));
            break;
        case 'fibonacci':
            result = fibonacciSequence(parseInt(n));
            break;
        case 'tribonacci':
            result = tribonacciSequence(parseInt(n));
            break;
        default:
            result = 'Invalid sequence type.';
    }

    document.getElementById('sequenceResult').innerHTML = '<strong>' + sequenceType + ' Sequence:</strong> ' + result;
}

function computeFactorial() {
    var num = document.getElementById('numFactorial').value;
    var result = factorial(parseInt(num));

    document.getElementById('factorialResult').innerHTML =
        '<strong>Factorial Calculation Steps:</strong> ' + num + '! = ' + result;
}

var confetti = window.confetti.create();

function displaySurprise() {
    var surpriseResult = document.getElementById('surpriseResult');
    surpriseResult.innerHTML = '<strong>Surprise:</strong> The best ma\'am Dhiwata, goddess, of all Mathematicians!';

    // Add flashy class
    surpriseResult.classList.add('flashy');

    // Trigger confetti animation
    confetti();
}

// Call displaySurprise when the "Surprise" button is clicked
document.getElementById('surpriseButton').addEventListener('click', displaySurprise);

// Call displaySurprise when the page is loaded to hide the text initially
document.addEventListener('DOMContentLoaded', function() {
    displaySurprise();

    // Optionally, you can remove the text after a few seconds (adjust the duration as needed)
    setTimeout(function() {
        document.getElementById('surpriseResult').innerHTML = '';
    }, 5000);
});