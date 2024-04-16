import { Photo } from "../../components/Photo";

export default async function PhotoPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return <div className="card"><Photo id={id} /></div>;
}
