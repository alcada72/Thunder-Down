import { GetAllTrends } from "@/services/getAllTrends";
import { CardMusic } from "../UI/card-music";
import ErrorLens from "../UI/Error-lens";

export default async function ListsMusics() {
  const medias = await GetAllTrends();
  if (!medias) {
    return <ErrorLens />;
  }

  return (
    <div className="w-full flex flex-col items-center justify-center mt-4">
      <section className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {medias.map((m) => (
          <CardMusic
            key={m.id}
            music={m}
          />
        ))}
      </section>
    </div>
  );
}
