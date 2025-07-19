@postUsers
Feature: API Users - Post

  Background:
    * url baseUrl
    * path '/usuarios'
    * def body = read('classpath:resources/request/user.body.json')
    * def schema = read('classpath:resources/request/user.schema.json')

  @201
  Scenario: POST Users - Success
    * def dataGenerator = Java.type('karate.helpers.dataPostGenerator')
    * def nome = dataGenerator.generateUniqueNome()
    * def email = dataGenerator.generateUniqueEmail()
    * def admin = dataGenerator.getRandomBooleanAsString()
    * body.post.nome = nome
    * body.post.email = email
    * body.post.administrador = admin
    Given request body.post
    When method post
    Then status 201
    And match response == schema.post["201"]

  @400
  Scenario: POST Users - Error - Email Used
    #Obtener un email reutilizando el metodo get
    * def email = call read('classpath:resources/features/get.feature@200')
    #Guardar el email en el body
    * body.post.email = email.response.usuarios[0].email
    Given request body.post
    When method post
    Then status 400
    And match response == schema.post["400"]

  @400
  Scenario Outline: POST Users - Error - Empty field
    * print '<case>'
    * if ('<value>' == 'nome') body.post.nome = ""
    * if ('<value>' == 'email') body.post.email = ""
    * if ('<value>' == 'password') body.post.password = ""
    * if ('<value>' == 'administrador') body.post.administrador = ""
    Given request body.post
    When method post
    Then status 400
    And match response.<value> == <message>
    Examples:
    |case           |value        |message|
    |Empty Nome     |nome         |"nome não pode ficar em branco"|
    |Empty Email    |email        |"email não pode ficar em branco"|
    |Empty Password |password     |"password não pode ficar em branco"|
    |Empty Admin    |administrador|"administrador deve ser 'true' ou 'false'"|

  @400
  Scenario Outline: POST Users - Error - Missing field
    * print '<case>'
    * if ('<value>' == 'nome') karate.remove('body', 'post.nome')
    * if ('<value>' == 'email') karate.remove('body', 'post.email')
    * if ('<value>' == 'password') karate.remove('body', 'post.password')
    * if ('<value>' == 'administrador') karate.remove('body', 'post.administrador')
    Given request body.post
    When method post
    Then status 400
    And match response.<value> == "<value> é obrigatório"
    Examples:
      |case           |value|
      |Empty Nome     |nome|
      |Empty Email    |email|
      |Empty Password |password|
      |Empty Admin    |administrador|




