exports.min = function min(array) {
    if ( array == null || array.length === 0 ) {return 0;}
    let n = array[0];
    for (let i = 1; array.length > i; i++) {
        if (n >= array[i]) {
            n = array[i];
        }

    }
    return n;
};

exports.max = function max(array) {
    if ( array == null || array.length === 0 ) {return 0;}
    let n = array[0];
    for (let i = 1; array.length > i; i++) {
        if (n <= array[i]) {
            n = array[i];
        }

    }
    return n;
};

exports.avg = function avg(array) {
    if ( array == null || array.length === 0 ) {return 0;}
    let sum = 0;
        for (let i = 0; array.length > i; i++ ) {
        sum += array[i];
    }

    let av = sum / array.length;



    return av;
};
