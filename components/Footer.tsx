// import { GENERAL_INFO } from '@/lib/data';
// import { GitFork, Star } from 'lucide-react';
import { IMAGES, LINKS } from '@/lib/data';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="text-center pb-5 px-4 md:px-10" id="contact">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 lg:gap-[40%]">
        <div className="flex justify-center md:justify-start gap-4 md:gap-6">
          {IMAGES.map((img) => (
            <Image
              key={img.name}
              height={20}
              width={20}
              className="w-20 h-20 md:w-24 md:h-24 object-contain"
              src={img.link}
              alt={img.name}
            />
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-base md:text-lg font-semibold">
          {LINKS.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="hover:underline cursor-pointer"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;