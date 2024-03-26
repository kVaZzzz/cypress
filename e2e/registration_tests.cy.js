describe('Cypress Tests', () => {
    it('Registration test', () => {
        cy.fixture('cypressTest').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.reg_url)

            cy.log('Ввод логина')
            cy.get('#registration-slogin')
                .type(data.login)

            cy.log('Ввод почты')
            cy.get('#registration-semail')
                .type(data.none_existent_email)


            cy.log('Клик по кнопке радио "Я фрилансер"')
            cy.get('#registration-susertype > :nth-child(1) > input')
                .click()

            cy.log('Ввод имени')
            cy.get('#registration-sfirstname')
                .type(data.name)

            cy.log('Ввод фамилии')
            cy.get('#registration-slastname')
                .type(data.surname)

            cy.log('Ввод несуществующего пароля')
            cy.get('#registration-spassword')
                .type(data.none_existent_password)

            cy.log('Повторный ввод несуществующего пароля')
            cy.get('#registration-spasswordrepeat')
                .type(data.none_existent_password)

            cy.log('Клик по кнопке пользовательского соглашения')
            cy.get('.checkbox > label')
                .click()
            cy.pause()

            cy.log('Клик по кнопке "Зарегистрироваться"')
            cy.get('#registrationFormSubmit')
                .click()

                .wait(5000)


        })
    })

    it('Registration, none valid email test', () => {
        cy.fixture('cypressTest').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.reg_url)

            cy.log('Ввод логина')
            cy.get('#registration-slogin')
                .type(data.login)

            cy.log('Ввод почты')
            cy.get('#registration-semail')
                .type(data.none_valid_email)


            cy.log('Клик по кнопке radio "Я фрилансер"')
            cy.get('#registration-susertype > :nth-child(1) > input')
                .click()

            cy.log('Ввод имени')
            cy.get('#registration-sfirstname')
                .type(data.name)

            cy.log('Ввод фамилии')
            cy.get('#registration-slastname')
                .type(data.surname)

            cy.log('Ввод несуществующего пароля')
            cy.get('#registration-spassword')
                .type(data.none_existent_password)

            cy.log('Повторный ввод несуществующего пароля')
            cy.get('#registration-spasswordrepeat')
                .type(data.none_existent_password)

            cy.log('Клик по кнопке пользовательского соглашения')
            cy.get('.checkbox > label')
                .click()
            cy.pause()

            cy.log('Клик по кнопке "Зарегистрироваться"')
            cy.get('#registrationFormSubmit')
                .click()
        })
    })

    it('Registration, none valid login test', () => {
        cy.fixture('cypressTest').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.reg_url)

            cy.log('Ввод невалидного логина')
            cy.get('#registration-slogin')
                .type(data.none_valid_login)

            cy.log('Ввод почты')
            cy.get('#registration-semail')
                .type(data.none_existent_email)


            cy.log('Клик по кнопке радио "Я фрилансер"')
            cy.get('#registration-susertype > :nth-child(1) > input')
                .click()

            cy.log('Ввод имени')
            cy.get('#registration-sfirstname')
                .type(data.name)

            cy.log('Ввод фамилии')
            cy.get('#registration-slastname')
                .type(data.surname)

            cy.log('Ввод несуществующего пароля')
            cy.get('#registration-spassword')
                .type(data.none_existent_password)

            cy.log('Повторный ввод несуществующего пароля')
            cy.get('#registration-spasswordrepeat')
                .type(data.none_existent_password)

            cy.log('Клик по кнопке пользовательского соглашения')
            cy.get('.checkbox > label')
                .click()
            cy.pause()

            cy.log('Клик по кнопке "Зарегистрироваться"')
            cy.get('#registrationFormSubmit')
                .click()
        })
    })
});