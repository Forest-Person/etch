/*
First a grid and grid class are created efore the loop is created , 
then a loop starts that creates the div for the column and a a class,
then a loop runs fiuve times appending the row which is created per loop to the column
finally the whole column and five rows are appended to the grid.
after the loop the grid is appened to the body of the dom.

Next we need to use query selector all and add event handlers which listen
for a click or touch event.
*/


let columns = 5
let rows = 5

grid = document.createElement('div')
grid.className = 'grid'

for (let i = 0; i <= columns; i++) {

  const column = document.createElement('div');
  column.className = 'column' 
                                                     
  for (let j = 0; j <= rows; j ++) {

    const row = document.createElement('div');
    row.className = 'row' 
    row.textContent = 'item' 
    column.append(row)
  }
  grid.append(column)
  
}

document.body.append(grid)




var row = document.querySelectorAll('.row');

row.forEach(function(item){
  item.addEventListener('mouseover', function(event){

   row[Array.from(row).indexOf(event.target)].classList.toggle('toggleBlue')
  })
})

function checkIndex(event){
  console.log(Array.from(row).indexOf(event.target))
  
  return Array.from(row).indexOf(event.target)
  
}

  


