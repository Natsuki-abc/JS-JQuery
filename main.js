const timeElement = document.getElementById('time');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

let elapsed = 0;
let intervalId = null;

function updateTime(){
    const ms = elapsed % 1000;
    const s = Math.floor(elapsed / 1000) % 60;
    const m = Math.floor(elapsed / (1000*60)) % 60;
    const h = Math.floor(elapsed / (1000*60*60));

    const msStr = ms.toString().slice(0,1);
    
    timeElement.innerHTML = `${h}:${m}:${s}:${msStr}`;
} 
start.addEventListener('click', function(e){
    if (intervalId !== null){ return; }
    let pre = new Date();
    intervalId = setInterval(function(){
        const now = new Date();
        elapsed += now - pre;
        pre = now;
        updateTime();
    },100);
});

stop.addEventListener('click', function(e){
    clearInterval(intervalId);
    intervalId = null;
});

reset.addEventListener('click', function(e){
    elapsed = 0;
    updateTime();
});
