const bioData = {
  inicio: "Cristiano nasceu na Ilha da Madeira, Portugal, em 1985. Desde pequeno mostrava talento e dedicação ao futebol. Aos 12 anos, foi para Lisboa jogar pelo Sporting.",
  manchester: "Em 2003, CR7 foi contratado pelo Manchester United. Lá conquistou 3 Premier Leagues, uma Champions League e sua primeira Bola de Ouro.",
  real: "Transferido para o Real Madrid em 2009, Ronaldo viveu seu auge: 4 Champions, 2 La Ligas e mais 4 Bolas de Ouro. Tornou-se o maior artilheiro da história do clube.",
  juventus: "Em 2018, foi para a Juventus, onde venceu 2 Campeonatos Italianos e continuou quebrando recordes de gols e desempenho.",
  selecao: "Pela Seleção Portuguesa, venceu a Eurocopa 2016 e a Liga das Nações 2019. É o maior artilheiro da história das seleções nacionais."
};

function showBio(phase) {
  const content = document.getElementById('bio-content');
  content.innerHTML = `<p>${bioData[phase]}</p>`;
}
