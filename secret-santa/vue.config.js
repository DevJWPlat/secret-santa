const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  publicPath: '/secret-santa/'
};

module.exports = {
  devServer: {
    allowedHosts: "all",
    client: {
      webSocketURL: {
        protocol: 'wss', // Use secure WebSocket
        hostname: '0.0.0.0', // Change `host` to `hostname`
        port: '8080',
      },
    },
    host: '0.0.0.0', // Bind to all network interfaces
    port: 8080, // Port number
  },
};
