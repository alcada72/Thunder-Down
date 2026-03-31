import api from "@/api/api";
import { Media, Medias } from "@/types/music";

export async function GetAllTrends(): Promise<Medias[] | false> {
  try {
    const response = await api.get('/api/media')
    return response.data
  } catch (error) {
    return false
  }
}

export async function SearchMedia(query: string): Promise<Medias[] | []> {
  try {
    const respose = await api.get(`/api/search`,
      {
        params: { query }
      }
    )
    return respose.data
  } catch (error) {
    return []
  }
}

export async function GetMediaById(id: string): Promise<Media | false> {
  try {
    const respose = await api.get(`/api/media/${id}`)
    return respose.data
  } catch (error) {
    return false
  }
}

export async function DownLoad(url: string): Promise<Medias[] | []> {
  try {
    const respose = await api.get(`/api/search`,
      {
        params: { url }
      }
    )
    return respose.data
  } catch (error) {
    return []
  }
}