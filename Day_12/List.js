var i=0 ;
document.getElementById('butt').addEventListener('click',create);



function changepos(id) {
    document.getElementById(id).setAttribute('class',"buttonr")
}

function create(e) {
    i++ ;
    var add = document.getElementById('add');
    let newEl = document.createElement('button');
    var txt = document.getElementById('inp').value;
    newEl.innerHTML= txt;
    newEl.setAttribute('id',i);
    newEl.setAttribute('class','button');
    e.preventDefault();
    add.appendChild(newEl)
    // newEl.addEventListener("click",console.log("clicked"))

    newEl.onclick = function() { 
        changepos(newEl.getAttribute('id'))
    }


}
