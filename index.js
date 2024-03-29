const express = require('express');
const app = express();
const session = require('express-session');
const cors = require('cors');

app.use(session({secret: 'sad'}));
app.use(express.json());
app.use(cors());

const criaObjetos = () => {
    const Personagens = {
        Personagens: [

            {
                nome: "",
                sinopse: "Em Kimetsu no Yaiba, Tanjiro, um bondoso jovem que ganha a vida vendendo carvão descobre que sua família foi massacrada por um demônio. E, para piorar, Nezuko, sua irmã mais nova e única sobrevivente, também acabou transformada em um demônio. Arrasado com essa sombria realidade, Tanjiro decide se tornar um matador de demônios para fazer sua irmã voltar a ser humana e para destruir o demônio que matou seus entes queridos.",
                autora: "Koyoharu Gotouge",
                ano: "6 de abril de 2019"
            },

            {
                nome: "Tanjiro Kamado",
                rank: "Caçador de demônio",
                personalidade: "Tanjiro é gentil por natureza e foi descrito por outros como tendo olhos muito gentis. Ele exibe uma grande dose de determinação e não desistirá uma vez que tenha uma meta a alcançar, o melhor exemplo disso é sua busca incansável para encontrar uma cura para Nezuko.",
                gif: "https://media.tenor.com/9YmDsT_RkUMAAAAC/tanjiro-kamado.gif",
                idade: 15,
                arte: null,
                respiracao: "Sol e Água",
                genero: "Masculino",
                raca: "Humano"
            },

            {
                nome: "Zenitsu Agatsuma",
                rank: "Caçador de demônio",
                personalidade: "Zenitsu aparenta ser um covarde, já que muitas vezes afirma que não tem muito tempo de vida devido ao perigoso trabalho de ser um Caçador de Demônios. No entanto, apesar dessas fragilidades, Zenitsu ainda quer corresponder às expectativas que os outros criaram para ele e fará o seu melhor quando for necessário.",
                gif: "https://i.pinimg.com/originals/1d/3d/bf/1d3dbf048330590da90564fc6404451a.gif",
                idade: 16,
                arte: null,
                respiracao: "Trovão",
                genero: "Masculino",
                raca: "Humano"
            },

            {
                nome: "Inosuke Hashibira",
                rank: "Caçador de demônio",
                arte: null,
                personalidade: "Inosuke é um jovem extremamente temperamental e orgulhoso que sempre gosta de pensar que é o lutador mais forte em uma situação, constantemente desafiando a maioria das pessoas que encontra e querendo que os outros o respeitem e o elogiem por sua habilidade.",
                gif: "https://media.tenor.com/avz0WvsLo0MAAAAC/kimetsu-no-yaiba-demon-slayer.gif",
                idade: 15,
                respiracao: "Besta",
                genero: "Masculino",
                raca: "Humano"
            },

            {
                nome: "Nezuko Kamado",
                rank: null,
                arte: null,
                personalidade: "A personalidade original de Nezuko como humana era a de uma garota gentil e carinhosa que pensava nos outros antes de si mesma como seu irmão mais velho, Tanjiro. Nezuko não tem medo de se machucar, protegendo seus amigos de demônios, mesmo depois de retornar ao estado humano. Também é mostrado que o comportamento humano e descontraído dela apóia esse fato depois que Tanjiro se desculpou com ela.",
                gif: "https://media.tenor.com/tzi9K1ohLLwAAAAC/demon-slayer-nezuko.gif",
                idade: 14,
                arte: "Explosão de Sangue",
                genero: "Feminino",
                raca: "Demônio"
            },

            {
                nome: "Genya Shinazugawa",
                rank: "Caçador de demônio",
                personalidade: 'Genya é inicialmente um indivíduo desbocado e mal-humorado; um "lobo solitário" que recusava qualquer ajuda de outros e não mostrava nenhum interesse em ser educado ou ter boas maneiras. Durante a Seleção Final, ele lidou com Kanata Ubuyashiki agarrando seu cabelo e gritando com ela. Seu mau humor e maneira impetuosa de falar lembra muito a de seu irmão mais velho, Sanemi.',
                gif: "https://image.myanimelist.net/ui/wsU6l_ESDA_gxeboYl6FT4iCPEKhmA--e4Y9rOMbdGjiVGbRqYsCumEMRAO46-QSM_B92Y0KkyfN2evCi4cJxqL-WamOk4EiE5W6fUc-wxd5HXWVBM8RG-uenRPYy1E70cXrbnalCULGHYyXxjFBbvHxXkrDhfw0g9IKuxxcVw7DFKfiebfxaczakPacwOVi",
                idade: 16,
                arte: null,
                genero: "Masculino",
                raca: "Humano"
            },

            {
                nome: "Sabito",
                rank: "Caçador de demônio",
                arte: null,
                personalidade: 'Sabito era um jovem sério que acreditava que todas as suas ações deveriam ser de um homem. Ele foi visto como um mentor implacável durante seu tempo treinando Tanjiro Kamado, que sempre foi rápido em apontar suas falhas e se recusou a reconhecê-lo como homem. Mesmo assim, Sabito confiou sua vontade a Tanjiro e ficou feliz quando o superou como o aluno mais forte de Urokodaki, reconhecendo abertamente que Tanjiro era o mais difícil de todos e orgulhosamente deixando a vontade persistente de todos os filhos perdidos de Urokodaki para ele.',
                gif: "https://img.wattpad.com/6d5cb40d8160ada640407ad496793b89c4b64dae/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f70746c4b4a646250424258754e513d3d2d3132362e313661636431636235666633306265373631363035353531343337372e676966",
                idade: 13,
                respiracao: "Água",
                genero: "Masculino",
                raca: "Humano"
            },

            {
                nome: "Makomo",
                rank: "Caçador de demônio",
                arte: null,
                personalidade: 'Completamente oposta à personalidade agressiva de Sabito, Makomo era uma garota de natureza tranquila, paciente e gentil. Ela estava sempre ajudando Tanjiro Kamado, apontando quaisquer erros em sua técnica e corrigindo quaisquer maus hábitos que ele havia desenvolvido inconscientemente durante seu treinamento com Urokodaki.',
                gif: "https://i.pinimg.com/originals/a2/19/a6/a219a635a10d019b030d0c2fde5bd9f1.gif",
                idade: 12,
                respiracao: "Água",
                genero: "Feminino",
                raca: "Humano"
            },

            {
                nome: "Kanao Tsuyuri",
                rank: "Caçador de demônio",
                arte: null,
                personalidade: 'No início, Kanao era uma garota indecisa e quieta devido ao abuso que sofreu em seu passado antes de conhecer as irmãs Kocho. Ela se tornou incapaz de tomar decisões sozinha e reprimiu suas emoções como mecanismo de defesa. Para ajudar a corrigir isso, Kanae deu a ela uma moeda para jogar para decidir qual caminho seguir quando ela não sabia o que fazer.',
                gif: "https://gifdb.com/images/high/demon-slayer-kanao-tsuyuri-wa3ym9r9ddwxfq85.gif",
                idade: 16,
                respiracao: "Flor",
                genero: "Feminino",
                raca: "Humano"
            },

            {
                nome: "Yoriichi Tsugikuni",
                rank: "Pilar",
                arte: null,
                personalidade: "Yoriichi era um indivíduo calmo e respeitoso que usava uma expressão solene e reservada em todos os momentos, raramente mostrando surtos de emoção. Por causa de sua disposição gentil e expressão facial imutável, a maioria não conseguia dizer o que ele estava sentindo: a única pessoa que podia ler seus sentimentos sem dificuldade era sua esposa Uta. Ele também era extremamente humilde, vendo a si mesmo como apenas mais um homem e ninguém especial, apesar de seus atributos divinos; um exemplo foi o momento em que ele executou as formas da Respiração do Sol para Suyako a pedido dela e quase parecia envergonhado depois.",
                gif: "https://i.pinimg.com/originals/e5/22/3f/e5223fcfd21283a69934081337fc8752.gif",
                idade: 22,
                respiracao: "Sol",
                genero: "Masculino",
                raca: "Humano"
            },

            {
                nome: "Muichiro Tokito",
                rank: "Pilar",
                arte: null,
                personalidade: "Muichiro é um indivíduo cabeça de vento que parece constantemente vagar em pensamento e é incapaz de se concentrar em qualquer coisa. Impassível e, às vezes, obtuso, tende a pensar apenas por si mesmo e opera apenas na lógica, nunca se deixando guiar pela emoção, fazendo-o parecer completamente apático e indiferente.",
                gif: "https://i.imgur.com/JNV9e2X.gif?noredirect",
                idade: 14,
                respiracao: "Névoa",
                genero: "Masculino",
                raca: "Humano"
            },

            {
                nome: "Kyojuro Rengoku",
                rank: "Pilar",
                arte: null,
                personalidade: "Kyojuro é muito entusiasmado em relação aos seus deveres como Hashira, e muitas vezes pareciealegremente excêntrico. Ele é amável, puro de coração, e ostenta técnica e esgrima extraordinárias decorrentes de prática e disciplina rigorosas.",
                gif: "https://media.tenor.com/jvbPYIiSRr4AAAAC/rengoku-kyojuro.gif",
                idade: 20,
                respiracao: "Fogo",
                genero: "Masculino",
                raca: "Humano"
            },

            {
                nome: "Sanemi Shinazugawa",
                rank: "Pilar",
                arte: null,
                personalidade: "Sanemi é abrasivo, de sangue quente, extrovertido e teimoso, muitas vezes impulsivo e rápido para atacar. Ele é muitas vezes indiferente aos outros e pode ficar bravo com extrema facilidade. A única pessoa que Sanemi demonstrou reverência foi Kagaya Ubuyashiki, e somente depois de perceber que o homem era muito mais do que sua aparência externa sugeria.",
                gif: "https://64.media.tumblr.com/e5c72dea018a851cecb7453e1294e39e/46b92b7c265c6101-da/s540x810/bb0c5868910e3d9b7f0a445b19a5f78232b0001b.gif",
                idade: 21,
                respiracao: "Vento",
                genero: "Masculino",
                raca: "Humano"
            },

            {
                nome: "Giyu Tomioka",
                rank: "Pilar",
                arte: null,
                personalidade: "Giyu sempre usa uma expressão estóica e despreocupada em seu rosto. No entanto, ele tem uma personalidade reservada e um senso de justiça muito forte, sem tolerância para com aqueles que não conhecem suas próprias limitações e jogam fora suas vidas.",
                gif: "https://media.tenor.com/DLOFpyH25pYAAAAC/giyu-tomioka.gif",
                idade: 19,
                respiracao: "Água",
                genero: "Masculino",
                raca: "Humano"
            },

            {
                nome: "Gyomei Himejima",
                rank: "Pilar",
                arte: null,
                personalidade: "Gyomei incorpora o arquétipo do gigante gentil, sendo surpreendentemente suave e sensível, apesar de sua aparência intimidadora. Ele também se mostra bastante piedoso, carregando suas contas de oração em todos os momentos e oferecendo orações em situações pungentes. Mais notavelmente, Gyomei chora facilmente pelas coisas mais insignificantes, acentuando sua natureza bastante suave.",
                gif: "https://64.media.tumblr.com/08a6226fa4366fd86ca961f82dbec429/e1806311d9dc3b33-6a/s1280x1920/b823429e71c0c3aee049d84d9284fc6ff03f67b4.gif",
                idade: 27,
                respiracao: "Pedra",
                genero: "Masculino",
                raca: "Humano"
            },

            {
                nome: "Mitsuri Kanroji",
                rank: "Pilar",
                arte: null,
                personalidade: 'Mitsuri é uma pessoa muito emocional, apaixonada e jovial que constantemente elogia as pessoas em sua cabeça, provavelmente um fator que contribui para seu apelido como "a Hashira do Amor". Embora ela seja bastante tímida e facilmente perturbada, Mitsuri é sempre gentil com os outros, principalmente com Obanai, com quem ela parece compartilhar um forte vínculo.',
                gif: "https://i.pinimg.com/originals/47/6a/23/476a23e91b53901f5cdd7642d01a73e3.gif",
                idade: 19,
                respiracao: "Amor",
                genero: "Feminino",
                raca: "Humano"
            },

            {
                nome: "Obanai Iguro",
                rank: "Pilar",
                arte: null,
                personalidade: "Obanai é um indivíduo muito severo e rigoroso que não mostra preocupação com aqueles que não cumprem as regras do Corpo de Extermínio de Demônios. Apesar de sua personalidade impiedosa, há duas pessoas com quem ele se preocupa profundamente: Kagaya Ubuyashiki e Mitsuri Kanroji. Ele tem uma queda por Mitsuri, que a maioria de seus companheiros detectou, exceto Tanjiro e a própria Mitsuri.",
                gif: "https://i.pinimg.com/originals/96/71/b8/9671b84d08123677bc4681ff6eff8fe1.gif",
                idade: 21,
                respiracao: "Serpente",
                genero: "Masculino",
                raca: "Humano"
            },

            {
                nome: "Shinobu Kocho",
                rank: "Pilar",
                arte: null,
                personalidade: 'Shinobu exibe um comportamento brilhante, amigável e alegre, sempre com um sorriso descontraído no rosto, independentemente da situação em que se encontra. No entanto, seu comportamento externo é mostrado muito rapidamente como uma fachada. Apesar de seu exterior relaxado e sua alegação inicial de querer se dar bem com os demônios, ela pode ser bastante cruel com eles, o que é visto quando ela mata o Demônio Aranha (Filha) depois de lhe dar uma falsa esperança de ajudá-la e tentar matar Nezuko.',
                gif: "https://i.pinimg.com/originals/f5/a5/a0/f5a5a01a72471e4729da5d665eacc0ba.gif",
                idade: 18,
                respiracao: "Inseto",
                genero: "Feminino",
                raca: "Humano"
            },

            {
                nome: "Tengen Uzui",
                rank: "Pilar",
                arte: null,
                personalidade: 'Tengen é um indivíduo excêntrico e chamativo, sempre querendo ser "extravagante", possuindo uma necessidade de que tudo seja chamativo e excelente, mesmo proclamando que ele é o deus da ostentação e dos festivais. Tengen também tem um lado carinhoso que está mascarado sob sua fachada extravagante, que ele só mostra para aqueles que são extremamente próximos a ele, mais notavelmente suas três esposas, Makio, Suma e Hinatsuru, que Tengen mostra realmente se importar.',
                gif: "https://64.media.tumblr.com/22aa866677b7d52042faa800f4d55897/da953763a63fa766-74/s540x810/50b557ea11f45704d33ad562f0d762718ab82554.gif",
                idade: 23,
                respiracao: 'Som',
                genero: "Masculino",
                raca: "Humano"
            },

            {
                nome: "Kagaya Ubuyashiki",
                rank: "Líder do Corpo de Extermínio de Demônios",
                personalidade: 'Kagaya tem um comportamento calmo, mostrando um cuidado genuíno com os membros do Corpo de Extermínio de Demônios, considerando-os seus filhos. Ele também é capaz de lidar bem com as críticas e é honesto sobre suas fraquezas, um sendo sua incapacidade de se tornar um Caçador de Demônios, apesar de ser seu principal líder. Para compensar isso, ele se lembra de cada membro do corpo e visita os membros falecidos em seu cemitério diariamente até que ele não possa mais se mover devido à sua doença.',
                arte: null,
                gif: "https://media.tenor.com/BWXJxcwXCB0AAAAC/kimetsu-no-yaiba-mugen-train.gif",
                idade: 23,
                genero: "Masculino",
                raca: "Humano"
            },

            {
                nome: "Kanae Kocho",
                rank: "Pílar",
                arte: null,
                personalidade: 'Kanae é mostrada como uma garota bem-humorada com uma personalidade descontraída; nos flashbacks de Shinobu e Kanao, ela quase sempre é vista com um sorriso gentil no rosto.',
                gif: "https://64.media.tumblr.com/116fb60634a103f474180cb3889386a3/1835e8d8352bbfb8-7b/s500x750/12ffe6970e989b383f07fe3e202ef7c76f62f2c7.gifv",
                idade: 17,
                respiracao: 'Flor',
                genero: "Feminino",
                raca: "Humano"
            },

            {
                nome: "Sakonji Urokodaki",
                rank: "Ex Pílar",
                arte: null,
                personalidade: 'Embora pareça a princípio um velho severo e rabugento, isso esconde uma personalidade extremamente compassiva. Embora ele pressione seus alunos com força, ele também se importa profundamente com eles, vendo-os como familiares, e é um dos poucos personagens do Corpo de Extermínio de Demônios a confiar totalmente em Nezuko para nunca comer um humano.',
                gif: "https://media.tenor.com/2fUPUeOdCTYAAAAC/sakonji-urokodaki.gif",
                idade: null,
                respiracao: 'Água',
                genero: "Masculino",
                raca: "Humano"
            },

            {
                nome: "Jigoro Kuwajima",
                rank: "Ex Pílar",
                arte: null,
                personalidade: 'Jigoro tem uma devoção constante a seus alunos e um treinamento rigoroso. Apesar de seu status como um mentor forte e experiência como um Hashira anterior, ele tinha um ponto fraco e dedicação inabalável para criar a próxima geração de alunos. Devido a essa devoção apaixonada, ele ficou cheio de tristeza depois de descobrir que seu ex-aluno, Kaigaku, traiu o Corpo de Extermínio de Demônios e se juntou às fileiras dos Doze Luas Superiores.',
                gif: "https://64.media.tumblr.com/7713a7448f07a324627bffbc074b15f4/fc19bcec695b05d9-31/s540x810/01d1c5a930881d226a40a09f73369ec95861b93f.gif",
                idade: null,
                respiracao: 'Trovão',
                genero: "Masculino",
                raca: "Humano"
            },

            {
                nome: "Tanjuro Kamado",
                rank: null,
                arte: null,
                personalidade: 'Tanjuro era uma pessoa quieta, calculista, perdoadora, carismática e amorosa. Ele tinha um relacionamento pacífico com sua família e regularmente dava palestras a Tanjiro sobre a vida. Enquanto ele parecia calmo do lado de fora, ele mostrava uma aura nobre e decente com uma percepção tranquila do ambiente. De acordo com seu filho, ele não gostava de se destacar ou exibir suas verdadeiras habilidades para os outros.',
                gif: "https://64.media.tumblr.com/3967326d056653709def00b69c9af7e3/tumblr_pw3t8dogC11qgio5qo3_540.gif",
                idade: 25,
                respiracao: 'Dança do Deus do Fogo',
                genero: "Masculino",
                raca: "Humano"
            },

            {
                nome: "Hotaru Haganezuka",
                rank: "Ferreiro",
                personalidade: 'Hotaru é um indivíduo de sangue quente. Ele parece mostrar muito pouco cuidado, se houver, com qualquer coisa além das espadas que ele cria. Sua paixão por espadas é tão forte que ele poderia falar sobre elas por longos períodos de tempo, uma característica única até mesmo entre as pessoas da Aldeia do Espadachim.',
                respiracao: null,
                gif: "https://media.tenor.com/HqEGhCd85j8AAAAC/haganezuka-mad.gif",
                idade: 37,
                genero: "Masculino",
                raca: "Humano"
            },

            {
                nome: "Muzan Kibutsuji",
                rank: "Rei Demônio",
                personalidade: 'Muzan é de coração frio, implacável, intimidador e excepcionalmente inteligente. Ele não vê valor em nenhum humano que encontrou e mostra pouco valor em seus próprios subordinados. Raramente visualmente chateado ou feliz, ele parece completamente monótono e desapegado na maioria das ocasiões, mesmo quando mata insensivelmente seus próprios subordinados. As únicas vezes que ele demonstra emoção são quando sua visão de perfeição está avançando ou quando ele tem subordinados completamente submissos à sua vontade.',
                respiracao: null,
                gif: "https://media.tenor.com/9TzCaltizuwAAAAC/muzan-demon-slayer.gif",
                idade: 1000,
                arte: "Sangue Negro",
                genero: "Masculino",
                raca: "Demônio"
            },

            {
                nome: "Tamayo",
                rank: null,
                personalidade: 'Tamayo é um indivíduo gentil, sábio e incrivelmente inteligente. Tendo dedicado a maior parte de sua vida a pesquisar a ciência por trás de Demônios e Transformação de Demônios, ela era uma das pessoas mais conhecedoras do assunto na série. Apesar da relação geralmente caótica entre a humanidade e os demônios, ela mostrou muita bondade para com os humanos. Tamayo tinha uma forte preferência contra a violência, em vez de matar humanos por seu sangue, ela escolheu comprar sangue de doadores consentidos para sobreviver.',
                respiracao: null,
                gif: "https://media.tenor.com/pg90nYv63OUAAAAC/tamayo.gif",
                idade: 500,
                arte: "Feitiço de Sangue",
                genero: "Feminino",
                raca: "Demônio"
            },

            {
                nome: "Yushiro",
                rank: null,
                personalidade: 'Desde sua primeira aparição, é evidente que ele tem um temperamento curto e mantém uma atitude arrogante, desprezando a maioria ao seu redor. Sua primeira conversa com Tanjiro começa com ele insultando Nezuko Kamado por ser uma monstruosidade. Ele geralmente é retratado com uma carranca no rosto e raramente visto sorrindo, a menos que esteja falando ou admirando Tamayo, por quem ele está apaixonado.',
                respiracao: null,
                gif: "https://media.tenor.com/w6sfVjjE_ycAAAAC/yushiro.gif",
                idade: 35,
                arte: "Olhos Vendados",
                genero: "Masculino",
                raca: "Demônio"
            },

            {
                nome: "Susamaru",
                rank: null,
                personalidade: 'Susamaru se mostra bastante brincalhona, mas muito impetuosa e bastante imatura, enquanto quase sempre sorri e sempre gosta e aceita um desafio. Sua frase de estimação é "que divertido isso é" e ela repetirá isso constantemente se estiver envolvida em ataques que considere divertidos. Sua imaturidade é um forte contraste com a seriedade de Yahaba.',
                respiracao: null,
                gif: "https://i.pinimg.com/originals/e6/3d/01/e63d01947c927fc3e9543dec85951aa8.gif",
                idade: null,
                arte: "Hiasobi Temari",
                genero: "Feminino",
                raca: "Demônio"
            },

            {
                nome: "Yahaba",
                rank: null,
                personalidade: 'Yahaba era um demônio leal que servia apenas para agradar seu líder, Muzan. Como Susamaru, ele desejava a aprovação de Muzan e a chance de se tornar um dos Doze Luas Superiores. Embora tivesse uma personalidade sádica, Yahaba preferia fazer as coisas de maneira limpa e madura, ele não gostava da atitude imatura de Susamaru e odiava se sujar.',
                respiracao: null,
                gif: "https://i.pinimg.com/originals/05/02/af/0502af56e20f6009d06f5e0fced5e247.gif",
                idade: null,
                arte: "Flecha Koketsu",
                genero: "Masculino",
                raca: "Demônio"
            },

            {
                nome: "Rui",
                rank: "Lua Inferior 5",
                personalidade: 'Rui era um indivíduo perturbado que desejava os laços estreitos que uma família possui e esperava que os membros da família desempenhassem seus próprios papéis. Para ele, "membros da família" que não desempenham seus papéis como ele espera (ou seja, proteger Rui incondicionalmente ou seguir suas instruções) são inúteis e estão mortos.',
                respiracao: null,
                gif: "https://media0.giphy.com/media/TjtrFt7A04r6XNnNdu/giphy.gif",
                idade: null,
                arte: "Gaiola de Fios Cortantes",
                genero: "Masculino",
                raca: "Demônio"
            },

            {
                nome: "Enmu",
                rank: "Lua Inferior 1",
                personalidade: 'Enmu tinha uma personalidade muito sádica, e era conhecido por apreciar a dor e o sofrimento dos humanos, seu método favorito de tormento sendo dar-lhes um sonho feliz e agradável antes de transformá-lo em um pesadelo. Ele tinha prazer no sofrimento dos outros, apreciando as expressões de agonia que eles faziam enquanto ele os torturava. Esse sadismo se estende até mesmo a seus companheiros demônios, pois ele adorava ver seus companheiros de Nível Inferior sendo mortos bem na frente de seus olhos.',
                respiracao: null,
                gif: "https://media.tenor.com/4tpflZ6MkLsAAAAd/kimetsu-no-yaiba-mugen-train.gif",
                idade: null,
                arte: "Sussurros da Hipnose Insconsciente Forçada",
                genero: "Masculino",
                raca: "Demônio"
            },

            {
                nome: "Kaigaku",
                rank: "Lua Superior 6",
                personalidade: 'Embora aparentemente impetuoso e arrogante, Kaigaku é de fato covarde e egoísta. Como muitos órfãos que vivem nas ruas, ele cresceu recorrendo ao roubo e outros meios imorais para sobreviver. Ele chega a sacrificar a vida de todos os órfãos sob os cuidados de Gyomei para salvar sua própria pele. Isso o levou a desenvolver uma forma intensa de autopreservação, muitas vezes fazendo o que é de seu interesse às custas dos outros.',
                gif: "https://media.tenor.com/ayEQb9cOsicAAAAd/kaigaku-demon-slayer.gif",
                idade: 16,
                respiracao: "Trovão",
                genero: "Masculino",
                raca: "Híbrido"
            },

            {
                nome: "Daki",
                rank: "Lua Superior 6",
                personalidade: 'Daki era uma pessoa muito orgulhosa, desdenhosa e sádica, tendo prazer em brincar com suas vítimas antes de matá-las e não demonstrando a menor culpa ou remorso por apaticamente tirar a vida das pessoas. Apesar de ter centenas de anos, ela exibia tendências infantis e malcriadas, como fazer birras, chorar histericamente quando as coisas não saíam do seu jeito e atacar qualquer um para desabafar suas frustrações.',
                gif: "https://media.tenor.com/Wy8HJmdBdvgAAAAC/daki-demon-slayer.gif",
                idade: 126,
                respiracao: null,
                arte: "Corte em Oito Camadas",
                genero: "Feminino",
                raca: "Demônio"
            },

            {
                nome: "Gyutaro",
                rank: "Lua Superior 6",
                personalidade: 'Gyutaro é cruel, mesquinho e invejoso de qualquer pessoa abençoada com uma vida melhor do que ele, devido à vida dura que viveu em pobreza quase constante e às duras tragédias que experimentou como humano. Ele desenvolveu o hábito de elogiar sarcasticamente os melhores traços de uma pessoa e, em seguida, tentar matá-los vingativamente depois, como fez com Tengen Uzui.',
                gif: "https://www.gifcen.com/wp-content/uploads/2022/02/tengen-vs-gyutaro-gif-4.gif",
                idade: 128,
                respiracao: null,
                arte: "Foices de Sangue Voadoras",
                genero: "Masculino",
                raca: "Demônio"
            },

            {
                nome: "Gyokko",
                rank: "Lua Superior 5",
                personalidade: 'Gyokko é descrito como sendo de temperamento curto, superficial e arrogante, especialmente quando se trata de coisas relacionadas à sua "arte", como visto quando ele se enfureceu facilmente com Muichiro quando ele começou a insultar e tirar sarro da qualidade de sua arte e através de sua conversa. com o Hashira, constantemente se elogiava como "bonito" e seu trabalho ainda mais, reforçando ainda mais sua personalidade arrogante e narcisista.',
                imagem: "https://media.tenor.com/OyTSpEvnwc8AAAAM/demon-slayer.gif",
                idade: 113,
                respiracao: null,
                arte: "Massacre das Mil Agulhas",
                genero: "Masculino",
                raca: "Demônio"
            },

            {
                nome: "Hantengu",
                rank: "Lua Superior 4",
                personalidade: 'Ele se assustava facilmente com o que acontecia ao seu redor, mostrando traços de paranóia, medo e ilusão. Mesmo em combate, Hantengu mostrou-se extremamente covarde e com medo, chorando quando foi cortado por Muichiro Tokito e quando estava se escondendo dos Caçadores de Demônios. Hantengu também parece acreditar que ele é completamente inocente, apesar das evidências óbvias que apontam para seus inúmeros crimes como humano.',
                imagem: "https://i.redd.it/hz1y6xbo6f7b1.gif",
                idade: 200,
                respiracao: null,
                arte: "Zohakuten",
                genero: "Masculino",
                raca: "Demônio"
            },

            {
                nome: "Nakime",
                rank: "Lua Superior 4",
                personalidade: 'Nakime era uma jogadora de biwa misteriosa, mas fria, que demonstrava pouca emoção. Ela não falava a menos que fosse necessário e, quando falava, era sempre direta e franco, tornando suas respos]tas o mais curtas possível.',
                gif: "https://media.tenor.com/M_k9Is-0_P8AAAAd/nakime.gif",
                idade: 113,
                respiracao: null,
                arte: "Manipulação do Castelo",
                genero: "Feminino",
                raca: "Demônio"
            },

            {
                nome: "Akaza",
                rank: "Lua Superior 3",
                personalidade: 'Akaza é forte, teimoso e louco por batalhas, especialmente contra fortes Caçadores de Demônios. Ele propositadamente desenrolou lutas para saborear cada momento, também elogiando seus oponentes quando eles lançam técnicas fortes Akaza desprezava qualquer um que considerasse fraco, tanto que sua pele se arrepiava ao vê-los. No entanto, ele respeitava genuinamente aqueles que eram fortes aos seus olhos, exigindo saber seus nomes, e não pararia até descobrir; ele se lembra de todos os nomes que guardou na memória como tributo à sua força.',
                gif: "https://64.media.tumblr.com/54b7479374f31f42f340486953b343f9/8c5b4c694d28523b-50/s1280x1920/8d0a592fbed68b527e68b9664e2dc7b713b97df3.gif",
                idade: 133,
                respiracao: null,
                arte: "Morte Destrutiva, Estilo Perna, Estilo Esmagador e a Forma Final: Resplendor Caótico Prata Azulado",
                genero: "Masculino",
                raca: "Demônio"
            },

            {
                nome: "Doma",
                rank: "Lua Superior 2",
                personalidade: 'Doma é externamente amigável, possuindo um ar acessível e carismático e descrito para falar e agir de maneira calma e despreocupada por Kanae Kocho. No entanto, logo é revelado que Doma tem tendências psicopatas, adotando crenças e hábitos doentios como impiedosamente e felizmente assassinar e devorar os seguidores de seu culto e mulheres jovens sob a crença de que ele está salvando-os de seu sofrimento, deixando-os "viver" dentro de seu corpo. Sob seu comportamento despreocupado e despretensioso, Doma é um indivíduo frio e calculista que possui um intelecto extremamente aguçado.',
                gif: "https://media.tenor.com/3EQ37mxdiEoAAAAC/demon-slayer-doma.gif",
                idade: 166,
                respiracao: null,
                arte: "Jardim Suspenso, Princesas Brancas de Gelo",
                genero: "Masculino",
                raca: "Demônio"
            },

            {
                nome: "Kokushibo",
                rank: "Lua Superior 1",
                personalidade: 'Kokushibo era muitas vezes muito reservado como um demônio, e com tão pouco conhecimento sobre os Luas Superiores, não se sabia muito sobre ele. Mostrava muito respeito à hierarquia dos Luas Superiores, como visto na reunião do Rank Superior. Kokushibo também foi retratado como humilde, e não hesitou em admitir seu fracasso ou reclamar de qualquer dificuldade. Ele demonstrou um forte senso de lealdade para com Muzan Kibutsuji, com a maioria de suas ações sendo feitas com o único propósito de cumprir os objetivos de Muzan.',
                gif: "https://64.media.tumblr.com/0200cbda8b2deb620a1d89f98c7a373e/787799bd9c79b166-d6/s640x960/98f941681c5b9db6ad5d1e18495d6f94f7373b0a.gif",
                idade: 480,
                respiracao: "Lua",
                arte: "Espada de Carne",
                genero: "Masculino",
                raca: "Híbrido"
            }
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