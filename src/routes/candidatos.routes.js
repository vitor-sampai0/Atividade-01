
import { Router } from "express"

const candidatosRoutes = Router()

let candidatos = [
    {
        id: Math.floor(Math.random() * 1000),
        nome: "Capitã Lucimara",
        partido: "PSD",
        idade: 39,
        segundo: true, // Concorrente ao segundo mandato
        propostas:[
            "Aumento da educação",
            "Aumento do saldo de contribuição",
            "Aumento do salário"
        ]
    }
]
candidatosRoutes.get("/", (req, res) => {
    return res.status(200).send(candidatos)
});

candidatosRoutes.post("/", (req, res) => {
    const { 
        nome, 
        partido,
         idade,
          segundo, 
          propostas 
} = req.body;

//validação dos campos nome

if(!nome){
    return res.status(400).send({message:"Candidato não tem nome pode jogar no lixo"})
}

//validaçao do partido
if(!partido){
    return res.status(400).send({message:"Candidato não tem partido pode jogar no lixo"})
}

// validação de Maior de idade
if(idade < 18){
    return res.status(400).send({message: nome + " Não pode participar dos debates pois ainda é menor de 18 anos e tem " + idade + " anos"})
}
//validação de idade
if(!idade){
    return res.status(400).send({message:"Candidato não tem idade pode jogar no lixo"})
}

// validação de todas as respostas
if(!nome||!partido||!idade||!segundo||!propostas){
    return res.status(400).send({message:"você é burro preencha todos os campos"})
}
// validação de propostas
if(propostas == ""){
    return res.status(400).send({message:"Candidato não tem nenhuma proposta não serve de nada pode jogar no lixo"})
}
const novoCandidato = {
    id: Math.floor(Math.random() * 1000),
    nome,
    partido,
    idade,
    segundo,
    propostas
}

candidatos.push(novoCandidato)

return res.status(201).send("Candidato criado com sucesso")

});

// Rota para buscar uma emoção pelo id
candidatosRoutes.get("/:id", (req, res) => {
    const { id } = req.params;

    console.log(id);
    const candidato = candidatos.find((candidate) => candidate .id == id)

    if(!candidato) {
        return res.status(404).send({
            message : "Candidato não encontrado!",
        })
    }

    return res.status(200).send({
        message: "Candidato encontrado", candidato,
    })
});



export default candidatosRoutes