@getUsers
Feature: API Users - Get

  Background:
    * url baseUrl
    * path '/usuarios'
    * def schema = read('classpath:resources/request/user.schema.json')

  @200
  Scenario: Get Users - Success
    When method get
    Then status 200
    And match response.quantidade == schema.get["200"].quantidade
    And match response.usuarios[0] == schema.get["200"].usuarios
    * print response
