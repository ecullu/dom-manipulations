
// window.node = document.querySelector(#compoundInvestment)

document.querySelector("#thanks button").addEventListener('click',function(){
  alert("yowch! don't click me so hard!")
})

document.querySelector("#double button").addEventListener('click',function(){
  var pNode = document.querySelector("#compoundInvestment")
  var value = pNode.textContent
  pNode.textContent = parseInt(value) * 2
})


document.querySelector("#color-circle button").addEventListener('click',function(){
  var colorChange = document.querySelector("#circle-bw")
  if(colorChange.style.background === "black"){
  	  colorChange.style.background = "white"
  }
  else{
    colorChange.style.background = "black"
	}

})

document.querySelector("#blow-up button").addEventListener('click',function(){
  var blowUp = document.querySelector(".circle-red")
  var computedStyle = window.getComputedStyle(blowUp)
  var intWidth = parseInt(computedStyle.width)
  var intHeight = parseInt(computedStyle.height)
 
  blowUp.style.width = (intWidth * 2)+ "px"
  blowUp.style.height = (intHeight * 2)+ "px"

  if(parseInt(blowUp.style.width) <= 320){
  	blowUp.style.width = (intWidth * 2)+ "px"
  	blowUp.style.height = (intHeight * 2)+ "px"
  }
  else{
  	blowUp.style.width = "40px"
  	blowUp.style.height = "40px"
  }
})

document.querySelector("#remove button").addEventListener('click',function(){
  var myList = document.querySelector("#userList")
  var myUserList = document.querySelectorAll("#userList > li")
  for(var i = 0; i < myUserList.length; i ++){
  	var user = myUserList[i]
  	console.log(user)
  	if(user.classList.contains('inactive')){
  		myList.removeChild(user)
  	}
  } 
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  var reverseIt = document.querySelector("#reverse-squares > div > div")
  var colorBoxes = reverseIt.querySelectorAll('span')
  var length = colorBoxes.length
  for(var i = length-1; i >= 0; i--){
		reverseIt.appendChild(colorBoxes[i])
  	}
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  var allTasks = document.querySelector("#tasks")
  var tasks = allTasks.querySelectorAll("li")
  console.log(tasks.length)

  var reverseIt = function(str){
  	var reversedStr =""
    for (var i=0; i<str.length; i++){
        reversedStr += str[(str.length-1)-i];
    }
    return reversedStr
}

  for(var i = 0; i < tasks.length; i++){
  	var content = tasks[i].textContent
  	tasks[i].textContent = reverseIt(content)
  }
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
  var cityImg = document.querySelector("#city-img")
  urlLength = cityImg.src.length
  // console.log(urlLength)
  urlLastChar = cityImg.src[urlLength-1]
  // console.log(urlLastChar)
  // var splitURL = cityImg.src.split("/")
  // console.log(splitURL)
  // splitURL.join("/")
  // console.log(splitURL)
  // cityImg.src.substr(1)
  // console.log(cityImg.src)
  var i = urlLastChar
  i = parseInt(urlLastChar) + 1
  console.log(i)
  cityImg.src = "http://lorempixel.com/400/200/city/" + i
  console.log(cityImg.src)
  


})