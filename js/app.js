let result = "";
let lightTheme = "/styles/light_theme.css";
let darkTheme = "/styles/dark_theme.css";

function dis(val){
    let res = document.getElementById("edu");
    if(res.value == "undefined"){
        res.value = "";
    }
    res.value += val;
    result = eval(res.value);
}

function solve(){
    document.getElementById('edu').value = result;
    console.log(result);
}

function clr(){
    document.getElementById('edu').value = '';
}

function changeTheme(){
    let mode = document.getElementById("mode");
    let theme = document.getElementById("theme");

    if(theme.getAttribute("href") == lightTheme){
        theme.href = darkTheme;
        console.log(theme, mode);
        mode.innerHTML = "Dark Theme 🌚";
    }else{
        theme.href = lightTheme;
        console.log(theme, mode);
        mode.innerHTML = "Light Theme 🌞";
    }
}
