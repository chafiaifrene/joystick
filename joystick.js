window.onload=main;
var x,y;

//la fonction principale qui permet de dessiner les deux cercles et de crÃ©er le mouvement sur un des cercle

function draw(){
	// canvas reprensente le 1er cercle
   const canvas = document.getElementById("canvas");

	 //canvas1 reprenste le 2eme cercle
   const canvas1 = document.getElementById("canvas1");

   // dÃ©ssiner les cercles a l'aide de beginPath
    if(canvas.getContext && canvas1.getContext){
    	var ctx1 = canvas.getContext('2d');
    	var ctx2 = canvas1.getContext('2d');
    	ctx1.beginPath();
      ctx2.beginPath();

    	ctx1.arc(150, 150, 100, 0, Math.PI * 2, true);
    	ctx2.arc(25, 25, 25, 0, Math.PI * 2 , true);
    	ctx1.stroke();
    	ctx2.fill();
    }
    
    //la fonction qui permet de rÃ©cupÃ©rer les coordonÃ©es de la souris et de faire le mouvement sur le cercle du milieu 
    document.onmouseover = function(evenement){
      //on rÃ©cupÃ¨re le x de la souris 
        x =  evenement.pageX;
      // on rÃ©cupÃ¨re le y de la souris
        y =  evenement.pageY;

                // dÃ©limitation du mouvement du cercles        
                if((x >= 350 && x <= 550) && (y >= 200 && y <= 400)){
                   canvas1.style.left = x - 25 +'px'; 
                   console.log("x: " +x);
                   canvas1.style.top  = y - 25 +'px';
                   console.log("y: " +y);

                }
                else {
                   canvas1.style.left = 425+'px'; 
                   canvas1.style.top  = 275+'px';
                }
    };

}
function main(){
	draw();
}
