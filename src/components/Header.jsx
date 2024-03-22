import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import NextLink from 'next/link'
import Image from "next/image";
import { Source_Code_Pro } from "next/font/google";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
});


export default function Header() {
  return (
    <Navbar className='bg-[#FDF2DB] flex'>
      <NavbarContent>
        <NavbarItem className=" justify-start ">
        
          <Link color="foreground" href="/" as={NextLink}>
          <Image
          className=""
          src="/shopbutton.svg"
          alt="My image"
          width={64}
          height={18}
          />
          </Link>
        </NavbarItem>
          </NavbarContent>
        <NavbarBrand className='justify-center'>
        <Image
          className=" "
          src="/afterloginlogo.svg"
          alt="My image"
          width={199}
          height={49}
          />
      </NavbarBrand>
        
        
      <NavbarContent justify="end">
      <NavbarItem>
          <Link color="foreground"  href="/" as={NextLink}>
          <Image
          className="w-auto"
          src="/loginbutton.svg"
          alt="My image"
          width={64}
          height={18}
          />
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
