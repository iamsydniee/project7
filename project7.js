var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"
var drawing = false;
// utility function
function transformPoint(event) {
  var pt = screen.createSVGPoint()
  pt.x = event.x
  pt.y = event.y
  var mousept =  pt.matrixTransform(screen.getScreenCTM().inverse())
  return mousept
}

// Step 2: drawSquare and drawCircle functions
function drawSquare(xpos, ypos, size, color) {
  var newsquare = document.createElementNS(namespace, "rect")
 newsquare.setAttribute("x", xpos)
 newsquare.setAttribute("y", ypos)
 newsquare.setAttribute("height", size)
 newsquare.setAttribute("width", size)
 newsquare.setAttribute("fill", color)
 screen.appendChild(newsquare)
}

function drawCircle(xpos, ypos, size, color) {
 var newcircle = document.createElementNS(namespace, "circle")
 newcircle.setAttribute("cx", xpos)
 newcircle.setAttribute("cy", ypos)
 newcircle.setAttribute("r", size)
 newcircle.setAttribute("fill", color)
  screen.appendChild(newcircle)
}

// Step 3: Event listeners
screen = document.getElementById("screen")
document.addEventListener("mousedown", function(event) {
  // what do you want to do when the user presses down
  // on the mouse button?
drawing = true;

})

document.addEventListener("mouseup", function(event){
 drawing = false;
})
//  drawing stuff//
document.addEventListener("mousemove", function(event){
if (drawing == true) {
var pt = transformPoint(event)
  var xpos = pt.x
  var ypos = pt.y

  var shapeSelect = document.getElementById("shapeSelect").value
  var sizeSelect = document.getElementById("sizeSelect").value
  var colorSelect = document.getElementById("colorSelect").value

if(shapeSelect == "square"){
  drawSquare(pt.x, pt.y, sizeSelect, colorSelect)
}

else {
  drawCircle(pt.x, pt.y, sizeSelect, colorSelect)
}
}

})
