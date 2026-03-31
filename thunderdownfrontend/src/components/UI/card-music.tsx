import { Medias } from "@/types/music";
import { formatVideoDuration } from "@/utils/calcDurations";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
type Props = {
  music: Medias;
};
export function CardMusic({ music }: Props) {
  return (
    <Link
      href={`/home/${music.id}`}
      className="relative hover:scale-105 transition-all duration-30 shadow-2xs shadow-red-400 size-44 sm:size-52 rounded-xl overflow-hidden cursor-pointer"
    >
      <Image
        src={music.snippet.thumbnails.medium.url}
        alt="cover of the music"
        fill
        className="object-cover rounded-xl size-full"
      />
      <div
        className="absolute size-full inset-0
         p-1.5       bg-linear-to-t
         from-red-500/95 via-transparent to-transparent
         flex items-end justify-start
         z-10
      "
      >
        <section className="w-full">
          <div className="flex flex-col">
            <span
              title={music.snippet.title}
              className="text-xs font-semibold truncate block"
            >
              {music.snippet.title}
            </span>
          </div>
          <div className="flex items-center justify-between w-full mt-1">
            <span className="flex gap-1 items-center justify-center">
              <p>{music.statistics.viewCount}</p>
              <FontAwesomeIcon icon={faEye} className="text-black" />
            </span>
            <span className="flex gap-1 items-center justify-center">
              <p>{formatVideoDuration(music.contentDetails.duration)}</p>
              <FontAwesomeIcon icon={faClock} className="text-black" />
            </span>
          </div>
        </section>
      </div>
    </Link>
  );
}
