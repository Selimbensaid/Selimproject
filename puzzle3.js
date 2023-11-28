$(document).ready(function() {
    $('#submit-button').on('click', function() {
        checkAnswer()
    })

    function checkAnswer() {
        const userAnswer = $('#user-answer').val().toLowerCase()
        const correctAnswer = 'air'

        if (userAnswer === correctAnswer) {
            alert('Congrats! The room tried to hold you captive, but your brilliance shattered its plans.')
            window.location.href = '4thPuzzle.html'
        } else {
            alert('They say practice makes perfect. In your case, it just makes for more laughs.')
        }
    }
})


//////////This jQuery script manages a quiz where the user clicks a "Submit" button to check their answer. It compares the lowercase user input ('#user-answer') to the correct answer ('air')
//////////If correct, it congratulates the user and redirects them to the next puzzle page; otherwise, it provides a message about practicing for more laughs.





