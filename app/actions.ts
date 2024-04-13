"use server"

export default async function revalidate(_: FormData) {
  console.log("revalidating ... ")
  await new Promise(r => setTimeout(r, 5000));
  console.log("revalidated!")
}
