export default function sketch1(p){
    let capture
    let capture1
    p.setup =function(){
          var constraints1 = {
            audio: false,
            video: {
              facingMode: {
                exact: "environment"
              }
            }    
            //video: {
              //facingMode: "user"
            //} 
          };
        
        p.createCanvas(320, 240);
        
        capture1 = p.createCapture(constraints1);
       
    capture1.hide();

    }
    p.draw = function(){
        p.clear()
        p.push();
        p.translate(p.width,0);
        p.scale(-1, 1);
        p.image(capture1, 0, 0, 320, 240);
        p.pop();
      
    }
     
}