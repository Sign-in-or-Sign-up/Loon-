const NAME = `game-notifier`;
const $ = new Env(NAME);

// 检查请求是否为有效的请求
$.isRequest = () => typeof $request !== 'undefined';

// 检查请求的IP和端口
const isGameRequest = () => {
  if ($.isRequest()) {
    const url = new URL($request.url);
    const port = url.port; // 获取端口

    // 检查端口是否在指定范围内
    const isPortInRange = (port >= 5001 && port <= 5030) || (port >= 5501 && port <= 5530);
    return isPortInRange; // 不再检查协议，允许HTTP和HTTPS
  }
  return false;
};

// 发送通知
const sendNotification = () => {
  $.msg(
    '进入游戏',
    '您已访问游戏服务器！',
    '点击这里进入游戏',
    'https://your-game-link.com' // 替换为实际的游戏链接
  );
};

// 主逻辑
if (isGameRequest()) {
  sendNotification();
}
