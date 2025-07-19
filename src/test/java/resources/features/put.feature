@putUsers
Feature: API Users - Put

  Background:
    * url baseUrl
    * path '/usuarios/'
    * def body = read('classpath:resources/request/user.body.json')
    * def schema = read('classpath:resources/request/user.schema.json')
    * def dataGenerator = Java.type('karate.helpers.dataPostGenerator')

  @200
  Scenario Outline: Put Users
    #obtener los datos con el metodo get del primer registro
    * def get = call read('classpath:resources/features/get.feature')
    * def rp = get.response.usuarios[0]
    * def id = rp._id
    * def nome = rp.nome
    * def email = rp.email
    * def pass = rp.password
    * def admin = rp.administrador

    #Cambiar los datos de un campo
    * print '<case>'
    * if ('<value>' == 'nome') nome = dataGenerator.generateUniqueNome()
    * if ('<value>' == 'email') email = dataGenerator.generateUniqueEmail()
    * if ('<value>' == 'password') password = dataGenerator.generateUniquePass()
    * if ('<value>' == 'administrador') administrador = dataGenerator.getRandomBooleanAsString()

    #Modificar el body
    * body.put.nome = nome
    * body.put.email = email
    * body.put.password = pass
    * body.put.administrador = admin

    * path id
    Given request body.put
    When method PUT
    Then status 200
    And match response == schema.put["200"]
    * match response.message == "Registro alterado com sucesso"
    Examples:
      |case         |value|
      |Put Nome     |nome|
      |Put Email    |email        |
      |Put Password |password     |
      |Put Admin    |administrador|



  @201
  Scenario: Put Users - Register Sucess

    * def idPut = dataGenerator.generateId()
    #Modificar el body
    * body.put.nome = dataGenerator.generateUniqueNome()
    * body.put.email = dataGenerator.generateUniqueEmail()
    * body.put.password = dataGenerator.generateUniquePass()
    * body.put.administrador = dataGenerator.getRandomBooleanAsString()

    * path idPut
    Given request body.put
    When method PUT
    Then status 201
    And match response == schema.put["201"]
    * match response.message == "Cadastro realizado com sucesso"

  @400
  Scenario: Put Users - Error Email Used

    #obtener un email usado
    * def get = call read('classpath:resources/features/get.feature')
    * def rp = get.response.usuarios[0]
    * def email = rp.email

    #Generar un id para la peticion
    * def idPut = dataGenerator.generateId()
    #Modificar el body
    * body.put.nome = dataGenerator.generateUniqueNome()
    * body.put.email = email
    * body.put.password = dataGenerator.generateUniquePass()
    * body.put.administrador = dataGenerator.getRandomBooleanAsString()

    * path idPut
    Given request body.put
    When method PUT
    Then status 400
    And match response == schema.put["400"]
    * match response.message == "Este email já está sendo usado"