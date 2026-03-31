import { Request, Response } from 'express';
import { downloadAudio, downloadVideo, FindMediaByID, getDownloadInfo, getTrendingVideos, SearchMedia, SugestionsTitle } from '../services/youtube.service';

export const SearchMediaController = async (req: Request, res: Response) => {
  const { query } = req.query;
  const maxResults = req.query.maxResults;
  console.log(query, maxResults)
  if (!query) {
    return res.status(400).json({ error: 'O parâmetro "query" é obrigatório.' });
  }

  const response = await SearchMedia(query as string, Number(maxResults))



  return res.status(200).json(response)
}

export const GetMediaByIDController = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: 'O parâmetro "id" é obrigatório.' });
  }

  const response = await FindMediaByID(id as string)

  if (!response) {
    return res.status(400).json({ error: 'mídia não encontrada.' });
  }

  return res.status(200).json(response)
}

export const GetMediaTrendsControler = async (req: Request, res: Response) => {
  const response = await getTrendingVideos()

  return res.status(200).json(response)
}

export const DownLoadController = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: 'O parâmetro "id" é obrigatório.' });
  }

  const response = await FindMediaByID(id as string)

  if (!response) {
    return res.status(400).json({ error: 'mídia não encontrada.' });
  }

  return res.status(200).json(response)
}

export const SugestionsTitleController = async (req: Request, res: Response) => {
  const { query } = req.query;
  if (!query) {
    return res.json([]);
  }
  const response = await SugestionsTitle(query as string)

  return res.status(200).json(response)

}

export const downloadInfoController = async (req: Request, res: Response) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL é obrigatória" });
  }

  const data = await getDownloadInfo(url);
  if (!data) {
    return res.status(500).json({ error: "Erro ao processar vídeo" });
  }

  return res.json(data);
};

export const downloadVideoController = async (req: Request, res: Response) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL é obrigatória" });
  }

  const data = await downloadVideo(url);
  if (!data) {
    return res.status(500).json({ error: "Erro ao processar vídeo" });
  }

  return res.json(data);
};

export const downloadAudioController = async (req: Request, res: Response) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL é obrigatória" });
  }

  const data = await downloadAudio(url);
  if (!data) {
    return res.status(500).json({ error: "Erro ao processar audio" });
  }

  return res.json(data);
};
