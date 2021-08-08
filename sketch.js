var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //crea los objetos para dividir
  for (var k = 0; k <=880; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //crea la primera fila de objetos plinko
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //crea la segunda fila de objetos plinko
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //crea la tercera fila de objetos plinko

  for (var j = 25; j <=width-20; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }
  
  //crea la cuarta fila de objetos plinko

  for (var j = 0; j <=width-30; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }

  //crea los objetos partícula
  
  particle = new Particle(400,10);
  particle1 = new Particle(400,10);
  particle2 = new Particle(400,10);
  particle3 = new Particle(400,10);
  particle4 = new Particle(400,10);
  particle5 = new Particle(400,10);
  particle6 = new Particle(400,10);
  particle7 = new Particle(400,10);
  particle8 = new Particle(400,10);
  particle9 = new Particle(400,10);
  particle10 = new Particle(400,10);
  particle11 = new Particle(400,10);
  particle12 = new Particle(400,10);
  particle13 = new Particle(400,10);
  particle14 = new Particle(400,10);
  particle15 = new Particle(400,10);
  particle16 = new Particle(400,10);
  particle17 = new Particle(400,10);
  particle18 = new Particle(400,10);
  particle19 = new Particle(400,10);
  particle20 = new Particle(400,10);
  particleApoapsis = new Particle(400,10);
  particlePeriapsis = new Particle(400,10);
  particle21 = new Particle(400,10);
  particle22 = new Particle(400,10);
  particle22A = new Particle(400,10);
  particle22B = new Particle(400,10);
  particle23 = new Particle(400,10);
  particle24 = new Particle(400,10);
  particle25 = new Particle(400,10);
  particle26 = new Particle(400,10);
  particle27 = new Particle(400,10);
  particle28 = new Particle(400,10);
  particle29 = new Particle(400,10);
  particle30 = new Particle(400,10);
  particle31 = new Particle(400,10);
    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //muestra los plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //muestra las divisiones
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //muestra las partículas 

particle.display();
particle1.display();
particle2.display();
particle3.display();
particle4.display();
particle5.display();
particle6.display();
particle7.display();
particle8.display();
particle9.display();
particle10.display();
particle11.display();
particle12.display();
particle13.display();
particle14.display();
particle15.display();
particle16.display();
particle17.display();
particle18.display();
particle19.display();
particle20.display();
particleApoapsis.display();
particlePeriapsis.display();
particle21.display();
particle22.display();
particle22A.display();
particle22B.display();
particle23.display();
particle24.display();
particle25.display();
particle26.display();
particle27.display();
particle28.display();
particle29.display();
particle30.display();
particle31.display();

}
