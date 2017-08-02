var button = document.querySelector('#start')
var total = 2 * 3600 //ms
var limit = false

button.addEventListener('click', function(){
  if(limit){
      return
    }
    limit = true
    var id = setInterval(function(){
    
    if(total <= 0){
      clearInterval(id)
    }
    total -= 1
    
    var hour = parseInt(total / 3600,10)
    var minute = parseInt((total - hour * 3600) / 60)
    var second = total - hour * 3600 - minute * 60
    
    if(minute < 10){
            minute = "0" + minute
        }
        if(second < 10){
            second = "0" + second
        }
        if(hour < 10){
            hour = "0" + hour
        }
    
    timeLeft.innerText = `${hour}:${minute}:${second}`
  },1000)
})