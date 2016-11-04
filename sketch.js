var a = 0; //angulo
var an = 45; //angulob
var c = 0; //angulo brazo derecho
var d = 0; //angulo brazo izquierdo
var factorTraslado = 320
var t = 270
var b;
var factor1 = 8;
var factor2 = 20
var factor3 = 30
var b1 = 255
var b2 = 255
var b3 = 255
var headR = 255
var headG = 255
var headB = 255

function preload() {
  imevri = loadSound("imevri1.mp3")
  dance = loadSound("dance1.mp3")
  will = loadSound("will.mp3")
}

function setup() {
  createCanvas(900, 600)
  angleMode(DEGREES)

}

function draw() {
  var factor = 0;
  var factorb = 0;
  var factorc = 0
  var factord = 0
  var e = 0
  var f = 0
  background(b1, b2, b3)
  fill(165, 42, 202, 100)
  rect(125, 50, 150, 100)
  fill(42, 202, 165, 100)
  rect(375, 50, 150, 100)
  fill(202, 165, 42, 100)
  rect(625, 50, 150, 100)

  // if (125 < mouseX && mouseX < 275 && 50 < mouseY && mouseY < 150 && mouseIsPressed) {
  //   imevri.play();
  //}

  //if (375 < mouseX && mouseX < 525 && 50 < mouseY && mouseY < 150 && mouseIsPressed) {
  //dance.play();

  //}

  //if (625 < mouseX && mouseX < 775 && 50 < mouseY && mouseY < 150 && mouseIsPressed) {
  //will.play();

  //}

  // trasladar canvas
  translate(b, 0);
  b = 380 + sin(t) * factorTraslado
  t += 0.8



  strokeWeight(5)

  //cabeza, tronco
  fill(headR, headG, headB, 100)
  ellipse(80, 250, 60, 60)
  noFill()
  line(80, 280, 80, 400)
  strokeWeight(1)


  // pierna derecha
  for (var i = 0; i < 65; i += 2) {

    fill(0)
    ellipse(80 + i + sin(a) * factor, 400 + e, 5, 5)
    e += 4
    factor++
    a += 0.25
  }
  //pierna izquierda
  for (var l = 0; l < 65; l += 2) {
    ellipse(80 - l + sin(an) * factorb, 400 + f, 5, 5)
    f += 4
    factorb++
    an += 0.5
  }

  //brazo derecho

  for (var j = 0; j < 90; j += 2.5) {

    ellipse(81 + j, 320 + sin(c) * factorc, 5, 5)
    c += 0.5
    factorc += 1
  }

  //brazo izquierdo

  for (var j = 0; j < 90; j += 2.5) {
    ellipse(79 - j, 320 + sin(d) * factord, 5, 5)
    factord++
    d += 0.125
  }

  //if (b > width - 300) {

  //b = width - 300
  //} else {

  //b += 0.8
  //}




}

function mousePressed() {
  if (125 < mouseX && mouseX < 275 && 50 < mouseY && mouseY < 150) {
    imevri.play();
    will.stop();
    dance.stop();
    headR = 165
    headG = 42
    headB = 202

  } else if (375 < mouseX && mouseX < 525 && 50 < mouseY && mouseY < 150) {
    dance.play();
    will.stop();
    imevri.stop();
    headR = 42
    headG = 202
    headB = 165



  } else if (625 < mouseX && mouseX < 775 && 50 < mouseY && mouseY < 150) {
    will.play();
    imevri.stop();
    dance.stop();
    headR = 202
    headG = 165
    headB = 42

  } else {
    will.stop();
    imevri.stop();
    dance.stop();
    headR = 255
    headG = 255
    headB = 255


  }

}