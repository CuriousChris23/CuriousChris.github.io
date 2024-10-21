/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    ENTER: 13,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
  };


  // Game Item Objects
  var walker = {
    cooridnateX: 0,
    cooridnateY: 0,
    speedX: 0,
    speedY: 0,
  };


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keyDown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {


  }

  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.ENTER) {
      console.log("enter pressed")
      walker.speedX = -5
    }
    if (event.which === KEY.LEFT) {
      console.log("left pressed")
      walker.speedX = -5
    }
    if (event.which === KEY.UP) {
      console.log("up pressed")
      walker.speed = -5
    }
    if (event.which === KEY.RIGHT) {
      console.log("right pressed")
      walker.speedX = -5
    }
    if (event.which === KEY.DOWN) {
      console.log("down pressed")
      walker.speedY = -5
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////


  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  function repostitionGameItem(newFrame) {
    walker.cooridnateX
  }
  function redrawGameItem(newFrame) {
    walker.cooridnateY

  }
}
