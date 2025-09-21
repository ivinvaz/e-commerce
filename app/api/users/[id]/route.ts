import { NextRequest, NextResponse, userAgent } from "next/server";
import { prisma } from '@/lib/prisma';

export async function GET(
    req:NextRequest, {params}:{params: {id:string}}
)
{

    try{

        //transforma o id da requisicao em int
        const idUsuario = parseInt(params.id,10);

        //válida se o id é número
        if(isNaN(idUsuario)){
            return NextResponse.json(
                {message:'ID do usuário inválido.'},
                {status:400}
            );
        }

        //faz uma requisicao com o id do usuario no corpo
        const usuario = await prisma.tB_USUARIO.findUnique({
            where: {
                SQ_USUARIO: idUsuario,
            },
            select: {
                SQ_USUARIO: true,
                NO_USUARIO: true,
                EMAIL_USUARIO: true,
                DT_CRIACAO: true,
                DT_EDITADO: true,
                ST_USUARIO: true,
                TP_USUARIO: true,
            },
        });

        //se nao for encontrado nenhum usuario
        if (!usuario){
            return NextResponse.json(
                {message:'Usuário não encontrado'},
                {status:404}
            )
        }

        return NextResponse.json(usuario,{status:200});

    }catch(error){

        console.log('Erro ao pesquisar usuario: ',error);
        return NextResponse.json(
            {message:'Erro interno do servidor.'},
            {status:500}
        )

    }finally{

        await prisma.$disconnect();

    }
}

export async function PUT(
    req:NextRequest, {params}:{params: {id:string}}
)
{

    try{

        //transforma o id da requisicao em int
        const idUsuario = parseInt(params.id,10);
        const { NO_USUARIO, EMAIL_USUARIO, ST_USUARIO, TP_USUARIO } = await req.json();

        //válida se o id é número
        if(isNaN(idUsuario)){
            return NextResponse.json(
                {message:'ID do usuário inválido.'},
                {status:400}
            );
        }

        const atualizaUsuario = await prisma.tB_USUARIO.update({
        where: {
            SQ_USUARIO: idUsuario,
        },
        data: {
            NO_USUARIO: NO_USUARIO || undefined, // Evita atualizar para null se não for enviado
            EMAIL_USUARIO: EMAIL_USUARIO || undefined,
            ST_USUARIO: ST_USUARIO || undefined,
            TP_USUARIO: TP_USUARIO || undefined,
        },
        });

        const { SENHA_USUARIO, ...result } = atualizaUsuario;
        return NextResponse.json(
            { message: 'Usuário atualizado com sucesso', user: result }, 
            { status: 200 }
        );

    
  } catch (error) {

    if (error instanceof Error && error.message.includes('Record to update not found')) {
      return NextResponse.json({ message: 'Usuário não encontrado' }, { status: 404 });
    }

    console.error('Erro ao atualizar usuário:', error);
    return NextResponse.json(
      { message: 'Erro interno do servidor' },
      { status: 500 }
    );

  } finally {

    await prisma.$disconnect();

  }
}

export async function DELETE(
    req:NextRequest, {params}:{params: {id:string}}
)
{

    try{

        //transforma o id da requisicao em int
        const idUsuario = parseInt(params.id,10);

        const url = new URL(req.url);
        const eAdmin = url.searchParams.get('isAdmin');

        if (eAdmin !== 'true') {
            return NextResponse.json(
                { message: 'Acesso negado. Você não tem permissão para esta ação.' },
                { status: 403 }
            );
        }

        //válida se o id é número
        if(isNaN(idUsuario)){
            return NextResponse.json(
                {message:'ID do usuário inválido.'},
                {status:400}
            );
        }

        //deleta o usuário
        await prisma.tB_USUARIO.delete({
            where: {
                SQ_USUARIO: idUsuario,
            },
        });

        return NextResponse.json(
            {message: 'Usuário deletado com sucesso.'},
            {status: 200}
        );
        
    }catch(error){

        if (error instanceof Error && error.message.includes('Record to delete not found')) {
            return NextResponse.json({ message: 'Usuário não encontrado' }, { status: 404 });
        }

        console.log('Erro ao deletar usuario: ',error);
        return NextResponse.json(
            {message:'Erro interno do servidor.'},
            {status:500}
        )

    }finally{

        await prisma.$disconnect();

    }
}