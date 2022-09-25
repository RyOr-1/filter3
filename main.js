var noseX = 0
var noseY = 0


function preload() {
moustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}

function setup() {
    canvas = createCanvas(300, 300)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotResults)
}

function gotResults(results) {
    if(results.length > 0) {
        noseX = results[0].pose.nose.x - 200
        noseY = results[0].pose.nose.y -115

        console.log(noseX)
        console.log(noseY)
    }
}

function draw() {
    image(video, 0, 0, 300, 300)
    image(moustache, noseX, noseY, 100, 100)
}

function modelLoaded() {
    console.log("Model Loaded Correctly!")
}

function takeSnapshot() {
    save("filteredImage.jpg")
}