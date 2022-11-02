import Card from './Card';
import Image from 'next/image';
import City from '../assets/City.svg';

export default function Cards({ cities, onClose }) {
  return (
    <>
      {cities.length > 0 ? (
        <div className="w-full flex flex-wrap justify-center gap-4 max-w-7xl m-auto">
          {cities.map((city) => (
            <Card
              key={city.id}
              id={city.id}
              temp={city.temp}
              max={city.max}
              min={city.min}
              name={city.name}
              img={city.img}
              onClose={() => onClose(city.id)}
            />
          ))}
        </div>
      ) : (
        <div className="animate__animated animate__fadeIn w-full h-full grid place-items-center mt-48">
          <div className="max-w-sm mx-4">
            <Image src={City} alt="Search for a City!" />
          </div>
          <h1 className="m-0 mt-8 text-2xl">Search for a City Above!</h1>
        </div>
      )}
    </>
  );
}