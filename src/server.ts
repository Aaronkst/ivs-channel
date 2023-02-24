import serverless from "serverless-http";
import { app } from "./app";

if (process.env.NODE_ENV === "production") {
  exports.handler = serverless(app);
} else {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log("server is running on port:", port));
}
