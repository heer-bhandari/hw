canvas = document.getElementById("canvas1");
ctx = canvas.getContext("2d");
img_baground = "cars.jepg";
img_c1 = "car1.jepg";
img_c2 = "car2.jpeg";
c1_width = 90 ;
c1_height = 70 ; 
c1_x = 0 ;
c1_y = 0 ;

function add() {
    B_ground = new Image();
    B_ground.onload = uploadbackround;
    B_ground.src = img_baground;
    
    r_ground = new Image();
    r_ground.onload = uploadrover;
    r_ground.src = img_rover;
}
function uploadbackround() {
    ctx.drawImage(B_ground , 0 , 0 , canvas.width , canvas.height);
}
function uploadc1() {
    ctx.drawImage(r_ground , rover_x , rover_y , rover_width , rover_height);
}
