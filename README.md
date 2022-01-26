# Cadastro de Imóvel

**RF** => Requisitos funcionais
Deve ser possível cadastrar um novo imóvel.

**RNF** => Requisitos não funcionais
Não deve ser possível cadastrar imóvel com endereço já cadastrado.
Não deve ser possível cadastrar imóvel com CEP já cadastrado.
O imóvel deve ser cadastrado com disponibilidade por padrão.
O usuário responsável pelo cadastro deve ser um usuário administrador.

# Listagem de imóveis

**RF** => Requisitos funcionais
Deve ser possível listar todos os imóveis disponiveis.

**RN** => Regras de negócio
O usuário não precisa estar logado no sistema.

# Cadastro de Especificação no imóvel

**RF** => Requisitos funcionais
Deve ser possível cadastram uma especificação para um imóvel
Deve ser possível listar todas as especificações
Deve ser possível listar todos os imóveis

**RN** => Regras de negócio
Não deve ser possível cadastrar uma especificação para um imóvel não cadastrado.
Não deve ser possível cadastrar uma especificação já existente para o mesmo imóvel.
O usuário responsável pelo cadastro deve ser um usuário administrador.

# Cadastro de imagens do imóvel

**RF** => Requisitos funcionais
Deve ser possível cadastrar a imagem do imóvel

**RNF** => Requisitos não funcionais
Utilizar o multer para upload dos arquivos

**RN** => Regras de negócio
O usuário deve poder cadastrar mais de uma imagem para o mesmo imóvel
O usuário responsável pelo cadastro deve ser um usuário administrador.

# Locação do imóvel

**RF** => Requisitos funcionais
Deve ser possível cadastrar o aluguel de um imóvel.

**RN** => Regras de negócio
O aluguel deve ter uma duração minima de um ano.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo imóvel.
