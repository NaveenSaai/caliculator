document.addEventListener("DOMContentLoaded",function(){
    var circle=document.getElementsByClassName("circle");
    var contentElement=document.getElementById("content");
    for(var i=0;i<circle.length;i++){
        circle[i].addEventListener("click",function(){
            var val=this.textContent;
            if(val=="AC"){
                contentElement.innerHTML="";
            }
            else if(val=="%"){
                contentElement.innerHTML+=val;
            }
            else if(val=="/"){
                contentElement.innerHTML+=val;
            }
            else if(val=="*"){
                contentElement.innerHTML+=val;
            }
            else if(val=="-"){
                contentElement.innerHTML+=val;
            }
            else if(val=="+"){
                    contentElement.innerHTML+=val;
            }
            else if(val=="<"){
                    contentElement.innerHTML=contentElement.textContent.slice(0,contentElement.textContent.length-1);
            }
            else if(val=="="){
                var result=eval(contentElement.textContent);
                contentElement.innerHTML=result;
            }
            else{
                contentElement.innerHTML+=val;
            }
        });
    }

});


