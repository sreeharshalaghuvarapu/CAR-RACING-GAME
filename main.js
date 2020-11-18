canvas=document.getElementById('myCanavas');
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=100;
rover_x=10;
rover_y=10;
background_image="road.jpg";
rover_image="car.jpg";
function add() 
{ background_imgTag = new Image();
      background_imgTag.onload = uploadBackground;
       background_imgTag.src = background_image;
        car_imgTag = new Image();
        car_imgTag.onload = uploadrover; 
         car_imgTag.src = car_image;
        }
         function uploadBackground() { ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
         } 
         function uploadrover() { ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
         }
         
         window.addEventListener("keydown", my_keydown);
         
         function my_keydown(e) 
         { keyPressed = e.keyCode;
             console.log(keyPressed);
              if(keyPressed == '38')
               { up();
                 console.log("up");
                 }
                 if(keyPressed == '37')
                 { left();
                   console.log("left");
                   }
                   if(keyPressed == '39')
                   {right();
                     console.log("right");
                     }
                     if(keyPressed == '40')
                     { down();
                       console.log("down");
                       }
                      }
                    function up(){
                      if (car_y>=0){
                        car_y=car_y-10;
                        console.log("when up arrow is pressed,x="+car_x+ "y="+car_y);
                        uploadBackground();
                        uploadrover();
                      }
                    }

                    function down(){
                      if (car_y<=500){
                        car_y=car_y+10;
                        console.log("when down arrow is pressed,x="+car_x+ "y="+car_y);
                        uploadBackground();
                        uploadrover();
                      }
                    }

                    function left(){
                      if (rover_x>=0){
                        rover_x=rover_x-10;
                        console.log("when left arrow is pressed,x="+rover_x+ "y="+rover_x);
                        uploadBackground();
                        uploadrover();
                      }
                    }

                    function right(){
                      if (rover_x<=700){
                        rover_x=rover_x+10;
                        console.log("when right arrow is pressed,x="+rover_x+ "y="+rover_x);
                        uploadBackground();
                        uploadrover();
                      }
                    }

                  