/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('mongodbVSCodePlaygroundDB');


// Populando as coleções

db.getCollection('usuarios').insertMany([
    { 
      _id: ObjectId("60d5f4d6f0d1e5f8a4a38c00"), 
      nome: "Carlos Silva", 
      email: "carlos.silva@example.com", 
      senha: "senha123", 
      endereco: "Rua A, 123", 
      localizacao: { type: "Point", coordinates: [-46.6333, -23.5505] },
      pontosFidelidade: 50
    },
    { 
      _id: ObjectId("60d5f4d6f0d1e5f8a4a38c01"), 
      nome: "Maria Oliveira", 
      email: "maria.oliveira@example.com", 
      senha: "senha123", 
      endereco: "Rua B, 456", 
      localizacao: { type: "Point", coordinates: [-46.6203, -23.5551] },
      pontosFidelidade: 120
    },
    { 
      _id: ObjectId("60d5f4d6f0d1e5f8a4a38c03"), 
      nome: "Pedro Santos", 
      email: "pedro.santos@example.com", 
      senha: "senha123", 
      endereco: "Rua C, 789", 
      localizacao: { type: "Point", coordinates: [-46.6435, -23.5631] },
      pontosFidelidade: 200
    },
    { 
      _id: ObjectId("60d5f4d6f0d1e5f8a4a38c04"), 
      nome: "Ana Costa", 
      email: "ana.costa@example.com", 
      senha: "senha123", 
      endereco: "Rua D, 321", 
      localizacao: { type: "Point", coordinates: [-46.6500, -23.5700] },
      pontosFidelidade: 80
    },
    { 
      _id: ObjectId("60d5f4d6f0d1e5f8a4a38c05"), 
      nome: "João Souza", 
      email: "joao.souza@example.com", 
      senha: "senha123", 
      endereco: "Rua E, 654", 
      localizacao: { type: "Point", coordinates: [-46.6601, -23.5751] },
      pontosFidelidade: 35
    }
  ]);

  db.getCollection('produtos').insertMany([
    { 
      _id: ObjectId("6722c84596b3d3e8d79274ef"), 
      nome: "Livro de Matemática - 3ª Edição", 
      descricao: "Livro didático de Matemática, excelente estado.", 
      preco: 50, 
      quantidadeDisponivel: 10, 
      categoria: "Livros Didáticos", 
      vendedorId: ObjectId("60d5f4d6f0d1e5f8a4a38c00"),
      localizacao: { type: "Point", coordinates: [-46.6333, -23.5505] }
    },
    { 
      _id: ObjectId("6722c84596b3d3e8d79274f0"), 
      nome: "Livro de Português - Gramática", 
      descricao: "Material didático de Português, em ótimo estado.", 
      preco: 40, 
      quantidadeDisponivel: 15, 
      categoria: "Livros Didáticos", 
      vendedorId: ObjectId("60d5f4d6f0d1e5f8a4a38c01"),
      localizacao: { type: "Point", coordinates: [-46.6203, -23.5551] }
    },
    { 
      _id: ObjectId("6722c84596b3d3e8d79274f2"), 
      nome: "Curso de História para Concursos", 
      descricao: "Aula online de História, excelente para concursos.", 
      preco: 100, 
      quantidadeDisponivel: 5, 
      categoria: "Aulas Particulares", 
      vendedorId: ObjectId("60d5f4d6f0d1e5f8a4a38c03"),
      localizacao: { type: "Point", coordinates: [-46.6435, -23.5631] }
    },
    { 
      _id: ObjectId("6722c84596b3d3e8d79274f3"), 
      nome: "Dicionário de Inglês", 
      descricao: "Dicionário bilíngue, em excelente estado.", 
      preco: 25, 
      quantidadeDisponivel: 12, 
      categoria: "Livros Didáticos", 
      vendedorId: ObjectId("60d5f4d6f0d1e5f8a4a38c04"),
      localizacao: { type: "Point", coordinates: [-46.6500, -23.5700] }
    },
    { 
      _id: ObjectId("6722c84596b3d3e8d79274f4"), 
      nome: "Aula Particular de Química", 
      descricao: "Aula online de Química, personalizada e interativa.", 
      preco: 90, 
      quantidadeDisponivel: 3, 
      categoria: "Aulas Particulares", 
      vendedorId: ObjectId("60d5f4d6f0d1e5f8a4a38c05"),
      localizacao: { type: "Point", coordinates: [-46.6601, -23.5751] }
    }
  ]);

  db.getCollection('transacoes').insertMany([
    {
      compradorId: ObjectId("60d5f4d6f0d1e5f8a4a38c00"),
      produtoId: ObjectId("6722c84596b3d3e8d79274f3"),
      quantidade: 2,
      data: new Date(),
      status: "concluída",
      distancia: 2.5
    },
    {
      compradorId: ObjectId("60d5f4d6f0d1e5f8a4a38c01"),
      produtoId: ObjectId("6722c84596b3d3e8d79274ef"),
      quantidade: 1,
      data: new Date(),
      status: "concluída",
      distancia: 1.2
    },
    {
      compradorId: ObjectId("60d5f4d6f0d1e5f8a4a38c03"),
      produtoId: ObjectId("6722c84596b3d3e8d79274f2"),
      quantidade: 3,
      data: new Date(),
      status: "concluída",
      distancia: 3.1
    }
  ]);
  db.getCollection('avaliacoes').insertMany([
    {
      produtoId: ObjectId("6722c84596b3d3e8d79274f3"),
      usuarioId: ObjectId("60d5f4d6f0d1e5f8a4a38c00"),
      comentario: "Ótimo dicionário, muito útil!",
      nota: 5,
      data: new Date(),
      respostaVendedor: "Fico feliz que tenha gostado!"
    },
    {
      produtoId: ObjectId("6722c84596b3d3e8d79274ef"),
      usuarioId: ObjectId("60d5f4d6f0d1e5f8a4a38c01"),
      comentario: "Matemática é desafiador, mas o livro ajuda muito.",
      nota: 4,
      data: new Date()
    },
    {
      produtoId: ObjectId("6722c84596b3d3e8d79274f4"),
      usuarioId: ObjectId("60d5f4d6f0d1e5f8a4a38c05"),
      comentario: "Aula bem explicativa, gostei bastante.",
      nota: 5,
      data: new Date(),
      respostaVendedor: "Agradeço o feedback!"
    }
  ]);
  db.getCollection('categorias').insertMany([
    { nome: "Livros Didáticos", subcategorias: ["Matemática", "Português", "Inglês"] },
    { nome: "Aulas Particulares", subcategorias: ["História", "Química"] }
  ]);
      
  

  // Consultas

  //Escreva uma consulta para encontrar todos os produtos em uma categoria específica.

  db.produtos.find({ categoria: "Livros Didáticos" });

  //Consulta para encontrar todas as avaliações de um produto específico

  db.avaliacoes.find({ produtoId: ObjectId("6722c84596b3d3e8d79274ef") });

  //Consulta para criar uma nova transação

  db.transacoes.insertOne({
    produtoId: ObjectId("6722c84596b3d3e8d79274ef"),
    usuarioId: ObjectId("60d5f4d6f0d1e5f8a4a38c00"),
    quantidade: 2,
    data: new Date()
 });
 
 //Consulta para atualizar a quantidade disponível de um produto após uma compra
 db.produtos.updateOne(
    { _id: ObjectId("6722c84596b3d3e8d79274ef") },
    { $inc: { quantidadeDisponivel: -2 } }
 );

 
