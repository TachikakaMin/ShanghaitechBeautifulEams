var debug_tym=2;
var saveAs=saveAs||typeof navigator!=="undefined"&&navigator.msSaveOrOpenBlob&&navigator.msSaveOrOpenBlob.bind(navigator)||function(e){"use strict";if(typeof navigator!=="undefined"&&/MSIE [1-9]\./.test(navigator.userAgent)){return}var t=e.document,n=function(){return e.URL||e.webkitURL||e},r=e.URL||e.webkitURL||e,i=t.createElementNS("http://www.w3.org/1999/xhtml","a"),s=!e.externalHost&&"download"in i,o=function(n){var r=t.createEvent("MouseEvents");r.initMouseEvent("click",true,false,e,0,0,0,0,0,false,false,false,false,0,null);n.dispatchEvent(r)},u=e.webkitRequestFileSystem,a=e.requestFileSystem||u||e.mozRequestFileSystem,f=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},l="application/octet-stream",c=0,h=[],p=function(){var e=h.length;while(e--){var t=h[e];if(typeof t==="string"){r.revokeObjectURL(t)}else{t.remove()}}h.length=0},d=function(e,t,n){t=[].concat(t);var r=t.length;while(r--){var i=e["on"+t[r]];if(typeof i==="function"){try{i.call(e,n||e)}catch(s){f(s)}}}},v=function(r,o){var f=this,p=r.type,v=false,m,g,y=function(){var e=n().createObjectURL(r);h.push(e);return e},b=function(){d(f,"writestart progress write writeend".split(" "))},w=function(){if(v||!m){m=y(r)}if(g){g.location.href=m}else{window.open(m,"_blank")}f.readyState=f.DONE;b()},E=function(e){return function(){if(f.readyState!==f.DONE){return e.apply(this,arguments)}}},S={create:true,exclusive:false},x;f.readyState=f.INIT;if(!o){o="download"}if(s){m=y(r);t=e.document;i=t.createElementNS("http://www.w3.org/1999/xhtml","a");i.href=m;i.download=o;var T=t.createEvent("MouseEvents");T.initMouseEvent("click",true,false,e,0,0,0,0,0,false,false,false,false,0,null);i.dispatchEvent(T);f.readyState=f.DONE;b();return}if(e.chrome&&p&&p!==l){x=r.slice||r.webkitSlice;r=x.call(r,0,r.size,l);v=true}if(u&&o!=="download"){o+=".download"}if(p===l||u){g=e}if(!a){w();return}c+=r.size;a(e.TEMPORARY,c,E(function(e){e.root.getDirectory("saved",S,E(function(e){var t=function(){e.getFile(o,S,E(function(e){e.createWriter(E(function(t){t.onwriteend=function(t){g.location.href=e.toURL();h.push(e);f.readyState=f.DONE;d(f,"writeend",t)};t.onerror=function(){var e=t.error;if(e.code!==e.ABORT_ERR){w()}};"writestart progress write abort".split(" ").forEach(function(e){t["on"+e]=f["on"+e]});t.write(r);f.abort=function(){t.abort();f.readyState=f.DONE};f.readyState=f.WRITING}),w)}),w)};e.getFile(o,{create:false},E(function(e){e.remove();t()}),E(function(e){if(e.code===e.NOT_FOUND_ERR){t()}else{w()}}))}),w)}),w)},m=v.prototype,g=function(e,t){return new v(e,t)};m.abort=function(){var e=this;e.readyState=e.DONE;d(e,"abort")};m.readyState=m.INIT=0;m.WRITING=1;m.DONE=2;m.error=m.onwritestart=m.onprogress=m.onwrite=m.onabort=m.onerror=m.onwriteend=null;e.addEventListener("unload",p,false);g.unload=function(){p();e.removeEventListener("unload",p,false)};return g}(typeof self!=="undefined"&&self||typeof window!=="undefined"&&window||this.content);if(typeof module!=="undefined")module.exports=saveAs;if(!(typeof Blob==="function"||typeof Blob==="object")||typeof URL==="undefined")if((typeof Blob==="function"||typeof Blob==="object")&&typeof webkitURL!=="undefined")self.URL=webkitURL;else var Blob=function(e){"use strict";var t=e.BlobBuilder||e.WebKitBlobBuilder||e.MozBlobBuilder||e.MSBlobBuilder||function(e){var t=function(e){return Object.prototype.toString.call(e).match(/^\[object\s(.*)\]$/)[1]},n=function(){this.data=[]},r=function(t,n,r){this.data=t;this.size=t.length;this.type=n;this.encoding=r},i=n.prototype,s=r.prototype,o=e.FileReaderSync,u=function(e){this.code=this[this.name=e]},a=("NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR "+"NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR").split(" "),f=a.length,l=e.URL||e.webkitURL||e,c=l.createObjectURL,h=l.revokeObjectURL,p=l,d=e.btoa,v=e.atob,m=e.ArrayBuffer,g=e.Uint8Array;r.fake=s.fake=true;while(f--){u.prototype[a[f]]=f+1}if(!l.createObjectURL){p=e.URL={}}p.createObjectURL=function(e){var t=e.type,n;if(t===null){t="application/octet-stream"}if(e instanceof r){n="data:"+t;if(e.encoding==="base64"){return n+";base64,"+e.data}else if(e.encoding==="URI"){return n+","+decodeURIComponent(e.data)}if(d){return n+";base64,"+d(e.data)}else{return n+","+encodeURIComponent(e.data)}}else if(c){return c.call(l,e)}};p.revokeObjectURL=function(e){if(e.substring(0,5)!=="data:"&&h){h.call(l,e)}};i.append=function(e){var n=this.data;if(g&&(e instanceof m||e instanceof g)){var i="",s=new g(e),a=0,f=s.length;for(;a<f;a++){i+=String.fromCharCode(s[a])}n.push(i)}else if(t(e)==="Blob"||t(e)==="File"){if(o){var l=new o;n.push(l.readAsBinaryString(e))}else{throw new u("NOT_READABLE_ERR")}}else if(e instanceof r){if(e.encoding==="base64"&&v){n.push(v(e.data))}else if(e.encoding==="URI"){n.push(decodeURIComponent(e.data))}else if(e.encoding==="raw"){n.push(e.data)}}else{if(typeof e!=="string"){e+=""}n.push(unescape(encodeURIComponent(e)))}};i.getBlob=function(e){if(!arguments.length){e=null}return new r(this.data.join(""),e,"raw")};i.toString=function(){return"[object BlobBuilder]"};s.slice=function(e,t,n){var i=arguments.length;if(i<3){n=null}return new r(this.data.slice(e,i>1?t:this.data.length),n,this.encoding)};s.toString=function(){return"[object Blob]"};return n}(e);return function(n,r){var i=r?r.type||"":"";var s=new t;if(n){for(var o=0,u=n.length;o<u;o++){s.append(n[o])}}return s.getBlob(i)}}(typeof self!=="undefined"&&self||typeof window!=="undefined"&&window||this.content||this);var ics=function(){"use strict";if(navigator.userAgent.indexOf("MSIE")>-1&&navigator.userAgent.indexOf("MSIE 10")==-1){console.log("Unsupported Browser");return}var e=navigator.appVersion.indexOf("Win")!==-1?"\r\n":"\n";var t=[];var n=["BEGIN:VCALENDAR","VERSION:2.0"].join(e);var r=e+"END:VCALENDAR";return{events:function(){return t},calendar:function(){return n+e+t.join(e)+r},addEvent:function(n,r,i,s,o){if(typeof n==="undefined"||typeof r==="undefined"||typeof i==="undefined"||typeof s==="undefined"||typeof o==="undefined"){return false}var u=new Date(s);var a=new Date(o);var f=("0000"+u.getFullYear().toString()).slice(-4);var l=("00"+(u.getMonth()+1).toString()).slice(-2);var c=("00"+u.getDate().toString()).slice(-2);var h=("00"+u.getHours().toString()).slice(-2);var p=("00"+u.getMinutes().toString()).slice(-2);var d=("00"+u.getMinutes().toString()).slice(-2);var v=("0000"+a.getFullYear().toString()).slice(-4);var m=("00"+(a.getMonth()+1).toString()).slice(-2);var g=("00"+a.getDate().toString()).slice(-2);var y=("00"+a.getHours().toString()).slice(-2);var b=("00"+a.getMinutes().toString()).slice(-2);var w=("00"+a.getMinutes().toString()).slice(-2);var E="";var S="";if(p+d+b+w!=0){E="T"+h+p+d;S="T"+y+b+w}var x=f+l+c+E;var T=v+m+g+S;var N=["BEGIN:VEVENT","CLASS:PUBLIC","DESCRIPTION:"+r,"DTSTART;VALUE=DATE:"+x,"DTEND;VALUE=DATE:"+T,"LOCATION:"+i,"SUMMARY;LANGUAGE=en-us:"+n,"TRANSP:TRANSPARENT","END:VEVENT"].join(e);t.push(N);return N},download:function(i,s){if(t.length<1){return false}s=typeof s!=="undefined"?s:".ics";i=typeof i!=="undefined"?i:"calendar";var o=n+e+t.join(e)+r;var u;if(navigator.userAgent.indexOf("MSIE 10")===-1){u=new Blob([o])}else{var a=new BlobBuilder;a.append(o);u=a.getBlob("text/x-vCalendar;charset="+document.characterSet)}saveAs(u,i+s);return o}}}



chrome.storage.local.get('on', function (data) {
    if (data['on'] == '1') {
        renderNewPage(); //开始渲染
    } else {
        $('#container').style.visibility = 'visible';
    }
});

/*!
 * Pikaday
 *
 * Copyright © 2014 David Bushell | BSD & MIT license | https://github.com/dbushell/Pikaday
 */
