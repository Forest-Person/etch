let isDrawing = false   //boolen flag and window event listeners to determine when the mouse is down or not to implement in later funcitons
document.body.addEventListener('mousedown',()=>
isDrawing = true)

document.body.addEventListener('mouseup', ()=>
isDrawing = false
)
document.body.addEventListener('mouseover',()=>console.log(isDrawing))

CreateGrid()  //first grid is created on page load with user specification



function CreateGrid() {    //Function which creates a grid and appends it to the gridcontainer in the body

  gridCont = document.querySelectorAll('.gridContainer')

  gridCont.forEach((item) => item.removeChild(item.firstChild))

  grid = document.createElement('div')
  grid.className = 'grid'
  
 
let columns = prompt('What size of grid do you want?')

if (columns > 100) {
  columns = prompt('No more than 100 Please!')
}
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



}


newGrid = document.querySelector('.newGrid')  
newGrid.addEventListener('click', CreateGrid)  //Creates an event listener for the make new grid button that creates a new grid.


eraseGridButton = document.querySelector('.eraseGrid') 
eraseGridButton.addEventListener('click' , EraseGrid)//erases the grid using the erase grid function for the earase grid button


function EraseGrid(){
  let row = document.querySelectorAll('.row');  //"erases" grid by making the backround of all .row divs white
  row.forEach((item) =>
  
  
  item.style.backgroundColor = 'white'
  )
}

 
function ToggleGridBlack(event) {    //function run in the creategrid function to create a new grid with black pencil with event listener

  
  let row = document.querySelectorAll('.row');
  
  row.forEach((item) =>{
    

    item.addEventListener('mouseover',TogglePencilBlack(item)
  
    
    
)})
  
}



let pencilClass = document.querySelector('.usePencil') //Adds event listener for use pencil button that will use the togglegridblack funciton.
pencilClass.addEventListener('mousedown', ToggleGridBlack)


function TogglePencilBlack(item) {     //Function added to eventlistener in togglegridblack function
   
  
   return ()=> {if(isDrawing){item.style.backgroundColor = 'black'}}}
   

  


function ToggleGridRainbow() {

  //1. Remove eventlistener togglegridblack on .row class.
  //2. Add new eventlistener for rainbow pencil button that activates new event listenr for .row class on click.
  //3. Add eventlistener for the .row class including the togglerainbowpencil function.

  let row = document.querySelectorAll('.row');

  
  row.forEach((item) =>
    
  item.addEventListener('mouseover', TogglePencilRainbow(item)
 
))

  
}

let rainbowPencil = document.querySelector('.rainbow')  // Eventlistenr on make rainbow pencil mode button

rainbowPencil.addEventListener('click', ToggleGridRainbow)



function TogglePencilRainbow(item) {   //creates randomnumber for rgb values and takes the row nodelist item as input
  const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  const rgb = `rgb(${r},${g},${b})`; // Collect all to a css color string


  console.log(rgb)
 
 return ()=> {if(isDrawing){item.style.backgroundColor = rgb}}}



let eraser = document.querySelector('.eraser')
eraser.addEventListener('click', EraserTip)

function EraserTip() {
let row = document.querySelectorAll('.row')

row.forEach((item)=>
item.addEventListener('mouseover', EraseIt(item))

)}


function EraseIt(item) {     //Function added to eventlistener in togglegridblack function
   
  
  return ()=> {if(isDrawing){item.style.backgroundColor = 'white'}}}