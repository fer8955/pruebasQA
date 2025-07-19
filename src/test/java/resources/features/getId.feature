
@getUsersId
Feature: API Users - Get Id

  Background:
    * url baseUrl
    * path '/usuarios/'
    * def schema = read('classpath:resources/request/user.schema.json')

  @200
  Scenario Outline: Get Id Users - Success
    #Al usar params para mandar el id la url cambia y trae otra estructura
    * path '<id>'
    When method get
    Then status 200
    And match response == schema.getId["200"].usuarios
    Examples:
    |id|
    |0uxuPY0cbmQhpEz1|

  @400
  Scenario Outline: Get Id Users - User Not Found
    * path '<id>'
    When method get
    Then status 400
    And match response == schema.getId["400"]
    * match response.message == "Usuário não encontrado"
    Examples:
      |id|
      |0111PY0cbmQhpEz1|

  @400
  Scenario Outline: Get Id Users - Id Invalid
    * print '<case>'
    * path '<id>'
    When method get
    Then status 400
    And match response.id == "id deve ter exatamente 16 caracteres alfanuméricos"
    Examples:
      |case         |id|
      |Only numbers |3333|
      |Only letters |AAA |
      |17 characters|123456789ABCDEFRR|
      |18 characters|123456789ABCDEFRR%|