//Pense sobre quais índices seriam úteis para otimizar as consultas mais comuns.

//ndice para a coleção produtos

//Índice para a categoria de produtos: 
//Como uma das consultas comuns é buscar produtos por categoria, adicionar um índice no campo categoria ajuda a acelerar essas buscas.
db.produtos.createIndex({ categoria: 1 });

//Índice composto para nome e preço:
// Um índice composto nos campos nome e preco pode ser útil para buscas que filtram produtos por nome ou faixa de preço.
db.produtos.createIndex({ nome: 1, preco: 1 });

//ndice para a coleção avaliacoes
//Índice no campo produtoId: Como buscamos avaliações específicas de um produto, 
//criar um índice no campo produtoId é fundamental para melhorar o desempenho dessa consulta.
db.avaliacoes.createIndex({ produtoId: 1 });

//ndice composto para produtoId e data: Caso sejam comuns as consultas para filtrar avaliações de um produto por ordem de data 
//(como mostrar as avaliações mais recentes), um índice composto em produtoId e data acelera essas consultas.
db.avaliacoes.createIndex({ produtoId: 1, data: -1 });

//Índice para a coleção transacoes

//Índice no campo usuarioId:
// Consultas para buscar transações feitas por um usuário específico podem ser otimizadas com um índice no campo usuarioId.
db.transacoes.createIndex({ usuarioId: 1 });

//Índice composto para produtoId e data: Esse índice composto permite buscas eficientes de transações por produto e data,
// útil para consultas de histórico de vendas de um produto específico ao longo do tempo.
db.transacoes.createIndex({ produtoId: 1, data: -1 });


