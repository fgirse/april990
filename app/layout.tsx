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

export async function generateMetadata(props: Omit<Props, 'children'>) {
  const {locale} = await props.params;



  return {
    title: locale === 'en' ? 'Home' : 'Startseite'
  };
}

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default function RootLayout({ children }: IProps) {
  return (
    <html lang="en">
      <body>
        
          
        <body>{children}</body>
        
      </body>
    </html>
  );
}

function hydrateRoot(arg0: HTMLElement, arg1: JSX.Element) {
  throw new Error("Function not implemented.");
}
