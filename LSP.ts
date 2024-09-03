abstract class IMovie {
  play() {
    // play no video
  }
  increaseVolume() {
    // aumentar volume
  }
}

class TheLionKing extends IMovie {
  // essa classe é um movie
}

const movie = new TheLionKing();
// ultiliza ela no lugar do Movie

class ModernTimes extends IMovie {
  //  ERRADO
  increaseVolume(): void {
    // esse filme não pode aumentar o volume
  }
}
const movie2 = new ModernTimes(); // essa classe viola o principio de lsp, por ser um filme 'mudo'
