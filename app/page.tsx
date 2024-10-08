import Image from "next/image";
import mainImage from "./assets/main.jpeg";
import profilePicture from "./assets/rita.jpg";
import Link from "next/link";

export default function Home() {
  const skills = [
    "NHS experienced",
    "Strengths-based",
    "Female-focused",
    "Considers the specific needs of parents",
    "ND affirming",
    "Empowering",
    "Has lived experience",
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:pt-24 pt-16 md:mt-0 mt-8 mr-auto ml-auto overflow-auto">
      <section className="mb-4 px-16">
        <Image
          src={mainImage}
          width={600}
          height={600}
          alt="Swan Psychology main image"
        />
      </section>
      <section className="md:mt-10 px-16">
        <h2 className="md:text-3xl md:font-bold text-lg font-semibold text-center">
          If you have been wondering whether you are neurodivergent, either
          because you&lsquo;ve always felt different or because your child has
          recently been diagnosed, let&lsquo;s talk and see how I can help!
        </h2>

        <h3 className="mt-8 md:text-2xl md:font-semibold text-md font-normal text-center">
          Swan Psychology is right for you if you&lsquo;re looking for a
          clinician who is:
        </h3>

        <ul className="mt-8 md:text-2xl text-md font-normal text-center">
          {skills.map((skill) => (
            <li key={skill} className="mb-2 font-light">
              {skill}
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-14 flex items-center bg-ligthBackground w-full p-20 justify-around md:flex-row flex-col gap-10">
        <div>
          <Image
            src={profilePicture}
            alt="Profile picture"
            width={400}
            height={400}
            className="rounded-full md:w-80"
            priority={true}
          />
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="md:text-3xl text-lg font-bold italic">
            It takes one to truly understand one.
          </h3>
          <p className="mt-4 text-lg">
            I was a diagnostician for years before being diagnosed as AuDHD
            myself.
          </p>

          <Link
            href="/about"
            className="mt-5 bg-red p-4 rounded-3xl text-white text-center md:w-60 w-40"
          >
            About me
          </Link>
        </div>
      </section>
      <section className="mt-14 py-16 md:px-0 px-12 flex flex-col items-center text-lg md:text-2xl text-center">
        <p className="leading-10 font-light mb-2">
          Learning more about your neurotype is a vital step for self-acceptance
          and compassion, but it is also about communicating your needs better
          to others.
        </p>
        <p className="leading-10 font-light mb-2">
          If you&lsquo;re pregnant, I can help with birth planning to take into
          account sensory and communication needs.
        </p>
        <p className="leading-10 font-light mb-2">
          If you&lsquo;re already a parent, how does meeting your needs allow
          you to better show up for your family?
        </p>
        <p className="leading-10 font-light mb-2">
          If you&lsquo;re already diagnosed or are happy being self-diagnosed, I
          can help you in the process of discovery of your authentic self.
        </p>
        <Link
          href="/services"
          className="mt-5 bg-white p-4 rounded-3xl text-center md:w-60 w-40"
        >
          Our services
        </Link>
      </section>
      <section className="mt-14 flex items-center bg-ligthBackground w-full p-20 justify-around flex-col text-center">
        <p className="leading-10 font-extralight text-2xl">
          There is so much to know about these topics.
        </p>
        <p className="leading-10 font-extralight text-2xl">
          I was a diagnostician for years before being diagnosed as AuDHD
          myself.
        </p>

        <Link
          href="/faqs"
          className="mt-5 bg-red p-4 rounded-3xl text-white text-center md:w-60 w-40"
        >
          FAQs
        </Link>
      </section>

      <section className="mt-14 py-16 flex flex-col items-center text-md text-center">
        <p className="leading-10 mb-4 font-bold text-5xl leading-10">
          We&lsquo;d love to work with you!
        </p>
        <Link
          href="/contact"
          className="mt-10 bg-white p-4 rounded-3xl text-center md:w-60 w-40"
        >
          Contact us
        </Link>
      </section>
    </main>
  );
}
