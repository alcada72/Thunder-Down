export type YouTubeVideoFormat = {
  format_id: string;
  ext: string;
  resolution: string;
  filesize: number;
  url: string;
};

export type downInfo = {
  title: string;
  thumbnail: string;
  formats: YouTubeVideoFormat[];
};