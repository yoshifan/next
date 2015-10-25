module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'next',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
