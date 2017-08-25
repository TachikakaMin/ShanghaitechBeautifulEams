
var startDay = 0;
var startMonth =0 ;
var startFirstYear= 0;

var courseHour =new Array('', 8, 9,10,11,13,13,15,15,16,17,18,19,20,21);
var courseMinute =new Array('',15,10,15,10, 0,55, 0,55,50,45,40,35,30,15);

function GetTime_tym(interval, number, date) {
    switch (interval) {
        case "y ": {
            date.setFullYear(date.getFullYear() + number);
            return date;
            break;
        }
        case "q ": {
            date.setMonth(date.getMonth() + number * 3);
            return date;
            break;
        }
        case "m ": {
            date.setMonth(date.getMonth() + number);
            return date;
            break;
        }
        case "w ": {
            date.setDate(date.getDate() + number * 7);
            return date;
            break;
        }
        case "d ": {
            date.setDate(date.getDate() + number);
            return date;
            break;
        }
        case "h ": {
            date.setHours(date.getHours() + number);
            return date;
            break;
        }
        case "m ": {
            date.setMinutes(date.getMinutes() + number);
            return date;
            break;
        }
        case "s ": {
            date.setSeconds(date.getSeconds() + number);
            return date;
            break;
        }
        default: {
            date.setDate(date.getDate() + number);
            return date;
            break;
        }
    }
}

function Transform_tym(date){
     var year = date.getFullYear();
     var month = date.getMonth()+1;    //js从0开始取
     var day = date.getDate();
     var hour = date.getHours();
     var minutes = date.getMinutes();
     var second = date.getSeconds();
     return month+'/'+day+'/'+year+' '+hour+":"+minutes +":"+second;
}

var date_tym = new Date(startFirstYear,startMonth,startDay);
for (var i=0;i<n_tym;i++){
    for (var j=0;j<16;j++) {
        var x = j*7+dayNumber[i]-1;
        var time_tym = dayTimeNumber[i];
        var setStartTime = GetTime_tym('d',x,date_tym);
        setStartTime     = GetTime_tym('h',courseHour[time_tym],setStartTime);
        setStartTime     = GetTime_tym('m',courseMinute[time_tym],setStartTime);
        var setEndTime   = GetTime_tym('d',x,date_tym);
        setEndTime       = GetTime_tym('h',courseHour[time_tym+1],setEndTime);
        setEndTime       = GetTime_tym('m',courseMinute[time_tym+1],setEndTime);
        cal.addEvent( courseName, teacherName , room, Transform_tym(setStartTime), Transform_tym(setEndTime));
    }
}
