AFRAME.registerComponent("rotation-plane",{
    schema:{
        rotationA:{type:"number", default:0},
        apositionA:{type:"number", default:0}
    },
    init:function(){
        window.addEventListener("keydown",(e)=>{
            this.data.rotationA=this.el.getAttribute("rotation")
            this.data.positionA=this.el.getAttribute("position")
            var rotacion=this.data.rotationA
            var posicion=this.data.positionA
            if (e.key==="ArrowRight"){
              if(rotacion.x < 10){
                rotacion.x += 0.4
                this.el.setAttribute("rotation", rotacion)
              }
            }
            if (e.key==="ArrowLeft"){
                if(rotacion.x > -10){
                  rotacion.x -= 0.4
                  this.el.setAttribute("rotation", rotacion)
                }
            }
            if (e.key==="ArrowUp"){
                if(rotacion.z < 10){
                  rotacion.z += 0.01
                  this.el.setAttribute("rotation", rotacion)
                }
                if(posicion.y < 1.4){
                  posicion.y += 0.009
                  this.el.setAttribute("position", posicion)
                }
            }
            if (e.key==="ArrowDown"){
                if(rotacion.z > -10){
                  rotacion.z -= 0.4
                  this.el.setAttribute("rotation", rotacion)
                }
                if(posicion.y > -0.5){
                  posicion.y -= 0.005
                  this.el.setAttribute("position", posicion)
                }
            }
        })
        
    }
})