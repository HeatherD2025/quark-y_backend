import 'dotenv/config';

import app from "./src/app.js";

const PORT = process.env.PORT || 5555;

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
