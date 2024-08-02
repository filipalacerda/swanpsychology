import Image from "next/image";
import mainImage from "./assets/main.jpeg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 mr-auto ml-auto">
      <section>
        <Image
          src={mainImage}
          width={600}
          height={600}
          alt="Swan Psychology main image"
        />
      </section>
    </main>
  );
}
