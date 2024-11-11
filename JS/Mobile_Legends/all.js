// 获取当前请求的 URL
var requestUrl = $request.url;

// 提取端口
var urlParts = requestUrl.split(':');
var port = parseInt(urlParts[2]); // 获取端口号

// 检查端口是否在指定范围内
if ((port >= 5001 && port <= 5030) || (port >= 5501 && port <= 5530)) {
    // 发送通知
    $notification.post("进入游戏", "您已连接到游戏服务器", "端口: " + port);
} else {
    // 结束脚本
    console.log("端口不在指定范围内，结束脚本.");
}
