import earthIllustrationImg from '../../../../../assets/images/ilustra-03.png'
import projectllustrationImg from '../../../../../assets/images/ilustra-04.png'

export function About() {
  return (
    <div className='w-full px-8 py-16 grid place-items-center gap-40 bg-gradient-to-b from-cyan-300 via-gray-50 to-gray-50'>
      <div
        id="about-autism"
        className='w-full max-w-7xl flex flex-col-reverse gap-12 lg:flex-row items-center justify-around'
      >
        <img src={earthIllustrationImg} className="h-[180px] lg:h-[280px] rounded-2xl" />

        <div className="max-w-lg flex flex-col gap-6 text-base text-gray-700">
          <h1 className="text-4xl text-white font-bold">
            Entendendo o autismo
          </h1>

          <p>
            O transtorno do espectro autista (TEA) é um distúrbio do neurodesenvolvimento caracterizado por desenvolvimento atípico, manifestações comportamentais, déficits na comunicação e na interação social, padrões de comportamentos repetitivos e estereotipados, podendo apresentar um repertório restrito de interesses e atividades.
          </p>

          <p>
            Sinais de alerta no neurodesenvolvimento da criança podem ser percebidos nos primeiros meses de vida, sendo o diagnóstico estabelecido por volta dos 2 a 3 anos de idade. A prevalência é maior no sexo masculino.
          </p>

          <p>
            A identificação de atrasos no desenvolvimento, o diagnóstico oportuno do TEA e encaminhamento para intervenções comportamentais e apoio educacional na idade mais precoce possível, pode levar a melhores resultados a longo prazo, considerando a neuroplasticidade cerebral.
          </p>
        </div>
      </div>

      <div 
        id="about-project"
        className='w-full max-w-7xl flex flex-col lg:flex-row gap-12 items-center justify-around'
      >
        <div className="max-w-lg flex flex-col gap-6 text-base text-gray-700">
          <h1 className="text-4xl text-cyan-500 font-bold">
            Sobre o projeto
          </h1>

          <p>
            O AUTI é um projeto destinado a auxiliar o tratamento do TEA. Nossa missão é oferecer uma variedade de cenários gamificados projetados para aprimorar aspectos cognitivos, notadamente, a comunicação, concentração e memória.
          </p>

          <p>
            Buscamos, sobretudo, proporcionar às crianças com aspecto autista uma forma cativante de enfrentar desafios e lidar com atividades que possam não ser naturalmente atrativas, graças a jogos customizados para atender às suas necessidades específicas.
          </p>

          <p>
            Nosso objetivo principal é estabelecer o AUTI como uma ferramenta valiosa no tratamento do autismo, permitindo que as crianças desfrutem de uma experiência divertida ao mesmo tempo em que estimulam seu desenvolvimento cognitivo.
          </p>
        </div>

        <img src={projectllustrationImg} className="h-[350px] rounded-2xl" />
      </div>
    </div>
  )
}