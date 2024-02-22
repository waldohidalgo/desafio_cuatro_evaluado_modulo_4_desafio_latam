import moduloInsertarVideo from "./script_patron_modulo.js";

class Multimedia {
  constructor(url) {
    let _atributoPrivado = url; //url debe ser del tipo string
    this.getAtributoPrivado = function () {
      return _atributoPrivado;
    };
    this.setAtributoPrivado = function (nuevaURL) {
      _atributoPrivado = nuevaURL;
    };
  }
  get url() {
    return this.getAtributoPrivado();
  }

  set url(nuevaURL) {
    this.setAtributoPrivado(nuevaURL);
  }

  setInicio() {
    return "Este método es para realizar un cambio en la URL del video";
  }
}

class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    this._id = id;
  }
  get id() {
    return this._id;
  }

  playMultimedia() {
    moduloInsertarVideo(this.url, this.id);
  }
  setInicio(tiempo) {
    this.url = `${this.url}?start=${tiempo}`; //tiempo en segundos
  }
}
const objetoVideoMusica = new Reproductor(
  "https://www.youtube.com/embed/r6tMTzEiGPI",
  "musica"
);
const objetoVideoPelicula = new Reproductor(
  "https://www.youtube.com/embed/TAjDERf7ISk",
  "peliculas"
);

const objetoVideoSerie = new Reproductor(
  "https://www.youtube.com/embed/X9xJaQK5BjQ",
  "series"
);

objetoVideoMusica.setInicio(50); //inicio en el segundo 500 del video
objetoVideoPelicula.setInicio(30); //inicio en el segundo 300 del video
objetoVideoSerie.setInicio(10); //inicio en el segundo 100 del video

objetoVideoMusica.playMultimedia();
objetoVideoPelicula.playMultimedia();
objetoVideoSerie.playMultimedia();
