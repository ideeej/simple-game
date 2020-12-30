


// images we need
let octo_image
let ground_image
let tree_image


// Octo position
let x = 0
let y = 0

function preload() {
     // Here you can load images before setup
     
     octo_image = loadImage("./assets/octocat.gif")

}

function setup() {
     // This function runs once at the start

     createCanvas(920,720);

}

function draw() {
     // This function runs every frame

     // Fill the canvas with (51, 51, 51)
     background(51)
     
     update_coordinates()

     image(octo_image, x, y);
     
}

function update_coordinates() {
     // References for learning p5.js
     //
     // P5 reference
     // https://p5js.org/reference/#/p5/
     //
     // Daniel shiffman <3
     // https://www.youtube.com/user/shiffman
     
     const speed = 10
     
     const w_down = keyIsDown("W".charCodeAt(0)) // 85 
     const a_down = keyIsDown("A".charCodeAt(0)) // 65 
     const s_down = keyIsDown("S".charCodeAt(0)) // 83
     const d_down = keyIsDown("D".charCodeAt(0)) // 63

     const up_arrow_down = keyIsDown(UP_ARROW)
     const left_arrow_down = keyIsDown(LEFT_ARROW)
     const down_arrow_down = keyIsDown(DOWN_ARROW)
     const right_arrow_down = keyIsDown(RIGHT_ARROW)
     
     if(w_down || up_arrow_down) {
          y += -speed
     }

     if (a_down || left_arrow_down) {
          x += -speed
     }
     if(s_down || down_arrow_down){
          y += speed
     }

     if (d_down || right_arrow_down) {
          x += speed
     }
}

