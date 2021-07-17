// const card = document.querySelector(".card")
// card.addEventListener('click' , () => {
//     card.classList.toggle("back");  
// }
// )
// function change( id ) {
//     document.getElementById(id).className = "back";
//     console.log(document.getElementById(id).className);
    
// }
let flips = 'false';
let first , second ;
let firstclass , secondclass ;
function try2 (id) {
  if(id%2 == 0) {
    document.getElementById(id).setAttribute('class','card2');
  }
  else {
    document.getElementById(id).setAttribute('class','card1');
  }

  if(flips == 'false') {
    flips = 'true';

    firstclass = document.getElementById(id);
    first = firstclass.getAttribute('data-name');
  }
  else {
    flips= 'false';
    secondclass = document.getElementById(id);
    second = secondclass.getAttribute('data-name');
  }
  if ( first==second) {
      console.log("match")
  }
  if (first != second && flips == 'false') {
    console.log(firstclass);
    setTimeout(() => {
      firstclass.setAttribute('class','card');
      secondclass.setAttribute('class','card');
    }, 1000 )
    console.log(secondclass);
    console.log('not matched')
    
  }
}
