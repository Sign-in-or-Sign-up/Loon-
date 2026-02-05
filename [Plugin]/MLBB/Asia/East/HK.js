// 脚本名称: Mobile Legends香港服检测
// 作者: ai写的
// 描述: 检测Mobile Legends游戏会话连接
// 触发: TCP/UDP请求
// 更新: 2026年

const HK_SERVERS = [
    "43.128.11.158", "43.129.199.99", "43.129.212.6", "43.129.229.245",
    "43.132.176.32", "43.132.236.224", "43.135.12.203", "43.135.52.60",
    "43.135.55.98", "43.154.40.55", "43.154.211.207", "101.32.178.31",
    "101.32.189.100", "101.32.210.46", "119.28.24.85", "119.28.26.231",
    "124.156.106.97", "124.156.134.135", "124.156.173.182", "150.109.40.47",
    "150.109.41.112", "150.109.42.208", "150.109.44.26", "150.109.47.26",
    "150.109.50.232", "150.109.58.234", "150.109.102.64", "150.109.102.108",
    "150.109.112.162", "150.109.113.214"
];

(function() {
    'use strict';
    
    const ip = $request.destinationIP;
    const port = $request.destinationPort;
    
    if (ip && port) {
        // 检查IP是否在服务器列表中
        const isTargetServer = HK_SERVERS.includes(ip);
        
        if (isTargetServer) {
            const portNum = parseInt(port);
            
            // 检查是否为游戏会话端口
            const isGameSession = (portNum >= 5001 && portNum <= 5030) || 
                                  (portNum >= 5501 && portNum <= 5530);
            
            if (isGameSession) {
                $notification.post("Mobile Legends", "本次游戏在香港服", "");
            }
        }
    }
    
    $done({});
})();
