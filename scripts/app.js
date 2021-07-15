let result = "";

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
    
}