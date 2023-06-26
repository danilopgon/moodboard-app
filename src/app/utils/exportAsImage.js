import html2canvas from "html2canvas";

const exportAsImage = () => {
  html2canvas(document.querySelector("#moodboard")).then((canvas) => {
    const image = canvas.toDataURL("png");
    const a = document.createElement("a");
    a.setAttribute("download", "moodboard.png");
    a.setAttribute("href", image);
    a.click();
  });
};

export default exportAsImage;
