canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

nasa_mars_imgs_array = ["mars.jpg","mars_1.jpg","mars_2.jpg","mars_3.jpg"];

random_number = Math.floor(Math.random()*4);

console.log(random_number)

background_img = nasa_mars_imgs_array[random_number] ;

console.log("image = " + background_img);

rover_img = "rover.png" ;



rover_x = 10 ;
rover_y = 10 ;

rover_width = 100 ;
rover_height = 90 ;

function add()
{
    background_img_tag = new Image() ;
    background_img_tag.onload = uploadBackground ;
    background_img_tag.src = background_img;

    rover_img_tag = new Image() ;
    rover_img_tag.onload = uploadrover ;
    rover_img_tag.src = rover_img;

}

function uploadBackground ()
{
    //drawImage method draws an image into the canvas 
     ctx.drawImage( background_img_tag,0,0,canvas.width,canvas.height );

}

function uploadrover ()
{
    //drawImage method draws an image into the canvas 
     ctx.drawImage( rover_img_tag,rover_x,rover_y,rover_width,rover_height);

}

window.addEventListener("keydown",my_keydown);

console.log("my_keydown");

function my_keydown (e)
{
    
     keypressed = e.keyCode ;

     console.log(keypressed);

     if (keypressed == '38')
      
       {

          up ();

          console.log("up");


       }

       if (keypressed == '40')
      
       {

          down ();

          console.log("down");


       }

       if (keypressed == '37')
      
       {

          left ();

          console.log("left");


       }

       if (keypressed == '39')
      
       {

          right ();

          console.log("right");


       }

}

function up () {

    if ( rover_y >= 0 )
{
   rover_y -= 10 ;

   console.log("when up key is pressed, x = " + rover_x + ", y =" + rover_y);
   uploadBackground();
   uploadrover();

}
}

function down () {

    if ( rover_y <= 500 )
{
   rover_y += 10 ;

   console.log("when down key is pressed, x = " + rover_x + ", y =" + rover_y);
   uploadBackground();
   uploadrover();
   
}
}

function left () {

   if ( rover_x >= 0 )
{
  rover_x -= 10 ;

  console.log("when left key is pressed, x = " + rover_x + ", y =" + rover_y);
  uploadBackground();
  uploadrover();
  
}
}

function right () {

   if ( rover_x <= 700 )
{
  rover_x += 10 ;

  console.log("when right key is pressed, x = " + rover_x + ", y =" + rover_y);
  uploadBackground();
  uploadrover();
  
}
}

