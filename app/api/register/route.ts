import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '../../../prisma/src/generated/prisma';
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: NextRequest){
    try{

        //recebe os dados da requisicao e transforma em json
        const{ NO_USUARIO, EMAIL_USUARIO, SENHA_USUARIO } = await req.json();

        //testa se os dados estão vazios, caso sim gera um erro
        if(!NO_USUARIO || !EMAIL_USUARIO || !SENHA_USUARIO){
            return NextResponse.json(
                {message:'Nome, email e senha são obrigatórios'},
                {status:400}
            );
        }

        //testa se o usuário existe
        const existeUsuario = await prisma.tB_USUARIO.findUnique({
            where:{
                EMAIL_USUARIO: EMAIL_USUARIO,
            },
        });

        if(existeUsuario){
            return NextResponse.json(
                {message:'Usuário já criado.'},
                {status:409},
            );
        }

        //encripta a senha criada com bcrypt
        const hashedPassword  = await bcrypt.hash(SENHA_USUARIO,10);

        //cria o corpo da requisicao de novo usuario
        const novoUsuario = await prisma.tB_USUARIO.create({
            data: {
                NO_USUARIO,
                EMAIL_USUARIO,
                SENHA_USUARIO: hashedPassword,
                ST_USUARIO: 1, 
            },
        });

        //Retorna a resposta de sucesso (sem a senha, por segurança)
        const {SENHA_USUARIO: usuarioSenha, ...resultado} = novoUsuario;
        return NextResponse.json(
            {message:'Usuário criado com sucesso'},
            {status: 201}
        );

    }catch (error){

        console.error('Erro ao registrar usuario: ', error)

        return NextResponse.json(
            {message:'Erro interno do servidor.'},
            {status:500}
        );

    }finally{

        await prisma.$disconnect();

    }
}