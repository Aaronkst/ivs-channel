import express from "express";
import { IvsClient, CreateChannelCommand } from "@aws-sdk/client-ivs";

const app = express();

app.use(express.json());

app.get("/", (req, res) => res.send("Hello World!"));

// TODO: add authentication middleware logic
app.post("/ivs", async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.sendStatus(400);
    const client = new IvsClient({
      region: "ap-northeast-1",
    });
    const command = new CreateChannelCommand({
      name,
    });

    // response.channel.ingestEndpoint
    // response.channel.name
    // response.channel.playbackUrl
    // response.streamKey.value

    const response = await client.send(command);
    return res.json({ ...response });
  } catch (e) {
    return res.status(500).send(e);
  }
});

export { app };
