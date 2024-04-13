function compareStr(str1, str2) {
    const lowerStr1 = str1.toLowerCase()
    const lowerStr2 = str2.toLowerCase()

    for (let i = 0; i < lowerStr1.length; i++) {
        if (lowerStr2.indexOf(lowerStr1[i]) === -1) {
            return false
        }
    }

    for (let j = 0; j < lowerStr2.length; j++) {
        if (lowerStr1.indexOf(lowerStr2[j]) === -1) {
            return false
        }
    }

    return true
}

const string1 = "Hello"
const string2 = "World"
console.log(compareStr(string1, string2))

const string3 = "capa"
const string4 = "paca"
console.log(compareStr(string3, string4))