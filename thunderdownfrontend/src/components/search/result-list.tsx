import { Medias } from "@/types/music";
import { CardMusic } from "../UI/card-music";
type Props = {
  music: Medias[];
};
export default function ResultLists({ music }: Props) {
  return (
    <div className="w-full flex flex-col items-center mt-4 justify-center">
      <section className="grid grid-cols-3 gap-4">
        {music.map((i, index) => (
          <CardMusic
            key={i.id + index}
            music={i}
          />
        ))}
      </section>
    </div>
  );
}
