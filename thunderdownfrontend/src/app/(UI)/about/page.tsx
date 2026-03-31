import { Label } from "@/components/UI/logo";
import { faSquareFacebook, faSquareInstagram, faSquareYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function page() {
  return (
    <div className="w-full flex-1 p-4 sm:px-1 sm:p-0">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl select-none">Conheça a ThunderDown</h1>
        <Label size={100} />
      </div>
      <div className="flex-1 size-full ">
        <details >
          <summary className="text-xl text-gray-300 py-2.5">Como surgiu?</summary>
          <p className="ml-7 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aperiam
            ex atque, repellat excepturi dolores at deserunt officia eius
            consequatur quo modi ab nostrum placeat adipisci consectetur
            eligendi odio quod?
          </p>
        </details>
      </div>

      <footer className="w-full flex mt-auto flex-col justify-center items-center border-t border-gray-400">
        <p className="text-xl py-4">Entre em contacto com a nossa equipe</p>
        <div className="w-full justify-center items-center flex gap-12">
          <FontAwesomeIcon
            icon={faSquareFacebook}
            className="text-4xl  text-white"
          />
          <FontAwesomeIcon
            icon={faSquareInstagram}
            className="text-4xl text-white"
          />
          <FontAwesomeIcon
            icon={faSquareYoutube}
            className="text-4xl text-white"
          />
        </div>
      </footer>
    </div>
  );
}
