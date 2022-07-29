const curry = (fn,...args) =>{
    let rawLen = fn.length
    return function(..._args){
        _args.unshift(...args)
        if(_args.length < rawLen) return curry.call(this,fn,..._args)
        return fn.apply(this,_args)
    }
}

// __test__
const add = (a,b,c) =>a+b+c
let curriedAdd = curry(add)
console.log(curriedAdd(1)(2)(3))
