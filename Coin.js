AFRAME.registerComponent("coins", {
    init: function(){
        for(var i=1; i <= 20; i++){
           var id=`coin${i}`
           var posX=Math.floor(Math.random()*90 + -40)
           var posY=Math.floor(Math.random()*18 + 0)
           var posZ=Math.floor(Math.random()*90 + -30)
           var posiciones={x:posX, y:posY, z:posZ}
           this.createCoins(id, posiciones)
        }
    },

    createCoins:(id, position)=>{
        var terreno=document.querySelector("#terrain")
        var coin=document.createElement("a-entity")
        coin.setAttribute("id", id)
        coin.setAttribute("position", position)
        coin.setAttribute("scale",{x:2.5, y:2.5, z:2.5})
        coin.setAttribute("gltf-model", "./stylized_coin/scene.gltf")
        coin.setAttribute("animation-mixer",{})
        coin.setAttribute("static-body", {shape:"sphere", sphereRadius:2})
        coin.setAttribute("game", {elemento:`#${id}`})
        terreno.appendChild(coin)
    }
})