import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      {/* <a href={socialLinks.twitter} target="_blank"> */}
      <Image
        src="/profile.png"
        alt="Profile photo"
        className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
        unoptimized
        width={160}
        height={160}
        priority
      />
      {/* </a> */}

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Get to know the history of New York
      </h1>

      <div className="prose prose-neutral dark:prose-invert mb-10">
        <p>
          I provide well-researched, engaging, site-specific history tours of New York City. I am also a licensed New York City tour guide.
        </p>
        <p>
          Both of my tours are listed below and can be booked by clicking the photos. If cost is an issue, I would be happy to give you a tour for free. Email me at <a href={socialLinks.email}>jon@nycwalkingtours.org</a> to set up a time.
        </p>
      </div>

       <div className="pt-5">
        <h2 className="pb-2">Brooklyn Bridge Tour</h2>
        <a href="https://www.viator.com/tours/Brooklyn/Life-and-death-on-the-Brooklyn-Bridge-with-a-local/d22371-345485P1" target="_blank">
          <Image
            src="/photos/bridge.png"
            alt="Brooklyn Bridge"
            className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-100 mx-auto sm:float-left sm:mr-5 sm:mb-5 hover:opacity-60"
            unoptimized
            width={160}
            height={160}
            priority
          />
        </a>
        <div className="prose prose-neutral dark:prose-invert">
          <p>
            Most people are going to the Bridge to grab a selfie and get on with their day. They don't understand the engineering marvel and heartbreaking history behind it all. We will learn this fascinating past (and <i>then</i> take a selfie on the Bridge).
          </p>
        </div>
      </div>
      
      <div className="pb-10">
        <h2 className="pb-2">Subway Tour</h2>
        <a href="https://www.viator.com/tours/New-York-City/Private-New-York-City-Subway-Tour-With-A-Local/d687-345485P2" target="_blank">
          <Image
            src="/photos/subway.png"
            alt="The A train"
            className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-100 mx-auto sm:float-left sm:mr-5 sm:mb-5 hover:opacity-70"
            unoptimized
            width={160}
            height={160}
            priority
          />
        </a>
        <div className="prose prose-neutral dark:prose-invert">
          <p>
            A private, custom tour of the New York City subway system. Each tour is unique. I will build it around your needs and walk you through every step of the way. We will see history, architecture, abandoned stations, and beautiful artwork.
          </p>
        </div>
      </div>

      <div className="pb-10">
        <h2 className="pb-2">How to use the Subway</h2>
        <a href="https://www.viator.com/tours/Jersey-City/Learn-to-ride-the-Subway-with-a-New-York-Local/d24760-345485P3" target="_blank">
          <Image
            src="/photos/times.png"
            alt="The A train"
            className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-100 mx-auto sm:float-left sm:mr-5 sm:mb-5 hover:opacity-70"
            unoptimized
            width={160}
            height={160}
            priority
          />
        </a>
        <div className="prose prose-neutral dark:prose-invert">
          <p>
            The New York City Subway is one of the most complex transit systems in the world but with a little help, you can ride it like a pro. This is a practical guide to using the subway.
          </p>
        </div>
      </div>
     
    </section>
  );
}
