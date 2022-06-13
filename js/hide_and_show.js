const questions = document.querySelectorAll('.questions')
const arrow = document.querySelectorAll('.arrow')


// Iterate on all questions
questions.forEach(myquestion => {
    myquestion.addEventListener('toggle', (e) => {
     
                if (myquestion.open) {
            
                        myquestion.classList.add('makequestionsbolder')
                        
                     
                        questions.forEach(myquestion => {
                            // If one of my questions is not targeted by the event "toggle" and it's gonna be open  then close others 
                            if (myquestion != e.target && myquestion.open) {
                                myquestion.open = false;
                                myquestion.classList.remove('makequestionsbolder')             
                            }

                        });
                }

     
    });

});