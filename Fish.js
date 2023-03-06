AFRAME.registerComponent("fishes", {
    init: function(){
        for(var i=1; i <= 20; i++){
           var id=`fish${i}`
           var posX=Math.floor(Math.random()*80 + -30)
           var posY=Math.floor(Math.random()*18 + 0)
           var posZ=Math.floor(Math.random()*80 + -20)
           var posiciones={x:posX, y:posY, z:posZ}
           this.createFishes(id, posiciones)
        }
    },

    createFishes:(id, position)=>{
        var terreno=document.querySelector("#terrain")
        var fish=document.createElement("a-entity")
        fish.setAttribute("id", id)
        fish.setAttribute("position", position)
        fish.setAttribute("scale",{x:0.22, y:0.22, z:0.22})
        fish.setAttribute("gltf-model", "./fish/scene.gltf")
        fish.setAttribute("animation-mixer",{})
        fish.setAttribute("static-body", {shape:"sphere", sphereRadius:1})
        fish.setAttribute("game", {elemento:`#${id}`})
        terreno.appendChild(fish)
    }
})