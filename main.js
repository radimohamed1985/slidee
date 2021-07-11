let slider = Array.from(document.querySelectorAll('.slider .slide'));

 let count = slider.length;

 let current = 1;


 let nxtbtn = document.getElementById('next');
 let prevbtn = document.getElementById('prev');

 nxtbtn.onclick= next;
 prevbtn.onclick= prev;
active();

 function next(){
     if(nxtbtn.classList.contains('disable')){return false;}
     else{
        current++;
        active();
      
        
     }
 }
 function prev(){
    if(prevbtn.classList.contains('disable')){return false;}
    else{
       current--;
       active();
    }
}


 function active(){
     ractive();
     slider[current-1].classList.add('active');
     if(current == 1){prevbtn.classList.add('disable');}else{prevbtn.classList.remove('disable');};
     if(current == count){nxtbtn.classList.add('disable');}else{nxtbtn.classList.remove('disable');}

 }

 function ractive(){
   slider.forEach(function (slide){slide.classList.remove('active');});
 }

