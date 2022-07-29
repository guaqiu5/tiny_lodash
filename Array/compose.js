const compose = (...fns) =>{
    if(fns.length ===0) return 
    return fns.reduce((accum,func)=>(...args)=>accum(func(...args)))
}
//__test__
const a =(v)=>{
    console.log(1)
    return v
}
const b =(v)=>{
    console.log(2)
    return v
}
const c =(v)=>{
    console.log(3)
    return v
}
compose(a,b,c)(1)

