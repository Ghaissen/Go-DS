let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".parentinfo");
//let started=false;



//window.onscroll=function(){
//   if(window.scrollY >= section.offsetTop){
//           if(!started) {
//               nums.forEach((num) => startCount(num)); 
//            }
//        started=true;
//   }
//};


function startCount(e1, n) {
    let goal = e1.dataset.goal;
    let count = setInterval(() => {
        e1.textContent++;
        if (e1.textContent == goal) {
            clearInterval(count)
        }
    }, n);
}

startCount(document.querySelectorAll(".nums .num")[0], 0.1);
startCount(document.querySelectorAll(".nums .num")[1], 17);
