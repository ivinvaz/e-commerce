**LINK DA API REST**

- API

**---- carrinho ----**

-cria um carrinho
POST: http://localhost:3000/api/carrinho
BODY: 
{
    EMAIL_USUARIO:""
}

-lista todos os carrinhos
GET: http://localhost:3000/api/carrinho

lista um carrinho com os itens nele
GET: http://localhost:3000/api/carrinho/[id]

deleta um carrinho
DELETE: http://localhost:3000/api/carrinho/[id]

**---- item ----**

-adiciona um item ao carrinho
POST: http://localhost:3000/api/item
BODY:
{
  "EMAIL_USUARIO": ,
  "SQ_PRODUTO": ,       
  "SQ_TAMANHO_PRODUTO": ,
  "QTD_PRODUTO":   
}

-atualiza o item do carrinho
PUT: http://localhost:3000/api/item/[id]
BODY:
{
  "SQ_PRODUTO": ,       
  "SQ_TAMANHO_PRODUTO": ,
  "QTD_PRODUTO":   
}

-deleta o item do carrinho
DELETE: http://localhost:3000/api/item/[id]

**---- login ----**

POST: http://localhost:3000/api/login
BODY:
{
    EMAIL_USUARIO: ,
    SENHA_USUARIO: 
}

**---- products ----**

-lista todos os produtos
GET: http://localhost:3000/api/products

-adiciona um produto
POST: http://localhost:3000/api/products
BODY:
{
    NO_PRODUTO: ,
    ST_PRODUTO:
}

-lista um produto
GET: http://localhost:3000/api/products/[id]

-atualiza um produto
PUT: http://localhost:3000/api/products/[id]
BODY:
{
    NO_PRODUTO: ,
    ST_PRODUTO:
}

-deleta um produto
DELETE: http://localhost:3000/api/products/[id]

**---- products_cat ----**

-lista todos as categorias de produtos
GET: http://localhost:3000/api/products_cat

-adiciona uma categoria de produto
POST: http://localhost:3000/api/products_cat
BODY:
{
    NO_CATEGORIA
}

-lista uma categoria de produto
GET: http://localhost:3000/api/products_cat/[id]

-atualiza uma categoria de produto
PUT: http://localhost:3000/api/products_cat/[id]
BODY:
{
    NO_CATEGORIA
}

-deleta uma categoria de produto
DELETE: http://localhost:3000/api/products_cat/[id]

**---- products_siz ----**

-lista todos os tamanhos de produtos
GET: http://localhost:3000/api/products_siz

-adiciona um tamanho de produto
POST: http://localhost:3000/api/products_siz
BODY:
{
    NO_CATEGORIA
}

-lista um tamanho de produto
GET: http://localhost:3000/api/products_siz/[id]

-atualiza um tamanho de produto
PUT: http://localhost:3000/api/products_siz/[id]
BODY:
{
    NO_CATEGORIA
}

-deleta um tamanho de produto
DELETE: http://localhost:3000/api/products_siz/[id]

**---- estoque ----**

-lista todos os itens em estoque
GET: http://localhost:3000/api/estoque

-adiciona um item ao estoque
POST: http://localhost:3000/api/estoque
BODY:
{
    SQ_PRODUTO         
    SQ_TAMANHO_PRODUTO
    QTD_PRODUTO  
}

-lista um item no estoque
GET: http://localhost:3000/api/estoque/[id]

-atualiza um item no estoque
PUT: http://localhost:3000/api/estoque/[id]
BODY:
{
    SQ_PRODUTO         
    SQ_TAMANHO_PRODUTO
    QTD_PRODUTO
}

-deleta um item no estoque
DELETE: http://localhost:3000/api/estoque/[id]

**---- register ----**

-adiciona um usuário novo
POST: http://localhost:3000/api/register
BODY:
{
    NO_USUARIO: ,
    EMAIL_USUARIO: ,
    SENHA_USUARIO: 
}

**---- users ----**

-lista todos os usuarios
GET: http://localhost:3000/api/users

-lista um usuario
GET: http://localhost:3000/api/users/[id]

-atualiza um usuario
PUT: http://localhost:3000/api/users/[id]
BODY:
{
    NO_USUARIO: ,
    EMAIL_USUARIO: ,
    ST_USUARIO: ,
    TP_USUARIO: 
}

-deleta um usuario
DELETE: http://localhost:3000/api/users/[id]