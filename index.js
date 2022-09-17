let columns = 10
let rows = 10

grid = document.createElement('div')
grid.className = 'grid'

for (let i = 0; i <= columns; i++) {

  let column = document.createElement('div');
  column.className = 'column' 

  for (let j = 0; j <= rows; j ++) {

    let row = document.createElement('div');
    row.className = 'row' 
    row.textContent = 'item' 
    column.append(row )
  }
  grid.append(column)
  
}

document.body.append(grid)


