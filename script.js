function convert(){

    let score=parseFloat(document.getElementById("score").value);

    if(isNaN(score)){
        alert("Vui lòng nhập điểm!");
        return;
    }

    let result=document.getElementById("result");

    result.innerHTML=
    "Điểm SP2E của bạn là <br><br><b>"+score.toFixed(2)+"</b>";

}
