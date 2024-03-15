function saati(){
    const date = new Date();
    
    
    const hour = document.getElementById("hour-hand");
    const minute = document.getElementById("minute-hand");
    const second = document.getElementById("second-hand");


    const hourTime = date.getHours();
    const minuteTime = date.getMinutes();
    const secondTime = date.getSeconds();



    const secondDeg = secondTime * 6
    const minuteDeg = minuteTime * 6 + (secondTime / 60) * 6;
    const hourDeg = (hourTime % 12) * 30+ (minuteTime / 60) * 30;
    
    

    hour.style.transform = `rotate(${hourDeg}deg)`;
    minute.style.transform = `rotate(${minuteDeg}deg)`;
    second.style.transform = `rotate(${secondDeg}deg)`;


}


saati();


setInterval(saati,1000)