const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
    host: '',
    port: 587,
    secure: false,
    auth:{

    }
});

transport.sendMail({
    from: "",
    to: "",
    subject: "",
    text: "",
})

const mensagem = ("Olá! Bem-vindo ao Grupo ADS Geradores.Se você está em busca de serviços confiáveis para seus grupos geradores, você está no lugar certo. Nossa equipe especializada oferece uma variedade de serviços, incluindo:- Manutenção corretiva e preventiva de grupo gerador.- Automação e retrofit para sistemas de energia.- Limpeza de tanque de combustível.- Análise de combustível para garantir o melhor desempenho do seu gerador.Se você tem alguma pergunta, precisa de mais informações ou deseja solicitar um orçamento, não hesite em nos enviar uma mensagem. Estamos aqui para ajudar!")