import Mail from '../lib/main'

export default{
    key: 'RegistrationMail',
    options: {
        delay: 5000,
        priority: 3
    },
    async handle({data}){
        const {user} = data;

    await Mail.sendMail({
        from: 'DIO <contato@dio.org.br',
        to: `${ueser.name} <${email}>`,
        subject: 'Cadastro de usuario',
        html: `Ola, ${user.name}, Bem-vindo a DIO`
})

    }
}

