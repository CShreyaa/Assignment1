const login = (req, res) => {
    res.send('Login successful');
  };
  
  const register = (req, res) => {
    res.send('Register successful');
  };
  
  module.exports = {
    login,
    register,
  };
  