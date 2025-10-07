"use client";

import "../styles/globals.css";
import { ReactNode } from "react";
import '../styles/tailwind.css';
import '../styles/tooltip.css';
import '../styles/drinks.css';
import '../styles/styles.css'
import '../styles/globals.scss'
import "../styles/globals.css";
import { MetaHTMLAttributes } from "react";
//import 'bootstrap/dist/css/bootstrap.min.css'


interface IProps {
  children: ReactNode;
}



interface Props {
  children: React.ReactNode;
  params: { locale: string };
}

export default function Layout({ children }: IProps) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

function hydrateRoot(arg0: HTMLElement, arg1: JSX.Element) {
  throw new Error("Function not implemented.");
}
