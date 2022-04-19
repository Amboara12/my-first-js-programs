function longer(n,a) {
    let r = n.length
    let p = a.length
    if (r<p) {
        console.log("la chaine la plus long est " + a);
        
    }
    if (r > p) {
        console.log("la chaine la plus long est " + n);
    }
    if (r === p) {
        console.log("les chaines ont le meme longuer alors on affiche  " + n);
        
    }

}
longer("lebo","bole")
