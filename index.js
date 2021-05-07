const TelegramAPI = require('node-telegram-bot-api');
const token = "1877038689:AAHT4S5ilopMYwS3qOKQwtyOyCp9roKKyiA";

const bot = new TelegramAPI(token, {polling: true});

bot.setMyCommands([
    {command: '/start', description: 'начальное приветствие'},
    {command: '/info', description: 'информация о пользователе'},
    {command: '/game', description: 'игра "Угадай число"'},
])

bot.on('message', async msg  =>  {
    const text = msg.text;
    const chatID = msg.chat.id;
    const t_name = `${msg.chat.first_name}`;
    const chats = {};

    if(text == '/start') {
        await bot.sendSticker(chatID, 'https://tlgrm.ru/_/stickers/416/762/416762f9-4313-3144-8294-2b21170825bb/1.webp');
        await bot.sendMessage(chatID, `hello ${t_name}`);  
        await bot.sendMessage(chatID, `How are you?`);
        return;
    } 

    if(text == '/game') {
        bot.sendMessage(chatID, 'Угадай число от 0 до 9');
        const randomNumber = Math.floor(Math.random() * 10);
        chats[chatID] = randomNumber;
        return;
    }

    return bot.sendMessage(chatID, 'моя твоя не понимать');

})