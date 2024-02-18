const {Client, GateWayIntentBits, EmbedBuilder, SlashCommandBuilder, PermissionsBitField, Permissions, GatewayIntentBits} = require('discord.js');
const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]});

// This readys up the Discord bot
client.on("ready", ()=> {
    console.log('ECO Bot is ready!');
    client.user.setActivity('Hey there! Thank you for using ECO!');
    
    // this is the name of the new slash command
    const shameboard = new SlashCommandBuilder()
    .setName('shameboard')
    .setDescription('This is the Shameboard! Shame a user who let something expire.')
    // these are the options within the slash command "shameboard"
    .addUserOption(option => 
        option
        .setName('user')
        .setDescription('This is the user you are shaming!')
        .setRequired(true)
        )
    client.application.commands.create(shameboard);

    const reminder = new SlashCommandBuilder()
    .setName('reminder')
    .setDescription('This will remind you when your grocery item is about to expire.')
    .addUserOption(option => 
        option
        .setName('user')
        .setDescription('This is the user you are talking to!')
        .setRequired(true)
        )
    client.application.commands.create(reminder);

    const donate = new SlashCommandBuilder()
    .setName('donate')
    .setDescription('Thank you for donating! Helping the environment, one step at a time!')
    // these are the options within the slash command "shameboard"
    .addUserOption(option => 
        option
        .setName('user')
        .setDescription('This is the user you are praising for donating!')
        .setRequired(true)
        )
    client.application.commands.create(donate);
})

client.on('interactionCreate', (interaction) => {
    if(!interaction.isChatInputCommand()) return;
    if(interaction.commandName==='shameboard') {
        const userOption = interaction.options.getUser('user');
        if(userOption) {
            interaction.reply(`What a shame, ${userOption.toString()} has let their groceries expire!`);
            }
    }
})

client.on('interactionCreate', (interaction) => {
    if(!interaction.isChatInputCommand()) return;
    if(interaction.commandName==='reminder') {
        const userOption = interaction.options.getUser('user');
        if(userOption) {
            interaction.reply(`Hey ${userOption.toString()}, one of your items will expire very soon! Consider checking out the recipe's feature on our app or make a donation! `);
            }
    }
})

client.on('interactionCreate', (interaction) => {
    if(!interaction.isChatInputCommand()) return;
    if(interaction.commandName==='donate') {
        const userOption = interaction.options.getUser('user');
        if(userOption) {
            interaction.reply(`Wowza, ${userOption.toString()} has just donated one of their items!`);
            }
    }
})


client.login('MTIwODUxMjkyNjA2ODI1MjY3Mg.G6oNU5.1TZJkO8TAfsxSqdvS3egFiwF3WWJ-YiRLPHYrk')
