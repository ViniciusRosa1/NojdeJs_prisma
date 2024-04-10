import { Router } from 'express';
import { prisma } from '../libs/prisma';
import { createUser, createUsers } from '../services/user';

export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true });
});

mainRouter.post('/user', async (req, res) =>{
    //Validação de dados recebidos
    const user = await createUser(
        {name: 'TEstador2',
        email: 'teste2@gmail.com',
        Post: {
            create: {
                title: 'Titulo de teste TEstador2',
                body:'Conteudo do post'
            }
        }
    });
    if(user){
        res.status(201).json({user});
    }else{
        res.status(500).json({error: 'Email ja cadastrado.'});
    }
});

mainRouter.post('/users', async (req, res) =>{
    const result = await createUsers([
        {name: 'hilda', email: 'hilda@gmail.com'},
        {name: 'hilda2', email: 'hilda@gmail.com'},
        {name: 'edson', email: 'edsno@gmail.com'},
        {name: 'tesste', email: 'tesste@gmail.com'},
    ]);
    res.json({result})
});