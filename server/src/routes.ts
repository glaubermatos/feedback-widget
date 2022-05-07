import express from 'express'
import nodemailer from 'nodemailer'
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';

export const routes = express.Router()

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "b54cf9a6697dd6",
        pass: "357e0f9a3f6306"
    }
});

routes.post('/feedbacks', async (req, res) => {
    const {type, comment, screenshot} = req.body

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const submiteFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbacksRepository) 

    await submiteFeedbackUseCase.execute({
        type,
        comment,
        screenshot
    })

    // await transport.sendMail({
    //     from: 'Equipe Feedget <oi@feedget.com>',
    //     to: 'Glauber Matos <glaub.oliveira@hotmail.com>',
    //     subject: 'Novo feedback',
    //     html: [
    //         '<div style="font-family: sans-serif; font-size: 16px; color: #111">',
    //             `<p>Tipo do feedback: ${type}</p>`,
    //             `<p>Comentário: ${comment}</p>`,
    //         '</div>',
    //     ].join('\n')
    // })

    return res.status(201).send()
})