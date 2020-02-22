const setResult = (params) => {
    document.getElementById('result').innerText = params
}

const getCode = () => {
    return document.getElementById('inputCode').value
}

const generateCode = () => {
    let pointer = 0
    array1 = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    code = getCode().toLowerCase()
    code = code.split('')
    result = ''
    for (let index = 0; index <= code.length; index++) {
        if (array1.indexOf(code[index]) != -1) {
            pointer = array1.indexOf(code[index])
            for (let index2 = 0; index2 < 3; index2++) {
                pointer = pointer - 1
                // console.log(pointer)
                if (pointer == array1.length) {
                    pointer = 0
                } else if (pointer == -1) {
                    pointer = array1.length - 1
                }
            } 
            // console.log(array1[pointer])
            result = result + array1[pointer]
        } else if (code[index] == ' ') {
            result = result + ' '
        }
    }
    setResult(result)
}