const express = require('express');
const app = express();
const applicationMiddleware = require('./middleware/applicationMiddleware');
const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');
const builtinMiddleware = require('./middleware/builtinMiddleware');

app.use(express.json());
app.use(applicationMiddleware.applicationMiddleware);
app.use(builtinMiddleware);

app.use('/auth', authRoutes);
app.use('/blogs', blogRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});