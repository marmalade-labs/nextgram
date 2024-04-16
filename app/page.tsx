import { Photo } from "./components/Photo";

export default function Page() {
  let photos = Array.from({ length: 6 }, (_, i) => (i + 1).toString());

  return (
    <section className="cards-container">
      {photos.map((id) => (
        <div className="card" key={id}>
          <Photo id={id} navigate></Photo>
        </div>
      ))}
    </section>
  );
}
