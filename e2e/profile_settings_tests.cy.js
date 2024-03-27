describe('Cypress tests', () => {

    it('Change profile name, surname test', () => {
        cy.fixture('cypressTest').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.main_url)

            cy.log('Ввод существующего логина')
            cy.get(('#login'))
                .type(data.login)

            cy.log('Ввод cуществующего пароля')
            cy.get('#passwd')
                .type(data.password)

                .pause()

            cy.log('Клик по кнопке "Войти"')
            cy.get('.col_c > .btn')
                .click()

            cy.log('Клик по кнопке "Продолжить"')
            cy.get('#returnUrlBtn')
                .click()

            cy.log('Клик по выпадающему меню')
            cy.get('.navbar-right > :nth-child(7) > .dropdown-toggle')
                .click()

            cy.log('Клик по пункту выпадающего меню "Личный кабинет"')
            cy.get('.open > .dropdown-menu > :nth-child(2) > a')
                .click()

            cy.log('Клик по выпадающей форме')
            cy.get('#my_info_edit_form > h2')
                .click()
            cy.log('Ввод нового имени')
            cy.get('#lname')
                .clear()
                .type(data.new_name)

            cy.log('Ввод новой фамилии')
            cy.get('#fname')
                .clear()
                .type(data.new_surname)

            cy.log('Клик по кнопке "Сохранить изменения"')
            cy.get('#regbutton')
                .click
        })
    })
});