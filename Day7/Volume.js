function volume (r ,h) {
    this.r =r ;
    this.h = h;
    this.vol = 3.14*r*r*h ;
}

let classes = new volume(7,1);
console.log(Object.values(classes))