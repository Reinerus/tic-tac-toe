var playerTurn = 1;
var playerOneScore = 0;
var playerTwoScore = 0;
var buttons = [
    [" ", " ", " "], 
    [" ", " ", " "],
    [" ", " ", " "]
]
var victoryFlag = false;

function setShape(x, idName) // Takes in the button and it's idName and changes it to the corresponding player's shape
{
    console.log("SETSHAPE:", x.innerHTML, idName)

    if (playerTurn == 1 && (x.innerHTML != "X" && x.innerHTML != "O") && (victoryFlag == false))
    {
        x.innerHTML = "X"

        if (idName == "1")
        {buttons[0][0] = "X"}

        else if (idName == "2")
        {buttons[0][1] = "X"}
        
        else if (idName == "3")
        {buttons[0][2] ="X"}

        else if (idName == "4")
        {buttons[1][0] = "X"}

        else if (idName == "5")
        {buttons[1][1] = "X"}

        else if (idName == "6")
        {buttons[1][2] = "X"}

        else if (idName == "7")
        {buttons[2][0] = "X"}

        else if (idName == "8")
        {buttons[2][1] = "X"}

        else if (idName == "9")
        {buttons[2][2] = "X"}

        playerTurn = 2;
    }

    else if (playerTurn == 2 && (x.innerHTML != "X" && x.innerHTML != "O") && (victoryFlag == false))
    {
        x.innerHTML = "O"

        if (idName == "1")
        {buttons[0][0] = "O"}

        else if (idName == "2")
        {buttons[0][1] = "O"}
        
        else if (idName == "3")
        {buttons[0][2] = "O"}

        else if (idName == "4")
        {buttons[1][0] = "O"}

        else if (idName == "5")
        {buttons[1][1] = "O"}

        else if (idName == "6")
        {buttons[1][2] = "O"}

        else if (idName == "7")
        {buttons[2][0] = "O"}

        else if (idName == "8")
        {buttons[2][1] = "O"}

        else if (idName == "9")
        {buttons[2][2] = "O"}

        playerTurn = 1
    }
    
    check(idName)
}

