import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Npotify/playlist",
  description: "Spotify Clone",
};

function PlayListLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export default PlayListLayout;
