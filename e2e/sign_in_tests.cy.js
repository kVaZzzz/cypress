describe('Cypress Tests', () => {
    it('Sign in test', () => {
        cy.fixture('cypressTest').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.main_url)

            cy.log('Ввод существующего логина')
            cy.get(('#login'))
                .type(data.login)
            cy.log('Ввод cуществующего пароля')
            cy.get('#passwd')
                .type(data.password)

            cy.log('Пауза для капчи')
                .pause()

            cy.log('Клик по кнопке "Войти"')
            cy.get('.col_c > .btn')
                .click()

                .wait(5000)

            cy.log('Клик по кнопке "Продолжить"')
            cy.get('#returnUrlBtn')
                .click()

        })
    })

    it('Sign in, none-existent password test', () => {
        cy.fixture('cypressTest').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.main_url)

            cy.log('Ввод логина')
            cy.get(('#login'))
                .type(data.login)
            cy.log('Ввод неcуществующего пароля')
            cy.get('#passwd')
                .type(data.none_existent_password)

            cy.log('Пауза для капчи')
                .pause()

            cy.log('Клик по кнопке "Войти"')
            cy.get('.col_c > .btn')
                .click()

            cy.log('Проверка на появление ошибки')
            cy.get('.msg_error')
                .should('exist')

        })
    })

})