(function(root,factory){var moment;if(typeof exports==="object"){try{moment=require("moment")}catch(e){}module.exports=factory(moment)}else{if(typeof define==="function"&&define.amd){define(function(req){var id="moment";try{moment=req(id)}catch(e){}return factory(moment)})}else{root.Pikaday=factory(root.moment)}}}(this,function(moment){var hasMoment=typeof moment==="function",hasEventListeners=!!window.addEventListener,document=window.document,sto=window.setTimeout,addEvent=function(el,e,callback,capture){if(hasEventListeners){el.addEventListener(e,callback,!!capture)}else{el.attachEvent("on"+e,callback)}},removeEvent=function(el,e,callback,capture){if(hasEventListeners){el.removeEventListener(e,callback,!!capture)}else{el.detachEvent("on"+e,callback)}},trim=function(str){return str.trim?str.trim():str.replace(/^\s+|\s+$/g,"")},hasClass=function(el,cn){return(" "+el.className+" ").indexOf(" "+cn+" ")!==-1},addClass=function(el,cn){if(!hasClass(el,cn)){el.className=(el.className==="")?cn:el.className+" "+cn}},removeClass=function(el,cn){el.className=trim((" "+el.className+" ").replace(" "+cn+" "," "))},isArray=function(obj){return(/Array/).test(Object.prototype.toString.call(obj))},isDate=function(obj){return(/Date/).test(Object.prototype.toString.call(obj))&&!isNaN(obj.getTime())},isWeekend=function(date){var day=date.getDay();return day===0||day===6},isLeapYear=function(year){return year%4===0&&year%100!==0||year%400===0},getDaysInMonth=function(year,month){return[31,isLeapYear(year)?29:28,31,30,31,30,31,31,30,31,30,31][month]},setToStartOfDay=function(date){if(isDate(date)){date.setHours(0,0,0,0)}},compareDates=function(a,b){return a.getTime()===b.getTime()},extend=function(to,from,overwrite){var prop,hasProp;for(prop in from){hasProp=to[prop]!==undefined;if(hasProp&&typeof from[prop]==="object"&&from[prop]!==null&&from[prop].nodeName===undefined){if(isDate(from[prop])){if(overwrite){to[prop]=new Date(from[prop].getTime())}}else{if(isArray(from[prop])){if(overwrite){to[prop]=from[prop].slice(0)}}else{to[prop]=extend({},from[prop],overwrite)}}}else{if(overwrite||!hasProp){to[prop]=from[prop]}}}return to},fireEvent=function(el,eventName,data){var ev;if(document.createEvent){ev=document.createEvent("HTMLEvents");ev.initEvent(eventName,true,false);ev=extend(ev,data);el.dispatchEvent(ev)}else{if(document.createEventObject){ev=document.createEventObject();ev=extend(ev,data);el.fireEvent("on"+eventName,ev)}}},adjustCalendar=function(calendar){if(calendar.month<0){calendar.year-=Math.ceil(Math.abs(calendar.month)/12);calendar.month+=12}if(calendar.month>11){calendar.year+=Math.floor(Math.abs(calendar.month)/12);calendar.month-=12}return calendar},defaults={field:null,bound:undefined,ariaLabel:"Use the arrow keys to pick a date",position:"bottom left",reposition:true,format:"YYYY-MM-DD",toString:null,parse:null,defaultDate:null,setDefaultDate:false,firstDay:0,formatStrict:false,minDate:null,maxDate:null,yearRange:10,showWeekNumber:false,pickWholeWeek:false,minYear:0,maxYear:9999,minMonth:undefined,maxMonth:undefined,startRange:null,endRange:null,isRTL:false,yearSuffix:"",showMonthAfterYear:false,showDaysInNextAndPreviousMonths:false,enableSelectionDaysInNextAndPreviousMonths:false,numberOfMonths:1,mainCalendar:"left",container:undefined,blurFieldOnSelect:true,i18n:{previousMonth:"Previous Month",nextMonth:"Next Month",months:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},theme:null,events:[],onSelect:null,onOpen:null,onClose:null,onDraw:null,keyboardInput:true},renderDayName=function(opts,day,abbr){day+=opts.firstDay;while(day>=7){day-=7}return abbr?opts.i18n.weekdaysShort[day]:opts.i18n.weekdays[day]},renderDay=function(opts){var arr=[];var ariaSelected="false";if(opts.isEmpty){if(opts.showDaysInNextAndPreviousMonths){arr.push("is-outside-current-month");if(!opts.enableSelectionDaysInNextAndPreviousMonths){arr.push("is-selection-disabled")}}else{return'<td class="is-empty"></td>'}}if(opts.isDisabled){arr.push("is-disabled")}if(opts.isToday){arr.push("is-today")}if(opts.isSelected){arr.push("is-selected");ariaSelected="true"}if(opts.hasEvent){arr.push("has-event")}if(opts.isInRange){arr.push("is-inrange")}if(opts.isStartRange){arr.push("is-startrange")}if(opts.isEndRange){arr.push("is-endrange")}return'<td data-day="'+opts.day+'" class="'+arr.join(" ")+'" aria-selected="'+ariaSelected+'">'+'<button class="pika-button pika-day" type="button" '+'data-pika-year="'+opts.year+'" data-pika-month="'+opts.month+'" data-pika-day="'+opts.day+'">'+opts.day+"</button>"+"</td>"},renderWeek=function(d,m,y){var onejan=new Date(y,0,1),weekNum=Math.ceil((((new Date(y,m,d)-onejan)/86400000)+onejan.getDay()+1)/7);return'<td class="pika-week">'+weekNum+"</td>"
},renderRow=function(days,isRTL,pickWholeWeek,isRowSelected){return'<tr class="pika-row'+(pickWholeWeek?" pick-whole-week":"")+(isRowSelected?" is-selected":"")+'">'+(isRTL?days.reverse():days).join("")+"</tr>"},renderBody=function(rows){return"<tbody>"+rows.join("")+"</tbody>"},renderHead=function(opts){var i,arr=[];if(opts.showWeekNumber){arr.push("<th></th>")}for(i=0;i<7;i++){arr.push('<th scope="col"><abbr title="'+renderDayName(opts,i)+'">'+renderDayName(opts,i,true)+"</abbr></th>")}return"<thead><tr>"+(opts.isRTL?arr.reverse():arr).join("")+"</tr></thead>"},renderTitle=function(instance,c,year,month,refYear,randId){var i,j,arr,opts=instance._o,isMinYear=year===opts.minYear,isMaxYear=year===opts.maxYear,html='<div id="'+randId+'" class="pika-title" role="heading" aria-live="assertive">',monthHtml,yearHtml,prev=true,next=true;for(arr=[],i=0;i<12;i++){arr.push('<option value="'+(year===refYear?i-c:12+i-c)+'"'+(i===month?' selected="selected"':"")+((isMinYear&&i<opts.minMonth)||(isMaxYear&&i>opts.maxMonth)?'disabled="disabled"':"")+">"+opts.i18n.months[i]+"</option>")}monthHtml='<div class="pika-label">'+opts.i18n.months[month]+'<select class="pika-select pika-select-month" tabindex="-1">'+arr.join("")+"</select></div>";if(isArray(opts.yearRange)){i=opts.yearRange[0];j=opts.yearRange[1]+1}else{i=year-opts.yearRange;j=1+year+opts.yearRange}for(arr=[];i<j&&i<=opts.maxYear;i++){if(i>=opts.minYear){arr.push('<option value="'+i+'"'+(i===year?' selected="selected"':"")+">"+(i)+"</option>")}}yearHtml='<div class="pika-label">'+year+opts.yearSuffix+'<select class="pika-select pika-select-year" tabindex="-1">'+arr.join("")+"</select></div>";if(opts.showMonthAfterYear){html+=yearHtml+monthHtml}else{html+=monthHtml+yearHtml}if(isMinYear&&(month===0||opts.minMonth>=month)){prev=false}if(isMaxYear&&(month===11||opts.maxMonth<=month)){next=false}if(c===0){html+='<button class="pika-prev'+(prev?"":" is-disabled")+'" type="button">'+opts.i18n.previousMonth+"</button>"}if(c===(instance._o.numberOfMonths-1)){html+='<button class="pika-next'+(next?"":" is-disabled")+'" type="button">'+opts.i18n.nextMonth+"</button>"}return html+="</div>"},renderTable=function(opts,data,randId){return'<table cellpadding="0" cellspacing="0" class="pika-table" role="grid" aria-labelledby="'+randId+'">'+renderHead(opts)+renderBody(data)+"</table>"},Pikaday=function(options){var self=this,opts=self.config(options);self._onMouseDown=function(e){if(!self._v){return}e=e||window.event;var target=e.target||e.srcElement;if(!target){return}if(!hasClass(target,"is-disabled")){if(hasClass(target,"pika-button")&&!hasClass(target,"is-empty")&&!hasClass(target.parentNode,"is-disabled")){self.setDate(new Date(target.getAttribute("data-pika-year"),target.getAttribute("data-pika-month"),target.getAttribute("data-pika-day")));if(opts.bound){sto(function(){self.hide();if(opts.blurFieldOnSelect&&opts.field){opts.field.blur()}},100)}}else{if(hasClass(target,"pika-prev")){self.prevMonth()}else{if(hasClass(target,"pika-next")){self.nextMonth()}}}}if(!hasClass(target,"pika-select")){if(e.preventDefault){e.preventDefault()}else{e.returnValue=false;return false}}else{self._c=true}};self._onChange=function(e){e=e||window.event;var target=e.target||e.srcElement;if(!target){return}if(hasClass(target,"pika-select-month")){self.gotoMonth(target.value)}else{if(hasClass(target,"pika-select-year")){self.gotoYear(target.value)}}};self._onKeyChange=function(e){e=e||window.event;if(self.isVisible()){switch(e.keyCode){case 13:case 27:if(opts.field){opts.field.blur()}break;case 37:e.preventDefault();self.adjustDate("subtract",1);break;case 38:self.adjustDate("subtract",7);break;case 39:self.adjustDate("add",1);break;case 40:self.adjustDate("add",7);break}}};self._onInputChange=function(e){var date;if(e.firedBy===self){return}if(opts.parse){date=opts.parse(opts.field.value,opts.format)}else{if(hasMoment){date=moment(opts.field.value,opts.format,opts.formatStrict);date=(date&&date.isValid())?date.toDate():null}else{date=new Date(Date.parse(opts.field.value))}}if(isDate(date)){self.setDate(date)}if(!self._v){self.show()}};self._onInputFocus=function(){self.show()};self._onInputClick=function(){self.show()};self._onInputBlur=function(){var pEl=document.activeElement;do{if(hasClass(pEl,"pika-single")){return}}while((pEl=pEl.parentNode));if(!self._c){self._b=sto(function(){self.hide()},50)}self._c=false};self._onClick=function(e){e=e||window.event;var target=e.target||e.srcElement,pEl=target;if(!target){return}if(!hasEventListeners&&hasClass(target,"pika-select")){if(!target.onchange){target.setAttribute("onchange","return;");addEvent(target,"change",self._onChange)}}do{if(hasClass(pEl,"pika-single")||pEl===opts.trigger){return}}while((pEl=pEl.parentNode));if(self._v&&target!==opts.trigger&&pEl!==opts.trigger){self.hide()}};self.el=document.createElement("div");self.el.className="pika-single"+(opts.isRTL?" is-rtl":"")+(opts.theme?" "+opts.theme:"");addEvent(self.el,"mousedown",self._onMouseDown,true);
addEvent(self.el,"touchend",self._onMouseDown,true);addEvent(self.el,"change",self._onChange);if(opts.keyboardInput){addEvent(document,"keydown",self._onKeyChange)}if(opts.field){if(opts.container){opts.container.appendChild(self.el)}else{if(opts.bound){document.body.appendChild(self.el)}else{opts.field.parentNode.insertBefore(self.el,opts.field.nextSibling)}}addEvent(opts.field,"change",self._onInputChange);if(!opts.defaultDate){if(hasMoment&&opts.field.value){opts.defaultDate=moment(opts.field.value,opts.format).toDate()}else{opts.defaultDate=new Date(Date.parse(opts.field.value))}opts.setDefaultDate=true}}var defDate=opts.defaultDate;if(isDate(defDate)){if(opts.setDefaultDate){self.setDate(defDate,true)}else{self.gotoDate(defDate)}}else{self.gotoDate(new Date())}if(opts.bound){this.hide();self.el.className+=" is-bound";addEvent(opts.trigger,"click",self._onInputClick);addEvent(opts.trigger,"focus",self._onInputFocus);addEvent(opts.trigger,"blur",self._onInputBlur)}else{this.show()}};Pikaday.prototype={config:function(options){if(!this._o){this._o=extend({},defaults,true)}var opts=extend(this._o,options,true);opts.isRTL=!!opts.isRTL;opts.field=(opts.field&&opts.field.nodeName)?opts.field:null;opts.theme=(typeof opts.theme)==="string"&&opts.theme?opts.theme:null;opts.bound=!!(opts.bound!==undefined?opts.field&&opts.bound:opts.field);opts.trigger=(opts.trigger&&opts.trigger.nodeName)?opts.trigger:opts.field;opts.disableWeekends=!!opts.disableWeekends;opts.disableDayFn=(typeof opts.disableDayFn)==="function"?opts.disableDayFn:null;var nom=parseInt(opts.numberOfMonths,10)||1;opts.numberOfMonths=nom>4?4:nom;if(!isDate(opts.minDate)){opts.minDate=false}if(!isDate(opts.maxDate)){opts.maxDate=false}if((opts.minDate&&opts.maxDate)&&opts.maxDate<opts.minDate){opts.maxDate=opts.minDate=false}if(opts.minDate){this.setMinDate(opts.minDate)}if(opts.maxDate){this.setMaxDate(opts.maxDate)}if(isArray(opts.yearRange)){var fallback=new Date().getFullYear()-10;opts.yearRange[0]=parseInt(opts.yearRange[0],10)||fallback;opts.yearRange[1]=parseInt(opts.yearRange[1],10)||fallback}else{opts.yearRange=Math.abs(parseInt(opts.yearRange,10))||defaults.yearRange;if(opts.yearRange>100){opts.yearRange=100}}return opts},toString:function(format){format=format||this._o.format;if(!isDate(this._d)){return""}if(this._o.toString){return this._o.toString(this._d,format)}if(hasMoment){return moment(this._d).format(format)}return this._d.toDateString()},getMoment:function(){return hasMoment?moment(this._d):null},setMoment:function(date,preventOnSelect){if(hasMoment&&moment.isMoment(date)){this.setDate(date.toDate(),preventOnSelect)}},getDate:function(){return isDate(this._d)?new Date(this._d.getTime()):null},setDate:function(date,preventOnSelect){if(!date){this._d=null;if(this._o.field){this._o.field.value="";fireEvent(this._o.field,"change",{firedBy:this})}return this.draw()}if(typeof date==="string"){date=new Date(Date.parse(date))}if(!isDate(date)){return}var min=this._o.minDate,max=this._o.maxDate;if(isDate(min)&&date<min){date=min}else{if(isDate(max)&&date>max){date=max}}this._d=new Date(date.getTime());setToStartOfDay(this._d);this.gotoDate(this._d);if(this._o.field){this._o.field.value=this.toString();fireEvent(this._o.field,"change",{firedBy:this})}if(!preventOnSelect&&typeof this._o.onSelect==="function"){this._o.onSelect.call(this,this.getDate())}},gotoDate:function(date){var newCalendar=true;if(!isDate(date)){return}if(this.calendars){var firstVisibleDate=new Date(this.calendars[0].year,this.calendars[0].month,1),lastVisibleDate=new Date(this.calendars[this.calendars.length-1].year,this.calendars[this.calendars.length-1].month,1),visibleDate=date.getTime();lastVisibleDate.setMonth(lastVisibleDate.getMonth()+1);lastVisibleDate.setDate(lastVisibleDate.getDate()-1);newCalendar=(visibleDate<firstVisibleDate.getTime()||lastVisibleDate.getTime()<visibleDate)}if(newCalendar){this.calendars=[{month:date.getMonth(),year:date.getFullYear()}];if(this._o.mainCalendar==="right"){this.calendars[0].month+=1-this._o.numberOfMonths}}this.adjustCalendars()},adjustDate:function(sign,days){var day=this.getDate()||new Date();var difference=parseInt(days)*24*60*60*1000;var newDay;if(sign==="add"){newDay=new Date(day.valueOf()+difference)}else{if(sign==="subtract"){newDay=new Date(day.valueOf()-difference)}}this.setDate(newDay)},adjustCalendars:function(){this.calendars[0]=adjustCalendar(this.calendars[0]);for(var c=1;c<this._o.numberOfMonths;c++){this.calendars[c]=adjustCalendar({month:this.calendars[0].month+c,year:this.calendars[0].year})}this.draw()},gotoToday:function(){this.gotoDate(new Date())},gotoMonth:function(month){if(!isNaN(month)){this.calendars[0].month=parseInt(month,10);this.adjustCalendars()}},nextMonth:function(){this.calendars[0].month++;this.adjustCalendars()},prevMonth:function(){this.calendars[0].month--;this.adjustCalendars()},gotoYear:function(year){if(!isNaN(year)){this.calendars[0].year=parseInt(year,10);this.adjustCalendars()}},setMinDate:function(value){if(value instanceof Date){setToStartOfDay(value);
this._o.minDate=value;this._o.minYear=value.getFullYear();this._o.minMonth=value.getMonth()}else{this._o.minDate=defaults.minDate;this._o.minYear=defaults.minYear;this._o.minMonth=defaults.minMonth;this._o.startRange=defaults.startRange}this.draw()},setMaxDate:function(value){if(value instanceof Date){setToStartOfDay(value);this._o.maxDate=value;this._o.maxYear=value.getFullYear();this._o.maxMonth=value.getMonth()}else{this._o.maxDate=defaults.maxDate;this._o.maxYear=defaults.maxYear;this._o.maxMonth=defaults.maxMonth;this._o.endRange=defaults.endRange}this.draw()},setStartRange:function(value){this._o.startRange=value},setEndRange:function(value){this._o.endRange=value},draw:function(force){if(!this._v&&!force){return}var opts=this._o,minYear=opts.minYear,maxYear=opts.maxYear,minMonth=opts.minMonth,maxMonth=opts.maxMonth,html="",randId;if(this._y<=minYear){this._y=minYear;if(!isNaN(minMonth)&&this._m<minMonth){this._m=minMonth}}if(this._y>=maxYear){this._y=maxYear;if(!isNaN(maxMonth)&&this._m>maxMonth){this._m=maxMonth}}randId="pika-title-"+Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,2);for(var c=0;c<opts.numberOfMonths;c++){html+='<div class="pika-lendar">'+renderTitle(this,c,this.calendars[c].year,this.calendars[c].month,this.calendars[0].year,randId)+this.render(this.calendars[c].year,this.calendars[c].month,randId)+"</div>"}this.el.innerHTML=html;if(opts.bound){if(opts.field.type!=="hidden"){sto(function(){opts.trigger.focus()},1)}}if(typeof this._o.onDraw==="function"){this._o.onDraw(this)}if(opts.bound){opts.field.setAttribute("aria-label",opts.ariaLabel)}},adjustPosition:function(){var field,pEl,width,height,viewportWidth,viewportHeight,scrollTop,left,top,clientRect;if(this._o.container){return}this.el.style.position="absolute";field=this._o.trigger;pEl=field;width=this.el.offsetWidth;height=this.el.offsetHeight;viewportWidth=window.innerWidth||document.documentElement.clientWidth;viewportHeight=window.innerHeight||document.documentElement.clientHeight;scrollTop=window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop;if(typeof field.getBoundingClientRect==="function"){clientRect=field.getBoundingClientRect();left=clientRect.left+window.pageXOffset;top=clientRect.bottom+window.pageYOffset}else{left=pEl.offsetLeft;top=pEl.offsetTop+pEl.offsetHeight;while((pEl=pEl.offsetParent)){left+=pEl.offsetLeft;top+=pEl.offsetTop}}if((this._o.reposition&&left+width>viewportWidth)||(this._o.position.indexOf("right")>-1&&left-width+field.offsetWidth>0)){left=left-width+field.offsetWidth}if((this._o.reposition&&top+height>viewportHeight+scrollTop)||(this._o.position.indexOf("top")>-1&&top-height-field.offsetHeight>0)){top=top-height-field.offsetHeight}this.el.style.left=left+"px";this.el.style.top=top+"px"},render:function(year,month,randId){var opts=this._o,now=new Date(),days=getDaysInMonth(year,month),before=new Date(year,month,1).getDay(),data=[],row=[];setToStartOfDay(now);if(opts.firstDay>0){before-=opts.firstDay;if(before<0){before+=7}}var previousMonth=month===0?11:month-1,nextMonth=month===11?0:month+1,yearOfPreviousMonth=month===0?year-1:year,yearOfNextMonth=month===11?year+1:year,daysInPreviousMonth=getDaysInMonth(yearOfPreviousMonth,previousMonth);var cells=days+before,after=cells;while(after>7){after-=7}cells+=7-after;var isWeekSelected=false;for(var i=0,r=0;i<cells;i++){var day=new Date(year,month,1+(i-before)),isSelected=isDate(this._d)?compareDates(day,this._d):false,isToday=compareDates(day,now),hasEvent=opts.events.indexOf(day.toDateString())!==-1?true:false,isEmpty=i<before||i>=(days+before),dayNumber=1+(i-before),monthNumber=month,yearNumber=year,isStartRange=opts.startRange&&compareDates(opts.startRange,day),isEndRange=opts.endRange&&compareDates(opts.endRange,day),isInRange=opts.startRange&&opts.endRange&&opts.startRange<day&&day<opts.endRange,isDisabled=(opts.minDate&&day<opts.minDate)||(opts.maxDate&&day>opts.maxDate)||(opts.disableWeekends&&isWeekend(day))||(opts.disableDayFn&&opts.disableDayFn(day));if(isEmpty){if(i<before){dayNumber=daysInPreviousMonth+dayNumber;monthNumber=previousMonth;yearNumber=yearOfPreviousMonth}else{dayNumber=dayNumber-days;monthNumber=nextMonth;yearNumber=yearOfNextMonth}}var dayConfig={day:dayNumber,month:monthNumber,year:yearNumber,hasEvent:hasEvent,isSelected:isSelected,isToday:isToday,isDisabled:isDisabled,isEmpty:isEmpty,isStartRange:isStartRange,isEndRange:isEndRange,isInRange:isInRange,showDaysInNextAndPreviousMonths:opts.showDaysInNextAndPreviousMonths,enableSelectionDaysInNextAndPreviousMonths:opts.enableSelectionDaysInNextAndPreviousMonths};if(opts.pickWholeWeek&&isSelected){isWeekSelected=true}row.push(renderDay(dayConfig));if(++r===7){if(opts.showWeekNumber){row.unshift(renderWeek(i-before,month,year))}data.push(renderRow(row,opts.isRTL,opts.pickWholeWeek,isWeekSelected));row=[];r=0;isWeekSelected=false}}return renderTable(opts,data,randId)},isVisible:function(){return this._v},show:function(){if(!this.isVisible()){this._v=true;
this.draw();removeClass(this.el,"is-hidden");if(this._o.bound){addEvent(document,"click",this._onClick);this.adjustPosition()}if(typeof this._o.onOpen==="function"){this._o.onOpen.call(this)}}},hide:function(){var v=this._v;if(v!==false){if(this._o.bound){removeEvent(document,"click",this._onClick)}this.el.style.position="static";this.el.style.left="auto";this.el.style.top="auto";addClass(this.el,"is-hidden");this._v=false;if(v!==undefined&&typeof this._o.onClose==="function"){this._o.onClose.call(this)}}},destroy:function(){var opts=this._o;this.hide();removeEvent(this.el,"mousedown",this._onMouseDown,true);removeEvent(this.el,"touchend",this._onMouseDown,true);removeEvent(this.el,"change",this._onChange);if(opts.keyboardInput){removeEvent(document,"keydown",this._onKeyChange)}if(opts.field){removeEvent(opts.field,"change",this._onInputChange);if(opts.bound){removeEvent(opts.trigger,"click",this._onInputClick);removeEvent(opts.trigger,"focus",this._onInputFocus);removeEvent(opts.trigger,"blur",this._onInputBlur)}}if(this.el.parentNode){this.el.parentNode.removeChild(this.el)}}};return Pikaday}));


