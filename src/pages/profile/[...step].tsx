import Image from "next/image";
import { Inter } from "next/font/google";
import FormWrapper from "@/components/FormWrapper";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ userData }: { userData: any }) {
    const router = useRouter();
    const { step } = router.query;

    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-start p-24 gap-24 ${inter.className}`}
        >
            <h1>Profile - Step {step}</h1>
            <FormWrapper userData={userData} currentStep={step} />
        </main>
    );

}

export async function getServerSideProps() {
    try {
        const response = await fetch('https://654b5c845b38a59f28eeef6b.mockapi.io/api/v1/tenants/tenantprofile/1',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
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
                userData: null,
            },
        };
    }
}