//Índice para a coleção usuarios
//Índice no campo email: Como o email provavelmente será único e usado para logins,
//criar um índice exclusivo (unique) no campo email otimiza buscas de usuários pelo e-mail e garante que não haja duplicatas.
db.usuarios.createIndex({ email: 1 }, { unique: true });

//ndice Geoespacial para localizacao
//ndice geoespacial no campo localizacao: Como o sistema permite busca por proximidade geográfica,
// usar um índice geoespacial 2dsphere no campo localizacao de usuarios e produtos facilita as consultas baseadas em localização.
db.usuarios.createIndex({ localizacao: "2dsphere" });
db.produtos.createIndex({ localizacao: "2dsphere" });


//Escreva uma consulta de agregação para encontrar a média de avaliações para cada produto.


//Essa consulta calcula a média de notas para cada produto com base nas avaliações deixadas pelos usuários na coleção avaliacoes.
//Supondo que as avaliações contenham um campo nota representando a classificação de 1 a 5.
db.avaliacoes.aggregate([
    {
      $group: {
        _id: "$produtoId", // Agrupa pelo ID do produto
        mediaAvaliacoes: { $avg: "$nota" } // Calcula a média das notas
      }
    },
    {
      $lookup: {
        from: "produtos", // Faz um join com a coleção de produtos
        localField: "_id",
        foreignField: "_id",
        as: "produtoDetalhes"
      }
    },
    {
      $unwind: "$produtoDetalhes"
    },
    {
      $project: {
        _id: 0,
        produto: "$produtoDetalhes.nome", // Mostra o nome do produto
        mediaAvaliacoes: 1
      }
    }
  ]);

  
  //Escreva uma consulta de agregação para encontrar o total de vendas para cada categoria.

  //Essa consulta calcula o total de vendas (em receita) para cada categoria, com base nas transações feitas. 
  //Supondo que cada transação na coleção transacoes contenha produtoId, quantidade e precoUnitario (para o preço do produto no momento da venda).
  db.transacoes.aggregate([
    {
      $lookup: {
        from: "produtos", // Faz um join com a coleção de produtos
        localField: "produtoId",
        foreignField: "_id",
        as: "produtoDetalhes"
      }
    },
    {
      $unwind: "$produtoDetalhes"
    },
    {
      $group: {
        _id: "$produtoDetalhes.categoria", // Agrupa pela categoria do produto
        totalVendas: {
          $sum: { $multiply: ["$quantidade", "$produtoDetalhes.preco"] } // Calcula a receita total
        }
      }
    },
    {
      $project: {
        _id: 0,
        categoria: "$_id",
        totalVendas: 1
      }
    }
  ]);
  
  //Depois da sprint inicial, os stackholders decidiram algumas mudanças em relação ao projeto inicial.
  // Você deve realizar todas as mudanças sem que tenha perda de dados ou perca de integridade dos dados.


  //Implemente uma funcionalidade que permita aos vendedores oferecerem descontos em seus produtos por um período limitado.

  //atualizar a coleção produtos para incluir novos campos relacionados à promoção: desconto, inicioPromocao, e fimPromocao.
  db.produtos.updateMany(
    {},
    {
      $set: {
        desconto: null, // Percentual de desconto, ex: 20 para 20%
        inicioPromocao: null, // Data de início da promoção
        fimPromocao: null // Data de fim da promoção
      }
    }
  );

  //Criar uma Função para Definir Promoções
  function definirPromocao(produtoId, desconto, inicioPromocao, fimPromocao) {
    db.produtos.updateOne(
      { _id: produtoId },
      {
        $set: {
          desconto: desconto,
          inicioPromocao: inicioPromocao,
          fimPromocao: fimPromocao
        }
      }
    );
  }
  
  // Exemplo de uso da função:
  definirPromocao(
    ObjectId("6722c84596b3d3e8d79274ef"), // ID do produto
    20, // Desconto de 20%
    new Date("2024-01-01"), // Data de início
    new Date("2024-01-15") // Data de término
  );

  
  //Atualizar Consulta de Preços para Considerar Desconto Ativo

  db.produtos.aggregate([
    {
      $project: {
        nome: 1,
        precoOriginal: "$preco",
        precoFinal: {
          $cond: {
            if: {
              $and: [
                { $ne: ["$desconto", null] },
                { $gte: [new Date(), "$inicioPromocao"] },
                { $lte: [new Date(), "$fimPromocao"] }
              ]
            },
            then: { $multiply: ["$preco", { $subtract: [1, { $divide: ["$desconto", 100] }] }] },
            else: "$preco"
          }
        }
      }
    }
  ]);

  //Criar um Índice para Consultar Promoções Ativas
  db.produtos.createIndex({ desconto: 1, inicioPromocao: 1, fimPromocao: 1 });


  // Implemente um sistema de pontos de fidelidade onde os usuários ganham pontos por cada compra,
  //que podem ser usados para descontos em futuras compras.

  //Ajustar a Coleção de Usuários para o Saldo de Pontos de Fidelidade
  db.usuarios.updateMany(
  {},
  {
    $set: { pontosFidelidade: 0 } // Inicializa o saldo de pontos com zero
  }
);

