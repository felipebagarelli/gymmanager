# Gym Manager

Sistema de gerenciamento de academia desenvolvido com Java e Spring Boot.

O projeto está sendo desenvolvido como uma aplicação REST API, com foco em gerenciamento de membros, exercícios e treinos, buscando simular um sistema que possa futuramente ser utilizado por personal trainers e academias.

## Tecnologias

- Java 25
- Spring Boot
- Spring Web
- Spring Data JPA
- Hibernate
- PostgreSQL
- Maven
- Lombok
- Spring Security

## Funcionalidades

### Membros

- [x] Cadastro de membros
- [x] Listagem de membros
- [x] Busca de membro por ID
- [x] Atualização de membros
- [x] Exclusão de membros

### Treinos

- [ ] Cadastro de exercícios
- [ ] Categorias de exercícios
- [ ] Criação de treinos
- [ ] Associação de exercícios aos treinos
- [ ] Associação de treinos aos membros

## Conceitos e conhecimentos praticados

- Arquitetura em camadas (`Controller`, `Service`, `Repository`)
- Injeção de dependências
- DTOs para requisições e respostas
- Records
- Spring Data JPA
- Hibernate e persistência de entidades
- CRUD com REST API
- Mapeamento de endpoints HTTP
- `GET`, `POST`, `PUT` e `DELETE`
- `Optional` e `orElseThrow()`
- Conversão de Entity para DTO
- Relacionamento entre recursos
- PostgreSQL
- Git e GitHub

## Em desenvolvimento

- [ ] Cadastro e gerenciamento de exercícios
- [ ] Categorias de exercícios
- [ ] Criação e gerenciamento de treinos
- [ ] Associação de exercícios aos treinos
- [ ] Associação de treinos aos membros
- [ ] Validações com Bean Validation
- [ ] Tratamento global de exceções
- [ ] Enums
- [ ] Melhorias na configuração e segurança
- [ ] Testes unitários e de integração
- [ ] Documentação da API

## Objetivo do projeto

Além de servir como projeto de estudo e portfólio para desenvolvimento Backend Java, o Gym Manager está sendo desenvolvido com a possibilidade de evoluir futuramente para uma solução voltada a personal trainers e seus alunos.