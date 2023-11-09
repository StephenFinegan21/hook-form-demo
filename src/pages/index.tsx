import Image from "next/image";
import { Inter } from "next/font/google";
import FormWrapper from "@/components/FormWrapper";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ userData }: { userData: any }) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >

    </main>
  );

}


