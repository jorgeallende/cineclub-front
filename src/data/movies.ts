export interface Movie {
  id: number
  title: string
  year: string
  runtime: string
  genres: string[]
  director: string
  actors: string
  plot: string
  posterUrl: string
}

interface MovieList {
  genres: string[]
  movies: Movie[]
}

export const movies = {
  genres: [
    'Comédia',
    'Fantasia',
    'Crime',
    'Drama',
    'Aventura',
    'Animação',
    'Família',
    'Mistério',
    'Biografia',
    'Ação',
    'Romance',
    'Terror',
    'Artes Marciais',
    'Ficção Científica',
  ],
  movies: [
    {
      id: 4,
      title: 'A Criada',
      year: '2016',
      runtime: '144',
      genres: ['Drama', 'Romance'],
      director: 'Park Chan-Wook',
      actors: 'Kim Min-Hee, Tae-ri Kim, Jung-woo Ha',
      plot: 'Coreia do Sul, anos 1930. Durante a ocupação japonesa, a jovem Sookee (Kim Tae-ri) é contratada para trabalhar para uma herdeira nipônica, Hideko (Kim Min-Hee), que leva uma vida isolada ao lado do tio autoritário. Só que Sookee guarda um segredo: ela e um vigarista planejam desposar a herdeira, roubar sua fortuna e trancafiá-la em um sanatório. Tudo corre bem com o plano, até que Sookee aos poucos começa a compreender as motivações de Hideko.',
      posterUrl:
        'https://br.web.img3.acsta.net/c_310_420/pictures/16/12/01/21/17/181017.jpg',
    },
    {
      id: 6,
      title: 'Me Chame Pelo Seu Nome',
      year: '2018',
      runtime: '131',
      genres: ['Drama', 'Romance'],
      director: 'Luca Guadagnino',
      actors: 'Armie Hammer, Timothée Chalamet, Michael Stuhlbarg',
      plot: 'O sensível e único filho da família americana com ascendência italiana e francesa Perlman, Elio (Timothée Chalamet), está enfrentando outro verão preguiçoso na casa de seus pais na bela e lânguida paisagem italiana. Mas tudo muda quando Oliver (Armie Hammer), um acadêmico que veio ajudar a pesquisa de seu pai, chega.',
      posterUrl:
        'https://br.web.img3.acsta.net/c_310_420/pictures/17/09/11/23/53/5940465.jpg',
    },
    {
      id: 7,
      title: 'O Show de Truman',
      year: '1998',
      runtime: '103',
      genres: ['Drama', 'Comédia'],
      director: 'Peter Weir',
      actors:
        'Jim Carrey, Laura Linney, Natascha McElhone',
      plot: 'Truman Burbank (Jim Carrey) é um pacato vendedor de seguros que leva um vida simples com sua esposa Meryl Burbank (Laura Linney). Porém algumas coisas ao seu redor fazem com que ele passe a estranhar sua cidade, seus supostos amigos e até sua mulher. Após conhecer a misteriosa Lauren (Natascha McElhone), ele fica intrigado e acaba descobrindo que toda sua vida foi monitorada por câmeras e transmitida em rede nacional.',
      posterUrl:
        'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/93/64/37/20269376.jpg',
    },
    {
      id: 10,
      title: 'Pink Flamingos',
      year: '1979',
      runtime: '90',
      genres: ['Comédia', 'Terror'],
      director: 'John Waters',
      actors: 'Divine, David Lochary, Mink Stole',
      plot: "Divine, seu louco filho hippie Crackers (Danny Mills) e sua obesa mãe ostentam honrosa e orgulhosamente o título de \"pessoas mais imundas do mundo\". Quando o reinado é ameaçado pelo casal Connie (Mink Stole) e Raymond Marble (David Lochary), eles tentam de todas as formas provar serem os legítimos merecedores da classificação, iniciando uma bizarra competição sem limites.",
      posterUrl:
        'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/97/24/40/20518055.jpg',
    },
    {
      id: 11,
      title: 'Barbie',
      year: '2023',
      runtime: '115',
      genres: ['Aventura', 'Comédia', 'Família'],
      director: 'Greta Gerwig',
      actors:
        'Margot Robbie, Ryan Gosling, America Ferrera',
      plot: 'No fabuloso live-action da boneca mais famosa do mundo, acompanhamos o dia a dia em Barbieland - o mundo mágico das Barbies, onde todas as versões da boneca vivem em completa harmonia e suas únicas preocupações são encontrar as melhores roupas para passear com as amigas e curtir intermináveis festas. Porém, uma das bonecas (interpretada por Margot Robbie) começa a perceber que talvez sua vida não seja tão perfeita assim, questionando-se sobre o sentido de sua existência e alarmando suas companheiras. Logo, sua vida no mundo cor-de-rosa começa a mudar e, eventualmente, ela sai de Barbieland. Forçada a viver no mundo real, Barbie precisa lutar com as dificuldades de não ser mais apenas uma boneca - pelo menos ela está acompanhada de seu fiel e amado Ken (Ryan Gosling), que parece cada vez mais fascinado pela vida no novo mundo. Enquanto isso, Barbie tem dificuldades para se ajustar, e precisa enfrentar vários momentos nada coloridos até descobrir que a verdadeira beleza está no interior de cada um.',
      posterUrl:
        'https://br.web.img2.acsta.net/c_310_420/pictures/23/06/21/21/10/1335465.jpg',
    },
    {
      id: 13,
      title: 'Coraline e O Mundo Secreto',
      year: '2009',
      runtime: '100',
      genres: ['Animação', 'Fantasia', 'Família'],
      director: 'Henry Selick',
      actors: 'Dakota Fanning, Teri Hatcher, Jennifer Saunders',
      plot: 'Entediada em sua nova casa, Caroline Jones (Dakota Fanning) um dia encontra uma porta secreta. Através dela tem acesso a uma outra versão de sua própria vida, a qual aparentemente é bem parecida com a que leva. A diferença é que neste outro lado tudo parece ser melhor, inclusive as pessoas com quem convive. Caroline se empolga com a descoberta, mas logo descobre que há algo de errado quando seus pais alternativos tentam aprisioná-la neste novo mundo.',
      posterUrl:
        'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/79/16/19961587.jpg',
    },
    {
      id: 17,
      title: 'Kung Fu Panda',
      year: '2008',
      runtime: '90',
      genres: ['Animação', 'Ação', 'Família', 'Artes Marciais'],
      director: 'Mark Osborne, John Stevenson',
      actors: 'Jack Black, Dustin Hoffman, Angelina Jolie',
      plot: 'Po (Jack Black) é um urso panda desajeitado, que trabalha no restaurante de macarrão de sua família. Um dia ele é surpreendido ao saber que foi escolhido para cumprir uma antiga profecia, o que faz com que treine ao lado de seus ídolos no kung fu: os mestres Shifu (Dustin Hoffman), Garça (David Cross), Tigresa (Angelina Jolie), Louva-deus (Seth Rogen), Macaco (Jackie Chan) e Víbora (Lucy Liu). Quando o traiçoeiro leopardo da neve Tai Lung (Ian McShane) retorna, cabe a Po defender o Vale da Paz.',
      posterUrl:
        'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/83/19/19962001.jpg',
    },
    {
      id: 18,
      title: 'Orgulho e Preconceito',
      year: '2006',
      runtime: '129',
      genres: ['Romance', 'Comédia'],
      director: 'Joe Wright',
      actors:
        'Keira Knightley, Matthew Macfadyen, Rosamund Pike',
      plot: 'Inglaterra, 1797. As cinco irmãs Bennet - Elizabeth (Keira Knightley), Jane (Rosamund Pike), Lydia (Jena Malone), Mary (Talulah Riley) e Kitty (Carey Mulligan) - foram criadas por uma mãe (Brenda Blethyn) que tinha fixação em lhes encontrar maridos que garantissem seu futuro. Porém Elizabeth deseja ter uma vida mais ampla do que apenas se dedicar ao marido, sendo apoiada pelo pai (Donald Sutherland). Quando o sr. Bingley (Simon Woods), um solteiro rico, passa a morar em uma mansão vizinha, as irmãs logo ficam agitadas. Jane logo parece que conquistará o coração do novo vizinho, enquanto que Elizabeth conhece o bonito e esnobe sr. Darcy (Matthew Macfadyen). Os encontros entre Elizabeth e Darcy passam a ser cada vez mais constantes, apesar deles sempre discutirem.',
      posterUrl:
        'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/84/14/20028635.jpg',
    },
    {
      id: 19,
      title: 'Invasão Zumbi',
      year: '2016',
      runtime: '118',
      genres: ['Ação', 'Terror', 'Suspense'],
      director: 'Sang-Ho Yeon',
      actors:
        'Gong Yoo, Yu-mi Jung, Dong-seok Ma',
      plot: 'Em um trem de alta velocidade com destino à cidade de Busan, na Coréia do Sul, um vírus misterioso que transforma as pessoas em zumbis acaba se espalhando de maneira devastadora. A cidade de destino da locomotiva conseguiu com sucesso se defender da epidemia, mas até chegar lá eles deverão lutar pelas suas sobrevivências.',
      posterUrl:
        'https://br.web.img2.acsta.net/c_310_420/pictures/16/10/06/23/09/515438.jpg',
    },
    {
      id: 20,
      title: 'Interestelar',
      year: '2014',
      runtime: '169',
      genres: ['Ficção Científica', 'Drama'],
      director: 'Christopher Nolan',
      actors:
        'Matthew McConaughey, Anne Hathaway, Michael Caine',
      plot: 'Após ver a Terra consumindo boa parte de suas reservas naturais, um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper (Matthew McConaughey) é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand (Anne Hathaway), Jenkins (Marlon Sanders) e Doyle (Wes Bentley), ele seguirá em busca de uma nova casa. Com o passar dos anos, sua filha Murph (Mackenzie Foy e Jessica Chastain) investirá numa própria jornada para também tentar salvar a população do planeta.',
      posterUrl:
        'https://br.web.img3.acsta.net/c_310_420/pictures/14/10/31/20/39/476171.jpg',
    },
  ],
}