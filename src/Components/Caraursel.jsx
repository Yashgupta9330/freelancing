import car from "../assets/car.jpg"
import { Carousel } from "flowbite-react";
export default function Carausel(){
          return (
            <div className="h-56 overflow-hidden w-[90%]">
              <Carousel className="w-full h-full">
                <img src={car} alt="..."  className="h-full"/>
                <img src={car} alt="..." />
                <img src={car} alt="..." />
                <img src={car} alt="..." />
                <img src={car} alt="..." />
              </Carousel>
            </div>
          );
        }