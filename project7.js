var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"

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
  var newrect = document.createElementNS(namespace, "square")
 newsquare.setAttribute("x", xpos)
 newsquare.setAttribute("y", ypos)
 newsquare.setAttribute("height", size)
  newsquare.setAttribute("width", size)
 newsquare.setAttribute("fill", color)
 canvas.appendChild(newsquare)
}

function drawCircle(xpos, ypos, size, color) {
 var newcircle = document.createElementNS(namespace, "circle")
 newcircle.setAttribute("cx", xpos)
 newcircle.setAttribute("cy", ypos)
 newcircle.setAttribute("size", size)
 newcircle.setAttribute("fill", color)
  canvas.appendChild(newcircle)
}

// Step 3: Event listeners
document.addEventListener("mousedown", function(e) {
  // what do you want to do when the user presses down
  // on the mouse button?
})

document.addEventListener("mousemove", function(e){

})
