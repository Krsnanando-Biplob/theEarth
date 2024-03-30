

function creatStart(){
  const container= document.querySelector('body')
  for(let i =0; i <1000; i++){
    const start= document.createElement('div')
    start.className ='start'
    start.style.width= "1px"
    start.style.height= "1px"

    start.style.top = Math.random() * 100 + '%'
    start.style.left = Math.random() * 100 + '%'

    container.appendChild(start)
  }
}

creatStart()