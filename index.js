/*
First a grid and grid class are created efore the loop is created , 
then a loop starts that creates the div for the column and a a class,
then a loop runs fiuve times appending the row which is created per loop to the column
finally the whole column and five rows are appended to the grid.
after the loop the grid is appened to the body of the dom.

Next we need to use query selector all and add event handlers which listen
for a click or touch event.
*/





let columns = prompt('What size of grid do you want?')
let rows = columns

grid = document.createElement('div')
grid.className = 'grid'

for (let i = 0; i <= columns; i++) {

  const column = document.createElement('div');
  column.className = 'column' 
                                                     
  for (let j = 0; j <= rows; j ++) {

    const row = document.createElement('div');
    row.className = 'row' 
    
    column.append(row)
  }
  grid.append(column)
  
}
const gridContainer = document.querySelector('.gridContainer')
document.body.append(grid)




let row = document.querySelectorAll('.row');


row.forEach(

(item) => item.addEventListener('mouseover', 

(event) => row[Array.from(row).indexOf(event.target)].classList = 'toggleBlue'

)

)











  


