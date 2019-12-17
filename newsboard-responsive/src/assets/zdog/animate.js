// flag
let isSpinning = true;

// instance of Zdog Illustration class
let circle = new Zdog.Illustration({
  element: "#circle",
  // make it draggable
  dragRotate: true,
  // manipulate the flag when
  // the dragging starts and ends
  onDragStart() {
    isSpinning = false;
  },
  onDragEnd() {
    isSpinning = true;
  }
});

// create the circle
new Zdog.Ellipse({
  addTo: circle,
  diameter: 20,
  stroke: 5,
  color: "#ccc"
});

// render the graphic
circle.updateRenderGraph();

// create the animation
// functionality on the basis
// of the flag
function animate() {
  if (isSpinning) {
    circle.rotate.y += 0.03;
  }

  // render the graphic on every frame
  circle.updateRenderGraph();
  requestAnimationFrame(animate);
}

animate();
