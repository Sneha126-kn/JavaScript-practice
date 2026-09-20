let lunches=[];
function addLunchToEnd(arr, st){
  arr.push(st)
  console.log(`${st} added to the end of the lunch menu.`)
  return arr
}
function addLunchToStart(arr, st){
  arr.unshift(st)
  console.log(`${st} added to the start of the lunch menu.`)
  if (arr==[]){
    return "No lunches to remove."
  }
  return arr
}
function removeLastLunch(arr){
  
  if(arr.length==0){
    console.log("No lunches to remove.") 
    return
  }
  const rem =arr.pop()
  console.log(`${rem} removed from the end of the lunch menu.`)
  return arr
}
function removeFirstLunch(arr){
  
  if (arr.length==0){
    console.log("No lunches to remove.")
  }
  const firstr=arr.shift();
  console.log(`${firstr} removed from the start of the lunch menu.`)
  
  return arr
}
function getRandomLunch(arr){
  if (arr.length==0){
   console.log("No lunches available.")
   return
  }
  const randomIndex = Math.floor(Math.random() * arr.length);
  const randomLunch = arr[randomIndex];

  console.log(`Randomly selected lunch: ${randomLunch}`);
}

function showLunchMenu(arr){
  if(arr.length==0){
    console.log("The menu is empty.")
    return;
  }
  
  console.log(`Menu items: ${arr.join(", ")}`)
  
}
