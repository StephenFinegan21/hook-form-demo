import Image from "next/image";
import { Inter } from "next/font/google";
import FormWrapper from "@/components/FormWrapper";




const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  console.log(props)
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <FormWrapper />
    </main>
  );
}


export async function getServerSideProps() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const userData = await response.json();

    return {
      props: {
        userData,
      },
    };
  } catch (error) {
    console.error("Error fetching user data:", error);

    return {
      props: {
        userData: null, // Handle the error gracefully in your component
      },
    };
  }
}