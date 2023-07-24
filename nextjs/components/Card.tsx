"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface IProps {
  image: string;
  name: string;
  genres: string[];
  href: string;
  cardStyle?: "vertical" | "horizontal";
}

function Card({ image, name, genres, href, cardStyle }: IProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(href);
  };
  return (
    <li
      className="relative flex flex-col items-center gap-2 rounded-xl bg-[#f2f6fc] px-4 py-4"
      onClick={() => onClick()}
    >
      <Image
        src={image}
        alt="AbumCoverImage"
        width={640}
        height={640}
        className="rounded-xl"
      />
      <span className="w-full">{name}</span>
      <span className="line-clamp-2 h-10 w-full text-sm text-[#5f6368]">
        {genres.join(",")}
      </span>
    </li>
  );
}

export default Card;
