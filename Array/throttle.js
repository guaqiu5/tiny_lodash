const throttle = (fn,delay)=>{
    let pre = 0
    return function(...args){
        let now = Data.now()
        let _this =this
        if(now - pre >=delay){
            fn.apply(_this,args)
        }
    }
}