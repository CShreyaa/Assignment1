const users = []; 

const login = (req, res) => {
  const { username, password } = req.body;

  const user = users.find((user) => user.username === username);

  if (!user || user.password !== password) {
    return res.status(401).json({ error: 'Authentication failed' });
  }

  res.json({ message: 'Login successfully created' });
};

const register = (req, res) => {
  const { username, password } = req.body;

  if (users.some((user) => user.username === username)) {
    return res.status(400).json({ error: 'Username is already exists' });
  }

  const newUser = { id: users.length + 1, username, password };
  users.push(newUser);

  res.json({ message: 'Registration successfully created' });
};

module.exports = {
  login,
  register,
};