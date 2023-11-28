$(document).ready(function() {
    $('#submit-button').on('click', function() {
        checkAnswer()
    })

    function checkAnswer() {
        const userAnswer = $('#user-answer').val().toLowerCase()
        const correctAnswer = 'echo'

        if (userAnswer === correctAnswer) {
            alert('Congrats! The room tried to hold you captive, but your brilliance shattered its plans.')
            window.location.href = 'Ending.html'
        } else {
            alert('They say practice makes perfect. In your case, it just makes for more laughs.')
        }
    }
})


//////This jQuery script handles another quiz scenario. When the user clicks the "Submit" button, it checks if the lowercase user input ('#user-answer') matches the correct answer ('echo')
/////If correct, it congratulates the user and redirects them to the ending page; otherwise, it provides a message about practicing for more laughs.