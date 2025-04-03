# Projeto Integrador - Modelo
*(Coloque aqui o nome do seu projeto.)*

Um modelo para o desenvolvimento do Projeto Integrador do Curso de Técnico em Desenvolvimento de Sistemas para a Internet Integrado ao Ensino Médio do IFC - Campus Araquari.
*(Coloque aqui uma breve descrição do seu projeto.)*

**IMPORTANTE**: [**Cadastre seu projeto nesse link**](https://docs.google.com/spreadsheets/d/1KXuMJ9TK7GPyahR_BfLwfn4ec7vX7DgiHx42vFc4E7g/edit?usp=sharing).

Professor: [Marco André Mendes](github.com/marcoandre)

Equipe:
- [João](https://github.com/Joaovictor23t4)
- [Lucas](https://github.com/dnzlucas)
- [Luiz](https://github.com/LuizBlume)
- [Luna](https://github.com/LunaBolsoni)

Links do projeto:
(*Coloque aqui os links para a documentação do projeto e os repositórios e plubicação do backend e frontend.*)
-   [Documentação (esse documento)](https://github.com/TremboGuys/Eatly/blob/main/docs/README.md)
-   Backend: [Repositório](github.com/marcoandre/pi-backend) e [Publicação](https://pi-backend.herokuapp.com/)
-   Frontend: [Repositório](github.com/marcoandre/pi-frontend) e [Publicação](https://pi-frontend.herokuapp.com/)

**Como usar esse modelo para o Projeto Integrador**

# 1. Desenvolvimento

## 1.1 Modelo de sistema

### 1.1.1 Ordem de vendas

O dono de uma empresa chamada *Eatly* nos contatou com o intuito de aumentar os lucros de sua empresa. A Eatly faz parte do ramo de serviço de hospedagem de restaurantes, e há um rápido crescimento do interesse de mais restaurante em ingressar no site. Sua forma lucrativa é por meio do aluguel da hospedagem de restaurantes no site, mas quer aumentar os seus lucros, por isso nos contactou.

# 2. Situação Problema

Sr. Diniz é dono da Eatly, uma empresa que existe a 1 ano e que conta com 2 desenvolvedores que fazem a manutenção do sistema.

No site do Sr. Diniz (Eatly), é necessário o cliente informar seu endereço, após isso ele pode escolher a categoria da comida que deseja consumir e uma seleção de restaurantes aparecem com base na categoria e endereço informados para que o cliente possa contatar o restaurante mais próximo e que mais se encaixa com sua fome. Após escolher, é informado o telefone e endereço do restaurante, para que o cliente contacte como deseja.

A forma como seu sistema lucra atualmente é com o pagamento dos restaurantes para que seus nomes apareçam nas pesquisas. Mas Diniz quer aumentar seus lucros, e conta com a gente para isso, ele pensa em além de ganhar com o aluguel dos restaurantes no sistema, também ganhar uma porcentagem das vendas realizadas no site, expandindo os serviços prestados pela empresa.

Um dos problemas que percebi no Eatly é a falta de transparência a empresa hospedada sobre quanto suas vendas aumentaram com a hospedagem no site de Sr. Diniz, e se vale apena ou não continuar pagando sua hospedagem no sistema. Uma boa de ajustar é informando um relatório individual ao restaurante, sobre quantas vezes sua página foi acessada pelos clientes do Eatly, além é claro, de quantas **vendas** foram realizadas. Como vimos, o Sr. Diniz tem um pequeno software, e ele já vê os frutos da ajuda de um, mas agora, com seu software expandindo ainda mais e ficando mais robusto, ele poderá ver ainda mais benefícios, como receber outras fontes de lucro, por pagamentos de vendas realizadas, uma maior confiança dos restaurantes, com a garantia de possíveis relatórios e etc.

# 3. Descrição da Proposta

O foco de nosso software será ainda na hospedagem dos restaurantes e na sua visibilidade para pesquisas do usuário, mas agora principalmente para as vendas dos produtos desses restaurantes, e por fim na entrega de tais produtos ao usuário, agindo assim como um intermediador entre o restaurante e o cliente.

Falando agora de níveis de usuário do sistema, no planejamento é pensado em 4 tipos de usuário: cliente, restaurante e administradores. Falaremos sobre as diferenças mais a frente.

As ações que um usuário poderá realizar em nosso software seriam:

- Pesquisar restaurantes por categoria alimentícia, como hambúrgueres, pizzas, pastéis, etc.
- Pesquisar um restaurante específico.
- Fazer um pedido por meio do nosso sistema.
- Acompanhar sua entrega.
- Realizar avaliações a restaurantes.

Agora sobre as diferenças de usuário:

- **Cliente**: poderá realizar pedidos e avaliações, além de processar pagamentos.
- **Restaurantes**: poderão gerenciar os pedidos que receberem, atualizar as opções de cardápio, bem como seus preços, responder avaliações de clientes e também atualizar o tempo de entrega mostrado no app conforme necessidade.
- **Entregadores**: recebem e realizam entregas, terão um GPS para a rota, bem como o valor a ser ganho na entrega, além de poder realizar avaliações a clientes e restaurantes.
- **Administradores**: gerenciam as taxas aos pedidos e mudam as políticas de privacidade caso necessário. Oferecem suporte a clientes, restaurantes e entregadores.
