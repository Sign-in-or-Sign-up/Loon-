// 获取当前请求的 URL
var requestUrl = $request.url;

// 正则表达式匹配数字类 IP 地址
var ipPattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

// 提取 IP 和端口
var urlParts = requestUrl.split(':');
var ip = urlParts[1].replace('//', ''); // 获取 IP 地址
var port = parseInt(urlParts[2]); // 获取端口号

// 检查 IP 是否匹配
if (ipPattern.test(ip)) {
    // 检查端口是否在指定范围内
    if ((port >= 5001 && port <= 5030) || (port >= 5501 && port <= 5530)) {
        // 发送通知
        $notification.post("进入游戏", "您已连接到游戏服务器", "IP: " + ip + " 端口: " + port);
    } else {
        // 结束脚本
        console.log("端口不在指定范围内，结束脚本.");
    }
} else {
    // 结束脚本
    console.log("不是数字类 IP，结束脚本.");
}
