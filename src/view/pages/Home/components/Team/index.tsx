import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import brunoPhoto from '../../../../../assets/images/bruno-neckel.jpg';
import vitorPhoto from '../../../../../assets/images/vitor-spinola.png';
import julianaPhoto from '../../../../../assets/images/juliana-backer.png';
import heloisaPhoto from '../../../../../assets/images/heloisa-caffaro.jpeg';
import evelinPhoto from '../../../../../assets/images/evelin.png';

import { TeamCard } from '../../../../components/TeamCard';


export function Team() {
  return (
    <div 
      id="team"
      className='w-full px-6 pt-12 pb-20 bg-gradient-to-b from-gray-50 via-cyan-200 to-gray-50'
    >
      <div className='max-w-7xl h-full flex items-center m-[auto]'>
        <Swiper
          spaceBetween={48}
          slidesPerView={1.7}
          breakpoints={{
            640: {
              slidesPerView: 2.7
            },
            768: {
              slidesPerView: 3.7
            },
            1024: {
              slidesPerView: 4.7
            },
            1280: {
              slidesPerView: 5
            },
          }}
        >
          <h1
            slot="container-start"
            className="text-4xl text-cyan-500 font-bold text-center mb-12"
          >
            Nossa equipe
          </h1>
          
          <SwiperSlide>
            <TeamCard
              src={brunoPhoto}
              name="Bruno Neckel"
              to="https://www.linkedin.com/in/brunownk/"
            />
          </SwiperSlide>

          <SwiperSlide>
            <TeamCard
              src={evelinPhoto}
              name="Evelin Cordeiro"
              to="https://www.linkedin.com/in/evelin-cordeiro"
            />
          </SwiperSlide>

          <SwiperSlide>
            <TeamCard
              src={heloisaPhoto}
              name='Heloísa Caffaro'
              to="https://www.linkedin.com/in/helo%C3%ADsa-caffaro-08a105219"
            />
          </SwiperSlide>

          <SwiperSlide>
            <TeamCard
              src={julianaPhoto}
              name="Juliana Backer"
              to="https://www.linkedin.com/in/julibacker"
            />
          </SwiperSlide>

          <SwiperSlide>
            <TeamCard
              src={vitorPhoto}
              name="Vitor Spinola"
              to="https://www.linkedin.com/in/vitorspinola"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}