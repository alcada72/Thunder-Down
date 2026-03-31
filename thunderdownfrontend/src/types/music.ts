export type Media = {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: snippet;
  videoUrl: string;
  contentDetails: contentDetails;
  statistics: statistics;
};

export type Medias = {
  id: string;
  kind: string;
  etag: string;
  snippet: snippet;
  videoUrl: string;
  contentDetails: contentDetails;
  statistics: statistics;
}

export type Thumbnail = {
  url: string;
  width: number;
  height: number;
};
export type contentDetails = {
  duration: string;
}
export type statistics = {
  viewCount: string;
  likeCount: string;
}


export type snippet = {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: Thumbnail;
    medium: Thumbnail;
  };
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;


};