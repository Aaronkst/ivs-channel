import serverless from "serverless-http";
import { app } from "./app";

if (process.env.NODE_ENV === "production") {
  try {
    exports.handler = serverless(app);
  } catch (e) {
    console.log(e);
  }
} else {
  try {
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log("server is running on port:", port));
  } catch (e) {
    console.log(e);
  }
}
