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
  const token = await spotipyApi.authenticate();
  console.log(token);
});

app.get("/api/top_items", async (_, res) => {
  try {
    const result = await spotipyApi.currentUser.topItems("artists");
    res.json(result);
  } catch (error) {
    res.status(502).send("Error");
  }
});
app.get("/api/playlist", async (_, res) => {
  try {
    const result = await spotipyApi.currentUser.playlists.playlists(2);
    res.json(result);
  } catch (error) {
    res.status(502).send("Error");
  }
});

app.get("/api/artist_albums", async (_, res) => {
  try {
    const result = await spotipyApi.artists.albums("726WiFmWkohzodUxK3XjHX");
    res.json(result);
  } catch (error) {
    res.status(502).send("Error");
  }
});

app.get("/api/artist_top_albums", async (_, res) => {
  try {
    const result = await spotipyApi.artists.topTracks(
      "726WiFmWkohzodUxK3XjHX",
      "JP"
    );
    res.json(result);
  } catch (error) {
    res.status(502).send("Error");
  }
});

app.get("/api/albums_detail", async (_, res) => {
  try {
    const result = await spotipyApi.albums.tracks("2HmlBFz06FldsdzwY1FHg4");
    res.json(result);
  } catch (error) {
    res.status(502).send("Error");
  }
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
