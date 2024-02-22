const moduloInsertarVideo = (function () {
  function showVideo(urlVideo, idIframe) {
    //idIframe es string

    const iframeInsertarVideo = document.getElementById(idIframe);
    const loaderId = document.getElementById(`loader_${idIframe}`);
    iframeInsertarVideo.src = urlVideo;

    iframeInsertarVideo.addEventListener("load", function () {
      loaderId.style.display = "none";
      iframeInsertarVideo.style.display = "block";
    });
  }

  return function (urlVideo, idIframe) {
    showVideo(urlVideo, idIframe);
  };
})();
export default moduloInsertarVideo;

/*
testeo de funcion operativa


const insertarVideoMusica = moduloInsertarVideo;
const insertarVideoPelicula = moduloInsertarVideo;
const insertarVideoSerie = moduloInsertarVideo;

insertarVideoMusica("https://www.youtube.com/embed/r6tMTzEiGPI", "musica");
insertarVideoPelicula("https://www.youtube.com/embed/TAjDERf7ISk", "peliculas");
insertarVideoSerie("https://www.youtube.com/embed/X9xJaQK5BjQ", "series");
*/
