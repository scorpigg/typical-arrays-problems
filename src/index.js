
exports.min = function min (arr) {
    if(arr === undefined || arr.length == 0){
        return 0;
    }else{
        let min = arr[0];

        for (let i = 0; i < arr.length; i++) {
            if(min >= arr[i]){
                min = arr[i];
            }
        }
         return min;
    }
}

exports.max = function max (arr) {
    if(arr === undefined || arr.length == 0){
        return 0;
    }else{
        let max = arr[0];

        for (let i = 0; i < arr.length; i++) {
            if(max < arr[i]){
                max = arr[i];
            }
        }
         return max;
    }

}

exports.avg = function avg (arr) {
    if(arr === undefined || arr.length == 0){
        return 0;
    }else{
        let avg = 0;

        for (let i = 0; i < arr.length; i++) {
            avg += arr[i];
        }
         return avg/arr.length;
    }
}
