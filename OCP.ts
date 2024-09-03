class Video {
  type;
  calculaInteresse() {
    if (this.type === "Movie") {
      // calcula interesse baseado em filme
    } else if (this.type === "TVShow") {
      // calcula interesse baseado em show de TV
    }
  }
} // ERRADO

abstract class IVideo extends Video {
  // essa classe Video deveria ter um método generico que apenas calcula qualquer tipo
  calculaInteresse() {
    // calcula
  }
}

class Movie extends IVideo {
  // essa classe extends da classe abstrata, uma interface
  calculaInteresse() {}
}
