import { Router } from 'express';
import { Ping } from '../controllers/ping.controller';
import * as yutubeController from '../controllers/youtube.controller';

export const mainRouter = Router()

mainRouter.get('/ping', Ping)
mainRouter.get('/api/search', yutubeController.SearchMediaController)
mainRouter.get('/api/media/:id', yutubeController.GetMediaByIDController)
mainRouter.get('/api/media', yutubeController.GetMediaTrendsControler)
mainRouter.get('/api/sugestions', yutubeController.SugestionsTitleController)
mainRouter.post('/api/media/download/info', yutubeController.downloadInfoController)
mainRouter.post('/api/media/download/video', yutubeController.downloadVideoController)
mainRouter.post('/api/media/download/audio', yutubeController.downloadAudioController)