var dayTimeNumber = new Array(1000); //第x节课1--13
var dayNumber = new Array(1000); //星期编号 1--5
var n_tym = 0; //课程总数
var courseName_tym = new Array(1000); //课程名称
var teacherName_tym = new Array(1000); //教师
var room_tym = new Array(1000);   //上课教室
var courseType = new Array(1000); //单双周课程还是全勤
var courseTot = new Array(1000); //多少周的课
var courseBehind = new Array(1000); //是否为后8周的课
var picker ; //初始日期选择

var starTime;//导出ics的设定初始时间
var startMonth,startFirstYear,startDay;

//以下注释作废
// function testDate(date){
//         var year = date.getFullYear();
//         var month = date.getMonth()+1;    //js从0开始取
//         var day = date.getDate();
//         if (month<10) month='0'+month;
//         if (day<10) day='0'+day;
//         if (year<1000) year='0'+year;
//         var dayTime = ''+year+month+day;
//         var ans;
//         $.ajax({
//             url:'http://tool.bitefu.net/jiari/?d='+dayTime,
//             type:'get',
//             success:function(response){
//                 ans = response.text;   //jquery框架会自动处理json
//             }
//         });
//         return ans;
// }

//提交初始时间,并生产ics
function submitTime() {
    var cal_tym = ics();
    if (debug_tym === 2 ) console.log(starTime);
    var courseHour =  new Array('', 8, 9,10,11,13,13,15,15,16,17,18,19,20,21);
    var courseMinute =new Array('',15,10,15,10, 0,55, 0,55,50,45,40,35,30,15);

    function GetTime_tym(dayx,hourx,minutex, date) {
        var x = date.getTime() + dayx*86400000 + hourx*3600000 + minutex*60000;
        return new Date(x);
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

    var date_tym = new Date(startFirstYear,startMonth-1,startDay);

    for (var i=0;i<n_tym;i++){
        for (var j=0;j<courseTot[i];j++) {
            var x;
            if (courseBehind[i] == 1) x = (j+8)*7+dayNumber[i]-1;
            if (courseType[i] == 0) x = j*7+dayNumber[i]-1;
            if (courseType[i] == 1) x = j*14+dayNumber[i]-1;
            if (courseType[i] == 2) x = j*14+dayTimeNumber[i]-1+7;
            var time_tym = dayTimeNumber[i];
            var setStartTime = GetTime_tym(x,courseHour[time_tym],courseMinute[time_tym],date_tym);
            // if (setStartTime.getHours() >= 12)  setStartTime = Transform_tym(setStartTime) ;
            //     else setStartTime = Transform_tym(setStartTime) + ' am';
            var setEndTime   = GetTime_tym(x,courseHour[time_tym+1],courseMinute[time_tym+1],date_tym);
            // if (setEndTime.getHours() >= 12)  setEndTime = Transform_tym(setEndTime) ;
            //     else setEndTime = Transform_tym(setEndTime) + ' am';
            cal_tym.addEvent( courseName_tym[i], teacherName_tym[i] , room_tym[i], setStartTime, setEndTime);
            console.log(courseName_tym[i]);
            console.log(setStartTime);
            console.log(setEndTime);
        }
    }
    //导出ics
    var el =document.getElementById ("calsave");
    el.addEventListener ("click",cal_tym.download, false);
    alert("可以点击下载ics，如果提交后要修改日期，请重新刷新页面");
}



/**
 * 获取子元素在父元素的的索引
 */
function indexOf(node) {
    var parent = node.parentNode;

    for (var i in parent.children) {
        if (parent.children[i] == node) {
            return i;
        }
    }
    return null;
}
/**
 * 解析table中的数据
 */
function parseTableData(table) {
    var data = {
        tableHead: [],
        tableContent: []
    };
    var head = table.querySelector('.gridhead tr');
    for (var i in head.children) {
        if (head.children[i].innerText) {
            data.tableHead.push(head.children[i].innerText);
        }
    }
    var content = table.querySelectorAll('tbody tr');
    for (var i in content) {
        var lineContent = [];
        for (var k in content[i].children) {
            if (content[i].children[k].innerText) {
                lineContent.push(content[i].children[k].innerText);
            } else if (k == 2 || k==3 || k == 7) {
                lineContent.push('');
            }
        }
        if (lineContent.length) {
            data.tableContent.push(lineContent);
        }
    }

    return data;
}


/**
 * 清除现有页面并加载新页面
 */
function renderNewPage(theData) {
    var html = $('html');
    var length = html.childElementCount;
    for (var i = 0; i <= length; i++) {
        html.removeChild(html.childNodes[0]);
    }
    var xhr = new XMLHttpRequest();
    xhr.open("GET", chrome.extension.getURL('/content.html'), true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var login_page_src = xhr.responseText;
            $('html').innerHTML = login_page_src;
            renderNav();
            renderGrade();
            renderCourse(); //渲染课程表
        }
    };
}
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<渲染导航栏>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
function renderNav() {
    var ul = $('#nav ul');
    ul.onclick = function (e) {
        if (e.target.nodeName == 'UL') {
            return null;
        }
        var blocks = ['grade-block', 'class-block', 'exam-block', 'other-block'];
        for (var i in ul.children) {
            var li = ul.children[i];
            if (li.className == 'nav-li-active') {
                li.classList.toggle('nav-li-active');
            }
        }
        e.target.className = 'nav-li-active';
        window.scrollTo(0, $('#' + blocks[indexOf(e.target)]).offsetTop - 50);
    };
}
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<渲染成绩模块>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
function renderGrade() {
    var initTimes = 0; //用于控制请求的发出次数，超出后则停止发出请求
    try {
        getGradeSource();
    } catch (e) {
        if (initTimes++ < 4) {
            setTimeout(getGradeSource(), 1000);
        }; //请求三次
        console.log("重试次数：" + initTimes);
    }
    /**
     * 异步加载原始数据
     */
    function getGradeSource() {
        ajax({
            method: 'GET',
            url: 'http://eams.shanghaitech.edu.cn/eams/teach/grade/course/person!historyCourseGrade.action?projectType=MAJOR',
            async: true,
            handler: function handler(response) {
                var div = document.createElement('div');
                div.innerHTML = response;
                var data = {
                    intro: parseTableData(div.querySelector('table')),
                    detail: parseTableData(div.querySelectorAll('table')[1])
                }; //获取源数据
                data = sumDataFormater(data); //格式化源数据
                renderGradePart(data); //渲染成绩模块
                renderRestudyPart(data); //渲染重修建议
            }
        });
    }

    /**
     * 渲染成绩模块
     * @param data：成绩数据
     */
    function renderGradePart(data) {
        if (!data) {
            console.log('解析数据出错！');
            return null;
        }
        //用于渲染综述部分的三个饼图
        var setChart = function setChart(name, title, option, flag) {
            var chart = echarts.init($(name + ' #chart'), 'macarons');
            chart.setOption(option);
            var value = $(name + ' #value');
            value.innerText = data.sum.sum[flag];
            var titleNode = $(name + ' #title');
            titleNode.innerText = title;
        };
        //下面开始设置综合的三大块
        var option1 = {
            tooltip: {
                show: true
            },
            series: [{
                type: 'pie',
                radius: ['50%', '80%'],
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                hoverAnimation: false,
                data: data.sum.detail.gpa
            }]
        };
        var option2 = {
            tooltip: {
                show: true
            },
            series: [{
                type: 'pie',
                radius: ['50%', '80%'],
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                hoverAnimation: false,
                data: data.sum.detail.aver
            }]
        };
        var option3 = {
            tooltip: {
                show: true
            },
            series: [{
                type: 'pie',
                radius: ['50%', '80%'],
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                hoverAnimation: false,
                data: data.sum.detail.study
            }]
        };
        setChart('#gpa-sum', 'GPA', option1, 'gpa');
        // setChart('#aver-grade', '平均分', option2, 'aver');
        setChart('#study-grade', '总学分', option3, 'study');

        //下面开始设置成绩趋势曲线
        var chart4 = echarts.init($('#chart-2'), 'macarons');
        var option4 = {
            title: {
                show: true,
                text: '成绩趋势图',
                right: '5',
                textStyle: {
                    color: '#000',
                    fontSize: 16
                }
            },
            legend: {
                data: ['GPA'/*, '平均分'*/],
                left: '5',
                top: '5'
            },
            grid: {
                bottom: 25,
                top: 25,
                left: 0,
                right: 0,
                show: false
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            xAxis: [{
                type: 'category',
                data: data.eachYear.year,
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#aaa'
                    }
                }
            }],
            yAxis: [{
                type: 'value',
                min: 1.5,
                max: 4,
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#aaa'
                    }
                },
                axisLabel: {
                    show: false
                }
            }, {
                type: 'value',
                min: 50,
                max: 100,
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitArea: {
                    show: false
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#aaa'
                    }
                },
                axisLabel: {
                    show: false
                }
            }],
            series: [{
                name: 'GPA',
                type: 'line',
                hoverAnimation: false,
                data: data.eachYear.gpa,
                yAxisIndex: 0
            }/*, {
                name: '平均分',
                type: 'line',
                hoverAnimation: false,
                data: data.eachYear.aver,
                yAxisIndex: 1
            }*/]
        };
        chart4.setOption(option4);
        chart4.hideLoading();

        //渲染选择器模块
        var selector = $('#detail-selector ul');
        var setDetailChart = function setDetailChart(index) {
            /**
             * 设置详细分数图表的配置项
             */
            if (!index) index = 0;
            var chart = echarts.init($('#detail-chart'), 'macarons');
            var curData = data.detail[index];
            var option = {
                grid: {
                    left: '30',
                    right: '30'
                },
                legend: {
                    data: [/*'成绩', */'GPA'],
                    left: '25',
                    top: '0'
                },
                title: {
                    text: curData.year + '学期成绩分布图',
                    right: '25',
                    top: '0',
                    textStyle: {
                        fontSize: '16',
                        color: '#000'
                    }
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                xAxis: [{
                    type: 'category',
                    data: curData.subject,
                    axisLabel: {
                        textStyle: {
                            fontSize: '10'
                        },
                        formatter: function formatter(value) {
                            if (value.length > 4) {
                                return value.match(/.{0,3}/) + '...';
                            } else {
                                return value;
                            }
                        }
                    }
                }],
                yAxis: [{
                    type: 'value',
                    max: 4.0,
                    min: 1.0
                }/*{
                    type: 'value',
                    max: 100,
                    min: 40
                }*/, {
                    type: 'value',
                    max: 4.0,
                    min: 1.0
                }],
                series: [/*{
                    name: '成绩',
                    type: 'bar',
                    data: curData.grade,
                    yAxisIndex: 0,
                    markLine: {
                        symbol: '',
                        lineStyle: {
                            normal: {
                                width: 2,
                                type: 'solid'
                            }
                        },
                        label: {
                            normal: {
                                show: false
                            }
                        },
                        data: [{
                            yAxis: 85,
                            name: '优秀线',
                            lineStyle: {
                                normal: {
                                    color: '#72e480',
                                    opacity: 0.5,
                                    type: 'dotted'
                                }
                            }
                        }, {
                            yAxis: 60,
                            name: '及格线',
                            lineStyle: {
                                normal: {
                                    color: '#ef5a5a',
                                    opacity: 0.5,
                                    type: 'dotted'
                                }
                            }
                        }]
                    }
                },*/ {
                    name: 'GPA',
                    type: 'bar',
                    data: curData.gpa,
                    yAxisIndex: 1
                }]
            };
            chart.hideLoading();
            chart.setOption(option);
        };
        for (var i in data.detail) {
            var li = document.createElement('li');
            li.innerText = data.detail[i].year;
            selector.appendChild(li);
        }
        $('#detail-selector').style.width = 109 * data.detail.length + 'px'; // 选择器的宽度
        $('#detail-selector ul').onclick = function (e) {
            var ul = $('#detail-selector ul');
            for (var i in ul.children) {
                var li = ul.children[i];
                if (li.className == 'detail-li-active') {
                    li.classList.toggle('detail-li-active');
                }
            }

            e.target.className = 'detail-li-active';
            setDetailChart(indexOf(e.target));
        };
        $('#detail-selector ul').children.className = 'detail-li-active';
        setDetailChart(0);
    }
    /**
     * 将原始数据转换为可用的图表数据
     */
    function sumDataFormater(sourceData) {
        // console.log(sourceData);
        var data = {
            sum: {
                sum: {
                    gpa: 0,
                    aver: 0,
                    study: 0
                },
                detail: {
                    year: [],
                    gpa: [],
                    aver: [],
                    study: []
                }
            },
            eachYear: {
                year: [],
                aver: [],
                gpa: []
            },
            detail: []
        };
        /**
         * 归档data.sum的sum部分
         */
        var length = sourceData.intro.tableContent.length;
        data.sum.sum.gpa = sourceData.intro.tableContent[length - 2][3];
        data.sum.sum.study = sourceData.intro.tableContent[length - 2][2];
        for (var i in sourceData.detail.tableContent) {
            var point = parseFloat(sourceData.detail.tableContent[i][6]);
            var grade = sourceData.detail.tableContent[i][sourceData.detail.tableContent[i].length - 1];
            if (grade.trim() == '通过') {
                grade = 4;
            } else {
                grade = isFinite(parseFloat(grade)) ? parseFloat(grade) : 4
            }
            data.sum.sum.aver += grade / parseFloat(data.sum.sum.study) * point;
            // console.log("grade",grade);
            // console.log("parseFloat(data.sum.sum.study)",parseFloat(data.sum.sum.study));
            // console.log("point",point);
            // console.log("aver",data.sum.sum.aver);
        };
        data.sum.sum.aver = data.sum.sum.aver.toFixed(2);
        // console.log(data);

        /**
         * 提取年份
         */
        var tmpYear = {};
        for (var i in sourceData.intro.tableContent) {
            var tmp = sourceData.intro.tableContent[i];
            if (tmp.length == 5) {
                tmpYear[tmp[0] + '-' + tmp[1]] = [];
            }
        }
        for (var i in sourceData.intro.tableContent) {
            var tmp = sourceData.intro.tableContent[i];
            if (tmp.length == 5) {
                tmpYear[tmp[0] + '-' + tmp[1]] = [tmp[3], tmp[4]];
            }
        }
        // console.log(tmpYear);
        /**
         * 提取每学期详细分数
         */
        var tmpData = {};
        for (var i in sourceData.detail.tableContent) {
            var tmp = sourceData.detail.tableContent[i];
            tmpData[tmp[0] + '-' + tmp[1]] = []; //tmpData[tmp[0].replace(/\s/, '-')] = []; //初始化
        }
        for (var i in sourceData.detail.tableContent) {
            var tmp = sourceData.detail.tableContent[i];
            var className = tmp[4].trim();
            var classPoint = tmp[6].trim();
            var classGrade = tmp[tmp.length - 1].trim();
            if (isNaN(parseFloat(classGrade))) {
                classGrade = tmp[tmp.length-2].trim() == 'P' ? 4 : 0;
            }
            tmpData[tmp[0] + '-' + tmp[1]].push([className, classPoint, classGrade]);//tmpData[tmp[0].replace(/\s/, '-')].push([className, classPoint, classGrade]);
        }
        // console.log(tmpData);

        for (var i in tmpData) {
            /**
             * 计算每学期的平均分，暂存入tmpYear
             */
            var aver = 0;
            var gpa_sum = 0;
            for (var k in tmpData[i]) {
                var tmp = tmpData[i][k];
                gpa_sum += parseFloat(tmp[1]);
            }
            for (var k in tmpData[i]) {
                var tmp = tmpData[i][k];
                aver += parseFloat(tmp[1]) / gpa_sum * parseFloat(tmp[2]);
            }
            aver = aver.toFixed(2);
            tmpYear[i].push(aver);
        }
        /**
         * 将数字转换为汉字，并将年份排序
         */
        var strReplace = ['大一上', '大一下', '大一暑', '大二上', '大二下', '大二暑', '大三上', '大三下', '大三暑', '大四上', '大四下', '大四暑'];
        var chYear = [];
        for (var i in tmpYear) {
            chYear.push(i);
            chYear = chYear.sort();
        }

        for (var i in chYear) {
            /**
             * 归档data.sum的detail部分
             */
            data.sum.detail.year.push(strReplace[i]);
            data.sum.detail.study.push({
                value: tmpYear[chYear[i]][0],
                name: strReplace[i]
            });
            data.sum.detail.gpa.push({
                value: tmpYear[chYear[i]][1],
                name: strReplace[i]
            });
            data.sum.detail.aver.push({
                value: tmpYear[chYear[i]][2],
                name: strReplace[i]
            });
            /**
             * 归档data.eachYear
             */
            data.eachYear.year.push(strReplace[i]);
            data.eachYear.aver.push(tmpYear[chYear[i]][2]);
            data.eachYear.gpa.push(tmpYear[chYear[i]][1]);
            /**
             * 归档data.detail
             */
            var tmp = {
                year: '',
                subject: [],
                grade: [],
                gpa: [],
                credit: []
            };
            for (var k in tmpData[chYear[i]]) {
                tmp.year = strReplace[i];
                tmp.gpa.push(tmpData[chYear[i]][k][2]);// tmp.grade.push(tmpData[chYear[i]][k][2]);
                tmp.credit.push(tmpData[chYear[i]][k][1]);
                tmp.subject.push(tmpData[chYear[i]][k][0]);
                // tmp.gpa = tmp.grade.map(function (x) {
                //     return parseFloat((((x > 85 ? x = 85 : x < 45 ? 45 : x) - 60) * 0.1).toFixed(1)) + parseFloat(1.5);
                // });
            }
            data.detail.push(tmp);
        }

        return data;
    }
}

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<渲染重修建议列表>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
function renderRestudyPart(data) {
    /**
     * @param data：成绩数据
     * @description 处理建议重修模块的数据，算法是用GPA与满绩的差值乘以该门课的学分，
     *              分值越大越值得重修
     */
    // console.log("data",data);
    if (!data) {
        console.log('data有问题！');
        return null;
    }

    var res = []; //用于存放结果数据
    data = data.detail;
    data.forEach(function (array) {
        for (var i in array.credit) {
            var studyInfo = {
                value: 0,
                name: array.subject[i] //课程名称
            };
            studyInfo.value = ((4 - parseFloat(array.gpa[i])) * parseFloat(array.credit[i])).toFixed(2);
            if (studyInfo.value > 0) {
                res.push(studyInfo); //剔除为0值
            }
        }
    });
    res.sort(function (a, b) {
        return parseFloat(a.value) < parseFloat(b.value) ? 1 : -1;
    }); //将res降序排序
    res = res.slice(0, 10); //截取前十个
    var restudyChart = echarts.init($('#restudy-chart'), 'macarons');
    var restudyOptions = {
        grid: {
            left: '30',
            right: '30',
            bottom: '10',
            top: '10'
        },
        tooltip: {
            trigger: 'yxis',
            axisPointer: {
                type: 'shadow'
            }
        },
        xAxis: [{
            type: 'value',
            position: 'top',
            show: false
        }],
        yAxis: [{
            type: 'category',
            inverse: true,
            data: function () {
                var data = [];
                res.forEach(function (i) {
                    data.push(i.name);
                });
                return data; //获取科目名称
            }(),
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            }
        }],
        series: [{
            name: '拉低指数',
            type: 'bar',
            barMaxWidth: 30,
            barMinHeight: 30,
            data: function () {
                var data = [];
                res.forEach(function (i) {
                    data.push(i.value);
                });
                return data; //获取指数
            }(),
            itemStyle: {
                normal: {
                    color: 'rgb(239, 90, 90)'
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'insideLeft',
                    formatter: ' {b}',
                    textStyle: {
                        fontSize: 14
                    }
                }
            }
        }]
    };
    restudyChart.setOption(restudyOptions);
}
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<渲染课表>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//

