function detail (author ,book , rstatus) { 
    this.author = author ;
    this.book = book ;
    this.rstatus = rstatus ;
}

let library2 = new detail( "Steve Jobs " , "Walter Issacson" , "True")
let library1 = new detail( "Bill Gates " , "Road Ahead" , "True")
let library3 = new detail( "Suzane Collin " , "Mockingjay" , "False")
console.log(library1)