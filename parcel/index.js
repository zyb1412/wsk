import { formatDistanceToNow, format } from "date-fns";

const date = "1996-09-13 10:00:00";
const targetDate = new Date(date);

// 更新页面上的时间信息
function updateTime() {
  const now = new Date();
  document.body.textContent = `${formatDistanceToNow(targetDate)} ago. Now it's ${format(now, 'yyyy-MM-dd HH:mm:ss')}`;
}

// 初始时更新时间
updateTime();

// 每秒更新时间
setInterval(updateTime, 1000);
