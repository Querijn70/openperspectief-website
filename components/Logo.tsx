import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  showTagline?: boolean;
  className?: string;
};

export default function Logo({
  showTagline = false,
  className = "",
}: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex flex-col gap-1 p-4 ${className}`}
    >
      <Image
        src="/images/logo.png"
        alt="OpenPerspectief — op organiseren en vernieuwen"
        width={220}
        height={80}
        className="h-auto w-[180px] max-w-full object-contain sm:w-[200px]"
        priority
      />
      {showTagline && (
        <span className="font-slogan text-sm italic tracking-wide text-op-groen">
          op organiseren en vernieuwen
        </span>
      )}
    </Link>
  );
}