function timeTable() {
    this.data = {};
    this.requestTmp = 0;
    this.init();
}

//     Underscore.js 1.7.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r=Array.prototype,e=Object.prototype,u=Function.prototype,i=r.push,a=r.slice,o=r.concat,l=e.toString,c=e.hasOwnProperty,f=Array.isArray,s=Object.keys,p=u.bind,h=function(n){return n instanceof h?n:this instanceof h?void(this._wrapped=n):new h(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=h),exports._=h):n._=h,h.VERSION="1.7.0";var g=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}};h.iteratee=function(n,t,r){return null==n?h.identity:h.isFunction(n)?g(n,t,r):h.isObject(n)?h.matches(n):h.property(n)},h.each=h.forEach=function(n,t,r){if(null==n)return n;t=g(t,r);var e,u=n.length;if(u===+u)for(e=0;u>e;e++)t(n[e],e,n);else{var i=h.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},h.map=h.collect=function(n,t,r){if(null==n)return[];t=h.iteratee(t,r);for(var e,u=n.length!==+n.length&&h.keys(n),i=(u||n).length,a=Array(i),o=0;i>o;o++)e=u?u[o]:o,a[o]=t(n[e],e,n);return a};var v="Reduce of empty array with no initial value";h.reduce=h.foldl=h.inject=function(n,t,r,e){null==n&&(n=[]),t=g(t,e,4);var u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length,o=0;if(arguments.length<3){if(!a)throw new TypeError(v);r=n[i?i[o++]:o++]}for(;a>o;o++)u=i?i[o]:o,r=t(r,n[u],u,n);return r},h.reduceRight=h.foldr=function(n,t,r,e){null==n&&(n=[]),t=g(t,e,4);var u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;if(arguments.length<3){if(!a)throw new TypeError(v);r=n[i?i[--a]:--a]}for(;a--;)u=i?i[a]:a,r=t(r,n[u],u,n);return r},h.find=h.detect=function(n,t,r){var e;return t=h.iteratee(t,r),h.some(n,function(n,r,u){return t(n,r,u)?(e=n,!0):void 0}),e},h.filter=h.select=function(n,t,r){var e=[];return null==n?e:(t=h.iteratee(t,r),h.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e)},h.reject=function(n,t,r){return h.filter(n,h.negate(h.iteratee(t)),r)},h.every=h.all=function(n,t,r){if(null==n)return!0;t=h.iteratee(t,r);var e,u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;for(e=0;a>e;e++)if(u=i?i[e]:e,!t(n[u],u,n))return!1;return!0},h.some=h.any=function(n,t,r){if(null==n)return!1;t=h.iteratee(t,r);var e,u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;for(e=0;a>e;e++)if(u=i?i[e]:e,t(n[u],u,n))return!0;return!1},h.contains=h.include=function(n,t){return null==n?!1:(n.length!==+n.length&&(n=h.values(n)),h.indexOf(n,t)>=0)},h.invoke=function(n,t){var r=a.call(arguments,2),e=h.isFunction(t);return h.map(n,function(n){return(e?t:n[t]).apply(n,r)})},h.pluck=function(n,t){return h.map(n,h.property(t))},h.where=function(n,t){return h.filter(n,h.matches(t))},h.findWhere=function(n,t){return h.find(n,h.matches(t))},h.max=function(n,t,r){var e,u,i=-1/0,a=-1/0;if(null==t&&null!=n){n=n.length===+n.length?n:h.values(n);for(var o=0,l=n.length;l>o;o++)e=n[o],e>i&&(i=e)}else t=h.iteratee(t,r),h.each(n,function(n,r,e){u=t(n,r,e),(u>a||u===-1/0&&i===-1/0)&&(i=n,a=u)});return i},h.min=function(n,t,r){var e,u,i=1/0,a=1/0;if(null==t&&null!=n){n=n.length===+n.length?n:h.values(n);for(var o=0,l=n.length;l>o;o++)e=n[o],i>e&&(i=e)}else t=h.iteratee(t,r),h.each(n,function(n,r,e){u=t(n,r,e),(a>u||1/0===u&&1/0===i)&&(i=n,a=u)});return i},h.shuffle=function(n){for(var t,r=n&&n.length===+n.length?n:h.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=h.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},h.sample=function(n,t,r){return null==t||r?(n.length!==+n.length&&(n=h.values(n)),n[h.random(n.length-1)]):h.shuffle(n).slice(0,Math.max(0,t))},h.sortBy=function(n,t,r){return t=h.iteratee(t,r),h.pluck(h.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var m=function(n){return function(t,r,e){var u={};return r=h.iteratee(r,e),h.each(t,function(e,i){var a=r(e,i,t);n(u,e,a)}),u}};h.groupBy=m(function(n,t,r){h.has(n,r)?n[r].push(t):n[r]=[t]}),h.indexBy=m(function(n,t,r){n[r]=t}),h.countBy=m(function(n,t,r){h.has(n,r)?n[r]++:n[r]=1}),h.sortedIndex=function(n,t,r,e){r=h.iteratee(r,e,1);for(var u=r(t),i=0,a=n.length;a>i;){var o=i+a>>>1;r(n[o])<u?i=o+1:a=o}return i},h.toArray=function(n){return n?h.isArray(n)?a.call(n):n.length===+n.length?h.map(n,h.identity):h.values(n):[]},h.size=function(n){return null==n?0:n.length===+n.length?n.length:h.keys(n).length},h.partition=function(n,t,r){t=h.iteratee(t,r);var e=[],u=[];return h.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},h.first=h.head=h.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:0>t?[]:a.call(n,0,t)},h.initial=function(n,t,r){return a.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},h.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:a.call(n,Math.max(n.length-t,0))},h.rest=h.tail=h.drop=function(n,t,r){return a.call(n,null==t||r?1:t)},h.compact=function(n){return h.filter(n,h.identity)};var y=function(n,t,r,e){if(t&&h.every(n,h.isArray))return o.apply(e,n);for(var u=0,a=n.length;a>u;u++){var l=n[u];h.isArray(l)||h.isArguments(l)?t?i.apply(e,l):y(l,t,r,e):r||e.push(l)}return e};h.flatten=function(n,t){return y(n,t,!1,[])},h.without=function(n){return h.difference(n,a.call(arguments,1))},h.uniq=h.unique=function(n,t,r,e){if(null==n)return[];h.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=h.iteratee(r,e));for(var u=[],i=[],a=0,o=n.length;o>a;a++){var l=n[a];if(t)a&&i===l||u.push(l),i=l;else if(r){var c=r(l,a,n);h.indexOf(i,c)<0&&(i.push(c),u.push(l))}else h.indexOf(u,l)<0&&u.push(l)}return u},h.union=function(){return h.uniq(y(arguments,!0,!0,[]))},h.intersection=function(n){if(null==n)return[];for(var t=[],r=arguments.length,e=0,u=n.length;u>e;e++){var i=n[e];if(!h.contains(t,i)){for(var a=1;r>a&&h.contains(arguments[a],i);a++);a===r&&t.push(i)}}return t},h.difference=function(n){var t=y(a.call(arguments,1),!0,!0,[]);return h.filter(n,function(n){return!h.contains(t,n)})},h.zip=function(n){if(null==n)return[];for(var t=h.max(arguments,"length").length,r=Array(t),e=0;t>e;e++)r[e]=h.pluck(arguments,e);return r},h.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},h.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=h.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}for(;u>e;e++)if(n[e]===t)return e;return-1},h.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=n.length;for("number"==typeof r&&(e=0>r?e+r+1:Math.min(e,r+1));--e>=0;)if(n[e]===t)return e;return-1},h.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var d=function(){};h.bind=function(n,t){var r,e;if(p&&n.bind===p)return p.apply(n,a.call(arguments,1));if(!h.isFunction(n))throw new TypeError("Bind must be called on a function");return r=a.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(a.call(arguments)));d.prototype=n.prototype;var u=new d;d.prototype=null;var i=n.apply(u,r.concat(a.call(arguments)));return h.isObject(i)?i:u}},h.partial=function(n){var t=a.call(arguments,1);return function(){for(var r=0,e=t.slice(),u=0,i=e.length;i>u;u++)e[u]===h&&(e[u]=arguments[r++]);for(;r<arguments.length;)e.push(arguments[r++]);return n.apply(this,e)}},h.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=h.bind(n[r],n);return n},h.memoize=function(n,t){var r=function(e){var u=r.cache,i=t?t.apply(this,arguments):e;return h.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},h.delay=function(n,t){var r=a.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},h.defer=function(n){return h.delay.apply(h,[n,1].concat(a.call(arguments,1)))},h.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var l=function(){o=r.leading===!1?0:h.now(),a=null,i=n.apply(e,u),a||(e=u=null)};return function(){var c=h.now();o||r.leading!==!1||(o=c);var f=t-(c-o);return e=this,u=arguments,0>=f||f>t?(clearTimeout(a),a=null,o=c,i=n.apply(e,u),a||(e=u=null)):a||r.trailing===!1||(a=setTimeout(l,f)),i}},h.debounce=function(n,t,r){var e,u,i,a,o,l=function(){var c=h.now()-a;t>c&&c>0?e=setTimeout(l,t-c):(e=null,r||(o=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,a=h.now();var c=r&&!e;return e||(e=setTimeout(l,t)),c&&(o=n.apply(i,u),i=u=null),o}},h.wrap=function(n,t){return h.partial(t,n)},h.negate=function(n){return function(){return!n.apply(this,arguments)}},h.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},h.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},h.before=function(n,t){var r;return function(){return--n>0?r=t.apply(this,arguments):t=null,r}},h.once=h.partial(h.before,2),h.keys=function(n){if(!h.isObject(n))return[];if(s)return s(n);var t=[];for(var r in n)h.has(n,r)&&t.push(r);return t},h.values=function(n){for(var t=h.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},h.pairs=function(n){for(var t=h.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},h.invert=function(n){for(var t={},r=h.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},h.functions=h.methods=function(n){var t=[];for(var r in n)h.isFunction(n[r])&&t.push(r);return t.sort()},h.extend=function(n){if(!h.isObject(n))return n;for(var t,r,e=1,u=arguments.length;u>e;e++){t=arguments[e];for(r in t)c.call(t,r)&&(n[r]=t[r])}return n},h.pick=function(n,t,r){var e,u={};if(null==n)return u;if(h.isFunction(t)){t=g(t,r);for(e in n){var i=n[e];t(i,e,n)&&(u[e]=i)}}else{var l=o.apply([],a.call(arguments,1));n=new Object(n);for(var c=0,f=l.length;f>c;c++)e=l[c],e in n&&(u[e]=n[e])}return u},h.omit=function(n,t,r){if(h.isFunction(t))t=h.negate(t);else{var e=h.map(o.apply([],a.call(arguments,1)),String);t=function(n,t){return!h.contains(e,t)}}return h.pick(n,t,r)},h.defaults=function(n){if(!h.isObject(n))return n;for(var t=1,r=arguments.length;r>t;t++){var e=arguments[t];for(var u in e)n[u]===void 0&&(n[u]=e[u])}return n},h.clone=function(n){return h.isObject(n)?h.isArray(n)?n.slice():h.extend({},n):n},h.tap=function(n,t){return t(n),n};var b=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof h&&(n=n._wrapped),t instanceof h&&(t=t._wrapped);var u=l.call(n);if(u!==l.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]===n)return e[i]===t;var a=n.constructor,o=t.constructor;if(a!==o&&"constructor"in n&&"constructor"in t&&!(h.isFunction(a)&&a instanceof a&&h.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c,f;if("[object Array]"===u){if(c=n.length,f=c===t.length)for(;c--&&(f=b(n[c],t[c],r,e)););}else{var s,p=h.keys(n);if(c=p.length,f=h.keys(t).length===c)for(;c--&&(s=p[c],f=h.has(t,s)&&b(n[s],t[s],r,e)););}return r.pop(),e.pop(),f};h.isEqual=function(n,t){return b(n,t,[],[])},h.isEmpty=function(n){if(null==n)return!0;if(h.isArray(n)||h.isString(n)||h.isArguments(n))return 0===n.length;for(var t in n)if(h.has(n,t))return!1;return!0},h.isElement=function(n){return!(!n||1!==n.nodeType)},h.isArray=f||function(n){return"[object Array]"===l.call(n)},h.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},h.each(["Arguments","Function","String","Number","Date","RegExp"],function(n){h["is"+n]=function(t){return l.call(t)==="[object "+n+"]"}}),h.isArguments(arguments)||(h.isArguments=function(n){return h.has(n,"callee")}),"function"!=typeof/./&&(h.isFunction=function(n){return"function"==typeof n||!1}),h.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},h.isNaN=function(n){return h.isNumber(n)&&n!==+n},h.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===l.call(n)},h.isNull=function(n){return null===n},h.isUndefined=function(n){return n===void 0},h.has=function(n,t){return null!=n&&c.call(n,t)},h.noConflict=function(){return n._=t,this},h.identity=function(n){return n},h.constant=function(n){return function(){return n}},h.noop=function(){},h.property=function(n){return function(t){return t[n]}},h.matches=function(n){var t=h.pairs(n),r=t.length;return function(n){if(null==n)return!r;n=new Object(n);for(var e=0;r>e;e++){var u=t[e],i=u[0];if(u[1]!==n[i]||!(i in n))return!1}return!0}},h.times=function(n,t,r){var e=Array(Math.max(0,n));t=g(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},h.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},h.now=Date.now||function(){return(new Date).getTime()};var _={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},w=h.invert(_),j=function(n){var t=function(t){return n[t]},r="(?:"+h.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};h.escape=j(_),h.unescape=j(w),h.result=function(n,t){if(null==n)return void 0;var r=n[t];return h.isFunction(r)?n[t]():r};var x=0;h.uniqueId=function(n){var t=++x+"";return n?n+t:t},h.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var A=/(.)^/,k={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},O=/\\|'|\r|\n|\u2028|\u2029/g,F=function(n){return"\\"+k[n]};h.template=function(n,t,r){!t&&r&&(t=r),t=h.defaults({},t,h.templateSettings);var e=RegExp([(t.escape||A).source,(t.interpolate||A).source,(t.evaluate||A).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,a,o){return i+=n.slice(u,o).replace(O,F),u=o+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":a&&(i+="';\n"+a+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var a=new Function(t.variable||"obj","_",i)}catch(o){throw o.source=i,o}var l=function(n){return a.call(this,n,h)},c=t.variable||"obj";return l.source="function("+c+"){\n"+i+"}",l},h.chain=function(n){var t=h(n);return t._chain=!0,t};var E=function(n){return this._chain?h(n).chain():n};h.mixin=function(n){h.each(h.functions(n),function(t){var r=h[t]=n[t];h.prototype[t]=function(){var n=[this._wrapped];return i.apply(n,arguments),E.call(this,r.apply(h,n))}})},h.mixin(h),h.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=r[n];h.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],E.call(this,r)}}),h.each(["concat","join","slice"],function(n){var t=r[n];h.prototype[n]=function(){return E.call(this,t.apply(this._wrapped,arguments))}}),h.prototype.value=function(){return this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return h})}).call(this);
//# sourceMappingURL=underscore-min.map

