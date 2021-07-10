var student =  {
    name : 'David Ray', 
    sclass : 'VI',
    roll  : 12 ,
  
    del : function() {
        delete this.sclass
        console.log(this.name + " class "+this.sclass+" roll no. "+this.roll)
    }
}


console.log(Object.values(student));

console.log(student.del());

console.log();


