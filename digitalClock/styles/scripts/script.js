function displayTime(){
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let session = document.getElementById('session')


    
    if(min<10)
    {
        min = '0'+ min;
    } if(sec<10)
    {
        sec = '0'+ sec;
    }

    if(hrs => 12){
        session.innerHTML = 'PM';
    }else{
        session.innerHTML = 'AM';
    }

    if(hrs > 12){
        hrs = hrs - 12;
    }
    if(hrs<10)
    {
        hrs = '0'+ hrs;
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minute').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}

setInterval(displayTime, 10);


function DisplayDays(){
    const today = new Date();
    let eToday = today;

    const Dday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const Dmonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    document.getElementById('day').innerHTML = Dday[eToday.getDay()] + ', ';
    document.getElementById('month').innerHTML = Dmonths[eToday.getMonth()]+ ', ';
    document.getElementById('date').innerHTML = eToday.getDate()+ ', ';
    document.getElementById('year').innerHTML = eToday.getFullYear();

}

setInterval(DisplayDays,5);