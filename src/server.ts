import { app } from "./app";

const PORT_SERVER = process.env.PORT_SERVER;

app.listen(PORT_SERVER, () =>
  console.log(`http://localhost:${PORT_SERVER}/api`)
);
