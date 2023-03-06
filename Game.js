AFRAME.registerComponent("game",{
    schema:{
        elemento:{type:"string", default:"#coin1"}
    },
    update:function(){
       this.isCollided(this.data.elemento)
    },

    init: function () {
        var duration = 120;
        const timerEl = document.querySelector("#timer");
        this.startTimer(duration, timerEl);
      },
    
    startTimer: function (duration, timerEl) {
      var minutes;
      var seconds;

      var timer = setInterval(countDown, 1000);

      function countDown() {
        if (duration >= 0) {
          minutes = parseInt(duration / 60);
          seconds = parseInt(duration % 60);

          if (minutes < 10) {
            minutes = "0" + minutes;
          }
          if (seconds < 10) {
            seconds = "0" + seconds;
          }

          timerEl.setAttribute("text", {
            value: minutes + ":" + seconds,
          });

          duration -= 1;
        } 
        else {
          clearInterval(timer); 
          this.gameOver()       
        }
      }
    },
      
    isCollided: function (elemntId) {
        const element = document.querySelector(elemntId);
        element.addEventListener("collide", (e) => {
          if (elemntId.includes("#coin")) {
            this.updateRings()
            element.setAttribute("visible", false)
            this.updateScore()
          } else {
            this.gameOver()
          }
        });
    },

    updateRings:function(){
        var textoRings=document.querySelector("#coins")
        var valorConteo=textoRings.getAttribute("text").value
        var numEnteros=parseInt(valorConteo)
        numEnteros -= 1
        textoRings.setAttribute("text", {
          value:numEnteros
        })
    },

    updateScore:function(){
        var textoScore=document.querySelector("#score")
        var valor=textoScore.getAttribute("text").value
        var enteros=parseInt(valor)
        enteros += 50
        textoScore.setAttribute("text", {
          value:enteros
        })
    },

    gameOver:function(){
        var textoOver=document.querySelector("#gameover")
        var avion=document.querySelector("#scuba")
        textoOver.setAttribute("visible", true)
        avion.setAttribute("dynamic-body",{
          mass:1
        })
      }
})
