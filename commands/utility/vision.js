const { SlashCommandBuilder } = require('discord.js');
const AIWrapper = require('../../wrappers/AIWrapper.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('vision')
		.setDescription('Open your eyes.')
    .addStringOption(option =>
        option.setName('text')
            .setDescription('The text query.'))
    .addStringOption(option =>
        option.setName('image')
            .setDescription('The image you want to envision.')),
	async execute(interaction) {
        await interaction.deferReply();
        const text = interaction.options.getString('text');
        const imageUrl = interaction.options.getString('image');
        const visionResponse = await AIWrapper.generateVisionResponse(imageUrl, text);
        await interaction.editReply(visionResponse.choices[0].message.content);
	},
};