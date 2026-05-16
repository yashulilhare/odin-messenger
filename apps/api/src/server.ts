import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';
const PORT = process.env.PORT || 8080;

app.listen(PORT, (err) => {
  if (err) throw new Error(err.message);
  console.log(`Server is running on http://localhost:${PORT}`);
});
