const express = require('express');
const bodyParser = require('body-parser');
const TelegramBot = require('node-telegram-bot-api');
const app = express();
const port = 3001;

const token = "7339657049:AAHNMelk_zKXUO4E-caj8_v7SR2VRYxIuhI";
const bot = new TelegramBot(token, { polling: true });

app.use(bodyParser.json());

app.post('/create-invoice', async (req, res) => {
    const { chatId, amount, label } = req.body;
    try {
        await bot.sendInvoice(
            chatId,
            "Deposit",
            "Deposit money to game entering button below",
            'test-payment-payload',
            null,
            'XTR',
            [
                { label: label, amount: amount }
            ]
        );
        res.status(200).send({ message: 'Invoice sent successfully' });
    } catch (error) {
        console.error('Error sending invoice:', error);
        res.status(500).send({ error: 'Error sending invoice' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

bot.on('pre_checkout_query', async msg => {
    try {
        await bot.answerPreCheckoutQuery(msg.id, true);
    } catch (error) {
        console.log(error);
    }
});

bot.on('successful_payment', async msg => {
    try {
        await bot.sendMessage(msg.chat.id, 'Оплата произведена успешно');
    } catch (error) {
        console.log(error);
    }
});
