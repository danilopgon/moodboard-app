import MoodBento from "../components/MoodBento";

export default function Moodboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="card bg-base-300 p-10 lg:mx-28 rounded gap-10 m-5 my-10 grid md:grid-cols-2 lg:grid-cols-4">
        <section className="lg:col-span-1 flex flex-col gap-10 place-content-center text-left">
          <h1 className="text-5xl ">¡Hola!</h1>
          <h2 className="text-4xl ">Te ayudamos a generar tu moodboard</h2>
          <h3 className="text-xl ">
            Sube tus imágenes y nosotros hacemos el resto
          </h3>
          <form className="flex flex-col gap-10">
            <input
              type="file"
              className="file-input file-input-bordered file-input-primary w-full"
            />
            <button className="btn btn-primary">¡Hazme un moodboard!</button>
          </form>
        </section>
        <section className="lg:col-span-3">
          <MoodBento />
        </section>
      </div>
    </main>
  );
}
