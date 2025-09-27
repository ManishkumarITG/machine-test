let inputs = document.querySelectorAll('input');
let submissionBTN = document.querySelector('form');
function firstName() {
    if (inputs[0].value.length > 3 ) {
        return true
    } alert("Plaese Inter a Valid Name")
     return false;
}
function lastName(params) {
    if (inputs[1].value.length > 3) {
        return true
    } alert("Inter a valid last name") 
    return false;
}
function email() {
    if (inputs[2].value.length > 4) {
        return true
    }alert("Email is requerd")
     return false;
}
function number() {
    if (inputs[3].value.length == 10) {
        return true
    }alert("inter a valid number") 
    return false;
}


function dob() {
    if (inputs[4].value) {
        return true
    }alert("dob is require")
     return false;
}
function gender() {
    if (inputs[5].checked || inputs[6].checked || inputs[7].checked) {
        return true
    }alert("plz choose a gender") 
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
        return true
    }alert("choose an hobbie atlist") 
    return false;
}
function message() {
    if ((document.querySelector('textarea').value.length >5)) {
        return true;
    } alert("masssge is require")
     return false;
}
function checkOne() {
    if (inputs[13].checked) {
        return true
    }alert("subscription is must") 
    return false;
}
function checkTwo() {

    if (inputs[14].checked) {
        return true
    }alert("plz tick on term and conditions")
     return false;
}
function checkThree() {

    if (inputs[15].checked) {
        return true
    }
    alert("accept promotional offers") 
    return false;
}
submissionBTN.addEventListener('submit', (e) => {
    e.preventDefault()
    if (firstName() && lastName() && gender() && hobbei() && email() &&
        message() && dob() && checkOne() && checkTwo() && checkThree() && number()) {
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
        arr =[]
    }
})