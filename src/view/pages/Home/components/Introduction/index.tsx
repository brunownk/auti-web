import ilustrationImg from "../../../../../assets/images/ilustra-01.png" 

export function Introduction() {
  return (
    <div className='w-full px-6 pt-16 grid place-items-center'>
      <div className='w-full max-w-7xl h-full flex flex-col items-center justify-around lg:flex-row gap-12'>
        <div className="max-w-lg flex flex-col gap-6">
          <h1 className="text-3xl lg:text-4xl md:text-left text-cyan-500 font-bold">
            Um espaço seguro e divertido para o desenvolvimento dos seus pequenos!
          </h1>

          <p className="lg:text-lg text-gray-700">
            A AUTI busca auxiliar crianças autistas no processo de desenvolvimento cognitivo com atividades gamificadas adaptadas às suas necessidades específicas. Uma solução simples e divertida para todos.
          </p>
        </div>
     
        <img src={ilustrationImg} className="h-[300px] rounded-2xl lg:h-[460px]" />
      </div>
    </div>
  )
}