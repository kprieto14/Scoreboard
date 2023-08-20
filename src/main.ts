import './style.css'
let teamOneScore = 0;
let teamTwoScore = 0; 

//Selects all the selected elements in the DOM
const icons = document.querySelectorAll('i')
const teamNameForm = document.querySelectorAll('input')

function mathScores(event: MouseEvent) {
    const iconClickedOn = event.target;

    let teamOneNumberHeader = document.querySelector('h3.team-one')
    let teamTwoNumberHeader = document.querySelector('h3.team-two')

    //Double checks the event clicked on is not NULL
    if(iconClickedOn instanceof HTMLElement) {
        //First will check if it needs to add or subtract 
        if (iconClickedOn.classList.contains('add')) {
            //Checks for team one or two
            if (iconClickedOn.classList.contains('team-one') && teamOneScore < 21) {
                teamOneScore++
            }
            else if (iconClickedOn.classList.contains('team-two') && teamTwoScore < 21) {
                teamTwoScore++
            }
        }
        //Subtract statement
        else if (iconClickedOn.classList.contains('subtract')) {
            //Will not add if score is already at 0
            if (iconClickedOn.classList.contains('team-one') && teamOneScore > 0) {
                teamOneScore--
            }
            else if (iconClickedOn.classList.contains('team-two') && teamTwoScore > 0) {
                teamTwoScore--
            }
        }

        if(teamOneNumberHeader instanceof HTMLHeadingElement) {
            teamOneNumberHeader.textContent = `${teamOneScore}`
        }

        if(teamTwoNumberHeader instanceof HTMLHeadingElement) {
            teamTwoNumberHeader.textContent = `${teamTwoScore}`
        }
    }
}

function changeName(event: Event) {
    const inputTyped = event.target;

    let teamOneName = document.querySelector('h2.team-one')
    let teamTwoName = document.querySelector('h2.team-two')

    if(inputTyped instanceof HTMLInputElement) {
        if(inputTyped.classList.contains('team-one')) {
            if(teamOneName instanceof HTMLHeadingElement) {
                teamOneName.textContent = inputTyped.value
            }
        }
        else if(inputTyped.classList.contains('team-two')) {
            if(teamTwoName instanceof HTMLHeadingElement) {
                teamTwoName.textContent = inputTyped.value
            }
        }
    }
}

//When an icon is clicked on, it will add/ subtract scores as needed
icons.forEach((icon) => icon.addEventListener('click', mathScores))

//When either input form is used, will change their names accordingly
teamNameForm.forEach((teamName => teamName.addEventListener('input', changeName)))
