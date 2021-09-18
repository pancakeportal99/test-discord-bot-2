const Discord = require('discord.js');
const client = new Discord.Client();

function callie() {
var quotes = [
"'Woo, I'm a person in a sheet!' How scary. Not!",
"...You scare me sometimes.",
"After battling, I love to unwind with a cuppa joe!",
"Ah, staring at the ocean is so theraputic...",
"Are you inking me? Splat you!",
"Awh, thanks cutie!",
"Dahhh...",
"Do you want to head down to the gym and...GET FIT?!",
"Don't look down... Don't look down...",
"Help! I have a sudden craving for peanut butter!",
"Hey! Watch your mouth, this is Agent 1 yo--I mean, uh, Callie the Squid Sister!",
"Hey, can you think of any good puns?",
"Hey, do you have change for the vending machine?",
"Hey, it's a boat! I wanna take a trip somewhere...",
"Holy mackerel!",
"I don't have to take that from you!",
"I just saw a SUPER fresh car drive by! I want it!",
"I need a disguise so I won't get mobbed by fans!",
"I'm gonna splat you!",
"I... Um, uh...Stay fresh?",
"Inkopolis' Great Zapfish has... vanished!",
"It's cray. Like...crayfish cray.",
"It's time to swab the deck and plunder the booty!",
"Judd fell out of a tree trying to grab a coconut!",
"Judd is great at his job, but...man, he sleeps a lot.",
"Keep this up and you'll star in my new single--'SQUIDIOT'!",
"Let's roast marshmallows over the campfire!",
"Me? I keep a splattershot under my bed.",
"News flash! News flash!",
"Next up, some letters from our adoring viewers!",
"NOOOOOOOOOOOOOOOOOOOO!",
"Nothing! Forget I said anything...",
"Remember when Judd fell into the water?",
"Road trip! Any cuties out there wanna go for a ride?",
"So... how exactly does Judd decide who wins a battle?",
"So...if Judd ever called in sick, what would happen?",
"Tell us, folks - what's the state of YOUR bedroom?",
"Thank you!",
"That was a crusty thing to say!",
"That's really nice of you!",
"The birds here are totes adorbs!",
"These spinny things are making me dizzy...",
"Uh...thanks.",
"Uhm...thanks I guess...",
"Um, nope, this is definitely not Callie!",
"Watch me flip a sick ollie, brah!",
"Where does Judd go while the battle's going on?",
"Where's Marie when you need her?",
"Who would WANT to look like Crusty Sean, though?",
"Woah! You made my day!",
"Yayer!",
"Yeah! Let's ROCK!",
"You wanna talk smack? Put up or shut up!",
"You're just jealous that I make most of my day.",
"You're making me feel all warm and fuzzy!",
"You're pretty shellfish you know.",
"You've gotta be squiddin' me! Gramps got captured AGAIN?"
];
var lines = quotes[Math.floor(Math.random() * quotes.length)];
console.log(lines);
return lines;
};
client.on('ready', () => {
    console.log('ready');
    
});
client.on('guildMemberAdd', member => {
	const channel = member.guild.channels.find(ch => ch.name === 'general');
	if (!channel) return;
	channel.send(`Hold on to your tentacles! ${member} has joined the server!`);
	console.log('member joined');
});
client.on('guildMemberRemove', member => {
	const channel = member.guild.channels.find(ch => ch.name === 'general');
	if (!channel) return;
	channel.send(`Stay fresh! ${member} Seeya!`);
	console.log('member left');
});
client.on('message', message => {
    if (message.isMentioned(client.user)) {
       message.channel.send(callie());
       }
});

client.login(process.env.BOT_TOKEN);
