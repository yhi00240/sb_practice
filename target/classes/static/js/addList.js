var submitUrl = "http://localhost:8080/api/hello";
function addList(){
    var chk = document.getElementsByName("db");
    var chkList = [];
    for(var i=0; i<chk.length; i++){
        if(chk[i].checked == true){
            chkList.push(chk[i].value);
        }
    }

    $.ajax({
            url: submitUrl,
            data: "jihyunJjang",
            dataType: "text",
            method: "post",
            success: function(result){
                alert("success");
                alert(result);
            },
            error: function(request, status, error){
                alert("fail");
            }
     });


}