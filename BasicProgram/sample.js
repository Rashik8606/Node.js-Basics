module.exports.Details=function(id,name,age,sex){
    this.id = id
    this.name = name
    this.age = age
    this.sex = sex
    this.display = function(){
        console.log('ID :'+this.id,
            'Name :'+this.name,
            'Age :'+this.age,
            'Sex :'+this.sex
        )
    }
}



