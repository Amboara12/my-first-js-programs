function contains(str1,str2) {
    if (str1.includes(str2) ) {
        console.log(str2 + " est inclus dans " + str1);
    }
    else{
        console.log(str2 + "  n'est pas inclus dans " + str1);
    }
}
contains("lebo","lo")