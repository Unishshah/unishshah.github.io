
var canvas = document.getElementById('space_box');
var c = canvas.getContext('2d');


	radius = 1,
	starsIndex = 0,
	stars = [],
	TWO_PI = Math.PI*2,
	
	focalLength = 100,
	starRadius = null,
	starX = null,
	starY = null,
	numStars = 1000,
	starX_dir = 0,
	starY_dir = 0;

	
	
	
// Function for create new start
function star(x,y,z){
    
    this.x = x; //x-cordinate
	this.y = y; // y-cordinate
	this.z = z; //z-cordinate
	this.radius = radius; //radius of star
	this.color = "#fff"; //color of star
	starsIndex++; 
	stars[starsIndex] = this; //createing an array of stars
	this.id = starsIndex; 
	
	// Animate Stars
	this.update = function(){
	  starX = (this.x - centerX) * (focalLength / this.z);
	  starX += centerX;
	  
	  starY = (this.y - centerY) * (focalLength / this.z);
	  starY += centerY;
	  
	  starRadius = radius * (focalLength / this.z);
	  
	  starX += starX_dir;
	  starY += starY_dir;
	  
	  this.z += -0.09;
	  
	  if(this.z <= 0){
	     this.z = parseInt(innerWidth);
	  }
	  
	  this.draw();
	
	}
	
	// Function for draw star
	this.draw = function(){
		c.beginPath();
		c.arc(starX,starY,starRadius, TWO_PI, false); //drawing an circle or an arc
		c.fillStyle = this.color; //filling the white color in it
		c.fill();
		c.closePath();
	}
	
}	

// setting up the X,Y,Z values
var s; 
for(s = 0; s < numStars; s++){  //setsthe position of all stars (number of stars = 2000)
	x = Math.random() * innerWidth; // sets the x-cordinate
	y = Math.random() * innerHeight; // sets the y-cordinate   
	z = Math.random() * innerWidth; // sets the z-cordinate which is the distance over here (how far is the star from the screen)
	new star(x,y,z); // sets the position of the star
}

// Function for animate canvas objects
function animate(){
    
    var innerWidth = window.innerWidth ;
    var innerHeight = window.innerHeight ;
    centerX = innerWidth/2;
	centerY = innerHeight/2;
    canvas.width = innerWidth;
	canvas.height = innerHeight;
    requestAnimationFrame(animate); // moves the frame continously
	c.fillStyle = "#000"; // displays the black color of background
	c.fillRect(0,0,innerWidth,innerHeight);   // sets the background in rectangle shape    
	
	for( var i in stars){
	  stars[i].update();   // keeps on updating the number of stars present
	}
}


window.setInterval(animate, 2000);

