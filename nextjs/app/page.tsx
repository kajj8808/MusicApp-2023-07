import Card from "@components/Card";
import SideBarLayout from "@components/SideBarLayout";
interface IItem {
  image: string;
  name: string;
  id: string;
  genres: string[];
}

const items: IItem[] = [
  {
    image: "https://i.scdn.co/image/ab6761610000e5eb76a27aabf8195229f5673f05",
    name: "Hoshimachi Suisei",
    id: "726WiFmWkohzodUxK3XjHX",
    genres: ["japanese vtuber"],
  },
  {
    image: "https://i.scdn.co/image/ab6761610000e5ebfbe071f5bc42f38d3485a29a",
    name: "YOASOBI",
    id: "64tJ2EAv1R6UaZqc4iOCyj",
    genres: ["j-pop", "japanese teen pop"],
  },
  {
    image: "https://i.scdn.co/image/ab6761610000e5eb312c36af3f9798d4172e81bf",
    name: "Mori Calliope",
    id: "1PhE6rv0146ZTQosoPDjk8",
    genres: ["japanese vtuber"],
  },
];

function DashboardPage() {
  return (
    <div>
      <SideBarLayout>
        <span className="text-[#444746]">Top Items</span>
        <ul className="mt-3 grid grid-cols-new1 gap-4 sm:grid-cols-new2 lg:grid-cols-new3 2xl:grid-cols-new5 3xl:grid-cols-new6">
          {items.map((item, index) => (
            <Card href={`/playlist/${item.id}`} key={index} {...item} />
          ))}
        </ul>
      </SideBarLayout>
    </div>
  );
}

export default DashboardPage;
