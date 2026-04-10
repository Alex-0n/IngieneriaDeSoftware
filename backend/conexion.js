
import { createClient } from "@supabase/supabase-js/dist/index.cjs";
import { create } from "node:domain";

export const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.sb_publishable_-jj2_meKABqDrxFS1eZ1_g_2s5JgWaG
)

const { data, error } = await supabase
  .from("productos")
  .select("*");