import SwitchTheme from "./components/SwitchTheme";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between rounded">
      <header className="hero">
        <img
          alt="A cute cat"
          src="https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg"
          className="w-full object-cover h-[80vh] "
        />
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Esta es una pagina de inicio temporal
            </h1>
            <p className="mb-5">El gato es bonico</p>
            <button className="btn btn-primary">
              Al generador de moodboards
            </button>
          </div>
        </div>
      </header>
      <section className="my-10">
        <h1 className="text-5xl my-10">Estoy trabajando con esta movida:</h1>
        <div className="mockup-code">
          <pre data-prefix="$">
            <code>npm i daisyui</code>
          </pre>
          <pre data-prefix=">" className="text-warning">
            <code>installing...</code>
          </pre>
          <pre data-prefix=">" className="text-success">
            <code>Done!</code>
          </pre>
        </div>
      </section>
    </main>
  );
}
