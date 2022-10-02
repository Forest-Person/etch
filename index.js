CreateGrid()

function CreateGrid() {    //Function which creates a grid and appends it to the gridcontainer in the body

  gridCont = document.querySelectorAll('.gridContainer')

  gridCont.forEach((item) => item.removeChild(item.firstChild))

  grid = document.createElement('div')
  grid.className = 'grid'
  
 
let columns = prompt('What size of grid do you want?')
let rows = columns


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

gridContainer.append(grid)  //Grid ^^^ has been created and appened to the DOM. 

ToggleGridBlack()

}


newGrid = document.querySelector('.newGrid')  

newGrid.addEventListener('click', CreateGrid)  //Creates an event listener for the make new grid button that creates a new grid.


eraseGridButton = document.querySelector('.eraseGrid') 


eraseGridButton.addEventListener('click' , EraseGrid)//erases the grid using the erase grid function


function EraseGrid(){
  let row = document.querySelectorAll('.row');  //"erases" grid by making the backround of all .row divs white
  row.forEach((item) =>
  
  
  item.style.background = 'white'
  )
}

 
function ToggleGridBlack() {    //function run in the creategrid function to create a new grid with black pencil with event listener

  let row = document.querySelectorAll('.row');

  row.forEach((item) =>
    
    item.addEventListener('mouseover', TogglePencilBlack(item)
    
  )
  )
  
}



function TogglePencilBlack(item) {     //Function added to eventlistener in togglegridblack function
  return ()=>item.style.background = 'black'

}