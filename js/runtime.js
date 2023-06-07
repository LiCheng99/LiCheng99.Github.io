// 网站运行时间
function show_runtime() {
  window.setTimeout("show_runtime()", 1000);
  X = new
    Date("05/15/2023 14:26:44");
  Y = new Date();
  T = (Y.getTime() - X.getTime());
  M = 24 * 60 * 60 * 1000;
  a = T / M;
  A = Math.floor(a);
  b = (a - A) * 24;
  B = Math.floor(b);
  c = (b - B) * 60;
  C = Math.floor((b - B) * 60);
  D = Math.floor((c - C) * 60);
  runtime_span.innerHTML = "本站勉强安全运行: " + A + "天" + B + "小时" + C + "分" + D + "秒"
}
show_runtime();

// 高考倒计时
// 目标日期（高考日期）
// 获取当前年份
var current_year = new Date().getFullYear();

// 计算目标日期（高考日期），仍然是 6 月 7 日 9 点
var target_date = new Date(current_year + "-06-07T09:00:00").getTime();

// 获取显示倒计时的元素
var countdown_div = document.getElementById("countdown");

// 将计时器更新函数定义为全局函数，方便调用
function update_countdown() {
  // 当前时间戳
  var now = new Date();
  var now_timestamp = now.getTime();
  // 剩余时间（单位：毫秒）
  var remaining_time = target_date - now_timestamp;

  // 计算出剩余时间的各个部分（天、小时、分钟、秒）
  var days = Math.floor(remaining_time / (1000 * 60 * 60 * 24));
  var hours = Math.floor((remaining_time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((remaining_time % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((remaining_time % (1000 * 60)) / 1000);

  // 获取当前日期和时间
  var current_month = now.getMonth() + 1;
  var current_date = now.getDate();
  var current_hour = now.getHours();

  // 判断是否在高考期间
  if (current_month === 6 && current_date === 7) {
    if (current_hour >= 9 && current_hour < 11.5) {
      countdown_div.innerHTML = '语文考试进行中';
    } else if (current_hour >= 15 && current_hour < 17) {
      countdown_div.innerHTML = '数学考试进行中';
    } else if (current_hour >= 9 && current_hour < 17) {
      countdown_div.innerHTML = '高考开始啦！';
    } else {
      // 将倒计时字符串拼接并更新到页面中
      var countdown_str = days + "天 " + hours + "小时 " + minutes + "分 " + seconds + "秒";
      countdown_div.innerHTML = "距离高考还有：" + countdown_str;
    }
  } else if (current_month === 6 && current_date === 8) {
    if (current_hour >= 9 && current_hour < 11.5) {
      countdown_div.innerHTML = '文综/理综考试进行中';
    } else if (current_hour >= 15 && current_hour < 17) {
      countdown_div.innerHTML = '外语考试进行中';
    } else if (current_hour >= 9 && current_hour < 17) {
      countdown_div.innerHTML = '高考开始啦！';
    } else {
      // 将倒计时字符串拼接并更新到页面中
      var countdown_str = days + "天 " + hours + "小时 " + minutes + "分 " + seconds + "秒";
      countdown_div.innerHTML = "距离高考还有：" + countdown_str;
    }
  } else {
    // 将倒计时字符串拼接并更新到页面中
    var countdown_str = days + "天 " + hours + "小时 " + minutes + "分 " + seconds + "秒";
    countdown_div.innerHTML = "距离高考还有：" + countdown_str;
  }

  // 如果剩余时间小于等于 0，则停止计时
  if (remaining_time <= 0) {
    clearInterval(countdown_timer);
    countdown_div.innerHTML = "高考开始了啦~&nbsp;考生们加油!!";
  }
}

// 每隔0.5秒钟更新一次倒计时
var countdown_timer = setInterval(update_countdown, 500);