"use client";

import api from "@/api/api";
import { downInfo } from "@/types/download";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import LightningLoader from "../UI/loader";

type Props = {
  url: string; // agora passamos todos os formatos do vídeo
};

export function DownloadButton({ url }: Props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [infoDown, setInfoDown] = useState<downInfo>();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const formatFileSize = (size: number) => {
    if (!size) return "N/A";
    return (size / 1024 / 1024).toFixed(2) + " MB";
  };

  const handleDownload = (videoUrl: string) => {
    try {
      window.open(videoUrl, "_blank"); // abre download direto
      setModalOpen(false); // fecha modal
    } catch (error) {
      console.error(error);
      alert("Erro ao baixar vídeo");
    }
  };

  async function fetchDownInfo() {
    setLoading(true);
    setError(null);

    try {
      const res = await api.post("/api/media/download/info", {
        url,
      });

      setInfoDown(res.data);
    } catch (error) {
      console.error(error);
      setError("Erro ao obter informações de download");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchDownInfo();
  }, [url]);

  return (
    <>
      {/* Botão de download */}
      <div className="flex-1 select-none  flex-col cursor-pointer h-14 bg-red-500 flex justify-center items-center rounded-2xl">
        {error && <span className="text-white">{error} </span>}

        <button
          onClick={() => setModalOpen(true)}
          title="Fazer download"
          aria-label="Baixar conteúdo"
          className="text-xl w-full h-full flex justify-center items-center gap-4 uppercase cursor-pointer"
        >
          <FontAwesomeIcon icon={faArrowDown} />
          baixar
        </button>
      </div>

      {/* Modal */}
      {!loading && modalOpen && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-gray-900 text-white rounded-lg max-w-md w-full p-6 space-y-4">
            <h2 className="text-xl font-bold">Escolha o formato para baixar</h2>

            <div>
              <h3 className="font-semibold mb-2">Vídeo</h3>
              <ul className="max-h-48 overflow-y-auto space-y-1">
                {infoDown?.formats &&
                  infoDown.formats
                    .filter((f) => f.resolution !== "audio")
                    .map((f) => (
                      <li key={f.format_id}>
                        <button
                          onClick={() => handleDownload(f.url)}
                          className="w-full text-left p-2 bg-gray-800 rounded hover:bg-gray-700 flex justify-between"
                        >
                          <span>
                            {f.resolution} - {f.ext}
                          </span>
                          <span>{formatFileSize(f.filesize)}</span>
                        </button>
                      </li>
                    ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Áudio (MP3)</h3>
              <ul className="max-h-48 overflow-y-auto space-y-1">
                {infoDown?.formats &&
                  infoDown.formats
                    .filter((f) => f.resolution === "audio")
                    .map((f) => (
                      <li key={f.format_id}>
                        <button
                          onClick={() => handleDownload(f.url)}
                          className="w-full text-left p-2 bg-gray-800 rounded hover:bg-gray-700 flex justify-between"
                        >
                          <span>{f.ext}</span>
                          <span>{formatFileSize(f.filesize)}</span>
                        </button>
                      </li>
                    ))}
              </ul>
            </div>

            <button
              onClick={() => setModalOpen(false)}
              className="w-full bg-red-600 hover:bg-red-700 p-2 rounded"
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      {loading && (
        <div className="fixed inset-0 bg-black/80 bg-opacity-70 flex justify-center items-center z-50">
          <div
            className="text-white flex flex-col items-center 
          rounded-lg max-w-md w-full p-6 space-y-4  gap-7"
          >
            <h2 className="text-xl font-bold select-none animate-pulse">
              Carregando informações de downLoad
            </h2>
            <LightningLoader />
          </div>
        </div>
      )}
    </>
  );
}
