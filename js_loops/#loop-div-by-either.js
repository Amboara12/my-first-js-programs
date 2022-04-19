function divisibleRange(num1, num2, max) {
    let i = ""
    for (let i = 1; i < max; i++) {
        let div1 = i % num1
        let div2 = i % num2
        if (div1 === 0 || div2 === 0) {
            console.log(i);
            
        }
    
        
    
        
    }  
}
divisibleRange(7,5,20)