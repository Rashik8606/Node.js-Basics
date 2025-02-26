function  Pyramid () {
    for (i = 1; i<=6; i++){
        row = ''
        for (j = 1; j<=i; j++){
            row += '*'
        }
        console.log(row)
    }
}

Pyramid()