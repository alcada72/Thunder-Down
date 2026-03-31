import { Media } from "@/types/music";
import { formatVideoDuration } from "@/utils/calcDurations";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { DownloadButton } from "./download-Button";

type Props = { media: Media };

export default function ContentDetalis({ media }: Props) {
  if (!media) return null;

  return (
    <div className="w-full max-w-full relative gap-4 justify-center mt-4 p-4 items-center sm:items-start overflow-hidden flex flex-col sm:flex-row">
      {/* Thumbnail */}
      <section className=" flex items-center justify-center">
        <div className="relative rounded-2xl shadow-red-300/10 shadow-2xl size-48 sm:size-90">
          <Image
            src={media.snippet.thumbnails.medium.url}
            alt={media.snippet.title}
            className="object-cover rounded-md size-full"
            width={500}
            height={400}
          />
        </div>
      </section>

      {/* Conteúdo */}
      <section className="w-full mt-4 max-w-full">
        <strong className="text-xl sm:text-3xl">{media.snippet.title}</strong>

        <div className="flex flex-row items-center justify-between">
          <div className="flex gap-6 mt-2">
            <span className="flex gap-2 items-center">
              <p>{Number(media.statistics.viewCount).toLocaleString()}</p>
              <FontAwesomeIcon icon={faEye} className="text-red-400" />
            </span>

            <span className="flex gap-2 items-center">
              <p>{formatVideoDuration(media.contentDetails.duration)}</p>
              <FontAwesomeIcon icon={faClock} className="text-red-400" />
            </span>
          </div>

          <div>
            <Link href={media.videoUrl} target="_blank" >
          <FontAwesomeIcon icon={faYoutube} className="text-red-400 size-7 text-2xl" />
            </Link>
          </div>
        </div>

        <div className="mt-4 max-h-32 overflow-y-auto">
          <p className="text-base">{media.snippet.description}</p>
        </div>

        <div className="mt-8">
          <DownloadButton url={media.videoUrl} />
        </div>
      </section>
    </div>
  );
}
