// types/youtube.ts
export type Format = {
  format_id: string;
  ext: string;
  resolution: string;
  filesize: number;
  url: string;
};

export type DownloadInfo = {
  title: string;
  thumbnail: string;
  formats: Format[];
};