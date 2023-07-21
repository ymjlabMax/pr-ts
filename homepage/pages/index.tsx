import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import { User } from "@/types";

export default function Home() {
    const user: User = {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        isAdmin: false,
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-[32px]">타입스크립트 연습 {user.name}</h1>
        </main>
    );
}
