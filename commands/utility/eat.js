

    // if (message.content.includes('🍺') || message.content.includes('🍻') || message.content.includes('🍷') || message.content.includes('🍸') || message.content.includes('🍹') || message.content.includes('🍾') || message.content.includes('🍶') || message.content.includes('🥃')) {
    //     await AlcoholService.drinkAlcohol(message, openai);
    //     return;
    // }

    // if includes food emojis
    // const foodEmojis = ['🍔', '🍟', '🍕', '🌭', '🥪', '🌮', '🌯', '🥙', '🧆', '🥚', '🍳', '🥘', '🍲', '🥣', '🥗', '🍿', '🧈', '🧂', '🥫', '🍱', '🍘', '🍙', '🍚', '🍛', '🍜', '🍝', '🍠', '🍢', '🍣', '🍤', '🍥', '🥮', '🍡', '🥟', '🥠', '🥡', '🦪', '🍦', '🍧', '🍨', '🍩', '🍪', '🎂', '🍰', '🧁', '🥧', '🍫', '🍬', '🍭', '🍮', '🍯', '🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🥭', '🍎', '🍏', '🍐', '🍑', '🍒', '🍓', '🥝', '🍅', '🥥', '🥑', '🍆', '🥔', '🥕', '🌽', '🌶', '🥒', '🥬', '🥦', '🧄', '🧅', '🍄', '🥜', '🌰', '🍞', '🥐', '🥖', '🥨', '🥯', '🥞', '🧇', '🧀', '🍖', '🍗', '🥩', '🥓', '🍔', '🍟', '🍕', '🌭', '🥪', '🌮', '🌯', '🥙', '🧆', '🍳', '🥘', '🍲', '🥣', '🥗', '🍿', '🧈', '🧂', '🥫', '🍱', '🍘', '🍙', '🍚', '🍛', '🍜', '🍝', '🍠', '🍢', '🍣', '🍤', '🍥', '🥮', '🍡', '🥟', '🥠', '🥡', '🦪', '🍦', '🍧', '🍨', '🍩', '🍪', '🎂', '🍰', '🧁', '🥧', '🍫', '🍬', '🍭', '🍮', '🍯', '🍼', '🥛', '☕', '🍵', '🍶', '🍾', '🍷', '🍸', '🍹', '🍺', '🍻', '🥂', '🥃', '🥤', '🧋', '🧃', '🧉', '🧊', '🥢', '🍽', '🍴', '🥄'];

    // const drinkEmojis = ['🍺', '🍻', '🍷', '🍸', '🍹', '🍾', '🍶', '🥃', '🥤', '🧋', '🧃', '🧉', '🧊'];

    // const alcoholEmojis = ['🍺', '🍻', '🍷', '🍸', '🍹', '🍾', '🍶', '🥃'];

    // if (foodEmojis.some(emoji => message.content.includes(emoji))) {
    //     await ActionsService.eat(message, openai);
    //     return;
    // }

const { SlashCommandBuilder } = require('discord.js');
const ActionsService = require('../../services/ActionsService.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('eat')
		.setDescription('Give Lupos something to eat.'),
    async execute(interaction) {
        await interaction.deferReply();
        const characterResponse = await ActionsService.eat(interaction);
        await interaction.editReply(characterResponse);
    },
};