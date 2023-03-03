module.exports = {
    onPreBuild({ netlifyConfig }) {
  
      netlifyConfig.redirects.push({
        from: "/mail",
        to: "https://tampa.servershost.net:2096/",
        status: 200
      });
      
      netlifyConfig.redirects.push({
        from: "/*",
        to: "index.html",
        status: 200
      });
      
    },
  };