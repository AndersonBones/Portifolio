

type Project = {
    name:string,
    screen:string,
    description:string,
    stack:string[],
    link:string
}

const Projects:Project[] = [];

Projects.push({
    name:'Notes',
    screen:'https://github.com/AndersonBones/notes-app/blob/main/public/images/screen.gif?raw=true',
    description:"Notes funciona como um bloco de notas, onde voce armazena suas anotações e tudo aquilo que voce não pode esquecer :).", 
    stack:["https://img.icons8.com/fluency/144/null/javascript.png",
    'https://img.icons8.com/color/144/null/bootstrap.png',
    "https://img.icons8.com/fluency/144/null/node-js.png",            
    "https://img.icons8.com/fluency/144/null/typescript--v2.png",
    "https://img.icons8.com/color/144/null/postgreesql.png"
    ],
    link:'https://notes-app-f54y.onrender.com/'
},
{
name:'Linkzin',
screen:'https://github.com/AndersonBones/linkzin/blob/main/public/images/screen.gif?raw=true',
description:'Linkzin é um encurtador de URL usado para encurtar longos endereços de sites. Com o Linkzin é possível diminuir o tamanho do link criando uma url curta para compartilhar em outros locais, além de monitorar estatísticas de tráfego',
stack:['https://img.icons8.com/fluency/144/null/javascript.png','https://img.icons8.com/fluency/144/null/node-js.png',"https://img.icons8.com/color/144/null/mongodb.png",'https://img.icons8.com/color/144/null/bootstrap.png'],
link:'https://linkzin.net/'
}
,
{
    name:'Retro Pub',
    screen:'https://github.com/AndersonBones/retroPub/blob/main/public/images/screen.gif?raw=true',
    description:'Site responsivo para Barbearia',
    stack:["https://img.icons8.com/color/144/null/bootstrap.png",
    "https://img.icons8.com/fluency/144/null/node-js.png",
    "https://img.icons8.com/fluency/144/null/typescript--v2.png"],
    link:'https://retropub.onrender.com/'
},
{name:'Baber Page',
screen:'https://github.com/AndersonBones/Barber-page/blob/master/animation.gif?raw=true',
description:'Página responsiva para Barbearia',
stack:["https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/null/external-jquery-is-a-javascript-library-designed-to-simplify-html-logo-shadow-tal-revivo.png",
"https://img.icons8.com/color/144/null/bootstrap.png"],
link:'https://andersonbones.github.io/Barber-page/'
},
{name:'Quiz app',
screen:'https://github.com/AndersonBones/Quiz-app/blob/master/animation.gif?raw=true',
description:'Quiz de perguntas com sistema de Ranking de usuários',
stack:["https://img.icons8.com/color/144/null/html-5--v1.png",
"https://img.icons8.com/color/144/null/css3.png",
"https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/null/external-jquery-is-a-javascript-library-designed-to-simplify-html-logo-shadow-tal-revivo.png"],
link:"https://andersonbones.github.io/Quiz-app/"
},
{name:'KanBan',
screen:'https://github.com/AndersonBones/Kanban/blob/master/anima%C3%A7%C3%A3o.gif?raw=true',
description:'Kanban trata-se de um sistema de controle e gestão de estoque e fluxo de peças que se utiliza de pequenos cartões coloridos — conhecidos como post-it — e também recebe o nome de gestão visual, em razão do uso de cores como sinalizadores.',
stack:["https://img.icons8.com/color/144/null/html-5--v1.png",
"https://img.icons8.com/color/144/null/css3.png",
"https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/null/external-jquery-is-a-javascript-library-designed-to-simplify-html-logo-shadow-tal-revivo.png"],
link:'https://andersonbones.github.io/Kanban/'},
{name:'Criptography app',
screen:'https://github.com/AndersonBones/cryptography-app/blob/master/animation.gif?raw=true',
description:"App que aplica criptografia em textos utilizando o algoritmo de criptografia Xor.",
stack:["https://img.icons8.com/color/144/null/html-5--v1.png",
"https://img.icons8.com/color/144/null/css3.png",
"https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/null/external-jquery-is-a-javascript-library-designed-to-simplify-html-logo-shadow-tal-revivo.png"],
link:'https://andersonbones.github.io/cryptography-app/'},
{name:'ConvertText',
screen:'https://github.com/AndersonBones/ConvertText/blob/master/Assets/anima%C3%A7%C3%A3o.gif?raw=true',
description:'Uma ferramenta de texto online muito útil onde você pode alternar entre letras minúsculas e maiúsculas, onde você pode capitalizar, minusculizar, misturar maiúsculas e minúsculas e transformar seu texto completamente.',
stack:["https://img.icons8.com/color/144/null/html-5--v1.png",
"https://img.icons8.com/color/144/null/css3.png",
"https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/null/external-jquery-is-a-javascript-library-designed-to-simplify-html-logo-shadow-tal-revivo.png"],
link:'https://andersonbones.github.io/ConvertText/'
},
{name:'Weather App',
screen:'https://github.com/AndersonBones/weather-app/blob/main/anima%C3%A7%C3%A3o.gif?raw=true',
description:'Weather App exibe informações climáticas sobre cidades, como por exemplo a temperatura atual, a humidade e a velocidade do vento.',
stack:["https://img.icons8.com/color/144/null/html-5--v1.png",
"https://img.icons8.com/color/144/null/css3.png",
"https://img.icons8.com/fluency/144/null/javascript.png"],
link:'https://andersonbones.github.io/weather-app/'},
{name:"Student Ranking",
screen:"https://github.com/AndersonBones/Student-ranking/blob/main/public/images/screen.gif?raw=true",
description:"Registra as notas do aluno, permite a busca do dados do aluno e exibe o ranking de todos os alunos.",
stack:["https://img.icons8.com/color/144/null/bootstrap.png",
"https://img.icons8.com/fluency/144/null/node-js.png",
"https://img.icons8.com/fluency/144/null/typescript--v2.png"],
link:"https://student-ranking.onrender.com/"},

{name:"Password Generator",
screen:"https://raw.githubusercontent.com/AndersonBones/password-generator/master/animation.gif",
description:'Gerador de senhas com personalização conforme a sua escolha.',
stack:["https://img.icons8.com/color/144/null/html-5--v1.png",
"https://img.icons8.com/color/144/null/css3.png",
"https://img.icons8.com/fluency/144/null/javascript.png"],
link:"https://andersonbones.github.io/password-generator/"}
)

export default Projects