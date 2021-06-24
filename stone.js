class stone {
    constructor(x, y) {
      var options = {
        'density':12,
        'friction': 0.9,
        'restitution':0.8
      };
      this.body = Bodies.rectangle(x, y, 70, 70, options);
      this.width = 50;
      this.height = 60;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      
      
  
      push();
     
     
      strokeWeight(3);
      stroke('white')
      fill('purple')
      rectMode(CENTER)
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    };
  };