describe('Cypress tests', () => {

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

            cy.log('Клик по кнопке "Продолжить"')
            cy.get('#returnUrlBtn')
                .click()

            cy.log('Клик по ссылке "Каталог фрилансеров"')
            cy.get('.top-avatars-row > .container > h2 > .catalog-link > .dashed-underline')
                .click()

        })
    })

    it('Sign in test', () => {
        cy.fixture('cypressTest').then(data => {

            cy.log('Переход на страницу категория фрилансеров')
            cy.visit(data.freelancers_catalog)

            cy.log('Клик по ссылке "Веб-разработка"')
            cy.get(':nth-child(1) > .priority')
                .click()

                .wait(5000)

        })
    })

    it('Sign in test', () => {
        cy.fixture('cypressTest').then(data => {

            cy.log('Переход на страницу категория фрилансеров')
            cy.visit(data.freelancers_catalog)

            cy.log('Клик по ссылке "Каталог услуг "Профи"')
            cy.get('.catalog-pro > a')
                .click()

        })
    })

});