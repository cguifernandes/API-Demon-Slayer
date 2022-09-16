const express = require('express');
const app = express();
const session = require('express-session');
const cors = require('cors');

app.use(session({secret: 'jfioesjoifjiosehsoebclkmklecsmiecpeo'}));
app.use(express.json());
app.use(cors());

const criaObjetos = () => {
    const Personagens = {
        Personagens: [
            {
                nome: "O primeiro imperador",
                descricao: "O Primeiro Imperador foi o fundador do Império mais de mil anos antes da rebelião em massa e aquele que incitou a criação de armamento mais avançado que serviria como meio de proteger seu país.",
                imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9T-vlqw0I75yf19Q4yic-xQ6R-eJ2F8VBQ&usqp=CAU",
                idade: -1,
                grupo: "Império",
                genero: "Masculino"
            },

            {
                nome: "O Imperador",
                descricao: "O Imperador foi o ex-monarca do Império e um antagonista menor da série Akame ga Kill . Ele era um jovem ingênuo que desejava levar seu povo a um futuro brilhante. Infelizmente, por influência do primeiro-ministro , ignorava imensamente o sofrimento de seu povo e, por meio dessa negligência, contribuiu para a decadência e colapso do Império.",
                imagem: "http://akamegakil-hebbo.weebly.com/uploads/6/0/0/3/60035819/7224218_orig.png",
                idade: -1,
                grupo: "Império",
                genero: "Masculino",
                armaImperial: "Cross Tail"
            },

            {
                nome: "Akame",
                descricao: "Akame, também conhecido como Akame of the Demon Sword Murasame, é a heroína titular, ao lado de Tatsumi, principalmente como tutor pessoal de esgrima de Hinata e tutor de combate da Classe do Ancião . Originalmente vendida para o Império junto com sua irmã Kurome para ser treinada como assassina , Akame acabou desertando para os rebeldes .quando ela foi enviada para assassinar o general Najenda , o líder do Night Raid e se juntou a eles para derrubar a monarquia corrupta.",
                imagem: "https://www.pngmart.com/files/21/Akame-PNG-Pic.png",
                idade: 17,
                grupo: "Night Raid",
                genero: "Feminino",
                armaImperial: "Murasame"
            },

            {
                nome: "Tatsumi",
                descricao: "Um jovem lutador que partiu junto com dois amigos de infância para se destacar e ganhar dinheiro para sua aldeia, Tatsumi é uma pessoa de bom coração que quer que todos vivam felizes, mas não tem problema em se tornar violento se seus amigos ou seus ideais estão ameaçados.",
                imagem: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7775112e-3bce-43d1-a4d8-140c8c139664/de3u169-b7924109-dff2-4785-9dc0-80248153f890.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3NzUxMTJlLTNiY2UtNDNkMS1hNGQ4LTE0MGM4YzEzOTY2NFwvZGUzdTE2OS1iNzkyNDEwOS1kZmYyLTQ3ODUtOWRjMC04MDI0ODE1M2Y4OTAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.DNzT8nAvC3GZ9Svcg8UXffUXC_FGX_8mNHHYgpAEb7U",
                idade: 16,
                grupo: "Night Raid",
                genero: "Masculino",
                armaImperial: "Incursio"
            },

            {
                nome: "Bulat",
                descricao: "Bulat, também conhecido como 100 Man-Slayer Bulat, era um membro do grupo de assassinato do Exército Revolucionário, Night Raid.",
                imagem: "https://i.pinimg.com/originals/6c/e5/c3/6ce5c3429c8fb3e746fb095c3807affc.jpg",
                idade: 25,
                grupo: "Night Raid",
                genero: "Masculino",
                armaImperial: "Incursio"
            },

            {
                nome: "Chelsea",
                descricao: "Chelsea trabalhava sob o comando de um cruel vice-rei que se divertia caçando pessoas. Sob essa opressão, ela começou a se tornar niilista até encontrar a Fundação Gaea, que havia sido guardada porque nenhum proprietário adequado foi encontrado. Usando o Teigu, ela assassinou o vice-rei, que foi substituído por um gentil e competente. Percebendo que havia causado uma mudança com seu Teigu, ela acabou se juntando ao Exército Revolucionário.",
                imagem: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/13a04ad0-b310-4a60-9dbf-b23b1e026e4b/de12c10-9ead242b-d5a1-44e7-abfd-333dce8f0d82.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzEzYTA0YWQwLWIzMTAtNGE2MC05ZGJmLWIyM2IxZTAyNmU0YlwvZGUxMmMxMC05ZWFkMjQyYi1kNWExLTQ0ZTctYWJmZC0zMzNkY2U4ZjBkODIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Yk84D_wV-3nJdenDlz6ppUUccQM5_HfhD7X89dLuz4Q",
                idade: 20,
                grupo: "Night Raid",
                genero: "Feminino",
                armaImperial: "Gaea Foundation"
            },

            {
                nome: "Mine",
                descricao: "Frequentemente irritada e facilmente irritada com aqueles que ela não conhece bem, Mine é retratada com uma personalidade fria, temperamental e consideravelmente agressiva. Durante seus primeiros dias no Night Raid, Mine tinha uma tendência a provocar Tatsumi, devido a ele ser o membro mais novo, e muitas vezes dizendo que não duraria.",
                imagem: "https://i.pinimg.com/originals/40/c9/0e/40c90ea9d2197d79481e81c08ac32ac6.jpg",
                idade: 17,
                grupo: "Night Raid",
                genero: "Feminino",
                armaImperial: "Pumpkim"
            },

            {
                nome: "Najenda",
                descricao: "Najenda é a chefe do grupo de assassinos, Night Raid. Ela era a general do Império que desertou, juntamente com Lubbock, ao Exército Revolucionário algum tempo após o fim da expedição liderada por ela e Esdeath para eliminar a oposição da Tribo Banida.",
                imagem: "https://i.pinimg.com/736x/cd/d4/01/cdd401a14e34a1fbc4992a5b901e1a4c.jpg",
                idade: 20,
                grupo: "Night Raid",
                genero: "Feminino",
                armaImperial: "Susanoo"
            },

            {
                nome: "Leone",
                descricao: "Muito relaxada, otimista e alegre, e tende a exibir uma falta de modos femininos, muitas vezes vista empurrando Tatsumi em seus seios, colocando os pés na mesa ou consumindo grandes quantidades de saquê e outras bebidas alcoólicas. Ela serve como uma espécie de figura de irmã mais velha para Tatsumi e membros mais jovens no Night Raid",
                imagem: "https://i.pinimg.com/originals/d2/82/61/d28261e35f0049230ac718900d37de2a.jpg",
                idade: 20,
                grupo: "Night Raid",
                genero: "Feminino",
                armaImperial: "Lionel"
            },

            {
                nome: "Susanoo",
                descricao: "O Relâmpago Veloz, Susanoo foi um dos mais novos membros de Night Raid que Najenda trouxe de volta a partir do QG do Exército Revolucionário. Ele era um guerreiro hábil e bastante resistente a danos devido a seu status como um Teigu Humanóide. Ele também serviu como líder de Night Raid e de ajuda a Akame em tarefas diárias da Night Raid, bem como no treinamento com Tatsumi.",
                imagem: "http://pm1.narvii.com/6500/a6698b97c5b431c5347eb92ae3916ed23f5075b1_00.jpg",
                idade: 1000,
                grupo: "Night Raid",
                genero: "Masculino",
                armaImperial: "Susanoo"
            },

            {
                nome: "Lubbock",
                descricao: "Lubbock foi o quarto filho nascido em uma rica família de comerciantes em uma região do Império. Durante sua infância, conheceu Najenda , que havia acabado de se mudar para a região na época. Apaixonado à primeira vista, ele deixou a vida que tinha para se aproximar de Najenda e se alistou no exército. Usando seu talento, Lubbock subiu na hierarquia até o ponto em que poderia servir e estar ao lado dela.",
                imagem: "https://i.pinimg.com/originals/67/9e/cb/679ecb7e3a598b2b0c228bba7d519765.jpg",
                idade: 17,
                grupo: "Night Raid",
                genero: "Masculino",
                armaImperial: "Cross tail"
            },

            {
                nome: "Kurome",
                descricao: "Kurome se parece muito com sua irmã. Ela tem cabelos curtos e pretos e olhos negros. Ela usa um uniforme de marinheiro preto e usa um cinto vermelho que tem uma capa de saia lateral vermelha como a de Akame, com longas meias pretas e sapatos pretos. Sua camisa é um pouco curta demais, pois não cobre o umbigo. Ela também usa manoplas vermelhas como Akame. Ela mantém seu Teigu com ela o tempo todo.",
                imagem: "https://i.pinimg.com/originals/d4/07/8b/d4078b33762457c9799ff667a985678a.png",
                idade: 15,
                grupo: "Jaegers",
                genero: "Feminino",
                armaImperial: "Yatsufusa"
            },

            {
                nome: "Bols",
                descricao: "Bols era o membro mais velho dos Jaegers . Antes de se juntar a eles, ele era membro do Esquadrão de Incineração. Ele usava uma máscara que escondia seu rosto.",
                imagem: "https://i.pinimg.com/originals/4d/81/47/4d814773acc88341e5d56957584777ed.jpg",
                idade: 32,
                grupo: "Jaegers",
                genero: "Masculino",
                armaImperial: "Rubicante"
            },

            {
                nome: "Esdeath",
                descricao: "Esdeath era um general de alto escalão do Império . Eventualmente, devido à eficácia do Night Raid como uma unidade de assassinato, ela se tornou a líder dos Jaegers sob as ordens do primeiro-ministro . Ela estava profundamente apaixonada e obcecada por Tatsumi.",
                imagem: "https://i.pinimg.com/originals/4c/08/40/4c084000e181ca3a6b490ceb63d3c934.jpg",
                idade: 20,
                grupo: "Jaegers",
                genero: "Feminino",
                armaImperial: "Demon's Extract"
            },

            {
                nome: "Seryu",
                descricao: "Seryu era uma jovem de cabelos ruivos e olhos âmbar. Durante sua primeira aparição, ela usava o cabelo em um longo rabo de cavalo que quase chegava ao chão, mas foi encurtado na altura dos ombros depois de se tornar um membro dos Jaegers. Ela era tipicamente vista em um uniforme militar em favor de vestidos e roupas casuais, e frequentemente vestia uma armadura na parte superior do corpo.",
                imagem: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b7c75be3-bae6-4a27-9495-7d8d170aed0a/d887mvy-559d632e-b95b-4ce0-83ee-9ff527c0e666.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I3Yzc1YmUzLWJhZTYtNGEyNy05NDk1LTdkOGQxNzBhZWQwYVwvZDg4N212eS01NTlkNjMyZS1iOTViLTRjZTAtODNlZS05ZmY1MjdjMGU2NjYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.eQ3boulWL3gL4TjJEIXLoFnmAJTCP_mi9meNfFT8woM",
                idade: 20,
                grupo: "Jaegers",
                genero: "Feminino",
                armaImperial: "Hekatonkheires"
            },

            {
                nome: "Run",
                descricao: "Run era um membro do braço direito de Jaegers e Esdeath . Após sua morte, Run serviu como um dos fantoches de Kurome , até que Wave quebrou o Teigu de Kurome , liberando-o das amarras de Yatsufusa.",
                imagem: "https://i.pinimg.com/originals/04/6b/94/046b94e3982c15f075c3cff05bcc1ba0.jpg",
                idade: 23,
                grupo: "Jaegers",
                genero: "Masculino",
                armaImperial: "Mastema"
            },

            {
                nome: "Wave",
                descricao: "Wave é um ex-membro dos Jaegers e da Marinha Imperial. Ele vem de uma pequena cidade na costa do Império. Devido à grande quantidade de tempo que passou no mar, ele desconhece a Capital repleta de crimes e a corrupção dentro do Império. Ele é muito próximo de sua mãe e muito respeitado em sua aldeia natal.",
                imagem: "https://i.pinimg.com/736x/ac/05/76/ac0576790d0daaa86d123ab678ade042--waves-akame-ga.jpg",
                idade: 23,
                grupo: "Jaegers",
                genero: "Masculino",
                armaImperial: "Grand Chariot"
            },

            {
                nome: "Dr. Stylish",
                descricao: "O Dr. Stylish era um jovem alto e magro com cabelos pretos e uma mecha branca de cabelo do lado esquerdo e olhos azuis. Usava óculos, terno amarelo com camisa azul, gravata e jaleco branco.",
                imagem: "https://i.pinimg.com/originals/8d/39/3c/8d393cb8f493ba65f107c5c83e61bd44.png",
                idade: 28,
                grupo: "Jaegers",
                genero: "Masculino",
                armaImperial: "Perfector"
            },

            {
                nome: "Budo",
                descricao: "O Grande General Budo foi um dos generais mais temidos e respeitados do Império , além de liderar a Guarda Imperial, a força encarregada de proteger o palácio. Notável por sua imensa força e proeza de batalha geral, ele comandava muito respeito de seus subordinados e de outras facções.",
                imagem: "https://www.personality-database.com/profile_images/58970.png",
                idade: 40,
                grupo: "Império",
                genero: "Masculino",
                armaImperial: "Adramelech"
            },

            {
                nome: "Liver",
                descricao: "Liver era o líder dos guarda-costas pessoais de Esdeath e o grupo mais forte em seu exército conhecido como as Três Bestas . Ele era um homem refinado e endurecido pela batalha que era profundamente leal a Esdeath.",
                imagem: "https://i.pinimg.com/originals/dd/65/11/dd651137c52d025e18f5275f796fbfb6.png",
                idade: 40,
                grupo: "Três bestas",
                genero: "Masculino",
                armaImperial: "Black Marlin"
            },

            {
                nome: "Daidara",
                descricao: "Daidara era um membro dos ex-guarda-costas de Esdeath conhecidos como as Três Bestas.",
                imagem: "https://i.pinimg.com/474x/07/fa/97/07fa97adaf45a47f4fb0ac6c40a76b15.jpg",
                idade: 30,
                grupo: "Três bestas",
                genero: "Masculino",
                armaImperial: "Belvaac"
            },

            {
                nome: "Nyau",
                descricao: "Nyau era um membro dos guarda-costas de elite de Esdeath, as Três Bestas.",
                imagem: "https://i.pinimg.com/originals/d6/01/23/d601238dfd7b7bc080b8254f53364112.jpg",
                idade: 20,
                grupo: "Três bestas",
                genero: "Masculino",
                armaImperial: "Scream"
            },
            
            {
                nome: "Mez",
                descricao: "Mez era filha de Gozuki, bem como um membro dos Quatro Demônios Rakshasa, que serviu como esquadrão de executores do primeiro-ministro.",
                imagem: "https://pm1.narvii.com/6735/904897c328c9c17ff89ab357c886c538a5b7983bv2_hq.jpg",
                idade: -1,
                grupo: "Quatro Demônios Rakshasa",
                genero: "Feminino"
            },
            
            {
                nome: "Sten",
                descricao: "Sten foi um dos Quatro Demônios Rakshasa que serviram como esquadrão de executores do Primeiro Ministro . Ele foi morto por Lubbock , membro do Night Raid.",
                imagem: "http://pm1.narvii.com/6325/38b7b289e81abab68709dc40453c4295497a00e4_00.jpg",
                idade: -1,
                grupo: "Quatro Demônios Rakshasa",
                genero: "Masculino"
            },
            
            {
                nome: "Ibara",
                descricao: "Ibara era um dos Quatro Demônios Rakshasa, um grupo de carrascos que servem ao Primeiro Ministro. Ele foi morto por Akame.",
                imagem: "http://pm1.narvii.com/6327/afc96287970a34a85fb6e21748384d916d745494_00.jpg",
                idade: -1,
                grupo: "Quatro Demônios Rakshasa",
                genero: "Masculino"
            },
            
            {
                nome: "Suzuka",
                descricao: "Suzuka era um membro dos Quatro Demônios Rakshasa, que serviu como esquadrão de execução do primeiro-ministro.",
                imagem: "https://i.pinimg.com/736x/4d/d8/d1/4dd8d1e4cf7d8c4a04930f63437cd7f1.jpg",
                idade: -1,
                grupo: "Quatro Demônios Rakshasa",
                genero: "Feminino"
            },
            
            {
                nome: "Gozuki",
                descricao: "Gozuki era o líder do recém-formado esquadrão de assassinato do Império, a Elite Seven.",
                imagem: "https://cdn.myanimelist.net/images/characters/15/353413.jpg",
                idade: -1,
                grupo: "Quatro Demônios Rakshasa",
                genero: "Masculino"
            },
            
            {
                nome: "Ogre",
                descricao: "Ogre era um homem orgulhoso e corrupto. Ele aceitava subornos de um comerciante de petróleo chamado Gamal e outros criminosos, e muitas vezes incriminava pessoas inocentes para assumir a culpa pelos criminosos.",
                imagem: "https://cdn.anisearch.com/images/character/cover/full/44/44547.webp",
                idade: -1,
                grupo: "Império",
                genero: "Masculino"
            },
            
            {
                nome: "Honest",
                descricao: "Honest era o primeiro-ministro do Império e seu governante de fato, manipulando o jovem e ingênuo imperador para fazer tudo do seu jeito. Ele foi o principal antagonista da série.",
                imagem: "https://nntheblog.b-cdn.net/wp-content/uploads/2022/05/Prime-Minister-Honest2.jpg",
                idade: -1,
                grupo: "Império",
                genero: "Masculino"
            },
            
            {
                nome: "Shoi",
                descricao: "Pelo pouco que se viu, Shoi era aparentemente um homem honesto e honrado que ficou perturbado ao saber sobre o estado corrupto do Império.",
                imagem: "https://gonerealwild.com/images/characters/shoui-62228.jpg",
                idade: -1,
                grupo: "Império",
                genero: "Masculino"
            }, 
            
            {
                nome: "Zanku",
                descricao: "Zanku, também conhecido como Zanku, o Decapitador ou Zank, foi um notório assassino em série. Ele era conhecido por cortar as cabeças de suas vítimas, como seu apelido indica. Night Raid foi contratado para localizá-lo e matá-lo.",
                imagem: "https://cdn.myanimelist.net/images/characters/12/254737.jpg",
                idade: -1,
                grupo: "Outros",
                genero: "Masculino",
                armaImperial: "Spectator"
            }, 
        ]
    };

    return Personagens;
}

app.get('/', (req, res) => {
    const Personagens = criaObjetos().Personagens;
    res.json(Personagens);
});

app.get('/search/:character', (req, res) => {
    const Personagens = criaObjetos().Personagens;
    var Pesquisa = {
        Personagens: []
    }
    for (let i = 0; i < Personagens.length; i++) {
        if (Personagens[i].nome.toLowerCase().indexOf(req.params.character.toLowerCase()) > -1) {
            Pesquisa.Personagens.push(Personagens[i]);
        }
    }
    res.json(Pesquisa.Personagens);
});

var porta = process.env.PORT || 8080;

app.listen(porta, () => {
    console.log('listening on port ' + porta);    
});