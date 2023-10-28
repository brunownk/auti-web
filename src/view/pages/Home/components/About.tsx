import earthIllustrationImg from '../../../../assets/images/ilustra-03.png'
import projectllustrationImg from '../../../../assets/images/ilustra-04.png'

export function About() {
  return (
    <div className='w-full px-8 py-16 grid place-items-center gap-40 bg-gradient-to-b from-cyan-300 via-gray-50 to-gray-50'>
      <div className='w-full max-w-7xl flex flex-col-reverse gap-12 lg:flex-row items-center justify-around'>
        <img src={earthIllustrationImg} className="h-[180px] lg:h-[280px] rounded-2xl" />

        <div className="max-w-lg flex flex-col gap-6 text-base text-gray-700">
          <h1 id="about-autism" className="text-4xl text-white font-bold">
            Entendendo o autismo
          </h1>

          <p>
            O autismo é um transtorno que impacta a comunicação, interação social e comportamento das pessoas. Crianças autistas frequentemente enfrentam desafios na linguagem, exibem comportamentos repetitivos e têm dificuldades em se relacionar. Adicionalmente, problemas sensoriais e obstáculos na aprendizagem podem surgir.
          </p>

          <p>
            A identificação precoce é crucial, pois possibilita o acesso a intervenções adequadas, que promovem o desenvolvimento das habilidades sociais e de comunicação da criança. Pais e cuidadores devem estar atentos aos primeiros sinais, como atrasos na linguagem e dificuldades no contato visual.
          </p>

          <p>
            No entanto, o autismo ainda é cercado por desinformação, resultando em preconceito e estigmatização. Portanto, é imperativo promover a conscientização e a inclusão para garantir oportunidades iguais de aprendizado e desenvolvimento para crianças autistas.
          </p>
        </div>
      </div>

      <div className='w-full max-w-7xl flex flex-col lg:flex-row gap-12 items-center justify-around'>
        <div className="max-w-lg flex flex-col gap-6 text-base text-gray-700">
          <h1 id="about-project" className="text-4xl text-cyan-500 font-bold">
            Sobre o projeto
          </h1>

          <p>
            O AUTI é um projeto destinado a aprimorar o tratamento do autismo. Nossa missão é oferecer uma variedade de cenários gamificados projetados para aprimorar aspectos cognitivos, notadamente, a comunicação, concentração e memória.
          </p>

          <p>
            Buscamos, sobretudo, proporcionar às crianças autistas uma forma cativante de enfrentar desafios e lidar com atividades que possam não ser naturalmente atrativas, graças a jogos customizados para atender às suas necessidades específicas.
          </p>

          <p>
            Nosso objetivo principal é estabelecer o AUTI como uma ferramenta valiosa no tratamento do autismo, permitindo que as crianças autistas desfrutem de uma experiência divertida ao mesmo tempo em que estimulam seu desenvolvimento cognitivo.
          </p>
        </div>

        <img src={projectllustrationImg} className="h-[350px] rounded-2xl" />
      </div>
    </div>
  )
}