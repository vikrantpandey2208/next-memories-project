import Image from 'next/image';
import pic1 from '@/data/WhatsApp Image 2024-07-19 at 20.51.46.jpeg';
import pic2 from '@/data/WhatsApp Image 2024-07-19 at 20.51.47 (1).jpeg';
import pic3 from '@/data/WhatsApp Image 2024-07-19 at 20.51.48 (1).jpeg';
import pic4 from '@/data/WhatsApp Image 2024-07-19 at 20.51.49 (1).jpeg';
import pic5 from '@/data/WhatsApp Image 2024-07-19 at 20.51.49.jpeg';
import pic6 from '@/data/kittu.jpeg';

const Overlay = () => {
  return (
      <div className="bg-gray-800 dark:bg-gray-800  py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <div className="flex items-center gap-12">
            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">Memories</h2>
            <p className="hidden max-w-screen-sm text-gray-300 md:block">
            Capturing the essence of our journey together. Celebrating our collective achievements and milestones.

            </p>
          </div>
         
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {/* image - start */}
          <div
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <Image
              src={pic1}
              alt="Photo by Minh Pham"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Animal lover</span>
          </div>
          {/* image - end */}

          {/* image - start */}
          <div
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <Image
              src={pic2}
              alt="Photo by Magicle"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Meetup</span>
          </div>
          {/* image - end */}

          {/* image - start */}
          <div
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <Image
              src={pic3}
              alt="Photo by Martin Sanchez"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Final Moments</span>
          </div>
          {/* image - end */}

          {/* image - start */}
          <div
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <Image
              src={pic4}
              alt="Photo by Lorenzo Herrera"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Farewell</span>
          </div>
          {/* image - end */}
          
        </div>
      </div>
    </div>
  );
};

export default Overlay;
