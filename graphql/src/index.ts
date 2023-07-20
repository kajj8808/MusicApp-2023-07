import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import dotenv from "dotenv";
import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
const PORT = 3001;

dotenv.config();

/* const spotipyApi = SpotifyApi.withClientCredentials(
  process.env.SPOTIFY_CLIENT_ID ?? "",
  process.env.SPOTIFY_CLIENT_SECRET ?? ""
); */

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let spotipyApi: SpotifyApi;

app.get("/", (_, res) => {
  res.send("Home");
});

app.post("/accept-user-token", async (req, res) => {
  let data = req.body;
  spotipyApi = await SpotifyApi.withAccessToken(
    process.env.SPOTIFY_CLIENT_ID ?? "",
    data
  );
});

app.get("/api/test", async (_, res) => {
  const result = await spotipyApi.currentUser.topItems("tracks");
  res.json(result);
});

app.get("/*", (_, res) => {
  res.redirect("/");
});

/* - [] Search ( artist , album , track )
- [] AlbumDetail
- [] ArtistDetail
- [] TrackDetail */

(async () => {
  /* const { artists: items } = await spotipyApi.search(
    "Kenshi yonezu",
    ["artist" ],
    "KR",
    1
  );
  console.log(items); */
})();

const httpServer = http.createServer(app);

const handleListen = () => {
  console.log(`Server is Ready ( http://localhost:${PORT} )`);
};

httpServer.listen(PORT, handleListen);
