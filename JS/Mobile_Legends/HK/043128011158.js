// 监听请求
const originalFetch = window.fetch;
window.fetch = async function(...args) {
    const response = await originalFetch(...args);
    
    // 获取请求的URL
    const url = new URL(args[0]);
    const ip = '43.128.11.158';
    const port = url.port;

    // 检查IP和端口范围
    if (url.hostname === ip && ((port >= 5001 && port <= 5030) || (port >= 5501 && port <= 5530))) {
        // 弹出通知
        showTemporaryNotification("本次对战在香港");
    }

    return response;
};

// 显示暂时通知的函数
function showTemporaryNotification(message) {
    const notification = document.createElement('div');
    notification.innerText = message;
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    notification.style.color = 'white';
    notification.style.padding = '10px';
    notification.style.borderRadius = '5px';
    notification.style.zIndex = '1000';
    
    document.body.appendChild(notification);
    
    // 设置通知消失的时间
    setTimeout(() => {
        notification.remove();
    }, 3000); // 3秒后消失
}
