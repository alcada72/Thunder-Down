import ListsMusics from "@/components/home/lists-musics";
import { SubHeader } from "@/components/home/sub-Header";

export default function Home() {
  return (
    <div className="w-full pb-3.5">
      <SubHeader />
      <ListsMusics />
    </div>
  );
}
