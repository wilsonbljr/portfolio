import Image from "next/image";

interface AvatarProps {}

const Avatar: React.FC<AvatarProps> = ({}) => {
  return (
    <div className="flex justify-center items-center rounded-full border-2 border-amber-400">
      <Image
        src="/avatar.jpg"
        alt="Profile photo"
        width={160}
        height={160}
        className="rounded-full"
      />
    </div>
  );
};

export default Avatar;
