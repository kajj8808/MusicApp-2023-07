# Music App 2023-07

- Music App With Spotipy WebSDK

## API

- [] Search ( artist , album , track )
- [] AlbumDetail
- [] ArtistDetail
- [] TrackDetail
- ...

## Spotipy WebSDK Memo

### Setup

- npm i -D @spotify/web-api-ts-sdk

### 사용할때 생긴 문제점/챙기고 싶은 점

- SDK를 불러올때 디렉토리 이름이 너무 길어져 Typescirpt를 사용할때 baseUrl를 정하고 node_modules/@spotify/web-api-ts-sdk/\* 으로 연결 시켜 가져올수 있게 해주는 것이 좋을거 같다.
- 공식 SDK 문서와 조금 다르게 dist/cjs 폴더가 아닌 @spotify/web-api-ts-sdk 에서 가져와 사용을 하여야한다. 주의!
