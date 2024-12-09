"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase/client";
import { Session } from "@supabase/supabase-js";
import { cn } from "@/lib/utils";
import { v4 as uuidv4 } from "uuid";
import { Input } from "@/components/ui/input";

export default function UploadImage() {
  const [session, setSession] = useState<Session | null>(null);
  const [fileCount, setFileCount] = useState<number>(0);

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        setSession(data.session);
      }
    };

    const getFileCount = async () => {
      const { data, error } = await supabase.storage
        .from("gallery-images")
        .list("gallery");

      if (data) {
        setFileCount(data.length);
      }
    };

    checkSession();
    getFileCount();
  }, []);

  async function uploadImage(e: any) {
    let file = e.target.files[0];

    if (file.size > 2 * 1024 * 1024) {
      alert(
        "Slika je veća od 2MB! Molimo smanjite veličinu slike ili promjenite format u WEBP radi što bolje optimizacije."
      );
      return;
    }

    if (!session?.user.id) {
      console.log("User ID is not defined");
      return;
    }

    const { data, error } = await supabase.storage
      .from("gallery-images")
      .upload("gallery/" + uuidv4(), file);

    if (data) {
      alert(
        "Slika objavljena. Stranica će se sada osvježiti kako biste vidjeli promjene."
      );
      location.reload();
    }
  }

  return (
    <div className="py-12 sm:py-24 lg:py-10 px-3 md:px-10 lg:px-24">
      <div className={cn(session ? "flex items-center gap-2" : "hidden")}>
        <h2>Dodajte nove slike ovdje:</h2>
        <div className="cursor-pointer grid w-full max-w-sm items-center gap-1.5">
          <Input
            className="border rounded cursor-pointer"
            onChange={(e) => uploadImage(e)}
            id="picture"
            type="file"
            disabled={fileCount >= 60}
          />
          {fileCount >= 60 && (
            <p className="text-red-500">Ne možete dodati više od 60 slika.</p>
          )}
        </div>
      </div>
    </div>
  );
}
