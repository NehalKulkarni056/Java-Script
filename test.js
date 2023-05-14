// bind()

const name = {
    firstName : "Nehal",
    lastName : "Coolkarni"
    }
    
    
    const nameFunction = function (hometown,country){
    console.log(`${this.firstName} ${this.lastName} from ${hometown}, ${country}`)
    }
    
    const myFunction = nameFunction.bind(name,"Bijapur")
    myFunction("India")

// polyfill of bind()

Function.prototype.myBind = function(...args){
    const obj = this
    params = args.slice(1)
    return function(...args2){
        obj.apply(name,[...params,...args2])
    }
}

const myFunction2 = nameFunction.myBind(name,"Bijapur")
myFunction2("India")