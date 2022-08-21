export default function sketch(p){
    let capture
    let capture1
    p.setup =function(){
        var constraints = {
            audio: false,
            video: {
              facingMode: {
                exact: "user"
              }
            }    
            //video: {
              //facingMode: "user"
            //} 
          };
        p.createCanvas(320, 240);
        capture = p.createCapture(constraints);
       
        capture.hide();
   

    }
    p.draw = function(){
        p.clear()
        p.push();
        p.translate(p.width,0);
        p.scale(-1, 1);
        p.image(capture, 0, 0, 320, 240);
        p.pop();
      
    }
}