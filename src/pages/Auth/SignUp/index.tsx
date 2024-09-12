import { useState } from 'react'
import BackgroundImage from "../../../../public/images/unsplash_YI_9SivVt_s.png";
import ComputadorImage from '../../../../public/images/configurar.png'
import { Eye, Lock, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  return (
   <>
    <div className="flex w-screen h-screen">
      {/* Imagem de fundo */}
      <section className="w-2/3 h-full bg-cover bg-center" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      </section>
      {/* Formulário de login */}
      <section className="flex flex-col justify-center items-center w-1/3 h-full p-8">
        <form className="flex flex-col w-full max-w-sm space-y-4">
          {/* Campo de Senha */}
          <div className='flex justify-center'>
           <img src={ComputadorImage} alt="" className='w-[6rem] h-[6rem] mb-5'/>
          </div>
          {/* Campo de Email */}
          <label className="bg-gray-100 flex rounded-sm w-full relative p-2">
            <Mail className="text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" height={19} />
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Declare seu e-mail..."
              className="w-full pl-10 border-none bg-transparent outline-none focus:outline-none focus:ring-0"
            />
          </label>
          <label className="bg-gray-100 flex rounded-sm w-full relative p-2">
            <Lock className="text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" height={19} />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Declare sua senha..."
              className="w-full pl-10 border-none bg-transparent outline-none focus:outline-none focus:ring-0"
            />
            <Eye className="text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" height={21} />
          </label>
          <label className="bg-gray-100 flex rounded-sm w-full relative p-2">
            <Lock className="text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" height={19} />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Confirme sua senha..."
              className="w-full pl-10 border-none bg-transparent outline-none focus:outline-none focus:ring-0"
            />
            <Eye className="text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" height={21} />
          </label>
          {/* Botão de Submissão */}
          <input type="submit" value='Cadastrar' className="w-full text-white font-semibold rounded-md h-12 p-2 cursor-pointer bg-purple-600"/>
          {/* Link para criação de conta */}
          <p className='text-gray-600 font-semibold text-center'>
            Já possui uma conta?<Link to='/' className='text-purple-800'> Clique aqui</Link>
          </p>
        </form>
      </section>
    </div>
   </>
  )
}

export default SignUp