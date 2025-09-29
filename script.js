let inputs = document.querySelectorAll('input');
let p = Array.from(document.querySelectorAll('form p:not([class])'));
let submissionBTN = document.querySelector('form');
function firstName() {
    if (inputs[0].value.length > 3) {
        p[0].style.display = 'none'
        return true
    }
    p[0].style.display = 'block'
    p[0].style.color = "red"
    return false;
}
console.log(p[0].innerHTML);

function lastName(params) {
    if (inputs[1].value.length > 3) {
         p[1].style.display = 'none'
        return true
    }
    p[1].style.display = 'block'
    p[1].style.color = "red"
    return false;
}
function email() {
    if (inputs[2].value.length > 4) {
         p[2].style.display = 'none'
        return true
    }
    p[2].style.display = 'block'
    p[2].style.color = "red"
    return false;
}
function number() {
    if (inputs[3].value.length == 10) {
         p[3].style.display = 'none'
        return true
    }
    p[3].style.display = 'block'
    p[3].style.color = "red"
    return false;
}


function dob() {
    if (inputs[4].value) {
         p[4].style.display = 'none'
        return true
    }
    p[4].style.display = 'block'
    p[4].style.color = "red"
    return false;
}
function gender() {
    if (inputs[5].checked || inputs[6].checked || inputs[7].checked) {
         p[5].style.display = 'none'
        return true
    }
    p[5].style.display = 'block'
    p[5].style.color = "red"
    return false;
}
let arr = []
function hobbei() {
    if (inputs[8].checked || inputs[9].checked || inputs[10].checked || inputs[11].checked || inputs[12].checked) {
        if (inputs[8].checked) { arr.push('Playing Chass') }
        if (inputs[9].checked) { arr.push('watching tv') }
        if (inputs[10].checked) { arr.push('reading books') }
        if (inputs[11].checked) { arr.push('riding bike') }
        if (inputs[12].checked) { arr.push('other') }
         p[6].style.display = 'none'
        return true
    }
    p[6].style.display = 'block'
    p[6].style.color = "red"
    return false;
}
function message() {
    if ((document.querySelector('textarea').value.length > 5)) {
         p[7].style.display = 'none'
        return true;
    }
    p[7].style.display = 'block'
    p[7].style.color = "red"
    return false;
}
function checkOne() {
    if (inputs[13].checked) {
         p[8].style.display = 'none'
        return true
    }
    p[8].style.display = 'block'
    p[8].style.color = "red"
    return false;
}
function checkTwo() {

    if (inputs[14].checked) {
        p[9].style.display = 'none'
        return true
    }
    p[9].style.display = 'block'
    p[9].style.color = "red"
    return false;
}
function checkThree() {

    if (inputs[15].checked) {
         p[10].style.display = 'none'
        return true
    }
    p[10].style.display = 'block'
    p[10].style.color = "red"
    return false;
}
submissionBTN.addEventListener('submit', (e) => {
    e.preventDefault()
    if (firstName() && lastName() && gender()  && email() &&
        message() && dob() && checkOne() && checkTwo() && checkThree() && number() && hobbei()) {
        console.log('First Name', inputs[0].value)
        console.log('Second Name', inputs[1].value)
        console.log('email', inputs[2].value)
        console.log('Number', inputs[3].value)
        console.log('DOB', inputs[4].value)
        if (inputs[5].checked) {
            console.log('Gender ', 'male')
        } else if (inputs[6].checked) {
            console.log('Gender ', 'female')
        } else {
            console.log('Gender ', 'other')
        }
        console.log('Hobbies', arr)
        console.log('message', document.querySelector('textarea').value)
        arr = []
    }
})