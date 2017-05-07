## Requisitos da aplicação ##

- Ruby - versão 2.3.0 ou superior
- PostgreSQL - versão 9.2 ou superior


## Como configurar a aplicação ##

1. Configurar `config/env.yml` com os dados do seu banco, use `config/env.sample.yml` como referência
2. `rake db:create`
3. `rake db:migrate`
4. `rake db:seed`


## Como acessar

Usuário administrador teste - área de gestão

`email: teste@exameaqui.com`
`senha: 123456789`


Paciente teste - portal


Clínica teste  - área de gestão (portal)

## Boas práticas ##

- Faça commits pequenos, começando por letra maiscula, auto descritivos e quando houver citação de partes do código colocar dentro de acentuação `funcao`. Ex.: Modificação de `action: index` do `index_controller.rb`

- Usar a semântica do markdown 


