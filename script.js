let message=document.getElementById("display")
let count=0;
document.getElementById("lowerContainer").addEventListener("click",lowerContainer)
document.getElementById("addContainer").addEventListener("click",addContainer)
function lowerContainer(){
        
        let num=document.getElementById('display').textContent;
        num=parseInt(num)
      
        if(num>=1){
            num--;
            
            message.innerHTML=num
        }
}
function addContainer(){
    let num=document.getElementById('display').textContent;
    num=parseInt(num)
    if(num<=49){
        num++;
        
        message.innerHTML=num
    }
}