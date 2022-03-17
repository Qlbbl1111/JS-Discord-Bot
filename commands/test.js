const { SlashCommandBuilder } = require('@discordjs/builders');
const numbers = [1, 2, 3, 4, 5];
module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('Tests the bot'),
	async execute(interaction) {
		await interaction.reply(`${numbers} Tested!`);
	},
};