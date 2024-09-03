abstract class IMovie2 {
  play() {}
  abstract increaseVolume();
}

class TheLionKing2 extends IMovie2 {
  increaseVolume() {
    // esse método não será ultilizado aqui
    // o corre é extender de IMovie3 ⬇️
  }
}
// classe correta a ser extendida ⬇️
abstract class IMovie3 {
  abstract play();
}
