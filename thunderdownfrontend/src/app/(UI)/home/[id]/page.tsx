import ContentDetalis from "@/components/datails/content-detalis";
import ListsMusics from "@/components/home/lists-musics";
import { SubHeader } from "@/components/home/sub-Header";
import ErrorLens from "@/components/UI/Error-lens";
import { GetMediaById } from "@/services/getAllTrends";

type Props = {
  params: { id: string };
};

export default async function Page({ params }: Props) {
  const { id } =await params;

  let media = null;

  try {
    media = await GetMediaById(id);
  } catch (error) {
    console.error("Erro ao buscar media:", error);
  }

  if (!media) {
    return <ErrorLens />;
  }

  return (
    <div className="w-full text-white p-1.5 mt-4">
      <SubHeader title={media.snippet.title}/>
      <ContentDetalis media={media} />
      <h2 className="text-2xl text-center">Em alta</h2>
       <ListsMusics />
    </div>
  );
}