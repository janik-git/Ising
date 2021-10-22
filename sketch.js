/* Ising simulation example of a temperature sweep on a 100x100 spin lattice */

// Display options:

const CANVAS_WIDTH = 900;
const CANVAS_HEIGHT = 600;
const FRAME_RATE = 20;

// Simulation parameters:

var isingSettings = {
  width: 300,
  height: 300,
  mcStepsPerFrame: 10000,
  averagingFrames: 20,
  randomizeLattice: true,
  temperature: 4,
  magneticField: 0,
  loopMode: 'TLOOP',
  loopIncrement: -0.05,
  loopTargetValue: 1,
  imageFile: null,
  dataFile: null
}
var ferromagnet;

// Create canvas and Ising-simulation object:

function setup() {
  frameRate(FRAME_RATE);
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  background(0);
  input = createInput("temperature,magneticField");
  runButton = createButton("Run")
  runButton.mousePressed(run)
  stopButton = createButton("stop")
  stopButton.mousePressed(stop)
  noLoop();
}
function calc() {
}
function stop() {
  running = false
}
async function run() {
  inp = input.value().split(',')
  isingSettings["temperature"] = parseFloat(inp[0])
  isingSettings["magneticField"] = parseFloat(inp[1])
  ferromagnet = new Ising(isingSettings);
  running = true
  while (running) {
    ferromagnet.simulationStep();
    await new Promise(r => setTimeout(r, 100))
  }
}
// Draw loop:

function draw() {
}