timeTable.prototype = {
    init: function init() {
        /**
         * 获取初始数据
         */
        var func = this;
        this.data.originalTable = document.querySelector('#course-table').innerHTML; //保存课程表的初始状态
        var timeStamp = new Date().getTime(); //获取时间戳
        var url = 'http://eams.shanghaitech.edu.cn/eams/courseTableForStd.action?_=' + timeStamp;
        ajax({
            method: 'GET',
            url: url,
            handler: function handler(res) {
                if (res) {
                    func.step1(res);
                }
            }
        });
    },
    step1: function step1(sourceText) {
        /**
         * 继续获取下一步数据
         */
        var func = this;
        var tmp = sourceText.match(/jQuery.*searchTable/)[0].split('.');
        this.data.tagId = tmp[0].match(/semester.*Semester/)[0];
        this.data.ids = sourceText.match(/ids.*\)/)[0].match(/\d+/)[0];
        this.data.value = tmp[1].match(/value\:\"(\d*)/)[1];
        var url = 'http://eams.shanghaitech.edu.cn/eams/dataQuery.action?tagId=' + this.data.tagId + '&dataType=semesterCalendar&value=' + this.data.value + '&empty=false';
        ajax({
            method: 'GET',
            url: url,
            handler: function handler(res) {
                func.step2(res);
            }
        });
    },
    step2: function step2(sourceData) {
        /**
         * 为获取课程表数据做准备
         */
        var tmp = eval('(' + sourceData + ')').semesters;
        var semester = {};
        for (var i in tmp) {
            var v = tmp[i];
            var year = v[0].schoolYear.split('-')[0];
            semester[year] = {};
            v.forEach(function (value, index) {
                semester[year][index.toString()] = value.id;
            });
        }
        // console.log(semester);
        this.data.semesters = semester;
        this.renderDropdown();
        this.renderExamPart();
    },
    getSourceTable: function getSourceTable(semester) {
        /**
         * 封装ajax方法，用来获取课程表的源数据
         */
        var url = 'http://eams.shanghaitech.edu.cn/eams/courseTableForStd!courseTable.action?ignoreHead=1&setting.kind=std&semester.id=' + semester + '&ids=' + this.data.ids + '&tutorRedirectstudentId=' + this.data.ids;
        var func = this;
        ajax({
            method: 'GET',
            url: url,
            handler: function (res) {
            	// var div = document.createElement('div');
             //    div.innerHTML = res+"<script>alert(1)</script>";
             //
             	var js = JSON.stringify(res).match(/table0 = new CourseTable.*?table0\.marshalTable/g)[0].split("table0.marshalTable")[0];
             	js = "function CourseTable (year, semester) {\n\tthis.year = year;\n\tthis.semester = semester;\n\tthis.activities = [];\n\t_.times(12 * 7, function (n) {\n\t\tthis.activities[n] = [];\n\t}, this);\n}\nfunction TaskActivity(uk1, instructor, uk2, titleAndId, uk3, place, weeks) {\n\tthis.uk1 = uk1;\n\tthis.instructor = instructor;\n\tthis.uk2 = uk2;\n\tthis.titleAndId = titleAndId;\n\tthis.uk3 = uk3;\n\tthis.place = place;\n\tthis.weeks = weeks;\n}" + js.replace(/\\n/g,"\n").replace(/\\t/g,"\t").replace(/\\"/g,"\"");
                // console.log(js);
                var table0;
                eval(js);
               	// console.log(table0);
                table0 = table0.activities.map(function (v) {
                	if(v.length > 0){
	                    return {
	                        courseName: v[0].titleAndId.split('(')[0],
	                        courseId: v[0].titleAndId.split('(')[1].replace(')', ''),
	                        teacher: v[0].instructor,
	                        room: v[0].place,
	                        date: func.timeStringParser(v[0].weeks)
	                    };
                	}
                	else{
                		return {};
                	}
                });
                // console.log(table0);
                this.data.course = table0;
                func.renderCourseTable();
            }.bind(func)
        });
    },
    timeStringParser: function timeStringParser(str) {
        /**
         * 解析排课的字符串，转化为人类可读的文字
         * str是长度为53的源字符串
         */
        //if (str.length != 53) return null;
        // console.log(str);
        var res = [];
        var matchFullWeek = new RegExp(/1{2,}/g); //匹配连续周
        var matchSingleWeek = new RegExp(/(10){2,}/g); //匹配奇偶周
        var matchStr = function matchStr(pattern, str) {
            //获取str中匹配pattern的所有字串
            var tmpRes = [];
            var tmp = null;
            var tmpStr = str;
            var getZeroStr = function getZeroStr(num) {
                /**
                 * 获取num个0
                 */
                var zeros = '';
                while (num-- > 0) {
                    zeros += '0';
                }
                return zeros;
            };
            while (true) {
                tmp = pattern.exec(tmpStr);
                if (tmp) {
                    tmpRes.push(tmp);
                    tmpStr = tmpStr.replace(tmp[0], getZeroStr(tmp[0].length)); //将匹配到的字串位置清零
                } else {
                    break;
                }
            }
            return [tmpRes, tmpStr];
        };
        var fullWeek = matchStr(matchFullWeek, str);
        var singleWeek = matchStr(matchSingleWeek, fullWeek[1]);
        fullWeek[0].forEach(function (v) {
            var startWeek = v.index;
            var endWeek = v.index + v[0].length - 1;
            res.push(startWeek + '-' + endWeek + '周'); //处理连续周
        });
        singleWeek[0].forEach(function (v) {
            var startWeek = v.index;
            var endWeek = v.index + v[0].length - 1;
            var attr = startWeek % 2 ? '单' : '双';
            res.push(startWeek + '-' + endWeek + attr + '周'); //处理奇偶周
        });
        res.push(function () {
            var tmp = singleWeek[1].split('').map(function (v, i) {
                return v == '1' ? i : 0; //得到单周的索引
            }).filter(function (v) {
                return v != 0; //剔除无效值
            }).join('/');
            return tmp.length ? tmp + '周' : null; //加壳处理
        }()); //处理单周
        // console.log(res)
        return res.filter(function (v) {
            return isFinite(parseInt(v)); //剔除无效值
        });
    },
    renderCourseTable: function renderCourseTable() {
        var getCourseBox = function getCourseBox(x, y) {
            /**
             * x => 星期几
             * y => 第几节课
             */
            x = parseInt(x);
            y = parseInt(y);
            for(var i = 1;i<=13; i++ ){
            	y -= parseInt($('#course-table').children[0].children[x].children[i].colSpan);
            	if(y<=0) return $('#course-table').children[0].children[x].children[i];
            }
        };
        $('#course-table').innerHTML = this.data.originalTable;
        var coursepday = this.data.course.length/7;



        var picker = new Pikaday({
                field: document.getElementById('datepicker'),
                format: 'MM/DD/YYYY',
                toString(date, format) {
                    // you should do formatting based on the passed format,
                    // but we will just return 'M/D/YYYY' for simplicity
                    const day = date.getDate();
                    const month = date.getMonth() + 1;
                    const year = date.getFullYear();
                    return `${month}/${day}/${year}`;
                },
                onSelect: function(date) {
                    const day = date.getDate();
                    const month = date.getMonth() + 1;
                    const year = date.getFullYear();
                    startFirstYear = year;
                    startMonth = month;
                    startDay = day;
                    starTime=`${month}/${day}/${year}`;
                }
        });
        var el2 =document.getElementById ("buttonId");
        el2.addEventListener ("click",submitTime, false);

        for(var i = 0; i < this.data.course.length; i++){
        	if(typeof(this.data.course[i].courseName) != 'string')
        	{
        		continue;
        	}
        	// console.log(typeof(this.data.course[i].courseName));
            var day = Math.floor(i/13) + 1;
            var time = (i%13 + 1);
            dayTimeNumber[n_tym] = time;
            dayNumber[n_tym] = day;
            var node = getCourseBox(day, time);
            if (debug_tym===1) console.log(day,time);
            if (time>1) {
                var prevnode = getCourseBox(day, time-1);
            	if(prevnode.dataset.courseId == this.data.course[i].courseId){
            		prevnode.setAttribute('colspan', 1 + parseInt(prevnode.getAttribute('colspan')));
            		// console.log(node,node.parentNode);
            		// var res = node.parentNode.removeChild(node);
            		// console.log(res);
            		continue;
            	}
            }
            // parseInt(time) % 2 ? null : time = parseInt(time) / 2 + 1;
            node.setAttribute('colspan',1);
            node.dataset.courseId = this.data.course[i].courseId;
            var virtualNode;
            var courseName;
            var teacherName;
            if (node.dataset.hasCourse != '1') {
                virtualNode = createNode('div', 'course-box');
                courseName = this.data.course[i].courseName.length > 10 ? this.data.course[i].courseName.substr(0, 9) + '...' : this.data.course[i].courseName;
                teacherName = this.data.course[i].teacher;
                if (this.data.course[i].teacher.indexOf(",") > 0)
                	teacherName = teacherName.match(/,/g).length <= 1 ? teacherName : teacherName.split(",")[0]+","+teacherName.split(",")[1] + "等"
                virtualNode.innerHTML = '\
                    <div class="title" title="' + this.data.course[i].courseName + '">' + courseName + '\
                    </div>\
                    <div class="info">\
                        <span>' + teacherName + '</span><span>' + this.data.course[i].courseId + '</span>\
                    </div>\
                    <div class="detail-info">\
                    </div>';
                node.appendChild(virtualNode);
                node.dataset.hasCourse = '1';
            }
            var infoNode = createNode('div', 'detail-info-line');
            var room = this.data.course[i].room.length > 12 ? this.data.course[i].room.substr(0, 11) + '...' : this.data.course[i].room;
            room = room.replace('-', '');
            infoNode.innerHTML = '\
                    <div class="detail-room" title="' + this.data.course[i].room + '">' + room + '</div>\
                    <div class="detail-date">' + this.data.course[i].date.join('，') + '</div>';
            node.querySelector('.detail-info').appendChild(infoNode);

            var typeCourse = this.data.course[i].date.join('，')+'';
            courseType[n_tym] = 0;
            courseTot[n_tym] = 16;
            courseBehind[n_tym] = 0;
            if (typeCourse.indexOf('单') >= 0) {
                courseType[n_tym] =  1;
                courseTot[n_tym] = 8;
            }//未处理小学期四周课程或者一周课程
            else {
                if (typeCourse.indexOf('双') >= 0) {
                    courseType[n_tym] = 2;
                    courseTot[n_tym] = 8;
                }
                if (typeCourse.indexOf('9') >= 0) {
                    courseBehind[n_tym] = 1;
                    courseTot[n_tym] = 8;
                }
                if (typeCourse.indexOf('8') >= 0) {
                    courseBehind[n_tym] = 0;
                    courseTot[n_tym] = 8;
                }
            }
            courseName_tym[n_tym] = courseName;
            teacherName_tym[n_tym] = teacherName;
            room_tym[n_tym] = room;
            n_tym++;
        }
        var day = 1;
        while(day < $('#course-table').children[0].children.length){
        	var limit = 13;
        	var flag = true;
	        for(var i = 1;i<$('#course-table').children[0].children[day].children.length;){
	        	if ($('#course-table').children[0].children[day].children[i].dataset.hasCourse == "1"){
					flag = false;
				}
	        	limit -= parseInt($('#course-table').children[0].children[day].children[i].colSpan) > 1 ? parseInt($('#course-table').children[0].children[day].children[i].colSpan) : 1;
	        	if(limit<0) $('#course-table').children[0].children[day].removeChild($('#course-table').children[0].children[day].children[i]);
	        	else i++;
	        }
	        if(flag){
				$('#course-table').children[0].removeChild($('#course-table').children[0].children[day]);
			}
			else day++;
    	}
    	if ($('#course-table').children[0].children.length == 1){
    		$('#course-table').innerHTML = '<div class="block-title">- 说出来你可能不信，这学期居然没课 -</div>';
    	}
    	else while(1){
			var flag = true;
			for(var day = 1;day < $('#course-table').children[0].children.length;day++){
				var time = $('#course-table').children[0].children[day].children.length - 1;
				// console.log($('#course-table').children[0].children[day],time);
				if ($('#course-table').children[0].children[day].children[time].dataset.hasCourse == "1"){
					flag = false;
					break;
				}
			}
			if(flag){
				for(var day = 0;day < $('#course-table').children[0].children.length;day++) {
					var time = $('#course-table').children[0].children[day].children.length - 1;
					$('#course-table').children[0].children[day].removeChild($('#course-table').children[0].children[day].children[time]);
				}
			}
			else break;
    	}
    },
    renderDropdown: function renderDropdown() {
        /**
         * 渲染下拉列表，写的稀烂，懒得改了
         */
        var func = this;
        var node = $('#course-dropdown').querySelector('ul');
        var startYear = null;
        var curYear = new Date().getFullYear();
        // var curStudyYear = ;
        var ids = [];
        var keyMap = ['大一', '大二', '大三', '大四'];
        var url = 'http://eams.shanghaitech.edu.cn/eams/stdDetail.action';
        ajax({
            method: 'GET',
            url: url,
            handler: function handler(res) {
                if (res) {
                	for(var i = 2010; i<2030; i++){
                		if(res.indexOf("<td>"+i+"</td>")>0){
	            			startYear = parseInt(i);
                			break;
                		}
                	}
                }
	            for (var i = startYear; i <=curYear; i++) {
	            	var textTable = ["第一","第二","第三"];
	            	for(var j = 0; j < Object.keys(func.data.semesters[i]).length; j++)
		                ids.push({
		                    name: keyMap[i - startYear] + textTable[j],
		                    id: func.data.semesters[i][j]
		                });
	            }
	            for (var i in ids) {
	                var num = i;
	                i = ids[i];
	                var li = createNode('li');
	                li.innerHTML = i.name;
	                li.dataset.id = i.id;
	                li.dataset.order = num;
	                node.appendChild(li);
	            }
	            node.onclick = function (e) {
	                if (this.dataset.open == '1') {
	                    if (e.target.dataset.id) {
	                        var len = e.target.clientHeight;
	                        this.style.top = '-' + e.target.dataset.order * parseInt(len) + 'px';
	                        func.getSourceTable(e.target.dataset.id);
	                        this.parentNode.classList.remove('dropdown-show');
	                        this.dataset.open = '0';
	                    }
	                } else {
	                    this.parentNode.classList.add('dropdown-show');
	                    this.dataset.open = '1';
	                }
	            };
	            node.lastChild.click();
	            node.lastChild.click(); //模拟点击最后一个，默认显示最新的课程表
            }
        });
        // chrome.storage.local.get('studyYear', function (data) {
        // 	console.log(data);

        // });
    },
    renderExamPart: function renderExamPart() {
        var func = this;
        var curYear = new Date().getFullYear();
        //curYear = 2015;
        var month = new Date().getMonth();
        var curStudyYear = 0;
        if (month <= 7 && month > 2) {
            curStudyYear = 0;
        } else {
            curStudyYear = 1;
        }
        // 大于零表示是本学年的第一学期
        // 等于零表示是上一学年的第二学期
        //curStudyYear = 2;
        var id = 0;
        if (curStudyYear == 0) {
            // 本年的前半部分，是本学年的后半部分（cnmd学年安排，简直有毒）
            id = func.data.semesters[curYear - 1][1]
        } else {
            id = func.data.semesters[curYear][0]
        }
        // debugger;
        var getData = function getData(examType, lastData) {
            // console.log(lastData);
            var data = lastData;
            if (examType < 5) {
                //要取回所有的数据，其实examType是查询的考试类型1,2,3,4代表了期末|期中|补考|缓考
                // console.log(id);
                ajax({
                    method: 'GET',
                    url: 'http://eams.shanghaitech.edu.cn/eams/stdExamTable.action?examType.id=' + examType /*+ '&semester.id=' + id*/,
                    handler: function handler(res) {
                        var node = createNode('div');
                        node.innerHTML = res;
                        data.push(node.querySelector('table').children[0]);

                        getData(++examType, data);
                    }
                });
            } else {
                render(parseData(data));
            }
        };
        var parseData = function parseData(data) {
        	// console.log(data);
            var res = [];
            data.forEach(function (v, index) {
                var nodes = v.children;
                if (nodes.length == 0) return null;
                for (var i = 1; i < nodes.length; i++) {
                    var node = nodes[i];
                    if (node.children.length == 8) {
                        var tmp = node.children;
                        res.push({
                            name: tmp[1].innerHTML,
                            date: tmp[2].innerHTML,
                            detail: tmp[3].innerHTML,
                            address: tmp[4].innerHTML,
                            num: tmp[5].innerHTML,
                            status: tmp[6].innerHTML,
                            type: index + 1
                        });
                    }
                }
            });
            // debugger;
            return res;
        };
        var render = function render(examdata) {
            var finalData = examdata.sort(function (a, b) {
                return new Date(a.date).getTime() > new Date(b.date).getTime() ? 1 : -1;
            }); //将数据按照时间排序
            var typeMap = {
                '1': '期末考试',
                '2': '期中考试',
                '3': '补考',
                '4': '缓考'
            };
            if (finalData.length) {
                finalData.forEach(function (v) {
                    var node = createNode('tr');
                    node.innerHTML = '<td><span class="exam-date">' + v.date + '</span></td>\
                        <td class="exam-line">\
                            <div class="exam-box">\
                                <div class="exam-name">' + v.name + '<span class="exam-type-' + v.type + '">' + typeMap[v.type] + '</span></div>\
                                <div class="exam-detail">' + v.detail.replace(/\(.*\)/, '') + '</div>\
                                <div class="exam-address">' + v.address.replace('-', '') + ' - ' + v.num + '号</div>\
                            </div>\
                        </td>';
                    $('#exam-table').appendChild(node);
                });
            } else {
                var node = createNode('p', 'blank-tips');
                node.innerHTML = '- 说出来你可能不信，最近居然没有考试 -';
                $('#exam-block').appendChild(node);
            }
        };
        getData(1, []);
    }
};

function renderCourse() {
    setTimeout(function () {
        new timeTable(); //立即发出请求会出错
    }, 1000);
}
