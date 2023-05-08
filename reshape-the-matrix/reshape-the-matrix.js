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

    let res = new Array(r);
    let row = 0, col = 0;

    for (let i = 0; i < m; i++){
        for (let j = 0; j < n; j++){
            if ( col === 0){
                res[row] = new Array(c)
            }
            res[row][col] = mat[i][j]
            col++
            if (col === c){
                row++
                col = 0
            }
        }
    }
    return res
};