$('.carousel').carousel({
  interval: 5000
});

$(function() {
    //caches a jQuery object containing the header element
    var header = $(".clearHeader");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 300) {
            header.removeClass('clearHeader').addClass("darkHeader");
        } else {
            header.removeClass("darkHeader").addClass('clearHeader');
        }
    });
});

// moment.js
// version : 2.1.0
// author : Tim Wood
// license : MIT
// momentjs.com
!function(t){function e(t,e){return function(n){return u(t.call(this,n),e)}}function n(t,e){return function(n){return this.lang().ordinal(t.call(this,n),e)}}function s(){}function i(t){a(this,t)}function r(t){var e=t.years||t.year||t.y||0,n=t.months||t.month||t.M||0,s=t.weeks||t.week||t.w||0,i=t.days||t.day||t.d||0,r=t.hours||t.hour||t.h||0,a=t.minutes||t.minute||t.m||0,o=t.seconds||t.second||t.s||0,u=t.milliseconds||t.millisecond||t.ms||0;this._input=t,this._milliseconds=+u+1e3*o+6e4*a+36e5*r,this._days=+i+7*s,this._months=+n+12*e,this._data={},this._bubble()}function a(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function o(t){return 0>t?Math.ceil(t):Math.floor(t)}function u(t,e){for(var n=t+"";n.length<e;)n="0"+n;return n}function h(t,e,n,s){var i,r,a=e._milliseconds,o=e._days,u=e._months;a&&t._d.setTime(+t._d+a*n),(o||u)&&(i=t.minute(),r=t.hour()),o&&t.date(t.date()+o*n),u&&t.month(t.month()+u*n),a&&!s&&P.updateOffset(t),(o||u)&&(t.minute(i),t.hour(r))}function d(t){return"[object Array]"===Object.prototype.toString.call(t)}function c(t,e){var n,s=Math.min(t.length,e.length),i=Math.abs(t.length-e.length),r=0;for(n=0;s>n;n++)~~t[n]!==~~e[n]&&r++;return r+i}function f(t){return t?ae[t]||t.toLowerCase().replace(/(.)s$/,"$1"):t}function l(t,e){return e.abbr=t,G[t]||(G[t]=new s),G[t].set(e),G[t]}function _(t){delete G[t]}function m(t){if(!t)return P.fn._lang;if(!G[t]&&Z)try{require("./lang/"+t)}catch(e){return P.fn._lang}return G[t]||P.fn._lang}function y(t){return t.match(/\[.*\]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"")}function g(t){var e,n,s=t.match(I);for(e=0,n=s.length;n>e;e++)s[e]=de[s[e]]?de[s[e]]:y(s[e]);return function(i){var r="";for(e=0;n>e;e++)r+=s[e]instanceof Function?s[e].call(i,t):s[e];return r}}function M(t,e){function n(e){return t.lang().longDateFormat(e)||e}for(var s=5;s--&&(J.lastIndex=0,J.test(e));)e=e.replace(J,n);return oe[e]||(oe[e]=g(e)),oe[e](t)}function D(t,e){switch(t){case"DDDD":return $;case"YYYY":return R;case"YYYYY":return j;case"S":case"SS":case"SSS":case"DDD":return X;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return q;case"a":case"A":return m(e._l)._meridiemParse;case"X":return Q;case"Z":case"ZZ":return B;case"T":return K;case"MM":case"DD":case"YY":case"HH":case"hh":case"mm":case"ss":case"M":case"D":case"d":case"H":case"h":case"m":case"s":return V;default:return new RegExp(t.replace("\\",""))}}function p(t){var e=(B.exec(t)||[])[0],n=(e+"").match(se)||["-",0,0],s=+(60*n[1])+~~n[2];return"+"===n[0]?-s:s}function w(t,e,n){var s,i=n._a;switch(t){case"M":case"MM":null!=e&&(i[1]=~~e-1);break;case"MMM":case"MMMM":s=m(n._l).monthsParse(e),null!=s?i[1]=s:n._isValid=!1;break;case"D":case"DD":null!=e&&(i[2]=~~e);break;case"DDD":case"DDDD":null!=e&&(i[1]=0,i[2]=~~e);break;case"YY":i[0]=~~e+(~~e>68?1900:2e3);break;case"YYYY":case"YYYYY":i[0]=~~e;break;case"a":case"A":n._isPm=m(n._l).isPM(e);break;case"H":case"HH":case"h":case"hh":i[3]=~~e;break;case"m":case"mm":i[4]=~~e;break;case"s":case"ss":i[5]=~~e;break;case"S":case"SS":case"SSS":i[6]=~~(1e3*("0."+e));break;case"X":n._d=new Date(1e3*parseFloat(e));break;case"Z":case"ZZ":n._useUTC=!0,n._tzm=p(e)}null==e&&(n._isValid=!1)}function Y(t){var e,n,s,i=[];if(!t._d){for(s=k(t),e=0;3>e&&null==t._a[e];++e)t._a[e]=i[e]=s[e];for(;7>e;e++)t._a[e]=i[e]=null==t._a[e]?2===e?1:0:t._a[e];i[3]+=~~((t._tzm||0)/60),i[4]+=~~((t._tzm||0)%60),n=new Date(0),t._useUTC?(n.setUTCFullYear(i[0],i[1],i[2]),n.setUTCHours(i[3],i[4],i[5],i[6])):(n.setFullYear(i[0],i[1],i[2]),n.setHours(i[3],i[4],i[5],i[6])),t._d=n}}function k(t){var e=new Date;return t._useUTC?[e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()]:[e.getFullYear(),e.getMonth(),e.getDate()]}function v(t){var e,n,s=t._f.match(I),i=""+t._i;for(t._a=[],e=0;e<s.length;e++)n=(D(s[e],t).exec(i)||[])[0],n&&(i=i.slice(i.indexOf(n)+n.length)),de[s[e]]&&w(s[e],n,t);i&&(t._il=i),t._isPm&&t._a[3]<12&&(t._a[3]+=12),t._isPm===!1&&12===t._a[3]&&(t._a[3]=0),Y(t)}function T(t){var e,n,s,r,o,u=99;for(r=0;r<t._f.length;r++)e=a({},t),e._f=t._f[r],v(e),n=new i(e),o=c(e._a,n.toArray()),n._il&&(o+=n._il.length),u>o&&(u=o,s=n);a(t,s)}function b(t){var e,n=t._i,s=te.exec(n);if(s){for(t._f="YYYY-MM-DD"+(s[2]||" "),e=0;4>e;e++)if(ne[e][1].exec(n)){t._f+=ne[e][0];break}B.exec(n)&&(t._f+=" Z"),v(t)}else t._d=new Date(n)}function S(e){var n=e._i,s=E.exec(n);n===t?e._d=new Date:s?e._d=new Date(+s[1]):"string"==typeof n?b(e):d(n)?(e._a=n.slice(0),Y(e)):e._d=n instanceof Date?new Date(+n):new Date(n)}function F(t,e,n,s,i){return i.relativeTime(e||1,!!n,t,s)}function C(t,e,n){var s=A(Math.abs(t)/1e3),i=A(s/60),r=A(i/60),a=A(r/24),o=A(a/365),u=45>s&&["s",s]||1===i&&["m"]||45>i&&["mm",i]||1===r&&["h"]||22>r&&["hh",r]||1===a&&["d"]||25>=a&&["dd",a]||45>=a&&["M"]||345>a&&["MM",A(a/30)]||1===o&&["y"]||["yy",o];return u[2]=e,u[3]=t>0,u[4]=n,F.apply({},u)}function O(t,e,n){var s,i=n-e,r=n-t.day();return r>i&&(r-=7),i-7>r&&(r+=7),s=P(t).add("d",r),{week:Math.ceil(s.dayOfYear()/7),year:s.year()}}function L(t){var e=t._i,n=t._f;return null===e||""===e?null:("string"==typeof e&&(t._i=e=m().preparse(e)),P.isMoment(e)?(t=a({},e),t._d=new Date(+e._d)):n?d(n)?T(t):v(t):S(t),new i(t))}function z(t,e){P.fn[t]=P.fn[t+"s"]=function(t){var n=this._isUTC?"UTC":"";return null!=t?(this._d["set"+n+e](t),P.updateOffset(this),this):this._d["get"+n+e]()}}function U(t){P.duration.fn[t]=function(){return this._data[t]}}function H(t,e){P.duration.fn["as"+t]=function(){return+this/e}}for(var P,W,x="2.1.0",A=Math.round,G={},Z="undefined"!=typeof module&&module.exports,E=/^\/?Date\((\-?\d+)/i,N=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)\:(\d+)\.?(\d{3})?/,I=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,J=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,V=/\d\d?/,X=/\d{1,3}/,$=/\d{3}/,R=/\d{1,4}/,j=/[+\-]?\d{1,6}/,q=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,B=/Z|[\+\-]\d\d:?\d\d/i,K=/T/i,Q=/[\+\-]?\d+(\.\d{1,3})?/,te=/^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,ee="YYYY-MM-DDTHH:mm:ssZ",ne=[["HH:mm:ss.S",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],se=/([\+\-]|\d\d)/gi,ie="Date|Hours|Minutes|Seconds|Milliseconds".split("|"),re={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},ae={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",w:"week",W:"isoweek",M:"month",y:"year"},oe={},ue="DDD w W M D d".split(" "),he="M D H h m s w W".split(" "),de={M:function(){return this.month()+1},MMM:function(t){return this.lang().monthsShort(this,t)},MMMM:function(t){return this.lang().months(this,t)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(t){return this.lang().weekdaysMin(this,t)},ddd:function(t){return this.lang().weekdaysShort(this,t)},dddd:function(t){return this.lang().weekdays(this,t)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return u(this.year()%100,2)},YYYY:function(){return u(this.year(),4)},YYYYY:function(){return u(this.year(),5)},gg:function(){return u(this.weekYear()%100,2)},gggg:function(){return this.weekYear()},ggggg:function(){return u(this.weekYear(),5)},GG:function(){return u(this.isoWeekYear()%100,2)},GGGG:function(){return this.isoWeekYear()},GGGGG:function(){return u(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return~~(this.milliseconds()/100)},SS:function(){return u(~~(this.milliseconds()/10),2)},SSS:function(){return u(this.milliseconds(),3)},Z:function(){var t=-this.zone(),e="+";return 0>t&&(t=-t,e="-"),e+u(~~(t/60),2)+":"+u(~~t%60,2)},ZZ:function(){var t=-this.zone(),e="+";return 0>t&&(t=-t,e="-"),e+u(~~(10*t/6),4)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()}};ue.length;)W=ue.pop(),de[W+"o"]=n(de[W],W);for(;he.length;)W=he.pop(),de[W+W]=e(de[W],2);for(de.DDDD=e(de.DDD,3),s.prototype={set:function(t){var e,n;for(n in t)e=t[n],"function"==typeof e?this[n]=e:this["_"+n]=e},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(t){return this._months[t.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(t){return this._monthsShort[t.month()]},monthsParse:function(t){var e,n,s;for(this._monthsParse||(this._monthsParse=[]),e=0;12>e;e++)if(this._monthsParse[e]||(n=P([2e3,e]),s="^"+this.months(n,"")+"|^"+this.monthsShort(n,""),this._monthsParse[e]=new RegExp(s.replace(".",""),"i")),this._monthsParse[e].test(t))return e},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(t){return this._weekdays[t.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(t){return this._weekdaysShort[t.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(t){return this._weekdaysMin[t.day()]},weekdaysParse:function(t){var e,n,s;for(this._weekdaysParse||(this._weekdaysParse=[]),e=0;7>e;e++)if(this._weekdaysParse[e]||(n=P([2e3,1]).day(e),s="^"+this.weekdays(n,"")+"|^"+this.weekdaysShort(n,"")+"|^"+this.weekdaysMin(n,""),this._weekdaysParse[e]=new RegExp(s.replace(".",""),"i")),this._weekdaysParse[e].test(t))return e},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(t){var e=this._longDateFormat[t];return!e&&this._longDateFormat[t.toUpperCase()]&&(e=this._longDateFormat[t.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(t){return t.slice(1)}),this._longDateFormat[t]=e),e},isPM:function(t){return"p"===(t+"").toLowerCase()[0]},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(t,e,n){return t>11?n?"pm":"PM":n?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(t,e){var n=this._calendar[t];return"function"==typeof n?n.apply(e):n},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(t,e,n,s){var i=this._relativeTime[n];return"function"==typeof i?i(t,e,n,s):i.replace(/%d/i,t)},pastFuture:function(t,e){var n=this._relativeTime[t>0?"future":"past"];return"function"==typeof n?n(e):n.replace(/%s/i,e)},ordinal:function(t){return this._ordinal.replace("%d",t)},_ordinal:"%d",preparse:function(t){return t},postformat:function(t){return t},week:function(t){return O(t,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6}},P=function(t,e,n){return L({_i:t,_f:e,_l:n,_isUTC:!1})},P.utc=function(t,e,n){return L({_useUTC:!0,_isUTC:!0,_l:n,_i:t,_f:e})},P.unix=function(t){return P(1e3*t)},P.duration=function(t,e){var n,s,i=P.isDuration(t),a="number"==typeof t,o=i?t._input:a?{}:t,u=N.exec(t);return a?e?o[e]=t:o.milliseconds=t:u&&(n="-"===u[1]?-1:1,o={y:0,d:~~u[2]*n,h:~~u[3]*n,m:~~u[4]*n,s:~~u[5]*n,ms:~~u[6]*n}),s=new r(o),i&&t.hasOwnProperty("_lang")&&(s._lang=t._lang),s},P.version=x,P.defaultFormat=ee,P.updateOffset=function(){},P.lang=function(t,e){return t?(e?l(t,e):null===e?(_(t),t="en"):G[t]||m(t),P.duration.fn._lang=P.fn._lang=m(t),void 0):P.fn._lang._abbr},P.langData=function(t){return t&&t._lang&&t._lang._abbr&&(t=t._lang._abbr),m(t)},P.isMoment=function(t){return t instanceof i},P.isDuration=function(t){return t instanceof r},P.fn=i.prototype={clone:function(){return P(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){return M(P(this).utc(),"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var t=this;return[t.year(),t.month(),t.date(),t.hours(),t.minutes(),t.seconds(),t.milliseconds()]},isValid:function(){return null==this._isValid&&(this._isValid=this._a?!c(this._a,(this._isUTC?P.utc(this._a):P(this._a)).toArray()):!isNaN(this._d.getTime())),!!this._isValid},invalidAt:function(){var t,e=this._a,n=(this._isUTC?P.utc(this._a):P(this._a)).toArray();for(t=6;t>=0&&e[t]===n[t];--t);return t},utc:function(){return this.zone(0)},local:function(){return this.zone(0),this._isUTC=!1,this},format:function(t){var e=M(this,t||P.defaultFormat);return this.lang().postformat(e)},add:function(t,e){var n;return n="string"==typeof t?P.duration(+e,t):P.duration(t,e),h(this,n,1),this},subtract:function(t,e){var n;return n="string"==typeof t?P.duration(+e,t):P.duration(t,e),h(this,n,-1),this},diff:function(t,e,n){var s,i,r=this._isUTC?P(t).zone(this._offset||0):P(t).local(),a=6e4*(this.zone()-r.zone());return e=f(e),"year"===e||"month"===e?(s=432e5*(this.daysInMonth()+r.daysInMonth()),i=12*(this.year()-r.year())+(this.month()-r.month()),i+=(this-P(this).startOf("month")-(r-P(r).startOf("month")))/s,i-=6e4*(this.zone()-P(this).startOf("month").zone()-(r.zone()-P(r).startOf("month").zone()))/s,"year"===e&&(i/=12)):(s=this-r,i="second"===e?s/1e3:"minute"===e?s/6e4:"hour"===e?s/36e5:"day"===e?(s-a)/864e5:"week"===e?(s-a)/6048e5:s),n?i:o(i)},from:function(t,e){return P.duration(this.diff(t)).lang(this.lang()._abbr).humanize(!e)},fromNow:function(t){return this.from(P(),t)},calendar:function(){var t=this.diff(P().startOf("day"),"days",!0),e=-6>t?"sameElse":-1>t?"lastWeek":0>t?"lastDay":1>t?"sameDay":2>t?"nextDay":7>t?"nextWeek":"sameElse";return this.format(this.lang().calendar(e,this))},isLeapYear:function(){var t=this.year();return 0===t%4&&0!==t%100||0===t%400},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(t){var e=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=t?"string"==typeof t&&(t=this.lang().weekdaysParse(t),"number"!=typeof t)?this:this.add({d:t-e}):e},month:function(t){var e,n=this._isUTC?"UTC":"";return null!=t?"string"==typeof t&&(t=this.lang().monthsParse(t),"number"!=typeof t)?this:(e=this.date(),this.date(1),this._d["set"+n+"Month"](t),this.date(Math.min(e,this.daysInMonth())),P.updateOffset(this),this):this._d["get"+n+"Month"]()},startOf:function(t){switch(t=f(t)){case"year":this.month(0);case"month":this.date(1);case"week":case"isoweek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===t?this.weekday(0):"isoweek"===t&&this.isoWeekday(1),this},endOf:function(t){return t=f(t),this.startOf(t).add("isoweek"===t?"week":t,1).subtract("ms",1)},isAfter:function(t,e){return e="undefined"!=typeof e?e:"millisecond",+this.clone().startOf(e)>+P(t).startOf(e)},isBefore:function(t,e){return e="undefined"!=typeof e?e:"millisecond",+this.clone().startOf(e)<+P(t).startOf(e)},isSame:function(t,e){return e="undefined"!=typeof e?e:"millisecond",+this.clone().startOf(e)===+P(t).startOf(e)},min:function(t){return t=P.apply(null,arguments),this>t?this:t},max:function(t){return t=P.apply(null,arguments),t>this?this:t},zone:function(t){var e=this._offset||0;return null==t?this._isUTC?e:this._d.getTimezoneOffset():("string"==typeof t&&(t=p(t)),Math.abs(t)<16&&(t=60*t),this._offset=t,this._isUTC=!0,e!==t&&h(this,P.duration(e-t,"m"),1,!0),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},daysInMonth:function(){return P.utc([this.year(),this.month()+1,0]).date()},dayOfYear:function(t){var e=A((P(this).startOf("day")-P(this).startOf("year"))/864e5)+1;return null==t?e:this.add("d",t-e)},weekYear:function(t){var e=O(this,this.lang()._week.dow,this.lang()._week.doy).year;return null==t?e:this.add("y",t-e)},isoWeekYear:function(t){var e=O(this,1,4).year;return null==t?e:this.add("y",t-e)},week:function(t){var e=this.lang().week(this);return null==t?e:this.add("d",7*(t-e))},isoWeek:function(t){var e=O(this,1,4).week;return null==t?e:this.add("d",7*(t-e))},weekday:function(t){var e=(this._d.getDay()+7-this.lang()._week.dow)%7;return null==t?e:this.add("d",t-e)},isoWeekday:function(t){return null==t?this.day()||7:this.day(this.day()%7?t:t-7)},get:function(t){return t=f(t),this[t.toLowerCase()+"s"]()},set:function(t,e){t=f(t),this[t.toLowerCase()+"s"](e)},lang:function(e){return e===t?this._lang:(this._lang=m(e),this)}},W=0;W<ie.length;W++)z(ie[W].toLowerCase().replace(/s$/,""),ie[W]);z("year","FullYear"),P.fn.days=P.fn.day,P.fn.months=P.fn.month,P.fn.weeks=P.fn.week,P.fn.isoWeeks=P.fn.isoWeek,P.fn.toJSON=P.fn.toISOString,P.duration.fn=r.prototype={_bubble:function(){var t,e,n,s,i=this._milliseconds,r=this._days,a=this._months,u=this._data;u.milliseconds=i%1e3,t=o(i/1e3),u.seconds=t%60,e=o(t/60),u.minutes=e%60,n=o(e/60),u.hours=n%24,r+=o(n/24),u.days=r%30,a+=o(r/30),u.months=a%12,s=o(a/12),u.years=s},weeks:function(){return o(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+2592e6*(this._months%12)+31536e6*~~(this._months/12)},humanize:function(t){var e=+this,n=C(e,!t,this.lang());return t&&(n=this.lang().pastFuture(e,n)),this.lang().postformat(n)},add:function(t,e){var n=P.duration(t,e);return this._milliseconds+=n._milliseconds,this._days+=n._days,this._months+=n._months,this._bubble(),this},subtract:function(t,e){var n=P.duration(t,e);return this._milliseconds-=n._milliseconds,this._days-=n._days,this._months-=n._months,this._bubble(),this},get:function(t){return t=f(t),this[t.toLowerCase()+"s"]()},as:function(t){return t=f(t),this["as"+t.charAt(0).toUpperCase()+t.slice(1)+"s"]()},lang:P.fn.lang};for(W in re)re.hasOwnProperty(W)&&(H(W,re[W]),U(W.toLowerCase()));H("Weeks",6048e5),P.duration.fn.asMonths=function(){return(+this-31536e6*this.years())/2592e6+12*this.years()},P.lang("en",{ordinal:function(t){var e=t%10,n=1===~~(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th";return t+n}}),Z&&(module.exports=P),"undefined"==typeof ender&&(this.moment=P),"function"==typeof define&&define.amd&&define("moment",[],function(){return P})}.call(this);

// AsthmaGram Main
(function(){var e,t;e=function(){function e(e){var t,n;this.options={target:"asthmagram",get:"tagged",tagName:"beatasthma",resolution:"standard_resolution",sortBy:"most-recent",links:true,limit:5,mock:false,clientId:"c6119f65ac1c43128601418e5b826d52",template:'<div class="col-sm-4">'+'<div class="asthmagram">'+'<a target="_blank" href="http://asthmagr.am/"><img class="img-responsive" src="{{image}}"></a>'+'<img class="profile-pic" src="{{model.user.profile_picture}}">'+'<div class="meta">{{date}}  {{likes}} <span class="glyphicon glyphicon-heart"></span> {{comments}} <span class="glyphicon glyphicon-comment"></span></div>'+"</div>"+"</div>",after: function () {
  var instagrams = $("#instagram > a");
  for (var i = 11; i < instagrams.length; i += 2) {
    instagrams[i].remove();
  }
}};if(typeof e==="object"){for(t in e){n=e[t];this.options[t]=n}}this.unique=this._genKey()}e.prototype.run=function(){var t,n,r;if(typeof this.options.clientId!=="string"){if(typeof this.options.accessToken!=="string"){throw new Error("Missing clientId or accessToken.")}}if(typeof this.options.accessToken!=="string"){if(typeof this.options.clientId!=="string"){throw new Error("Missing clientId or accessToken.")}}if(this.options.before!=null&&typeof this.options.before==="function"){this.options.before.call(this)}if(typeof document!=="undefined"&&document!==null){r=document.createElement("script");r.id="instafeed-fetcher";r.src=this._buildUrl();t=document.getElementsByTagName("head");t[0].appendChild(r);n="instafeedCache"+this.unique;window[n]=new e(this.options);window[n].unique=this.unique}return true};e.prototype.parse=function(e){var t,n,r,i,s,o,u,a,f,l,c,h,p,d,v;if(typeof e!=="object"){if(this.options.error!=null&&typeof this.options.error==="function"){this.options.error.call(this,"Invalid JSON data");return false}else{throw new Error("Invalid JSON response")}}if(e.meta.code!==200){if(this.options.error!=null&&typeof this.options.error==="function"){this.options.error.call(this,e.meta.error_message);return false}else{throw new Error("Error from Instagram: "+e.meta.error_message)}}if(e.data.length===0){if(this.options.error!=null&&typeof this.options.error==="function"){this.options.error.call(this,"No images were returned from Instagram");return false}else{throw new Error("No images were returned from Instagram")}}if(this.options.success!=null&&typeof this.options.success==="function"){this.options.success.call(this,e)}if(this.options.sortBy!=="most-recent"){if(this.options.sortBy==="random"){c=["","random"]}else{c=this.options.sortBy.split("-")}l=c[0]==="least"?true:false;switch(c[1]){case"random":e.data.sort(function(){return.5-Math.random()});break;case"recent":e.data=this._sortBy(e.data,"created_time",l);break;case"liked":e.data=this._sortBy(e.data,"likes.count",l);break;case"commented":e.data=this._sortBy(e.data,"comments.count",l);break;default:throw new Error("Invalid option for sortBy: '"+this.options.sortBy+"'.")}}if(typeof document!=="undefined"&&document!==null&&this.options.mock===false){document.getElementById(this.options.target).innerHTML="";u=e.data;if(u.length>this.options.limit){u=u.slice(0,this.options.limit+1||9e9)}if(this.options.template!=null&&typeof this.options.template==="string"){i="";o="";for(h=0,d=u.length;h<d;h++){s=u[h];o=this._makeTemplate(this.options.template,{model:s,date:moment.unix(s.created_time).format("MMMM Do YYYY"),id:s.id,link:s.link,image:s.images[this.options.resolution].url,caption:this._getObjectProperty(s,"caption.text"),likes:s.likes.count,comments:s.comments.count,location:this._getObjectProperty(s,"location.name")});i+=o}document.getElementById(this.options.target).innerHTML=i}else{n=document.createDocumentFragment();for(p=0,v=u.length;p<v;p++){s=u[p];a=document.createElement("img");a.src=s.images[this.options.resolution].url;if(this.options.links===true){t=document.createElement("a");t.href=s.link;t.appendChild(a);n.appendChild(t)}else{n.appendChild(a)}}document.getElementById(this.options.target).appendChild(n)}r=document.getElementsByTagName("head")[0];r.removeChild(document.getElementById("instafeed-fetcher"));f="instafeedCache"+this.unique;delete window[f]}if(this.options.after!=null&&typeof this.options.after==="function"){this.options.after.call(this)}return true};e.prototype._buildUrl=function(){var e,t,n;e="https://api.instagram.com/v1";switch(this.options.get){case"popular":t="media/popular";break;case"tagged":if(typeof this.options.tagName!=="string"){throw new Error("No tag name specified. Use the 'tagName' option.")}t="tags/"+this.options.tagName+"/media/recent";break;case"location":if(typeof this.options.locationId!=="number"){throw new Error("No location specified. Use the 'locationId' option.")}t="locations/"+this.options.locationId+"/media/recent";break;case"user":if(typeof this.options.userId!=="number"){throw new Error("No user specified. Use the 'userId' option.")}if(typeof this.options.accessToken!=="string"){throw new Error("No access token. Use the 'accessToken' option.")}t="users/"+this.options.userId+"/media/recent";break;default:throw new Error("Invalid option for get: '"+this.options.get+"'.")}n=""+e+"/"+t;if(this.options.accessToken!=null){n+="?access_token="+this.options.accessToken}else{n+="?client_id="+this.options.clientId}n+="&count="+this.options.limit;n+="&callback=instafeedCache"+this.unique+".parse";return n};e.prototype._genKey=function(){var e;e=function(){return((1+Math.random())*65536|0).toString(16).substring(1)};return""+e()+e()+e()+e()};e.prototype._makeTemplate=function(e,t){var n,r,i,s,o;r=/(?:\{{2})([\w\[\]\.]+)(?:\}{2})/;n=e;while(r.test(n)){i=n.match(r)[1];s=(o=this._getObjectProperty(t,i))!=null?o:"";n=n.replace(r,""+s)}return n};e.prototype._getObjectProperty=function(e,t){var n,r;t=t.replace(/\[(\w+)\]/g,".$1");r=t.split(".");while(r.length){n=r.shift();if(e!=null&&n in e){e=e[n]}else{return null}}return e};e.prototype._sortBy=function(e,t,n){var r;r=function(e,r){var i,s;i=this._getObjectProperty(e,t);s=this._getObjectProperty(r,t);if(n){if(i>s){return 1}else{return-1}}if(i<s){return 1}else{return-1}};e.sort(r.bind(this));return e};return e}();t=typeof exports!=="undefined"&&exports!==null?exports:window;t.Instafeed=e}).call(this)

// AsthmaGram Activate
var feed = new Instafeed({
});
	feed.run();
	
	
// classie - class helper functions from bonzo https://github.com/ded/bonzo

( function( window ) {

'use strict';

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

window.classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

})( window );

// Menu Activation
var menuLeft = document.getElementById( 'cbp-spmenu' ),
				showLeftPush = document.getElementById( 'showLeftPush' ),

				body = document.body;

			showLeftPush.onclick = function() {
				classie.toggle( this, 'active' );
				classie.toggle( body, 'cbp-spmenu-push-toright' );
				classie.toggle( menuLeft, 'cbp-spmenu-open' );
			};


			
(function ($) {
    $(document).ready(function () {
      var playerDiv = $("#ytChanPlayer");
      playerDiv.ytChanPlayer({
        username: 'SoundAsthma',
        maxResults: 12,
        sticky: 'bZGLCBFSNck'
      }); 
       $(".yt-channel-list").before("<p class='tagline'></p>") 
    });
  }(jQuery));
			
// jQuery Youtube Channel Player 0.1.3 Author: Marc Loehe (boundaryfunctions)

(function ($) {
  "use strict";
  $.fn.ytChanPlayer = function (settings) {
    var $ytEl = $(this),
      $ytPlayer,
      $ytList = $('<div/>', {'class': 'yt-channel-list col-sm-5'}),
      $ytListInner = $('<div/>', {'class': 'yt-channel-list-inner'}),
      $ytContainer = $('<div/>', {'class': 'embed-container'}),
      options = $.extend({}, {
        username: '',
        query: '',
        startIndex: 1,
        maxResults: 10,
        orderBy: 'published',
        playerOpts: {
          autohide: 1,
          autoplay: 0,
          egm: 1,
          fs: 1,
          showinfo: 0,
          wmode: 'opaque'
        }
      }, settings),
      videos  = [],
      // accessory functions
      buildUrl  = function () {
        var base  = 'https://gdata.youtube.com/feeds/api/videos',
          params  = [
            'alt=json',
            'orderby=' + options.orderBy,
            'start-index=' + options.startIndex,
            'max-results=' + options.maxResults,
            'callback=?'
          ];
        if (options.username !== '') {
          params.push('author=' + options.username);
        } else if (options.query !== '') {
          params.push('q=' + encodeURIComponent(options.query));
        }
        return base + '?' + params.join('&');
      },
      buildPlayer = function (id) {
        if (id.length > 0) {
          if (!$ytPlayer) {
            $ytPlayer = $('<iframe/>', {'class': 'yt-player col-sm-6'});
            $ytContainer.appendTo($ytPlayer);
          }
          var src = 'http://www.youtube-nocookie.com/embed/' + id,
            opt;
          if (options.playerOpts) {
            src += '?';
            for (opt in options.playerOpts) {
              if (options.playerOpts.hasOwnProperty(opt)) {
                src += opt + '=' + options.playerOpts[opt] + '&';
              }
            }
            src += '_a=b';
          }
          $ytPlayer.attr('src', src).prependTo($ytEl);
        }
      },
      zeroFill = function (number, width) {
        width -= number.toString().length;
        if (width > 0) {
          return [width + (/\./.test(number) ? 2 : 1) ].join('0') + number;
        }
        return (number).toString();
      },
      parseTime = function (secs) {
        var m, s = parseInt(secs, 10);
        m = Math.floor(s / 60);
        s -= (m * 60);
        return m + ':' + zeroFill(s, 2);
      };
    // setup the html
    $ytEl.addClass('yt-channel-holder');
    $ytList.appendTo($ytEl);
    $ytListInner.appendTo($ytList);
    // parse the feed
    $.getJSON(buildUrl(), function (data) {
      var i, html, vid, e;
      // add the header
      if (data.feed.entry) {
        if (options.sticky) {
          buildPlayer(options.sticky);
        } else {
          buildPlayer(data.feed.entry[0].id.$t.match('[^/]*$'));
        }
        // add the items
        for (i = 0; i < data.feed.entry.length; i++) {
          e = data.feed.entry[i];
          vid = {
            link: (e ? e.media$group.media$player[0].url : ''),
            title: (e ? e.media$group.media$title.$t : ''),
            thumb:  (e ? e.media$group.media$thumbnail[0].url : ''),
            duration: (e ? e.media$group.yt$duration.seconds : 0),
            views: (e && e.yt$statistics ? e.yt$statistics.viewCount : 0),
            id: (e ? e.id.$t.match('[^/]*$') : '')
          };
          html  = $('<div/>', {'class': 'yt-channel-video'})
            .html([
              '<a href="', vid.link, '" title="', vid.title, ' (', parseTime(vid.duration), ')" target="_blank">',
              '<img class="vid-thumb" alt="', vid.title, '" src="', vid.thumb, '"/>',
              '</a>'
            ].join(''))
            .data('id', vid.id).click(function (e) {
              e.preventDefault();
              options.playerOpts = $.extend(options.playerOpts, {autoplay: 1});
              buildPlayer($(this).data('id'));
            })
            .css('opacity', '.7')
            .hover(function () {
              $(this).stop().animate({
                opacity: '1'
              }, 400);
            }, function () {
              $(this).stop().animate({
                opacity: '.7'
              }, 200);
            });
          videos.push(vid);
          html.appendTo($ytListInner);
        }
        
      } else {
        $('<div/>', {'class': 'yt-channel-video'})
          .html('<a>NO RESULTS</a>').appendTo($ytList);
      }
    });
    return this;
  };

}(jQuery));

jQuery(function() {
   jQuery.support.placeholder = false;
   test = document.createElement('input');
   if('placeholder' in test) jQuery.support.placeholder = true;
});
// This adds placeholder support to browsers that wouldn't otherwise support it. 
$(function() {
   if(!$.support.placeholder) { 
      var active = document.activeElement;
      $(':text').focus(function () {
         if ($(this).attr('placeholder') != '' && $(this).val() == $(this).attr('placeholder')) {
            $(this).val('').removeClass('hasPlaceholder');
         }
      }).blur(function () {
         if ($(this).attr('placeholder') != '' && ($(this).val() == '' || $(this).val() == $(this).attr('placeholder'))) {
            $(this).val($(this).attr('placeholder')).addClass('hasPlaceholder');
         }
      });
      $(':text').blur();
      $(active).focus();
      $('form:eq(0)').submit(function () {
         $(':text.hasPlaceholder').val('');
      });
   }
});