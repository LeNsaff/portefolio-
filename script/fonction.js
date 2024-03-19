function projet() {
  const btn1 = document.getElementById('pbtn1');
  const btn2 = document.getElementById('pbtn2');
  const btn3 = document.getElementById('pbtn3');

  const plist1 = document.getElementById('plist1');
  const plist2 = document.getElementById('plist2');
  const plist3 = document.getElementById('plist3');

  btn1.addEventListener("click", function () {
      plist1.style.width = '75%';
      plist2.style.width = '25%';
      plist3.style.width = '25%';

      // Reset other buttons if needed
      plist2.style.width = '25%';
      plist3.style.width = '25%';
  });

  btn2.addEventListener("click", function () {
      plist2.style.width = '75%';
      plist1.style.width = '25%';
      plist3.style.width = '25%';

      // Reset other buttons if needed
      plist1.style.width = '25%';
      plist3.style.width = '25%';
  });

  btn3.addEventListener("click", function () {
      plist3.style.width = '75%';
      plist1.style.width = '25%';
      plist2.style.width = '25%';

      // Reset other buttons if needed
      plist1.style.width = '25%';
      plist2.style.width = '25%';
  });
}


const anim = document.getElementById('anim');
const aside1 = document.getElementById('aside1');
const aside2 = document.getElementById('aside2');
const footer = document.getElementById('footer');

function arrow() {
    anim.style.animationName = 'arrow2';
    anim.style.animationIterationCount = '1';
    anim.style.animationFillMode = 'both';
    aside1.style.animationName = 'asideanim';
    setTimeout(()=>{
        aside1.style.display = 'flex';
    },
    100);

    setTimeout(()=>{
        aside2.style.display = 'none';
    },
    100)
}