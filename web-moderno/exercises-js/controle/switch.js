const printResult = function (grade) {

    if (grade <= 10 && grade >= 0) {

        switch (Math.floor(grade)) {
            case 10: case 9:
                console.log('Honor Board, Excellent!!')
                break
            case 8: case 7:
                console.log('Approved!! Congratulation')
                break
            case 6: case 5: case 4:
                console.log('Retake test')
                break
            case 3: case 2: case 1: case 0:
                console.log('Failed, you need to study more next semester')
                break
            default:
                console.log('invalid grade. text a value between 0 and 10')
        }
    } else {
        console.log('invalid grade. text a value between 0 and 10')
    }
    
}

printResult(10.5)
printResult(9.8)
printResult(7.6)
printResult(6)
printResult(3.8)
printResult(12.5)
printResult()