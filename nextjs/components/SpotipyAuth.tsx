"use client";
import { SpotifyApi } from "@spotify/web-api-ts-sdk";

function SpotipyAuth() {
  const onclick = () => {
    /* scopes  https://developer.spotify.com/documentation/web-api/concepts/scopes#user-soa-link */
    SpotifyApi.performUserAuthorization(
      process.env.SPOTIFY_CLIENT_ID ?? "",
      "http://localhost:3000",
      [
        "user-read-playback-state" /* 현재 재생에 대한 정보 가져오는 용도 */,
        "user-modify-playback-state" /* 재생 상태 ( 시작/정지 건너뛰기 ) */,
        "user-read-currently-playing" /* 현재 재생 정보 트랙/대기열 */,
        "app-remote-control" /* 원격 앱 제어 */,
        "streaming" /* 웹 플레이어? 제어? */,
        "playlist-read-private" /* 재생 목록 가져오기 */,
        "playlist-read-collaborative" /* 현재 재생 목록 가져오기 + 제어 */,
        "user-follow-read" /* user 가 팔로우한 아티스트 등 가져옴 */,
        "user-read-playback-position" /* 사용자의 재생 위치 */,
        "user-top-read" /* 상위 아티스트 정보?  */,
        "user-read-recently-played" /* 최근 재생된 트랙정보 */,
        "user-library-read" /* 저장된 트랙 정보들 */,
        "user-read-email",
        "user-read-private",
      ],
      "http://localhost:3001/accept-user-token"
    );
  };
  return (
    <div>
      <button onClick={onclick}>Spotipy Login</button>
    </div>
  );
}

export default SpotipyAuth;
