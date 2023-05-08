/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    let m = mat.length
    let n = mat[0].length

    if(m * n !== r * c){
        return mat // return the original matrix if the reshape operation is not possible
    }

    let flat = mat.flat()
    let res = []

    for (let i = 0; i < r; i++){
        let row =[]
        for (let j = 0; j < c; j++){
            row.push(flat[i* c + j])
        }
        res.push(row)
    }
    return res
};