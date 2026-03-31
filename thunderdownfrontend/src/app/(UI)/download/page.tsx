"use client";

import api from "@/api/api";
import { Input } from "@/components/UI/input";
import { LabelTwo } from "@/components/UI/logo";
import { downInfo } from "@/types/download";
import { faMagento } from "@fortawesome/free-brands-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function VideoDownloaderUI() {
  const [url, setUrl] = useState("");
  const [videoInfo, setVideoInfo] = useState<downInfo | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchVideoInfo = async () => {
    if (!url.trim()) return;
    setLoading(true);
    try {
      const res = await api.post("/api/media/download/info", {
        url,
      });

      setVideoInfo(res.data);
    } catch (err) {
      console.error(err);
      alert("Erro ao buscar vídeo");
    } finally {
      setLoading(false);
    }
  };

  const formatFileSize = (size: number) => {
    if (!size) return "N/A";
    return (size / 1024 / 1024).toFixed(2) + " MB";
  };

  return (
    <div className="max-w-xl mx-auto p-4 text-white">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold ">Download</h1>
        <LabelTwo size={100} />
      </div>

      <div className="flex gap-2 mb-4">
        <div className="flex-1">
          <Input
            value={url}
            onChange={(e) => setUrl(e)}
            placeholder="Cole a URL do YouTube"
          />
        </div>

        <button
          onClick={fetchVideoInfo}
          disabled={loading}
          className={`${loading && "animate-pulse a"}  bg-red-500 px-4 rounded-full size-10 flex items-center justify-center hover:bg-red-600`}
        >
          {loading ? (
            <FontAwesomeIcon icon={faCircle} />
          ) : (
            <FontAwesomeIcon icon={faMagento} />
          )}
        </button>
      </div>

      {videoInfo && (
        <div className="bg-gray-800 p-4 rounded space-y-4">
          <h2 className="text-xl font-semibold">{videoInfo.title}</h2>
          <img
            src={videoInfo.thumbnail}
            alt={videoInfo.title}
            className="w-full rounded"
          />

          <div>
            <h3 className="font-semibold mb-2">Vídeo</h3>
            <ul className="space-y-1">
              {videoInfo.formats
                .filter((f) => f.resolution !== "audio")
                .map((f) => (
                  <li key={f.format_id}>
                    <a
                      href={f.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-2 bg-gray-700 rounded hover:bg-gray-600"
                    >
                      {f.resolution} - {f.ext} - {formatFileSize(f.filesize)}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Áudio (MP3)</h3>
            <ul className="space-y-1">
              {videoInfo.formats
                .filter((f) => f.resolution === "audio")
                .map((f) => (
                  <li key={f.format_id}>
                    <a
                      href={f.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-2 bg-gray-700 rounded hover:bg-gray-600"
                    >
                      {f.ext} - {formatFileSize(f.filesize)}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
