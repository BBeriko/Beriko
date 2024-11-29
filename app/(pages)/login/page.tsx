"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/utils/supabase/client";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError("Krivi email ili lozinka");
      } else {
        setError(null);
        router.push("/");
      }
    } catch (err) {
      setError("Došlo je do neočekivane greške");
    }
  };

  return (
    <main className="my-28 lg:py-40 px-3 md:px-10 lg:px-24">
      <div className="py-32 flex justify-center items-center rounded-md shadow-md bg-primary-foreground">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <Image
            src="https://utfs.io/f/KEu7z70yXtIh8k4eWbySeWkuAlRcKazbEojGsgDmyxPMd9n7"
            alt="Logo"
            width={250}
            height={250}
            className="mb-4"
          />
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border px-4 py-2 rounded"
            required
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border px-4 py-2 rounded"
            required
          />
          <button
            type="submit"
            className="bg-[color:var(--analogous)] w-32 m-auto py-2 rounded mt-4"
          >
            Login
          </button>
          {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        </form>
      </div>
    </main>
  );
}
