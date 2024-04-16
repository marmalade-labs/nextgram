import { kv } from "@vercel/kv";
import { unstable_cache } from "next/cache";

export const isPhotoToggled = unstable_cache(
  async (id: string) => {
    const value = await kv.json.get(`photo:${id}`, '$.isToggled')
    return (value == null) ? false : value[0];
  },
  ['photo-toggled'],
  { tags: ["photo-toggled"] },
);


