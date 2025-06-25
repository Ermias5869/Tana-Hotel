import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image src={logo} height="60" width="60" alt="Tana hotel logo" />
      <span className="text-xl font-semibold text-primary-100">Tana Hotel</span>
    </Link>
  );
}

export default Logo;
