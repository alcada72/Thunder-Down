"use client";

import { useState } from "react";

type Format = {
  format_id: string;
  ext: string;
  resolution: string;
  filesize: number;
  url: string;
};

export default function VideoDownloader() {
  const [url, setUrl] = useState("");
  const [formats, setFormats] = useState<Format[]>([]);
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const handleFetchFormats = async () => {
    const res = await fetch("/api/download-info", {
      method: "POST",
      body: JSON.stringify({ url }),
    });
    const data = await res.json();
    if (!data.error) {
      setTitle(data.title);
      setThumbnail(data.thumbnail);
      setFormats(data.formats);
    }
  };

  return (
    <div className="p-4 text-white max-w-xl mx-auto">
      <input
        type="text"
        placeholder="Cole a URL do vídeo"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full p-2 rounded text-black mb-2"
      />
      <button
        onClick={handleFetchFormats}
        className="bg-red-500 p-2 rounded mb-4"
      >
        Buscar Qualidades
      </button>

      {title && (
        <div className="mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <img src={thumbnail} alt={title} className="w-full rounded" />
        </div>
      )}

      {formats.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-2">Escolha a qualidade:</h3>
          <ul className="flex flex-col gap-2">
            {formats.map((f) => (
              <li key={f.format_id}>
                <a
                  href={f.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-2 bg-gray-800 rounded hover:bg-gray-700"
                >
                  {f.resolution} - {f.ext} -{" "}
                  {f.filesize ? (f.filesize / 1024 / 1024).toFixed(2) + "MB" : "N/A"}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}