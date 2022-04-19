function fizzBuzz(n) {
    for (let i = 0; i <= n; i++) {
        let r3 = i % 3
        let r5 = i % 5
        if (r3 === 0 || r5 === 0) {
            console.log(i);
        }
    
    }
}
fizzBuzz(50)
