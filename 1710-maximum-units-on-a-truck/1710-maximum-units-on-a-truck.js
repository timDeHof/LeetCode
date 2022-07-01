/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
       boxTypes.sort((a,b) => b[1] - a[1])
    let total = truckSize
    let count = 0
    for(let i=0; i<boxTypes.length; i++){
        const noOfBoxes = boxTypes[i][0] <= total ? boxTypes[i][0] : total
        count +=noOfBoxes * boxTypes[i][1]
        total -= noOfBoxes
        
        if(total === 0){
            return count;
        }
    }
    return count
};