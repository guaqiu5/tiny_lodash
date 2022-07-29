const flat = (matrix) => {
    while(matrix.some((item)=>Array.isArray(item))){
        matrix= [].concat(...matrix)
    }
    return matrix
 }

// _test_
const arr = [[1,2,3],[[1.2,3],[1]],1,2]
console.log(flat(arr))