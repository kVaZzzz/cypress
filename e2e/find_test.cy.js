describe('Cypress tests', () => {
    it('Find Vacancy', () => {
        cy.fixture('cypressTest').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.main_url)

            cy.log('Ввод существующего логина')
            cy.get(('#login'))
                .type(data.login)
            cy.log('Ввод cуществующего пароля')
            cy.get('#passwd')
                .type(data.password)

            cy.log('Ввод капчи')
                .pause()

            cy.log('Клик по кнопке "Войти"')
            cy.get('.col_c > .btn')
                .click()

            cy.log('Клик по кнопке "Продолжить"')
                .pause()
            cy.log('Ввод вакансии')
            cy.get('#searchpro-sterms')
                .type(data.find_vacancy)

            cy.log('Клик по кнопке "Найти работу"')
            cy.get('.col-sm-6.m-b-1 > .btn')
                .click()
            cy.get('#searchpro-category > :nth-child(1) > input')
        })
    })

});