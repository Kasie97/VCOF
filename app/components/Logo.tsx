import Image from "next/image";
import logo from "@/images/logo.jpeg"
import Link from "next/link";

interface Props{
    title?: string;
    className?: string;
}

const Logo = ({title, className}:Props) => {
  return (
    <Link href={"/"}>
        {/* <Image src={logo} alt="VCO-logo" className="h-14 w-14 pr-1 mx-auto"/> */}
    <h1 className = {`text-3xl font-extrabold uppercase ${className}`}> 
    {title || 'VCO Foundation'}</h1>   
    </Link>
  );
};

export default Logo;