import Image from "next/image";

const Phrase = ({ source }: any) => {
  return (
    <div className="flex px-5 gap-5 items-center">
      <p className="text-[7.5vw] text-medium italic">Front End Developer</p>
      <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
        <Image style={{ objectFit: "cover" }} src={source} alt="image" fill />
      </span>
    </div>
  );
};

export default Phrase;
