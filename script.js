let inputs = document.querySelectorAll('input');
let p = Array.from(document.querySelectorAll('form p:not([class])'));
let submissionBTN = document.querySelector('form');
let dataArr = [];
function firstName() {
    if (inputs[0].value.length > 3) {
        p[0].style.display = 'none'
        dataArr.push(true)
       
    }else{
    p[0].style.display = 'block'
    p[0].style.color = "red"
      dataArr.push(true);}
}

function lastName(params) {
    if (inputs[1].value.length > 3) {
        p[1].style.display = 'none'
        dataArr.push(true)
     
    }else{
    p[1].style.display = 'block'
    p[1].style.color = "red"
      dataArr.push(true);}
}
function email() {
    if (inputs[2].value.length > 4) {
        p[2].style.display = 'none'
        dataArr.push(true)
    }else{
    p[2].style.display = 'block'
    p[2].style.color = "red"
    dataArr.push(true)
      dataArr.push(true);}
}
function number() {
    if (inputs[3].value.length == 10) {
        p[3].style.display = 'none'
        dataArr.push(true)
    }else{
    p[3].style.display = 'block'
    p[3].style.color = "red"
      dataArr.push(true);}
}


function dob() {
    if (inputs[4].value) {
        p[4].style.display = 'none'
        dataArr.push(true)
    }else{
    p[4].style.display = 'block'
    p[4].style.color = "red"
      dataArr.push(true);}
}
function gender() {
    if (inputs[5].checked || inputs[6].checked || inputs[7].checked) {
        p[5].style.display = 'none'
        dataArr.push(true)
    }else{
    p[5].style.display = 'block'
    p[5].style.color = "red"
      dataArr.push(true);}
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
        dataArr.push(true)
    }else{
    p[6].style.display = 'block'
    p[6].style.color = "red"}
}
function message() {
    if ((document.querySelector('textarea').value.length > 5)) {
        p[7].style.display = 'none'
        dataArr.push(true);
    }else{
    p[7].style.display = 'block'
    p[7].style.color = "red"}
}
function checkOne() {
    if (inputs[13].checked) {
        p[8].style.display = 'none'
        dataArr.push(true)
    }else{
    p[8].style.display = 'block'
    p[8].style.color = "red"}
}
function checkTwo() {
    if (inputs[14].checked) {
        p[9].style.display = 'none'
        dataArr.push(true)
    }else{
    p[9].style.display = 'block'
    p[9].style.color = "red"}
}
function checkThree() {
    if (inputs[15].checked) {
        p[10].style.display = 'none'
        dataArr.push(true)
    }else{
    p[10].style.display = 'block'
    p[10].style.color = "red"}
}
submissionBTN.addEventListener('submit', (e) => {
    console.log(dataArr.length)
    firstName() , lastName(), gender() , email() , message() , dob() , checkOne() , checkTwo() ,checkThree() , number() , hobbei()
    e.preventDefault()
    if (dataArr.length == 11) {
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
        dataArr=[]
        let formInput = Array.from(document.querySelectorAll('form input'))
        for (let i of formInput) {
            i.value= ""
            i.checked = false
            document.querySelector('textarea').value = ""
        }
    }
    arr = []
    dataArr=[]
})

let dropDownOnhumburger = document.querySelector(".dropDownOnhumburger")
function droperDown() {
    dropDownOnhumburger.classList.toggle('active');
}