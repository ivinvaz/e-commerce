import { PrismaClient } from "@/src/generated/prisma/client";
import { hashPassword } from "../../../lib/auth";

const prisma = new PrismaClient();

export default async function handler(req,res){
    if(req.method !== 'POST'){
        return res.status(405).json({message:"Método não permitido."});
    }

    const { email,password,name} = req.body;

    if (!email || !email.includes('@') || !password || password.trim().lenght < 6 ){
        return res.status(422).json({
            message: "Validação falhou. Certifiqu-se de que a senha tenha pelo menos 6 caracteres."
        });
    }

    try{
        const existingUser = await prisma.TB_USUARIO.findUnique({
            where: {
                EMAIL_USUARIO: email,
            }
        });

        if(existingUser){
            return res.status(409).json({message:"E-mail já cadastrado."})
        }

        const hashedPassoword = await hashPassword(password);

        const newUser = await prisma.TB_USUARIO.create({
            data:{
                EMAIL_USUARIO: email,
                SENHA_USUARIO: hashedPassoword,
                NO_USUARIO: name,
                TP_USUARIO:0,
                ST_USUARIO: 1,
            },
            select:{
                SQ_USUARIO: true,
                EMAIL_USUARIO: true,
                NO_USUARIO: true,
            },
        });

        res.status(201).json({
            message:"Usuário criado com sucesso!",
            user: newUser
        });
    }catch(error){
        console.error("Erro ao registrar o usuário: ", error);
        res.status(500).json({message:"Erro ao registrar o suário. Tente novamente mais tarde"});   
    }finally{
        await prisma.$disconnect();
    }
}