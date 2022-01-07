const keyCode = document.querySelector(".key-code");
const keyName = document.querySelector(".key-name");
const key = document.querySelector(".key span");
const code = document.querySelector(".code span");

document.addEventListener("keydown", e =>{
    if (e.shiftKey && e.ctrlKey && e.key != "Control" && e.key != "Shift") {
        keyCode.innerHTML = e.keyCode;
        keyName.innerHTML ="shift + ctrl " + e.key;
        key.innerText = e.key;
        code.innerText = e.keyCode;
    } else if(e.shiftKey  && e.key != "Shift") {
        keyCode.innerHTML = e.keyCode;
        keyName.innerHTML ="shift " + e.key;
        key.innerText = e.key;
        code.innerText = e.keyCode;
    }else if(e.ctrlKey && e.key != "Control"){
        keyCode.innerHTML = e.keyCode;
        keyName.innerHTML ="ctrl " + e.key;
        key.innerText = e.key;
        code.innerText = e.keyCode;
    }else{
        keyCode.innerHTML = e.keyCode;
        keyName.innerHTML = e.key;
        key.innerText = e.key;
        code.innerText = e.keyCode;
    }
    console.log(e);
});