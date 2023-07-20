import Image from "next/image";
import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import SpotipyAuth from "@components/SpotipyAuth";

export default function Home() {
  return (
    <div>
      <div>
        <SpotipyAuth />
      </div>
    </div>
  );
}
