var playerTurn = 1;
var playerOneScore = 0;
var playerTwoScore = 0;
var buttons = [
    ["-", "-", "-"]
    ["-", "-", "-"]
    ["-", "-", "-"]
]


function setShape(x, idName) // Takes in the button and it's idName and changes it to the corresponding player's shape
{
    console.log(x.innerHTML, idName)

    if (playerTurn == 1)
    {
        x.innerHTML = "X"

        if (idName == "1")
        {buttons[0][0] == "X"}

        else if (idName == "2")
        {buttons[0][1] == "X"}
        
        else if (idName == "3")
        {buttons[0][2] == "X"}

        else if (idName == "4")
        {buttons[1][0] == "X"}

        else if (idName == "5")
        {buttons[1][1] == "X"}

        else if (idName == "6")
        {buttons[1][2] == "X"}

        else if (idName == "7")
        {buttons[2][0] == "X"}

        else if (idName == "8")
        {buttons[2][1] == "X"}

        else if (idName == "9")
        {buttons[2][2] == "X"}

        playerTurn = 2;
    }

    else if (playerTurn == 2)
    {
        x.innerHTML = "O"

        if (idName == "1")
        {buttons[0][0] == "O"}

        else if (idName == "2")
        {buttons[0][1] == "O"}
        
        else if (idName == "3")
        {buttons[0][2] == "O"}

        else if (idName == "4")
        {buttons[1][0] == "O"}

        else if (idName == "5")
        {buttons[1][1] == "O"}

        else if (idName == "6")
        {buttons[1][2] == "O"}

        else if (idName == "7")
        {buttons[2][0] == "O"}

        else if (idName == "8")
        {buttons[2][1] == "O"}

        else if (idName == "9")
        {buttons[2][2] == "O"}

        playerTurn = 1
    }
    
    check(idName)
}

function check(idName) // Checks if there are any tic tac toes
{
    console.log(buttons)
    
    // Checks row 1 horizontally
    if ((buttons[0][0] == buttons[0][1]) && (buttons[0][1] == buttons[0][2]))
    {
        console.log(document.getElementById(idName).innerHTML)
        if (document.getElementById(idName).innerHTML == "X")
        {
            playerOneScore++;
            resetButtons()
        }

        else
        {
            playerTwoScore++;
            resetButtons()
        }
    }

    // Checks row 2 horizontally
    else if ((buttons[1][0] == buttons[1][1]) && (buttons[1][1] == buttons[1][2]))
    {
        console.log(document.getElementById(idName).innerHTML)
        if (document.getElementById(idName).innerHTML == "X")
        {
            playerOneScore++;
            resetButtons()
        }

        else
        {
            playerTwoScore++;
            resetButtons()
        }
    }

    // Checks row 3 horizontally
    else if ((buttons[2][0] == buttons[2][1]) && (buttons[2][1] == buttons[2][2]))
    {
        console.log(document.getElementById(idName).innerHTML)
        if (document.getElementById(idName).innerHTML == "X")
        {
            playerOneScore++;
            resetButtons()
        }

        else
        {
            playerTwoScore++;
            resetButtons()
        }
    }

    // Checks column 1 vertically
    else if ((buttons[0][0] == buttons[1][0]) && (buttons[1][0] == buttons[2][0]))
    {
        console.log(document.getElementById(idName).innerHTML)
        if (document.getElementById(idName).innerHTML == "X")
        {
            playerOneScore++;
            resetButtons()
        }

        else
        {
            playerTwoScore++;
            resetButtons()
        }
    }

    // Checks column 2 vertically
    else if ((buttons[0][1] == buttons[1][1]) && (buttons[1][1] == buttons[2][1]))
    {
        console.log(document.getElementById(idName).innerHTML)
        if (document.getElementById(idName).innerHTML == "X")
        {
            playerOneScore++;
            resetButtons()
        }

        else
        {
            playerTwoScore++;
            resetButtons()
        }
    }

    // Checks column 3 vertically
    else if ((buttons[0][2] == buttons[1][2]) && (buttons[1][2] == buttons[2][2]))
    {
        console.log(document.getElementById(idName).innerHTML)
        if (document.getElementById(idName).innerHTML == "X")
        {
            playerOneScore++;
            resetButtons()
        }

        else
        {
            playerTwoScore++;
            resetButtons()
        }
    }

    // Checks top left diagonally
    else if ((buttons[0][0] == buttons[1][1]) && (buttons[1][1] == buttons[2][2]))
    {
        console.log(document.getElementById(idName).innerHTML)
        if (document.getElementById(idName).innerHTML == "X")
        {
            playerOneScore++;
            resetButtons()
        }

        else
        {
            playerTwoScore++;
            resetButtons()
        }
    }

    // Checks top right diagonally
    else if ((buttons[0][2] == buttons[1][1]) && (buttons[1][1] == buttons[2][0]))
    {
        console.log(document.getElementById(idName).innerHTML)
        if (document.getElementById(idName).innerHTML == "X")
        {
            playerOneScore++;
            resetButtons()
        }

        else
        {
            playerTwoScore++;
            resetButtons()
        }
    }
}

function resetButtons() // Sets all buttons back to "-" to signify emptyness
{
    console.log("RESETTING BUTTONS")
    buttons[0][0] = "-"
    buttons[0][1] = "-"
    buttons[0][2] = "-"
    buttons[1][0] == "-"
    buttons[1][1] == "-"
    buttons[1][2] == "-"
    buttons[2][0] == "-"
    buttons[2][1] == "-"
    buttons[2][2] == "-"
}