import './style.css'
let teamOneScore = 0;
let teamTwoScore = 0; 

let teamOneNumberHeader = document.querySelector('h3.team-one')
let teamTwoNumberHeader = document.querySelector('h3.team-two')

let teamOneName = document.querySelector('h2.team-one')
let teamTwoName = document.querySelector('h2.team-two')

let welcomeHeader = document.querySelector('h1')

//Selects all the selected elements in the DOM
const sections = document.querySelectorAll('section')

function mathScores(event: MouseEvent) {
    const iconClickedOn = event.target;

    //Checks if either team is already at 21 to stop counter
    if(teamOneScore === 21 || teamTwoScore === 21) {
        console.log('Nope')
        return
    }

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

        //Constantly checks to see if it should congratulate teams
        victoryScreech()
    }
}

function changeName(event: Event) {
    const inputTyped = event.target;

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

function resetScores() {
    teamOneScore = 0
    teamTwoScore = 0

    if(teamOneNumberHeader instanceof HTMLHeadingElement) {
        teamOneNumberHeader.textContent = `${teamOneScore}`
    }

    if(teamTwoNumberHeader instanceof HTMLHeadingElement) {
        teamTwoNumberHeader.textContent = `${teamTwoScore}`
    }

    if(welcomeHeader instanceof HTMLHeadingElement) {
        welcomeHeader.textContent = 'Welcome to my Scoreboard!'
    }
}

function victoryScreech() {
    if(teamOneScore === 21) {
        if(welcomeHeader instanceof HTMLHeadingElement) {
            welcomeHeader.textContent = `🎉 Congratulations ${teamOneName?.innerHTML}! 🎉 `
        }
    }
    else if(teamTwoScore === 21) {
        if(welcomeHeader instanceof HTMLHeadingElement) {
            welcomeHeader.textContent = `🎉 Congratulations ${teamTwoName?.innerHTML}! 🎉 `
        }
    }
}

//When an icon is clicked on, it will add/ subtract scores as needed
sections.forEach((icon) => icon.addEventListener('click', mathScores))

//When either input form is used, will change their names accordingly
sections.forEach((teamName => teamName.addEventListener('input', changeName)))

//When reset button is clicked, will reset all scores
document.getElementById('reset-button')?.addEventListener('click', resetScores)
