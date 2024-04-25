import Image from "next/image";
import banner from "../images/bannerimage1.jpeg";

const Hero = () => {
  return (
    <div className="w-full max-h-screen relative">
        <Image src={banner} 
           alt="VCO banner image" 
           className="w-full max-h-screen object-contain"
        />
        <div className="absolute top-0 w-full h-full bg-black/30 text-white flex flex-col items-center justify-center">
            <h2 className="text-6xl lg:text-[150px] md:text-[50px] justify-center font-bold">Insipre Youths</h2>
            <p className="text-xl md:text-2xl lg:text-4xl font-semibold">Sports. Tech. Arts. Entertainment.</p>

        </div>
    </div>
  );
};

export default Hero