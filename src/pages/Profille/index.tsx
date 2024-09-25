import { Eye, Lock } from "lucide-react";
import { FiCamera } from 'react-icons/fi';

function Profille() {
  function handleSubmit() {
   
  }

  return (
    <div className="flex items-center justify-center my-[10rem]">
    <section className="w-[30%] h-[60vh] flex items-center justify-center rounded-sm">
      <form className=" flex flex-col gap-3 items-center p-2">
    
      <section className="relative w-[186px] h-[186px] mx-auto mb-8">
  <img
    src="https://github.com/D1ogooo.png"
    alt="Foto do usuário"
    className="w-[186px] h-[186px] rounded-full"
  />
  < label
      htmlFor="avatar"
      className="w-[38px] h-[38px] bg-gray-500 rounded-full flex items-center justify-center absolute bottom-[7px] right-[7px] cursor-pointer"
    >
      <FiCamera className="w-5 h-5 text-gray-800" />
      <input id="avatar" type="file" className="hidden" />
      </label>
    </section>

        <label className="bg-gray-800 flex rounded-sm flex-1 relative p-2 mt-[-20px] min-w-[20rem]">
          <Lock className="text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" height={19} />
          <input
            type="password"
            placeholder="Declare sua senha..."
            className="w-full pl-10 border-none bg-transparent outline-none focus:outline-none focus:ring-0"
          />
          <Eye className="text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" height={21} />
        </label>
        <label className="bg-gray-800 flex rounded-sm flex-1 relative p-2 min-w-[20rem]">
          <Lock className="text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" height={19} />
          <input
            type="password"
            placeholder="Confirme sua senha..."
            className="w-full pl-10 border-none bg-transparent outline-none focus:outline-none focus:ring-0"
          />
          <Eye className="text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" height={21} />
        </label>
       <button type="button" onClick={handleSubmit} className="w-full text-white font-semibold rounded-md h-12 p-2 cursor-pointer bg-purple-600">
        Confirmar
       </button>
      </form>
    </section>
  </div>
  );
}

export { Profille };
