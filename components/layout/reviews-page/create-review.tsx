"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/utils/supabase/client";
import { Session } from "@supabase/supabase-js";

import { useEffect, useState } from "react";

export default function CreateReview() {
  const [session, setSession] = useState<Session | null>(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        setSession(data.session);
      }
    };

    checkSession();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase
        .from("reviews")
        .insert({
          name: name,
          description: description,
        })
        .single();

      if (!error) {
        alert("Recenzija uspješno napravljena. Molimo osvježite stranicu kako biste vidjeli promjene.")
        location.reload();
      }
    } catch (error) {
      console.log("Došlo je do neočekivane greške");
    }
  };

  return (
    session && (
      <section className="py-12 sm:py-24 lg:py-10 px-3 md:px-10 lg:px-24">
        <h1 className="text-2xl font-bold">Napravi novu recenziju:</h1>
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2">
          <Input
            placeholder="Ime i Prezime"
            className="border rounded shadow-xl p-4"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Textarea
            placeholder="Recenzija"
            className="border rounded shadow-xl p-4"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button type="submit" className="w-40 ml-auto">
            Napravi
          </Button>
        </form>
      </section>
    )
  );
}
