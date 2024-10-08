import Image from "next/image";
import profilePicture from "../assets/rita.jpg";
import { BsRainbow } from "react-icons/bs";

const About = () => {
  return (
    <section className="md:p-24 p-12 flex md:mt-20 mt-10 md:gap-20 gap-10 md:flex-row flex-col">
      <div className="w-4/5 leading-14">
        <h2 className="md:text-4xl text-2xl font-bold flex gap-2 items-center">
          I&lsquo;m Rita! <BsRainbow color="#b61737" size={30} />
        </h2>
        <h3 className="mt-10 font-md md:text-3xl text-lg">
          Maybe you want to launch a business. Maybe you want to turn a hobby
          into something more. Or maybe you have a creative project to share
          with the world. Whatever it is, the way you tell your story online can
          make all the difference.
        </h3>
        <p className="mt-10 text-lg font-light">
          Don&lsquo;t worry about sounding professional. Sound like you. There
          are over 1.5 billion websites out there, but your story is
          what&lsquo;s going to separate this one from the rest. If you read the
          words back and don&lsquo;t hear your own voice in your head,
          that&lsquo;s a good sign you still have more work to do.
        </p>
      </div>

      <Image
        src={profilePicture}
        alt="Profile picture"
        width={600}
        height={600}
        className="rounded-full flex flex-1"
        style={{ width: "600px", height: "600px" }}
        priority={true}
      />
    </section>
  );
};

export default About;
