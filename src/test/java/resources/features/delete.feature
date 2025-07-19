
@deleteUsersId
Feature: API Users - Delete User

  Background:
    * url baseUrl
    * path '/usuarios/'
    * def schema = read('classpath:resources/request/user.schema.json')

  @200
  Scenario Outline: Delete Id Users - Success
    #Al usar params para mandar el id la url cambia y trae otra estructura
    * path '<id>'
    When method delete
    Then status 200
    And match response == schema.delete["200"]
    * assert ["Registro excluído com sucesso", "Nenhum registro excluído"].includes(response.message)
    Examples:
      |id|
      |81AzvpABOup5yFAR|

  @400
  Scenario Outline: Delete Id Users - User Not Allowed
    * path '<id>'
    When method delete
    Then status 400
    And match response == schema.delete["400"]
    * match response.message == "Não é permitido excluir usuário com carrinho cadastrado"
    * match response.idCarrinho == "qbMqntef4iTOwWfg"
    Examples:
      |id|
      |0uxuPY0cbmQhpEz1|







