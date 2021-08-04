function change(id) {
    var data = document.getElementById(id).getAttribute('data-name')
    console.log(document.getElementById(id).getAttribute('data-name'));
    if ( data === "c") {
        document.getElementById(id).setAttribute('class','right');
    }
    else {
        document.getElementById(id).setAttribute('class','wrong');
    }
}
