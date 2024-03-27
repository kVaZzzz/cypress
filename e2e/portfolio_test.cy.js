describe('Cypress test', () => {

    it('Portfolio test', () => {
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

            cy.log('Клик по ссылке "Портфолио"')
            cy.get('#w0 > :nth-child(1) > .col-lg-5 > .row > :nth-child(2) > .btn')
                .click()

            cy.log('Клик по выпадающей форме "Мои специализации"')
            cy.get('#my_specs_form > h2')
                .click()

            cy.log('Клик по радио "Бытовые услуги / Обучение"')
            cy.get('.main_specs > :nth-child(6) > input')
                .click()

            cy.log('Клик по радио "3D Графика/Анимация"')
            cy.get('#sspec_50')
                .click()

            cy.log('Клик по радио "Twitter/Discord/Telegram"')
            cy.get('#sspec_710')
                .click()

            cy.log('Клик по радио "Event-менеджмент, промоушн"')
            cy.get('#sspec_184')
                .click()

            cy.log('Клик по кнопке "Cохранить"')
            cy.get('#spec_form > :nth-child(26)')
                .click()
        })
    })

    it('Portfolio change test', () => {
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

            cy.log('Клик по ссылке "Портфолио"')
            cy.get('#w0 > :nth-child(1) > .col-lg-5 > .row > :nth-child(2) > .btn')
                .click()

            cy.log('Клик по выпадающей форме "Редактирование портфолио"')
            cy.get('#my_pfolio_edit > h2')
                .click()
            cy.log('Клик по ссылке "Настройки" по какой-либо специализации')
            cy.get('#spec_w184 > .pf_spec_nav > :nth-child(1) > .btn')
                .click()

            cy.log('Ввод суммы')
            cy.get('#expirience')
                .type(data.min_cost)

            cy.log('Клик по кнопке "Сохранить"')
            cy.get('[type="submit"]')
                .click()
        })
    })
});