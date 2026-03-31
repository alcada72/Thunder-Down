import axios from "axios";
import ytDlp from "youtube-dl-exec";
import { YouTubeSearchResponse } from "../types/returnApi";
import { DownloadInfo, Format } from "../types/youtube";

export const SearchMedia = async (
  query: string,
  maxResults?: number
) => {
  try {
    const searchRes = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          q: query,
          key: process.env.API_KEY,
          maxResults: 100,
          type: "video",
        },
      }
    );

    const videoIds = searchRes.data.items.map(
      (item: any) => item.id.videoId
    );

    const detailsRes = await axios.get(
      "https://www.googleapis.com/youtube/v3/videos",
      {
        params: {
          part: "snippet,contentDetails,statistics",
          id: videoIds.join(","),
          key: process.env.API_KEY,
        },
      }
    );

    const videos = detailsRes.data.items.map((item: any) => ({
      ...item,
      videoUrl: `https://www.youtube.com/watch?v=${item.id}`,
    }));

    return videos;
  } catch (error: any) {
    console.error(error.response?.data || error.message);
    return null;
  }
};

export const FindMediaByID = async (id: string) => {
  try {

    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/videos",
      {
        params: {
          part: "snippet,contentDetails,statistics",
          id: id,
          key: process.env.API_KEY,
        }
      }
    );

    const videoId = response.data.items[0].id;
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
    return {
      ...response.data.items[0],
      videoUrl
    } as YouTubeSearchResponse & { videoUrl: string }

  } catch (error) {
    console.log(error);
    return false
  }

}

export const getTrendingVideos = async () => {
  try {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/videos",
      {
        params: {
          part: "snippet,contentDetails,statistics",
          chart: "mostPopular",
          maxResults: 16,
          key: process.env.API_KEY,
        },
      }
    );
    return response.data.items.map((item: any) => ({
      ...item,
      videoUrl: `https://www.youtube.com/watch?v=${item.id}`,
    }));

  } catch (error) {
    console.log(error);
    return [];
  }
};

export const SugestionsTitle = async (
  query: string,
  maxResults?: number
): Promise<string[]> => {
  try {
    const searchRes = await axios.get(
      `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${query}`,
    );



    return searchRes.data[1];

  } catch (error: any) {
    console.error(error.response?.data || error.message);
    return [];
  }
};

export const getDownloadInfo = async (url: string): Promise<DownloadInfo | null> => {
  try {
    const info: any = await ytDlp(url, {
      dumpSingleJson: true,
      noWarnings: true,
      noCheckCertificates: true,
      preferFreeFormats: true,
    });

    const formats: Format[] = info.formats
      .filter((f: any) => f.url)
      .map((f: any) => ({
        format_id: f.format_id,
        ext: f.ext,
        resolution:
          f.vcodec === "none"
            ? "audio"
            : f.format_note || f.resolution || "video",
        filesize: f.filesize ?? 0,
        url: f.url,
      }));

    return {
      title: info.title,
      thumbnail: info.thumbnail,
      formats,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const downloadVideo = async (url: string) => {
  const output = `video-${Date.now()}.mp4`;

  await ytDlp(url, {
    format: "bestvideo+bestaudio",
    mergeOutputFormat: "mp4",
    output,
  });

  return output;
};

export const downloadAudio = async (url: string) => { 
  const output = `audio-${Date.now()}.mp3`;

  await ytDlp(url, {
    format: "bestaudio",
    output,
  });

  return output;
};