const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  message.channel.send(
    new MessageEmbed()
      .setAuthor(
        "Invite Link",
        //"https://yoshanabot.weebly.com/uploads/1/3/4/2/134266620/giphy-1_orig.gif"
      )
      .setColor("RED")
      //.setTimestamp()
      .setDescription(   
        "https://bit.ly/3f9WRLW" 
         // client.user.id +
         // "&permissions=" +
         // "37080128" +
         // "&scope=" +
          //"bot"
     )
  );
};
