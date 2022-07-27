// 真没为难我 我是2b 大晚上的面试官也应该觉得面了一个2b
const differenceBy = (arr1,arr2,iteratee = (v) => v) => {
    let set = new Set()
    let res=[]
    arr2.forEach((item) => {
        set.add(iteratee(item))
    })
    arr1.forEach((item) => {
        if(set.has(iteratee(item))) {
            set.delete(item)
        }else{
            res.push(item)
        }
    })
    return res
}
//__test__

// expect value === [3.1, 1.3]
console.log(differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor))

export default differenceBy