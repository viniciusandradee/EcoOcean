| Métodos | Descrição |
|---|---|
| `GET` | Retorna informações de um ou mais registros. |
| `POST` | Utilizado para criar um novo registro. |
| `PUT` | Atualiza dados de um registro ou altera sua situação. |
| `DELETE` | Remove um registro do sistema. |
| `PATCH` | Aplica modificações parciais em um recurso 

# Endpoints disponíveis:

### /areas
| Métodos diponíveis | |
|---|---|
|`GET`|
|`PUT`| 
|`DELETE`|
|`POST`| 
    "cep":"11440-530",
    "cidade":"Guarujá",
    "estado":"SP",
    "rua":"Av. Miguel Estefno",
    "descricao":"Perto da Delphin Beach",
    "latitudex":"-23.9887902667508",
    "latitudey":"-46.23846742299939-0"



	
#

### /partidas
| Métodos diponíveis | |
|---|---|
|`GET`| 
|`DELETE`|
|`PATCH`|
|`POST`|
    "nome":"Guarujá Dolphin Beach",
    "descricao":"Início previsto para as 18:00",
    "areaId":"2",
    "voluntarioAdminId":"1"

#

### /participacoes
| Métodos diponíveis | |
|---|---|
|`GET`|
|`DELETE`|
|`POST`|
	"idVoluntario":"8",
    "idPartida":"2"
#

### /coletas
| Métodos diponíveis | |
|---|---|
|`GET`| 
|`DELETE`|
|`POST`|
    "tipoLixo":"1",
    "quantidade":10,
    "idParticipacao":"1"
#

### /voluntarios
| Métodos diponíveis | |
|---|---|
|`GET`| 
|`PUT`|
|`DELETE`|
|`POST`|
	"nome":"Vinicius",
    "dataNascimento":"10-10-2010",
    "email":"vinicius@gmail.com",
    "sexo":"1",
    "username":"Vinicius",
    "password":"123456"
#

### /voluntarios-admin
| Métodos diponíveis | |
|---|---|
|`GET`|
|`PUT`|
|`DELETE`|
|`POST`|
    "nome": "Vinicius",
    "email": "vinicius@gmail.com",
	"username":"Vinicius",
    "password":"123456"

#

### /login
| Métodos diponíveis | | 
|---|---|
|`POST`|
    "username": "Vinicius",
    "password": "123456"
#

### /auth
| Métodos diponíveis | |
|---|---|
|`GET`|