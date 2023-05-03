class EightQueens{
constructor()
{
this.board=Array(9).fill().map(() => Array(9).fill(0));
this.id = [
    ["0", "1", "2", "3", "4", "5", "6", "7"],
    ["8","9", "10", "11", "12", "13", "14", "15"],
    ["16","17","18", "19", "20", "21", "22", "23"],
    ["24","25","26","27", "28", "29", "30", "31"],
    ["32", "33", "34", "35", "36", "37", "38", "39"],
    ["40","41", "42", "43", "44", "45", "46", "47"],
    ["48", "49", "50", "51", "52", "53", "54", "55"],
    ["56","57","58","59","60","61","62","63"]
]
}
Drawer()
{
   for(let i=0;i<8;i++)
   {
    for(let j=0;j<8;j++)
    {
        if(this.board[i][j]!=0)
        {
            const elem=document.getElementById(this.id[i][j]);
            elem.textContent='♛';
        }
    }
   }
}
Controller(inputArray)
{
let row=parseInt(inputArray[0]);
let col=parseInt(inputArray[1]);
//check for row
let row_bool=false;
let col_bool=false;
let diagonal_bool=false;
for(let i=0;i<8;i++)
{
    if(this.board[row][i]==1)
    {
        row_bool=true;
        break;
    }
}
for(let i=0;i<8;i++)
{
    if(this.board[i][col]==1)
    {
        col_bool=true;
        break;
    }
}
for(let i=0;i<8;i++)
{
    if(this.board[row][i]==1)
    {
        row_bool=true;
        break;
    }
}
for(let i=1;i<8 && i>=0;i++)
{
    for(let j=1;j<8 && j>=0;j++)
    {
        if(row+i<8 && row+i>=0 && col+i<8 && col+i>=0 && this.board[row+i][col+i]==1)
        {
       diagonal_bool=true;
       break;
        }
        else if(row+i<8 && row+i>=0 && col-i<8 && col-i>=0 && this.board[row+i][col-i]==1)
        {
            diagonal_bool=true;
            break;
        }
        else if(row-i<8 && row-i>=0 && col+i<8 && col+i>=0 && this.board[row-i][col+i]==1)
        {
            diagonal_bool=true;
            break;
        }
        else if(row-i<8 && row-i>=0 && col-i<8 && col-i>=0 && this.board[row-i][col-i]==1)
        {
            diagonal_bool=true;
            break;
        }
    }
    if(diagonal_bool)break;
}
if(row_bool || col_bool || diagonal_bool)
{
    alert('invalid move');
}
else{
    this.board[row][col]=1;
}
this.Drawer();
}
takeInput(){
const input=document.getElementById("input").value;
const inputArray=input.split(",");
this.Controller(inputArray);
}
}
let eightqueen=new EightQueens();