img = "";
objects = [];
status = ""; 
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    canvas.position(200,300);
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "STATUS : Detecting objects!";
}
function modelLoaded() { 
    console.log("Model Loaded!") 

status = true; objectDetector.detect(img, gotResult); }

function gotResult(error, results) {
     if (error) { 
         console.log(error);
         } console.log(results);
          objects = results; 
        }

function preload(){
    img = loadImage("dog_cat.jpg"); 

}

function draw(){
image(img,0, 0 , 640 , 420); 

if(status != ""){
    for(i = 0; i<objects.length;i++){
        document.getElementById("status").innerHTML="STATUS : Object Detected!";

        fill("#ff0059");
        percent = floor(objects[i].confidence * 100); 
        text(objects[i].label+" "+percent + "%", objects[i].x + 15, objects[i].y + 15);
        noFill();
        stroke("#ff0059");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
}
}