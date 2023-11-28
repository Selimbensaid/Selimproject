
$(document).ready(function() {
    let hasAnswered = false

    function checkAnswer() {
        if (hasAnswered) {
            alert("Sorry, game over for the fallen ones. Ghosts don't get retries.")
            return
        }

        const userInput = $('#userInput').val();
        if (userInput && parseInt(userInput) === 78) {
            alert('Congratulations! You survived!')
            window.location.href = '2ndPuzzle.html'
        } else {
            alert('I guess you decided to take a nap... permanently.')
        }

        hasAnswered = true
    }

    $('#question button').on('click', function() {
        checkAnswer()
    })
})

/////////This jQuery script manages a quiz scenario. It checks if the user has already answered; if not, it compares their input to the correct answer (78).
////////It provides appropriate messages for correct and incorrect answers, allowing only one attempt. If the user tries again, it informs them it's game over.