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


document.querySelectorAll('.row').forEach(
  item => {
  
  item.addEventListener('click',
  
  () => {
  
  item.style.backgroundColor = 'blue'

})
})

