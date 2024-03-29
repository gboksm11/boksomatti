module.exports = {
    onPreBuild({ netlifyConfig }) {
  
      netlifyConfig.redirects.push({
        from: "/mail",
        to: "https://tampa.servershost.net:2096/",
        status: 301
      });

      netlifyConfig.redirects.push({
        from: "/admin",
        to: "https://tampa.servershost.net:2083/",
        status: 301
      });
      
      netlifyConfig.redirects.push({
        from: "/*",
        to: "index.html",
        status: 200
      });
      
    },
  };