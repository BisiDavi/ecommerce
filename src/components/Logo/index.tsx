import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" passHref>
      <a className="w-1/6">
        <Image
          src="/logo.webp"
          alt="Bandicoot"
          height={50}
          width={150}
          layout="responsive"
        />
      </a>
    </Link>
  );
}
