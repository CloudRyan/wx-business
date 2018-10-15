import tip from './tip';
//---------------------------------------------------
// 日期格式化
// 格式 YYYY/yyyy/YY/yy 表示年份
// MM/M 月份
// W/w 星期
// dd/DD/d/D 日期
// hh/HH/h/H 时间
// mm/m 分钟
// ss/SS/s/S 秒
//---------------------------------------------------

const themeColor = '#16B4BA';
const allColor = [themeColor,'#FFA530','#FF7F68','#FFD630','#FF6699','#4193E3','#CC99FF','#CC9966','#F5A293','#33CCCC',
'#55D9FF','#009966','#FF99FF','#FFCC66','#F067E1','#C6DB52','#77B5F2','#FFA4D7','#2BE4A0','#FBBF71'];

Date.prototype.Format = function(formatStr)
{
    let str = formatStr;
    let Week = ['日','一','二','三','四','五','六'];

    str=str.replace(/yyyy|YYYY/,this.getFullYear());
    str=str.replace(/yy|YY/,(this.getYear() % 100)>9?(this.getYear() % 100).toString():'0' + (this.getYear() % 100));

    str=str.replace(/MM/,this.getMonth()>9?this.getMonth().toString():'0' + this.getMonth());
    str=str.replace(/M/g,this.getMonth());

    str=str.replace(/w|W/g,Week[this.getDay()]);

    str=str.replace(/dd|DD/,this.getDate()>9?this.getDate().toString():'0' + this.getDate());
    str=str.replace(/d|D/g,this.getDate());

    str=str.replace(/hh|HH/,this.getHours()>9?this.getHours().toString():'0' + this.getHours());
    str=str.replace(/h|H/g,this.getHours());
    str=str.replace(/mm/,this.getMinutes()>9?this.getMinutes().toString():'0' + this.getMinutes());
    str=str.replace(/m/g,this.getMinutes());

    str=str.replace(/ss|SS/,this.getSeconds()>9?this.getSeconds().toString():'0' + this.getSeconds());
    str=str.replace(/s|S/g,this.getSeconds());

    return str;
}

function currentWeek(){
  let date = new Date();
  date.setDate(date.getDate() - date.getDay() + 1);
  let start = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  date.setDate(date.getDate() + 6);
  let end = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  return {
    start,
    end,
  }
}
function getCurrentTime() {
  let keep = '';
  let date = new Date();
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  let d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  let h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  let f = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  let rand = Math.round(Math.random() * 899 + 100);
  keep = y + '' + m + '' + d + '' + h + '' + f + '' + s;
  return keep;
}
function getCurrentMonthLast(){
 let date=new Date();
 let currentMonth=date.getMonth();
 let nextMonth=++currentMonth;
 let nextMonthFirstDay=new Date(date.getFullYear(),nextMonth,1);
 let oneDay=1000*60*60*24;
 let newtime = new Date(nextMonthFirstDay-oneDay);
 return {
   start:date.getFullYear()+'-'+(date.getMonth()+1)+'-'+1,
   end:newtime.getFullYear()+'-'+(newtime.getMonth()+1)+'-'+newtime.getDate()
 }
}

function StringToDate(DateStr) {
  let converted = Date.parse(DateStr);
  let myDate = new Date(converted);
  if (isNaN(myDate)) {
      let arys= DateStr.split('-');
      myDate = new Date(arys[0],--arys[1],arys[2]);
  }
  return myDate;
}
function isYear(year){
  if (year % 4 == 0 && year % 100 != 0) {
    return true;
  } else {
    if (year % 400 == 0) {
      return true;
    } else {
      return false;
    }
  }
}

function getMondayTime(){
  let myDate = new Date(new Date().getTime() - new Date().getDay() * 24 * 60 * 60 * 1000);
  return myDate.getFullYear()+'-'+(myDate.getMonth()+1)+'-'+myDate.getDate();
}
function iosDate(date){
  return new Date(date.replace(/\-/g, "\/"));
}

