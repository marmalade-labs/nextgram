"use server";

import { kv } from '@vercel/kv';
import { revalidateTag } from "next/cache";

export async function togglePhoto(id: string) {
  console.log("Toggle", id);
  await new Promise(r => setTimeout(r, 5000));
  try {
    await kv.json.toggle(`photo:${id}`, '$.isToggled')
  } catch {
    await kv.json.set(`photo:${id}`, '$', { isToggled: true })
  }
  revalidateTag("photo-toggled")
}
