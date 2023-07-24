import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Npotify/auth",
  description: "Spotify Clone",
};

function AuthLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export default AuthLayout;
