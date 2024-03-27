describe('Cypress tests', () => {

    it('Filter category', () => {
        cy.fixture('cypressTest').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.main_url)

            cy.log('Ввод существующего логина')
            cy.get(('#login'))
                .type(data.login)
            cy.log('Ввод cуществующего пароля')
            cy.get('#passwd')
                .type(data.password)

            cy.log('Паузка для капчи')
                .pause()

            cy.log('Клик по кнопке "Войти"')
            cy.get('.col_c > .btn')
                .click()

            cy.log('Клик по кнопке "Продолжить"')
            cy.get('#returnUrlBtn')
                .click()

            cy.log('Клик по кнопке "Найти работу"')
            cy.get('.col-sm-6.m-b-1 > .btn')
                .click()
            cy.get('#searchpro-category > :nth-child(1) > input')

                .wait(1000)

            cy.log('Клик по фильтру')
            cy.get('#searchpro-category > :nth-child(1) > input')
                .click()

                .wait(1000)

            cy.log('Клик по кнопке "Применить"')
            cy.get('#searchBtn')
                .click()
        })
    })

    it('Filter, min/max cost test', () => {
        cy.fixture('cypressTest').then(data => {

            cy.log('Переход на страницу фильтров')
            cy.visit(data.filters_url)

            cy.log('Ввод минимальной оплаты')
            cy.get('#searchpro-min_cost')
                .type(data.min_cost)

            cy.log('Ввод максимальной оплаты')
            cy.get('#searchpro-max_cost')
                .type(data.max_cost)

            cy.log('Клик на кнопку "Стоимость не указана"')
            cy.get('#searchpro-open_cost')
                .click()

            cy.log('Клик по кнопке "Применить"')
            cy.get('#searchBtn')
                .click()

                .wait(7000)
        })
    })

    it('Filter, stop_word test', () => {
        cy.fixture('cypressTest').then(data => {

            cy.log('Переход на страницу фильтров')
            cy.visit(data.filters_url)

            cy.log('Ввод стоп-слова')
            cy.get('#searchpro-sexclude')
                .type(data.stop_word)

                .wait(1000)

            cy.log('Клик по кнопке "Применить"')
            cy.get('#searchBtn')
                .click()

        })
    })


});