// Lógica para Acumular Pontos em uma Compra
function registrarCompra(compradorId, produtoId, quantidade, preco, usarPontos = false) {
    const usuario = db.usuarios.findOne({ _id: compradorId });
    const produto = db.produtos.findOne({ _id: produtoId });
  
    if (!usuario || !produto || produto.quantidadeDisponivel < quantidade) {
      throw new Error("Usuário, produto inválido ou quantidade indisponível.");
    }
  
    let totalCompra = quantidade * preco;
  
    // Aplica desconto usando pontos de fidelidade, se solicitado
    let pontosUsados = 0;
    if (usarPontos && usuario.pontosFidelidade > 0) {
      const desconto = usuario.pontosFidelidade * 0.1; // Exemplo: cada ponto equivale a R$0,10 de desconto
      totalCompra -= desconto;
      pontosUsados = Math.floor(usuario.pontosFidelidade); // Reduz pontos do usuário
      if (totalCompra < 0) totalCompra = 0; // Limita o desconto ao valor total
    }
  
    // Atualiza a quantidade disponível do produto
    db.produtos.updateOne(
      { _id: produtoId },
      { $inc: { quantidadeDisponivel: -quantidade } }
    );
  
    // Calcula pontos ganhos e atualiza o saldo de pontos
    const pontosGanhos = Math.floor(totalCompra / 10); // Exemplo: 1 ponto a cada R$10
    const novosPontos = usuario.pontosFidelidade - pontosUsados + pontosGanhos;
  
    // Atualiza o saldo de pontos do usuário
    db.usuarios.updateOne(
      { _id: compradorId },
      { $set: { pontosFidelidade: novosPontos } }
    );
  
    // Registra a transação
    db.transacoes.insertOne({
      compradorId: compradorId,
      produtoId: produtoId,
      quantidade: quantidade,
      total: totalCompra,
      data: new Date(),
      pontosUsados: pontosUsados,
      pontosGanhos: pontosGanhos,
      status: "concluída"
    });
  
    return {
      mensagem: "Compra registrada com sucesso!",
      totalCompra,
      pontosGanhos,
      pontosUsados,
      pontosFidelidadeAtual: novosPontos
    };
  }
  

  /* Exemplo de uso da função:
  registrarCompra(
    ObjectId("60d5f4d6f0d1e5f8a4a38c00"), // ID do comprador
    ObjectId("6722c84596b3d3e8d79274ef"), // ID do produto
    2, // Quantidade
    50, // Preço unitário
    true // Indica que deseja usar pontos para desconto
  );
  */


//Consultar Saldo de Pontos
db.usuarios.findOne(
    { _id: ObjectId("60d5f4d6f0d1e5f8a4a38c00") },
    { pontosFidelidade: 1, _id: 0 }
  );

//Criar Índice no Campo pontosFidelidade
db.usuarios.createIndex({ pontosFidelidade: 1 });



//Estrutura do Campo respostaVendedor nas Avaliações

db.avaliacoes.updateMany(
    { respostaVendedor: { $exists: false } },
    { $set: { respostaVendedor: null } } // Define o campo como null inicialmente
  );

//Função para o Vendedor Responder a uma Avaliação
function responderAvaliacao(vendedorId, avaliacaoId, resposta) {
    const avaliacao = db.avaliacoes.findOne({ _id: avaliacaoId });
    
    if (!avaliacao) {
      throw new Error("Avaliação não encontrada.");
    }
  
    const produto = db.produtos.findOne({ _id: avaliacao.produtoId });
    
    if (!produto || !produto.vendedorId.equals(vendedorId)) {
      throw new Error("O vendedor não tem permissão para responder esta avaliação.");
    }
  
    // Atualiza a avaliação com a resposta do vendedor
    db.avaliacoes.updateOne(
      { _id: avaliacaoId },
      { $set: { respostaVendedor: resposta } }
    );
  
    return { mensagem: "Resposta adicionada com sucesso!" };
  }
  
  // Exemplo de uso da função:
  responderAvaliacao(
    ObjectId("60d5f4d6f0d1e5f8a4a38c00"), // ID do vendedor
    ObjectId("6722c84596b3d3e8d79274ef"), // ID da avaliação
    "Obrigado pelo feedback! Fico feliz que tenha gostado do produto."
  );

  
