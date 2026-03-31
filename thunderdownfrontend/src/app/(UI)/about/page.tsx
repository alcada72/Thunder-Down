import { Label } from "@/components/UI/logo";
import {
  faSquareFacebook,
  faSquareInstagram,
  faSquareYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Page() {
  return (
    <div className="w-full flex-1 p-4 sm:px-1 sm:p-0 text-gray-200">
      
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold select-none">
          Conheça a ThunderDown ⚡
        </h1>
        <Label size={100} />
      </div>

      {/* CONTEÚDO */}
      <div className="flex flex-col gap-4">

        {/* HISTÓRIA */}
        <details open>
          <summary className="text-xl text-red-400 py-2 cursor-pointer">
            🚀 Como surgiu?
          </summary>
          <p className="ml-5 text-justify leading-relaxed">
            A ThunderDown nasceu com o objetivo de facilitar o download rápido e seguro
            de conteúdos da internet. Criada por desenvolvedores apaixonados por tecnologia,
            a plataforma foi pensada para ser simples, eficiente e acessível a todos.
          </p>
        </details>

        {/* MISSÃO */}
        <details>
          <summary className="text-xl text-red-400 py-2 cursor-pointer">
            🎯 Missão & Visão
          </summary>
          <p className="ml-5 text-justify leading-relaxed">
            Nossa missão é fornecer uma ferramenta confiável e rápida para download de mídia.
            Buscamos constantemente inovação, segurança e a melhor experiência para o usuário.
          </p>
        </details>

        {/* FUNCIONAMENTO */}
        <details>
          <summary className="text-xl text-red-400 py-2 cursor-pointer">
            ⚙️ Como funciona?
          </summary>
          <p className="ml-5 text-justify leading-relaxed">
            Basta inserir o link do conteúdo desejado e nosso sistema processa automaticamente,
            oferecendo opções de download em diferentes formatos e qualidades.
          </p>
        </details>

        {/* PRIVACIDADE */}
        <details>
          <summary className="text-xl text-red-400 py-2 cursor-pointer">
            🔐 Privacidade
          </summary>
          <p className="ml-5 text-justify leading-relaxed">
            Respeitamos a sua privacidade. Não armazenamos links inseridos nem conteúdos baixados.
            Nenhuma informação pessoal é compartilhada com terceiros sem o seu consentimento.
          </p>
        </details>

        {/* SEGURANÇA */}
        <details>
          <summary className="text-xl text-red-400 py-2 cursor-pointer">
            🛡️ Segurança
          </summary>
          <p className="ml-5 text-justify leading-relaxed">
            Utilizamos protocolos seguros e práticas modernas de desenvolvimento para proteger
            nossos usuários. Monitoramos constantemente o sistema para evitar abusos e garantir
            estabilidade.
          </p>
        </details>

        {/* TERMOS */}
        <details>
          <summary className="text-xl text-red-400 py-2 cursor-pointer">
            📜 Termos de Uso
          </summary>
          <p className="ml-5 text-justify leading-relaxed">
            O uso da ThunderDown deve respeitar as leis locais e direitos autorais. O usuário é
            responsável pelo conteúdo que decide baixar. Não incentivamos o uso indevido da
            plataforma.
          </p>
        </details>

      </div>

      {/* FOOTER */}
      <footer className="w-full flex mt-10 flex-col justify-center items-center border-t border-gray-600 pt-6">
        <p className="text-lg mb-3">
          Entre em contacto com a nossa equipe
        </p>

        <div className="flex gap-10">
          <FontAwesomeIcon
            icon={faSquareFacebook}
            className="text-4xl hover:text-blue-500 transition"
          />
          <FontAwesomeIcon
            icon={faSquareInstagram}
            className="text-4xl hover:text-pink-500 transition"
          />
          <FontAwesomeIcon
            icon={faSquareYoutube}
            className="text-4xl hover:text-red-500 transition"
          />
        </div>

        <p className="text-sm text-gray-500 mt-4">
          © {new Date().getFullYear()} ThunderDown - Todos os direitos reservados
        </p>
      </footer>
    </div>
  );
}