function check(idName) // Checks if there are any tic tac toes
{
    console.log("CHECK:", buttons)
    console.log("---------")
    
    // Checks row 1 horizontally
    if ((buttons[0][0] == buttons[0][1]) && (buttons[0][1] == buttons[0][2]) && (buttons[0][0] == "X" || buttons[0][0] == "O") && (victoryFlag == false))
    {
        console.log(document.getElementById(idName).innerHTML, "ROW 1")

        document.getElementById("1").style.backgroundColor = "green"
        document.getElementById("2").style.backgroundColor = "green"
        document.getElementById("3").style.backgroundColor = "green"

        if (document.getElementById(idName).innerHTML == "X")
        {
            document.getElementById("player1").innerHTML = Number(document.getElementById("player1").innerHTML) + 1;
        }

        else
        {
            document.getElementById("player2").innerHTML = Number(document.getElementById("player2").innerHTML) + 1;
        }

        victoryFlag = true;
    }

    // Checks row 2 horizontally
    else if ((buttons[1][0] == buttons[1][1]) && (buttons[1][1] == buttons[1][2]) && (buttons[1][0] == "X" || buttons[1][0] == "O") && (victoryFlag == false))
    {
        console.log(document.getElementById(idName).innerHTML, "ROW 2")

        document.getElementById("4").style.backgroundColor = "green"
        document.getElementById("5").style.backgroundColor = "green"
        document.getElementById("6").style.backgroundColor = "green"

        if (document.getElementById(idName).innerHTML == "X")
        {
            document.getElementById("player1").innerHTML = Number(document.getElementById("player1").innerHTML) + 1;
        }

        else
        {
            document.getElementById("player2").innerHTML = Number(document.getElementById("player2").innerHTML) + 1;
        }

        victoryFlag = true;
    }

    // Checks row 3 horizontally
    else if ((buttons[2][0] == buttons[2][1]) && (buttons[2][1] == buttons[2][2]) && (buttons[2][0] == "X" || buttons[2][0] == "O") && (victoryFlag == false))
    {
        console.log(document.getElementById(idName).innerHTML, "ROW 3")

        document.getElementById("7").style.backgroundColor = "green"
        document.getElementById("8").style.backgroundColor = "green"
        document.getElementById("9").style.backgroundColor = "green"

        if (document.getElementById(idName).innerHTML == "X")
        {
            document.getElementById("player1").innerHTML = Number(document.getElementById("player1").innerHTML) + 1;
        }

        else
        {
            document.getElementById("player2").innerHTML = Number(document.getElementById("player2").innerHTML) + 1;
        }

        victoryFlag = true;
    }

    // Checks column 1 vertically
    else if ((buttons[0][0] == buttons[1][0]) && (buttons[1][0] == buttons[2][0]) && (buttons[0][0] == "X" || buttons[0][0] == "O") && (victoryFlag == false))
    {
        console.log(document.getElementById(idName).innerHTML, "VERTICAL 1")

        document.getElementById("1").style.backgroundColor = "green"
        document.getElementById("4").style.backgroundColor = "green"
        document.getElementById("7").style.backgroundColor = "green"

        if (document.getElementById(idName).innerHTML == "X")
        {
            document.getElementById("player1").innerHTML = Number(document.getElementById("player1").innerHTML) + 1;
        }

        else
        {
            document.getElementById("player2").innerHTML = Number(document.getElementById("player2").innerHTML) + 1;
        }

        victoryFlag = true;
    }

    // Checks column 2 vertically
    else if ((buttons[0][1] == buttons[1][1]) && (buttons[1][1] == buttons[2][1]) && (buttons[0][1] == "X" || buttons[0][1] == "O") && (victoryFlag == false))
    {
        console.log(document.getElementById(idName).innerHTML, "VERTICAL 2")

        document.getElementById("2").style.backgroundColor = "green"
        document.getElementById("5").style.backgroundColor = "green"
        document.getElementById("8").style.backgroundColor = "green"
        
        if (document.getElementById(idName).innerHTML == "X")
        {
            document.getElementById("player1").innerHTML = Number(document.getElementById("player1").innerHTML) + 1;
        }

        else
        {
            document.getElementById("player2").innerHTML = Number(document.getElementById("player2").innerHTML) + 1;
        }

        victoryFlag = true;
    }

    // Checks column 3 vertically
    else if ((buttons[0][2] == buttons[1][2]) && (buttons[1][2] == buttons[2][2]) && (buttons[0][2] == "X" || buttons[0][2] == "O") && (victoryFlag == false))
    {
        console.log(document.getElementById(idName).innerHTM, "VERTICAL 3")

        document.getElementById("3").style.backgroundColor = "green"
        document.getElementById("6").style.backgroundColor = "green"
        document.getElementById("9").style.backgroundColor = "green"

        if (document.getElementById(idName).innerHTML == "X")
        {
            document.getElementById("player1").innerHTML = Number(document.getElementById("player1").innerHTML) + 1;
        }

        else
        {
            document.getElementById("player2").innerHTML = Number(document.getElementById("player2").innerHTML) + 1;
        }

        victoryFlag = true;
    }

    // Checks top left diagonally
    else if ((buttons[0][0] == buttons[1][1]) && (buttons[1][1] == buttons[2][2]) && (buttons[0][0] == "X" || buttons[0][0] == "O") && (victoryFlag == false))
    {
        console.log(document.getElementById(idName).innerHTML, "LEFT DIAGONAL")

        document.getElementById("1").style.backgroundColor = "green"
        document.getElementById("5").style.backgroundColor = "green"
        document.getElementById("9").style.backgroundColor = "green"

        if (document.getElementById(idName).innerHTML == "X")
        {
            document.getElementById("player1").innerHTML = Number(document.getElementById("player1").innerHTML) + 1;
        }

        else
        {
            document.getElementById("player2").innerHTML = Number(document.getElementById("player2").innerHTML) + 1;
        }

        victoryFlag = true;
    }

    // Checks top right diagonally
    else if ((buttons[0][2] == buttons[1][1]) && (buttons[1][1] == buttons[2][0]) && (buttons[0][2] == "X" || buttons[0][2] == "O") && (victoryFlag == false))
    {
        console.log(document.getElementById(idName).innerHTML, "RIGHT DIAGONAL")

        document.getElementById("3").style.backgroundColor = "green"
        document.getElementById("5").style.backgroundColor = "green"
        document.getElementById("7").style.backgroundColor = "green"

        if (document.getElementById(idName).innerHTML == "X")
        {
            document.getElementById("player1").innerHTML = Number(document.getElementById("player1").innerHTML) + 1;
        }

        else
        {
            document.getElementById("player2").innerHTML = Number(document.getElementById("player2").innerHTML) + 1;
        }

        victoryFlag = true;
    }

    // Tiebreaker
    else if (allButtonsFilled())
    {
        console.log(document.getElementById("ties").innerHTML, "TIE")
        document.getElementById("ties").innerHTML = Number(document.getElementById("ties").innerHTML) + 1;
    }
}

function allButtonsFilled()
{

    if ((buttons[0][0] != " ") && (buttons[0][1] != " ") && (buttons[0][2] != " ") && (buttons[1][0] != " ") && (buttons[1][1] != " ") && (buttons[1][2] != " ") && (buttons[2][0] != " ") && (buttons[2][1] != " ") && (buttons[2][2] != " "))
    {
        return true;
    }

    else
    {
        return false;
    }
}

function resetButtons() // Sets all buttons back to "-" to signify emptyness
{
    console.log("RESETTING BUTTONS")
    for (let i = 0; i < document.body.getElementsByTagName("button").length; i++)
    {
        //console.log("Setting", document.body.getElementsByTagName("button")[i].innerHTML, "to ''" )
        document.body.getElementsByTagName("button")[i].innerHTML = ""
        document.body.getElementsByTagName("button")[i].backgroundColor = "rgb(174, 179, 174)"
    }
    buttons[0][0] = " "
    buttons[0][1] = " "
    buttons[0][2] = " "
    buttons[1][0] = " "
    buttons[1][1] = " "
    buttons[1][2] = " "
    buttons[2][0] = " "
    buttons[2][1] = " "
    buttons[2][2] = " "
    //console.log("FINAL BUTTONS:", buttons)

    victoryFlag = false;
}