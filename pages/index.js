import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      <h1 className="absolute bottom-0 right-0">
        Travellers UK | Visit Turkey
      </h1>
      <section className="mobile-height grid gap-3 text-gray-100 md:h-screen md:grid-cols-3 lg:grid-cols-5">
        <article className="relative ">
          <Image
            //src={"https://images.unsplash.com/photo-1624351659994-7ee290aad076"}
            src={"https://images.unsplash.com/photo-1602697286756-ed679c33240d"}
            layout="fill"
            objectFit="cover"
            alt="Selçuk, İzmir, Türkiye"
          />
          <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-8xl ">
            see
          </h2>
        </article>
        <article className="relative md:col-span-2 lg:col-span-1">
          <Image
            src={"https://images.unsplash.com/photo-1555939594-58d7cb561ad1"}
            layout="fill"
            objectFit="cover"
            alt="Turkish kebab, şiş kebab"
          />
          <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-8xl ">
            taste
          </h2>
        </article>
        <article className="relative ">
          <Image
            src={"https://images.unsplash.com/photo-1601585528379-0cfb189fa359"}
            layout="fill"
            objectFit="cover"
            alt="Grande Bazaar, Fatih, Turkey"
          />
          <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-8xl ">
            smell
          </h2>
        </article>
        <article className="relative ">
          <Image
            src={"https://images.unsplash.com/photo-1640244676211-b0d817d1658d"}
            layout="fill"
            objectFit="cover"
            alt="Marmaris, Muğla, Turkey"
          />
          <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-8xl ">
            touch
          </h2>
        </article>
        <article className="relative ">
          <Image
            src={"https://images.unsplash.com/photo-1585587591470-6503e34bd96b"}
            layout="fill"
            objectFit="cover"
            alt="Beach | Kaş/Antalya, Türkiye"
          />
          <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-8xl ">
            listen
          </h2>
        </article>
      </section>
    </main>
  );
}
