const { default: axios } = require("axios");

class Student{
    constructor(){

    }

    home(type){
        let data = this.getInfo(type, 1)
        return data+5;
    }

    userId(){
        return 12;
    }

    getInfo(type, status){
        return type;
    }

    finalMarks(total){
        let external = this.getExternal(total)
        let internal = this.getInternal(total)
        let finalSum = external+internal+10;
        return finalSum;
    }

    getExternal(total){
        return total+1;
    }
    
    getInternal(total){
        return total-1;
    }

    dbData(){
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
              resolve(10)  
            },1000);
        })
    }

    thirdAPI(){
        return new Promise((resolve, reject)=>{
            axios.get('https://reqres.in/api/unknown').then((result)=>{
                resolve(result.data);
            }).catch((err)=>{
                reject(err)
            })
        })
    }
}

module.exports= Student;