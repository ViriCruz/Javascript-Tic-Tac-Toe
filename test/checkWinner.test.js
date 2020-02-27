const main = require('../src/main');


describe('Testing winner positions and tie position', () => {

  document.body.innerHTML = '<h2></h2>'
  const variables = main.variables
  variables.messageTitle = document.querySelector('h2')
  variables.player1 = main.Player('Christian', 'X')
  variables.player2 = main.Player('Gabriela', '0')

  test('First winner position, it returns true', () =>  {
    variables.board = ['X','X','X',4,5,6,7,8,9]
    expect(main.helpers.checkWinner()).toBeTruthy();
  })

  test('Second winner position, it returns true', () =>  {
    variables.board = [1,2,3,'X','X','X',7,8,9]
    expect(main.helpers.checkWinner()).toBeTruthy();
  })

  test('Thrid winner position, it returns true', () =>  {
    variables.board = [1,2,3,4,5,6,'X','X','X']
    expect(main.helpers.checkWinner()).toBeTruthy();
  })

  test('Fourth winner position, it returns true', () =>  {
    variables.board = ['X',2,3,4,'X',6,7,8,'X']
    expect(main.helpers.checkWinner()).toBeTruthy();
  })

  test('fifth winner position, it returns true', () =>  {
    variables.board = ['X',2,3,'X',5,6,'X',8,9]
    expect(main.helpers.checkWinner()).toBeTruthy();
  })

  test('sixth winner position, it returns true', () =>  {
    variables.board = [1,'X',3,4,'X',6,7,'X',9]
    expect(main.helpers.checkWinner()).toBeTruthy();
  })

  test('seventh winner position, it returns true', () =>  {
    variables.board = [1,2,'X',4,5,'X',7,8,'X']
    expect(main.helpers.checkWinner()).toBeTruthy();
  })

  test('eighth winner position, it returns true', () =>  {
    variables.board = [1,2,'X',4,'X',5,'X',8,9]
    expect(main.helpers.checkWinner()).toBeTruthy();
  })

  test('tie position, it returns true', () =>  {
    variables.board = ['0','X','0','0','X','X','X','0','0']
    expect(main.helpers.checkWinner()).toBeTruthy();
  })

  test('there is not neither winner or tie position, it returns false', () =>  {
    variables.board = ['0','X','0',4,5,6,'X','0','0']
    expect(main.helpers.checkWinner()).toBeFalsy();
  })

})
