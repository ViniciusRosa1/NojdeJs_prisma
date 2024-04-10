import { Prisma } from '@prisma/client';
import { prisma } from '../libs/prisma';

export const createUser = async (data: Prisma.UserCreateInput)=>{
    try{
       return await prisma.user.create({ data }); //criação de registro no db 
    }
    catch(error){
        // if(error instanceof Prisma.PrismaClientKnownRequestError){
        //     if(error.code == 'P2002'){
        //         throw new Error('Email address already used');
        //     }
        // }
        return false;
    }
}

export const createUsers = async (users: Prisma.UserCreateInput[])=>{
    const result = await prisma.user.createMany({
        data: users ,
        skipDuplicates: true
    });
}