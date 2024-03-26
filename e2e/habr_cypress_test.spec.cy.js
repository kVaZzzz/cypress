describe('Cypress Tests', () => {
    // it('Sign in test', () => {
    //     cy.fixture('cypressTest').then(data => {
    //         cy.log('Переход на страницу авторизации')
    //         cy.visit(data.main_url)
    //
    //         cy.log('Ввод существующего логина')
    //         cy.get(('#login'))
    //             .type(data.login)
    //         cy.log('Ввод cуществующего пароля')
    //         cy.get('#passwd')
    //             .type(data.password)
    //
    //             .pause()
    //
    //         cy.log('Клик по кнопке "Войти"')
    //         cy.get('.col_c > .btn')
    //             .click()
    //
    //     })
    // })
    // it('Registration test', () => {
    //     cy.fixture('cypressTest').then(data => {
    //         cy.log('Переход на страницу авторизации')
    //         cy.visit(data.reg_url)
    //
    //         cy.log('Ввод логина')
    //         cy.get('#registration-slogin')
    //             .type(data.login)
    //
    //         cy.log('Ввод почты')
    //         cy.get('#registration-semail')
    //             .type(data.none_existent_email)
    //
    //
    //         cy.log('Клик по кнопке радио "Я фрилансер"')
    //         cy.get('#registration-susertype > :nth-child(1) > input')
    //             .click()
    //
    //         cy.log('Ввод имени')
    //         cy.get('#registration-sfirstname')
    //             .type(data.name)
    //
    //         cy.log('Ввод фамилии')
    //         cy.get('#registration-slastname')
    //             .type(data.surname)
    //
    //         cy.log('Ввод несуществующего пароля')
    //         cy.get('#registration-spassword')
    //             .type(data.none_existent_password)
    //
    //         cy.log('Повторный ввод несуществующего пароля')
    //         cy.get('#registration-spasswordrepeat')
    //             .type(data.none_existent_password)
    //
    //         cy.log('Клик по кнопке пользовательского соглашения')
    //         cy.get('.checkbox > label')
    //             .click()
    //         cy.pause()
    //
    //         cy.log('Клик по кнопке "Зарегистрироваться"')
    //         cy.get('#registrationFormSubmit')
    //             .click()
    //
    //
    //     })
    // })

    // it('Registration, none valid email test', () => {
    //     cy.fixture('cypressTest').then(data => {
    //         cy.log('Переход на страницу авторизации')
    //         cy.visit(data.reg_url)
    //
    //         cy.log('Ввод логина')
    //         cy.get('#registration-slogin')
    //             .type(data.login)
    //
    //         cy.log('Ввод почты')
    //         cy.get('#registration-semail')
    //             .type(data.none_valid_email)
    //
    //
    //         cy.log('Клик по кнопке radio "Я фрилансер"')
    //         cy.get('#registration-susertype > :nth-child(1) > input')
    //             .click()
    //
    //         cy.log('Ввод имени')
    //         cy.get('#registration-sfirstname')
    //             .type(data.name)
    //
    //         cy.log('Ввод фамилии')
    //         cy.get('#registration-slastname')
    //             .type(data.surname)
    //
    //         cy.log('Ввод несуществующего пароля')
    //         cy.get('#registration-spassword')
    //             .type(data.none_existent_password)
    //
    //         cy.log('Повторный ввод несуществующего пароля')
    //         cy.get('#registration-spasswordrepeat')
    //             .type(data.none_existent_password)
    //
    //         cy.log('Клик по кнопке пользовательского соглашения')
    //         cy.get('.checkbox > label')
    //             .click()
    //         cy.pause()
    //
    //         cy.log('Клик по кнопке "Зарегистрироваться"')
    //         cy.get('#registrationFormSubmit')
    //             .click()
    //     })
    // })

    // it('Registration, none valid login test', () => {
    //     cy.fixture('cypressTest').then(data => {
    //         cy.log('Переход на страницу авторизации')
    //         cy.visit(data.reg_url)
    //
    //         cy.log('Ввод невалидного логина')
    //         cy.get('#registration-slogin')
    //             .type(data.none_valid_login)
    //
    //         cy.log('Ввод почты')
    //         cy.get('#registration-semail')
    //             .type(data.none_existent_email)
    //
    //
    //         cy.log('Клик по кнопке радио "Я фрилансер"')
    //         cy.get('#registration-susertype > :nth-child(1) > input')
    //             .click()
    //
    //         cy.log('Ввод имени')
    //         cy.get('#registration-sfirstname')
    //             .type(data.name)
    //
    //         cy.log('Ввод фамилии')
    //         cy.get('#registration-slastname')
    //             .type(data.surname)
    //
    //         cy.log('Ввод несуществующего пароля')
    //         cy.get('#registration-spassword')
    //             .type(data.none_existent_password)
    //
    //         cy.log('Повторный ввод несуществующего пароля')
    //         cy.get('#registration-spasswordrepeat')
    //             .type(data.none_existent_password)
    //
    //         cy.log('Клик по кнопке пользовательского соглашения')
    //         cy.get('.checkbox > label')
    //             .click()
    //         cy.pause()
    //
    //         cy.log('Клик по кнопке "Зарегистрироваться"')
    //         cy.get('#registrationFormSubmit')
    //             .click()
    //     })
    // })

    // it('Sign in, none-existent password test', () => {
    //     cy.fixture('cypressTest').then(data => {
    //         cy.log('Переход на страницу авторизации')
    //         cy.visit(data.main_url)
    //
    //         cy.log('Ввод логина')
    //         cy.get(('#login'))
    //             .type(data.login)
    //         cy.log('Ввод неcуществующего пароля')
    //         cy.get('#passwd')
    //             .type(data.none_existent_password)
    //
    //             .pause()
    //
    //         cy.log('Клик по кнопке "Войти"')
    //         cy.get('.col_c > .btn')
    //             .click()
    //
    //     })
    // })

    // it('Find Vacancy', () => {
    //     cy.fixture('cypressTest').then(data => {
    //         cy.log('Переход на страницу авторизации')
    //         cy.visit(data.main_url)
    //
    //         cy.log('Ввод существующего логина')
    //         cy.get(('#login'))
    //             .type(data.login)
    //         cy.log('Ввод cуществующего пароля')
    //         cy.get('#passwd')
    //             .type(data.password)
    //
    //         cy.log('Ввод капчи')
    //             .pause()
    //
    //         cy.log('Клик по кнопке "Войти"')
    //         cy.get('.col_c > .btn')
    //             .click()
    //
    //         cy.log('Клик по кнопке "Продолжить"')
    //             .pause()
    //         cy.log('Ввод вакансии')
    //         cy.get('#searchpro-sterms')
    //             .type(data.find_vacancy)
    //
    //         cy.log('Клик по кнопке "Найти работу"')
    //         cy.get('.col-sm-6.m-b-1 > .btn')
    //             .click()
    //         cy.get('#searchpro-category > :nth-child(1) > input')
    //     })
    // })

    it('Use filter', () => {
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
})