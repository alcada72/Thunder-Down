import LightningLoader from "./loader";

export default function ErrorLens() {
  return (
    <div className="flex mt-3.5 p-4 flex-col items-center justify-center h-1/2 w-full">
      <h2 className="text-3xl font-semibold text-gray-500">Ups! Algo deu errado.</h2>
      <p>Tente novamente!.</p>
      <div className=" h-40 w-full" />
      <LightningLoader />
    </div>
  );
}
