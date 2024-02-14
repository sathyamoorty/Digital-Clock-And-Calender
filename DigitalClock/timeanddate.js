let h=document.getElementById("Hour");
let text=document.getElementById("text");
let text1=document.getElementById("text1");
let text2=document.getElementById("text2");
let hour1=document.getElementById("ampm");

setInterval(time,1000)

function time(){
    let d=new Date();
    let hour=d.getHours();
    let min=d.getMinutes();
    let sec=d.getSeconds();

    if(hour1.value =="12H"){
        if(hour==0){
            hour=hour+12;
        }
        if(hour>=12){
            hour=hour-12;
        }
    }
    
    text.textContent=hour;
    text1.textContent=min;
    text2.textContent=sec;
  
let rt=document.getElementById("24");
let rt1=document.getElementById("24H")

}
let d1=document.getElementById("d1")
let d2=document.getElementById("d2")
let d3=document.getElementById("d3")

setInterval(daysin,1000)
function daysin()
{
    let count=new Date();
    let date=count.getDate();
    let dayInweek=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22"]
    let days=dayInweek[date];
    d1.textContent=`${days-1}`;
    
    let month=count.getMonth();
    let monthInYear=["jan","feb","mar","apr","may","july","aug","sept","oct","nov","dec"];
    let mon=monthInYear[month];
    d2.textContent=mon

    let year=count.getFullYear();
    d3.textContent=year
}
let s=document.getElementById("ampm")
let a=document.getElementById("am")
let p=document.getElementById("pm")

let hour=d.getHours();

let amAndpm;
if(hour>=12){
    p.textContent=amAndPm="pm"
}
else{
  a.textContent=aamAndPm="am"
}

let hours=document.getElementById("hours")
let sub1=document.getElementById("sub1");
let alarm=document.getElementById("alarm1");
let audio=document.getElementById("audio");

let a1=new Date();
submit.addEventListener("click",()=>{
   
  let a=  a1.getHours();
  let b=  a1.getMinutes();

  document.getElementById("text").textContent=a;
  
  function alarm()
  {
  let sound=document.getElementById("audio")
  sound.play();
  }
   
})
