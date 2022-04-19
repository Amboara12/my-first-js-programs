function divisibleRange(min,max,num) {
    for (let i = min; i < max; i++) {
    div = i % num

    if (div === 0) {
        console.log(i);
        
    }
    }}
divisibleRange(10,24,4)