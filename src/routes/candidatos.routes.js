
import { Router } from "express"

const candidatosRoutes = Router()

const candidatos = [
    {
        id: Math.random() * 1000,
        nome: "Jair Bolsonaro",
        partido: "PSL",
        idade: 67,
        segundo: true, // Concorrente ao segundo mandato
        propostas:[
            "Aumento da educação",
            "Aumento do saldo de contribuição",
            "Aumento da conciliação"
        ]
    },
    {
        id: 2,
        nome: "Fernando Haddad",
        partido: "PT",
        idade: 59,
        segundo: true, // Concorrente ao segundo mandato
        propostas: [
            "Aumento da cooperação",
            "apoio a educação",
            "Aumento da estudo"
        ]
    },
    {
        id: 3,
        nome: "Geraldo Alckmin",
        partido: "PSDB",
        idade: 68,
        segundo: false, // Concorrente ao segundo mandato
        propostas: [
            "Aumento da educação",
            "Aumento do saldo de contribuição",
            "Aumento da conciliação"
        ]
    }
]
candidatosRoutes.get("/", (req, res) => {
    return res.status(200).send(candidatos)
});


export default candidatosRoutes;