function objLength(input) {
  let type = toString(input);
  let length = 0;
  if (type != "[object Object]") {
    //throw "输入必须为对象{}！"
  } else {
    for (let key in input) {
      if (key != "number") {
        length++;
      }

    }
  }
  return length;
}
//验证是否是手机号码
function vailPhone(number) {
  let flag = false;
  let myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
  if (number.length != 11) {
    flag = flag;
  }else if (!myreg.test(number)) {
    flag = flag;
  }else{
    flag = true;
  }
  return flag;
}
//验证是否西班牙手机(6开头 9位数)
function ifSpanish(number) {
  let flag = false;
  let myreg = /^([6|7|9]{1}(\d+){8})$/;
  if (number.length != 9) {
    flag = flag;
  } else if (!myreg.test(number)) {
    flag = flag;
  } else {
    flag = true;
  }
  return flag;
}
//浮点型除法
function div(a, b) {
  let c, d, e = 0,
    f = 0;
  try {
    e = a.toString().split(".")[1].length;
  } catch (g) { }
  try {
    f = b.toString().split(".")[1].length;
  } catch (g) { }
  return c = Number(a.toString().replace(".", "")), d = Number(b.toString().replace(".", "")), mul(c / d, Math.pow(10, f - e));
}
//浮点型加法函数
function accAdd(arg1, arg2) {
  let r1, r2, m;
  try {
    r1 = arg1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  return ((arg1 * m + arg2 * m) / m).toFixed(2);
}
//浮点型乘法
function mul(a, b) {
  let c = 0,
    d = a.toString(),
    e = b.toString();
  try {
    c += d.split(".")[1].length;
  } catch (f) { }
  try {
    c += e.split(".")[1].length;
  } catch (f) { }
  return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
}

// 遍历对象属性和值
function displayProp(obj) {
  let names = "";
  for (let name in obj) {
    names += name + obj[name];
  }
  return names;
}
// 去除字符串所有空格
function sTrim(text) {
  return text.replace(/\s/ig, '')
}
//去除所有:
function replaceMaohao(txt) {
  return txt.replace(/\:/ig, '')
}
//转换星星分数
function convertStarArray(score) {
  //1 全星,0 空星,2半星
  let arr = []
  for (let i = 1; i <= 5; i++) {
    if (score >= i) {
      arr.push(1)
    } else if (score > i-1 && score < i + 1) {
      arr.push(2)
    } else {
      arr.push(0)
    }
  }
  return arr
}
// function wxCanvas(){
//   new wxCharts({
//       canvasId: 'routeCanvas',
//       type: 'column',
//       animation: true,
//       categories: ['张小平', '刘东强', '肖绿绿', '张洋', '杨洋', '娇娇'],
//       series: [{
//           name: '总客户数',
//           color:'#16B4BA',
//           data: [32, 45, 0, 56, 33, 34],
//           format: function (val, name) {
//               return val.toFixed(2) + '万';
//           }
//       }],
//       yAxis: {
//           format: function (val) {
//               return val + '万';
//           },
//           // title: 'hello',
//           min: 0,
//           gridColor:"#F5F5F5",
//       },
//       xAxis: {
//           disableGrid: false,
//           type: 'calibration'
//       },
//       extra: {
//           column: {
//               width: 20,
//           }
//       },
//       width: this.windowWidth,
//       height: 300,
//   });
// }
function intervalTime(startdate,enddate,maxTime){
  let max = maxTime || 90;
  let startD = new Date(Date.parse(startdate.replace(/-/g,"/")));
  let endD   = new Date(Date.parse(enddate.replace(/-/g,"/")));
  let days = parseInt((endD.getTime()-startD.getTime()) / (1000 * 60 * 60 * 24));
  if(days>max){
    // tip.alert('相差最多'+max+'天');
    return true;
  }else{
    return false;
  }
}
function setTime(startTime,endTime,dayTime){
  if(dayTime>0){
    let vdate = new Date(new Date(startTime.replace(/\-/g, "\/")).getTime()+(1000 * 60 * 60 * 24 * dayTime));
    endTime = vdate.getFullYear()+'-'+(vdate.getMonth()+1)+'-'+vdate.getDate();
  }else if(dayTime<0){
    let vdate = new Date(new Date(endTime.replace(/\-/g, "\/")).getTime()-(1000 * 60 * 60 * 24 * -dayTime));
    startTime = vdate.getFullYear()+'-'+(vdate.getMonth()+1)+'-'+vdate.getDate();
  }
  return {
    startTime,
    endTime
  }
}
function getLastWeekDate() {
  let date = new Date();
  let today = date.getDay();
  let newTime = new Date(date.getTime()-(1000 * 60 * 60 * 24)*today);
  let end = newTime.getFullYear()+'-'+(newTime.getMonth()+1)+'-'+newTime.getDate();
  let onTime = new Date(newTime-(1000 * 60 * 60 * 24)*6);
  let start = onTime.getFullYear()+'-'+(onTime.getMonth()+1)+'-'+onTime.getDate();
  return {
    start,
    end
  }
}
function getonMonth(){
  var nowdays = new Date();
  var year = nowdays.getFullYear();
  var month = nowdays.getMonth();
  if(month==0) {
      month=12;
      year=year-1;
  }
  if (month < 10) {
      month = month;
  }
  var start = year + "-" + month + "-" + "1";               //上个月的第一天
  var myDate = new Date(year, month, 0);
  var end = year + "-" + month + "-" + myDate.getDate();   //上个月的最后一天
  return {
    start,
    end
  }
}
function jsonTurnAarray(jsons){
  let attr = [];
  for(let i in jsons){
    attr.push({
      id: i,
      text: jsons[i],
    });
  }
  return attr;
}
const scopeDate = (time)=>{
  const mydate = new Date(time);
  return mydate.getFullYear()+'-'+(mydate.getMonth()+1)+'-'+mydate.getDate()+' '+(mydate.getHours()>9?mydate.getHours():'0'+mydate.getHours())+':'+(mydate.getMinutes()>9?mydate.getMinutes():'0'+mydate.getMinutes());
}
module.exports = {
  themeColor,//微信小程序主题色
  allColor,//微信wxchart图标颜色显示
  getCurrentTime,
  StringToDate,
  getMondayTime,//获取周一是几月几号
  isYear,//是否是润年
  iosDate, //ios时间兼容性问题
  currentWeek,//本周一的日期
  objLength,
  displayProp,
  sTrim,
  replaceMaohao,
  vailPhone,
  ifSpanish,
  div,
  mul,
  accAdd,
  convertStarArray,
  // wxCanvas,//微信公用试图Canvas
  intervalTime,//最多选择一个月
  getCurrentMonthLast,//获取本月最后一天
  getonMonth,//获取上个月的第一天和最后一天
  setTime,
  getLastWeekDate,//获取上周开始开始时间和结束时间
  jsonTurnAarray,//json 转 数组
  scopeDate,
}
