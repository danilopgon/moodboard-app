"use client";

import MoodBento from "./components/MoodBento";
import { useState, useRef, useEffect } from "react";
import Balancer from "react-wrap-balancer";

import exportAsImage from "./utils/exportAsImage";
import AlertModal from "./components/AlertModal";

export default function Moodboard() {
  const [files, setFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [myHTMLElement, setMyHTMLElement] = useState(null);
  const [modalOpen, setModalOpen] = useState("");

  const moodboardRef = useRef();

  useEffect(() => {
    if (moodboardRef.current) {
      setMyHTMLElement(moodboardRef.current);
    }
  }, [uploadedFiles]);

  const handleFileChange = (e) => {
    const images = e.target.files;
    const imagesArray = [];

    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      imagesArray.push(URL.createObjectURL(image));
    }

    setFiles(imagesArray);
  };

  const handleUploadClick = (e) => {
    e.preventDefault();
    if (files?.length !== 6) {
      setModalOpen("open");
    }
    setUploadedFiles(files);
  };

  const handleCloseModal = () => {
    setModalOpen("");
  };

  return (
    <>
      {modalOpen && <AlertModal open={modalOpen} close={handleCloseModal} />}
      <main className="flex min-h-screen flex-col items-center">
        <div className="card m-5 my-10 grid gap-10 rounded-xl bg-base-300 p-10 lg:mx-28 lg:grid-cols-4">
          <section className="flex flex-col place-content-center gap-10 text-left lg:col-span-1">
            <h1 className="text-5xl">¡Hola!</h1>
            <h2 className="text-4xl">
              <Balancer>
                Te ayudamos a generar un moodboard rápidamente
              </Balancer>
            </h2>
            <h3 className=" text-xl">
              <Balancer>Sube tus imágenes y nosotros hacemos el resto</Balancer>
            </h3>

            <form className="flex flex-col gap-10">
              <input
                type="file"
                multiple
                className="file-input-bordered file-input-primary file-input w-full"
                accept="image/*"
                onChange={handleFileChange}
              />
              <button onClick={handleUploadClick} className="btn-primary btn">
                ¡Hazme un moodboard!
              </button>
            </form>
            <button
              onClick={() => {
                exportAsImage(myHTMLElement);
              }}
              className="btn-primary btn"
            >
              Descarga el moodboard
            </button>
          </section>
          <section className="lg:col-span-3">
            <div ref={moodboardRef}>
              <MoodBento imgUrls={uploadedFiles} />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
