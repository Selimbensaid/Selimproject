
$(document).ready(function() {
    let hasAnswered = false

    function checkAnswer() {
        if (hasAnswered) {
            alert("Sorry, game over for the fallen ones. Ghosts don't get retries.")
            return
        }

        const userAnswer = $('#user-answer').val().toLowerCase()
        const correctAnswer = '78,24,6,2'

        if (userAnswer === correctAnswer) {
            alert('Congrats! The room tried to hold you captive, but your brilliance shattered its plans.')
            window.location.href = '3rdPuzzle.html'
        } else {
            alert('They say practice makes perfect. In your case, it just makes for more laughs.')
        }

        hasAnswered = true
    }

    $('#checkButton').on('click', function() {
        checkAnswer()
    })

    $('#submit-button').on('click', function() {
        checkAnswer()
    })
})


/////////This jQuery script handles another quiz scenario. It checks if the user has answered; if not, it compares their lowercase input to the correct answer ('78,24,6,2')
//////// It provides appropriate messages for correct and incorrect answers and allows only one attempt. If the user tries again, it informs them it's game over for them.