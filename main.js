img="";
status-"";
function preload()
{
    img=loadImage('123.jpg');
}
function setup()
{
    canvas=createCanvas(640, 420);
    canvas.center();
    objectdetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="status:detecting objects";
}
function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#0000ff");
    text("Teddy BEAR !PUTOLA!", 45, 75);
    noFill();
    stroke("#0000ff");
    rect(30, 60, 450, 350);

    fill("#0000ff");
    text("MILK BOTTLE !GAKHIR!", 320, 120);
    noFill();
    stroke("#0000ff");
    rect(300, 90, 270, 320);
} 

function modelLoaded()
{
    console.log("model Is Loaded");
    status=true;
    objectdetector.detect(img, gotresult);
}
function gotresult(error, results)
{
   if(error)
   {
       console.log(error);
   }
    console.log(results);
}