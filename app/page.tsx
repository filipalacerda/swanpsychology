import Image from "next/image";
import mainImage from "./assets/main.jpeg";

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
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24 p-16 md:mt-0 mt-8 mr-auto ml-auto overflow-auto">
      <section className="mb-4">
        <Image
          src={mainImage}
          width={600}
          height={600}
          alt="Swan Psychology main image"
        />
      </section>
      <section className="md:mt-10">
        <h2 className="md:text-3xl md:font-bold text-lg font-semibold text-center">
          If you have been wondering whether you are neurodivergent, either
          because you&lsquo;ve always felt different or because your child has
          recently been diagnosed, let&lsquo;s talk and see how I can help!
        </h2>

        <h3 className="mt-8 md:text-2xl md:font-semibold text-md font-normal text-center">
          Swan Psychology is right for you if you&lsquo;re looking for a
          clinician who is:
        </h3>

        <ul className="mt-8 md:text-2xl text-md font-normal md:text-center">
          {skills.map((skill) => (
            <li key={skill} className="mb-2 font-light">
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
