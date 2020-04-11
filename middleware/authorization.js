const dashBoardLoader = (req, res, next) => {
  if (req.session.userInfo.type == "Admin" && req.path.startsWith("/admin")) {
    next();
    
  }
  else if (
    (!req.session.userInfo.type || req.session.userInfo.type == "Guest") &&
    req.path.startsWith("/dashboard")
  ) {
    next();
  } else{
    next();
      
  }
  
};

module.exports = dashBoardLoader;