//Consultar Avaliações com Respostas de Vendedores

db.avaliacoes.find(
    { produtoId: ObjectId("6722c84596b3d3e8d79274ef") },
    { comentario: 1, nota: 1, respostaVendedor: 1, _id: 0 }
  );

  
//Geolocalização

//Os usuários podem definir sua localização geográfica.


db.getCollection('E-books-usuarios').updateOne(
    { _id: ObjectId("60d5f4d6f0d1e5f8a4a38c00") },
    { $set: { localizacao: { type: "Point", coordinates: [-46.6333, -23.5505] } } }
  );
  
  // Índice geoespacial em usuários
db.usuarios.createIndex({ localizacao: "2dsphere" });

// Índice geoespacial em produtos
db.produtos.createIndex({ localizacao: "2dsphere" });


//Os usuários podem buscar produtos com base na proximidade geográfica, podendo filtrar os resultados por raio de distância.
db.produtos.aggregate([
    {
      $geoNear: {
        near: { type: "Point", coordinates: [-46.6333, -23.5505] }, // Coordenadas de referência do usuário
        distanceField: "distancia", // Campo onde será armazenada a distância calculada
        maxDistance: 5000, // Raio máximo de distância em metros (5 km)
        spherical: true
      }
    },
    {
      $match: { categoria: "Livros Didáticos" } // Opcional: filtra produtos por categoria
    }
  ]);

  
//Escreva uma consulta de agregação para encontrar a média de distância entre compradores e vendedores para transações concluídas.
db.transacoes.aggregate([
    {
      $match: { status: "concluída" } // Filtra apenas transações concluídas
    },
    {
      $group: {
        _id: null, // Agrupa todas as transações
        mediaDistancia: { $avg: "$distancia" } // Calcula a média das distâncias
      }
    },
    {
      $project: {
        _id: 0,
        mediaDistancia: 1
      }
    }
  ]);

  
  //Escreva uma consulta de agregação para encontrar a categoria de produto mais popular em uma área geográfica específica.

  db.transacoes.aggregate([
    {
      $lookup: {
        from: "produtos", // Junta com a coleção de produtos
        localField: "produtoId",
        foreignField: "_id",
        as: "produtoDetalhes"
      }
    },
    {
      $unwind: "$produtoDetalhes"
    },
    {
      $geoNear: {
        near: { type: "Point", coordinates: [-46.6333, -23.5505] }, // Coordenadas de referência
        distanceField: "distanciaProduto",
        maxDistance: 5000, // Raio máximo em metros
        spherical: true
      }
    },
    {
      $group: {
        _id: "$produtoDetalhes.categoria",
        totalTransacoes: { $sum: 1 }
      }
    },
    {
      $sort: { totalTransacoes: -1 } // Ordena as categorias pelo número de transações
    },
    { $limit: 1 }, // Retorna apenas a categoria mais popular
    {
      $project: {
        categoria: "$_id",
        totalTransacoes: 1,
        _id: 0
      }
    }
  ]);

  

  //Crie consultas de agregação para gerar relatórios de vendas para os vendedores.

  db.transacoes.aggregate([
    {
      $lookup: {
        from: "E-books-produtos", // Fazer o join com a coleção de produtos
        localField: "produtoId", 
        foreignField: "_id", 
        as: "produtoDetalhes"
      }
    },
    {
      $unwind: "$produtoDetalhes"
    },
    {
      $group: {
        _id: "$produtoDetalhes.vendedorId", // Agrupar por vendedor
        totalVendas: {
          $sum: { $multiply: ["$quantidade", "$produtoDetalhes.preco"] } // Calcular a receita total
        }
      }
    },
    {
      $lookup: {
        from: "E-books-usuarios", // Adiciona o nome do vendedor no relatório
        localField: "_id", 
        foreignField: "_id", 
        as: "vendedor"
      }
    },
    {
      $unwind: "$vendedor"
    },
    {
      $project: {
        _id: 0,
        vendedor: "$vendedor.nome", // Nome do vendedor
        totalVendas: 1 // Total de vendas
      }
    }
  ]);
