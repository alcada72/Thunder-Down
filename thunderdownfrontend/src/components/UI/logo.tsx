import Image from "next/image";
import Link from "next/link";
type Props = {
  size?: 40 | 60 | 80 | 100 | 120 | 140 | 160 | 180 | 200;
};
export const Logo = ({ size = 80 }: Props) => {
  return (
    <Link href={"/"}>
      <Image
        src={"/icon.png"}
        alt={"Icon of the thunder down app"}
        width={size}
        height={size}
      />
    </Link>
  );
};

export const Label = ({ black=false, size = 80 }) => {
  return (
    <Link href={"/"}>
      <Image
        src={black?"/label-black.png":"/label.png"}
        alt={"Icon of the thunder down app"}
        width={size}
        height={size}
      />
    </Link>
  );
};

export const LabelTwo = ({size = 80 }) => {
  return (
    <Link href={"/"}>
      <Image
        src={"/label@1.png"}
        alt={"Icon of the thunder down app"}
        width={size}
        height={size}
      />
    </Link>
  );
};
