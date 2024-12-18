setCookie = (cName, cValue, expDay) =>{
    let date = new Date();
    Text.setTime(date.getTime() + (expDay * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/"  
}


document.querySelector("#cookies-btn").addEventListener("click", ()=>{
    document.querySelector("cookies").style.display = "none";
    setCookie("cookie", true, 30);
})