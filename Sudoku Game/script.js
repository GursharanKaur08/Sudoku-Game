var arr = [[], [], [], [], [], [], [], [], []]
var temp = [[], [], [], [], [], [], [], [], []]

for (var i = 0; i < 9; i++) 
{   for (var j = 0; j < 9; j++) 
    {   
        arr[i][j] = document.getElementById(i * 9 + j);
    }
}

function initializeTemp(temp) 
{   for (var i = 0; i < 9; i++) 
    {   for (var j = 0; j < 9; j++) 
        {
            temp[i][j] = false;
        }
    }
}

function setTemp(board, temp) 
{   for (var i = 0; i < 9; i++) 
    {   for (var j = 0; j < 9; j++) 
        {   if (board[i][j] != 0) 
            {
                temp[i][j] = true;
            }

        }
    }
}

function setColor(temp) 
{   for (var i = 0; i < 9; i++) 
    {   for (var j = 0; j < 9; j++) 
        {   if (temp[i][j] == true) 
            {
                arr[i][j].style.color = "#DC3545";
            }
        }
    }
}

function resetColor() 
{   for (var i = 0; i < 9; i++) 
    {   for (var j = 0; j < 9; j++) 
        {
            arr[i][j].style.color = "green";
        }
    }
}

var board = [[], [], [], [], [], [], [], [], []]

let button = document.getElementById('generate-sudoku')
let solve = document.getElementById('solve')

console.log(arr)
function changeBoard(board) 
{   for (var i = 0; i < 9; i++) 
    {   for (var j = 0; j < 9; j++) 
        {   if (board[i][j] != 0) 
            {
                arr[i][j].innerText = board[i][j]
            }
            else
                arr[i][j].innerText = ''
        }
    }
}
