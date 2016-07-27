var currentTime = new Date();
var year;
var month;
var day;
var hour;
var minute;
var seconds;
var secondsleft;
var minutesleft;
var hoursleft;
var daysleft;

function display()
{
currentTime = new Date();
year = currentTime.getFullYear();
month = currentTime.getMonth() + 1;
day = currentTime.getDate();
hour = currentTime.getHours();
minute = currentTime.getMinutes();
seconds = currentTime.getSeconds();

secondsleft = 60 - seconds;
if (secondsleft === 60)
{
    secondsleft = 0;
    minutesleft++;
}

minutesleft = 60 - minute - 1;

hoursleft = 24 - hour - 1 + 9;
if (minutesleft < 0)
{
    minutesleft+=60;
    hoursleft-=1;
}

daysleft = 358; // 23 = 358

// july 2016
if (month === 7 && year === 2016)
    daysleft = 31 - day + 350;
// aug 2016
if (month === 8 && year === 2016)
    daysleft = 31 - day + 319;
// sept 2016
if (month === 9 && year === 2016)
    daysleft = 30 - day + 288;
// oct 2016
if (month === 10 && year === 2016)
    daysleft = 31 - day + 258;
// nov 2016
if (month === 11 && year === 2016)
    daysleft = 30 - day + 227;
// dec 2016
if (month === 12 && year === 2016)
    daysleft = 31 - day + 197;
// jan 2017
if (month === 1 && year === 2017)
    daysleft = 31 - day + 166;
// feb 2017
if (month === 2 && year === 2017)
    daysleft = 28 - day + 135;
// mar 2017
if (month === 3 && year === 2017)
    daysleft = 31 - day + 107;
// april 2017
if (month === 4 && year === 2017)
    daysleft = 30 - day + 76;
// may 2017
if (month === 5 && year === 2017)
    daysleft = 31 - day + 46;
// june 2017
if (month === 6 && year === 2017)
    daysleft = 31 - day + 15;


if (secondsleft / 10 < 1)
{
    secondsleft = "0" + secondsleft;
}
if (minutesleft / 10 < 1)
{
    minutesleft = "0" + minutesleft;
}
if (hoursleft / 10 < 1)
{
    hoursleft = "0" + hoursleft;
}

document.write(daysleft + " days" + "<br/>" + hoursleft + " hours" + "<br/>" + "   " + minutesleft + " minutes" + "<br/>" + "   " + secondsleft + " seconds");
}


var varnum = setInterval(display(), 1000);

if (secondsleft === 0 && minutesleft === 0 && hoursleft === 0 && daysleft === 0)
    clearInterval(varnum);