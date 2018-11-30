const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('error', error => { console.log(error); });

client.on('message', message => {
    if (message.content.startsWith("/region")) {
        cmdRegion(message);
    }

    if (message.content.startsWith("/platform")) {
        cmdPlatform(message);
    }
});

function cmdRegion(message) {
    let entered_region = message.content.split(" ")[1].toLowerCase();

    switch (entered_region) {
        case 'americas':
        case 'na':
        case 'us': 
        case 'america': {
            entered_region = 'Americas';
            break;
        }
        case 'europe':
        case 'eu': {
            entered_region = 'Europe';
            break;
        }
        case 'oce':
            entered_region = 'OCE';
            break;
        case 'sea':
            entered_region = 'SEA';
            break;
        case 'asia':
            entered_region = 'Asia';
            break;
        default:
            entered_region = '';
    }
    let role = message.guild.roles.find(x => x.name === entered_region);

    if (role == null) {
        message.channel.send("Region role not found. Available region roles are OCE, SEA, Americas, Europe, and Asia.");
        console.log(`Region role not found - ${message.author.tag}`);
        return;
    }
    if (message.member.roles.has(role.id)) {
        message.channel.send("You already have this role.");
        console.log(`You already have this role - ${message.author.tag}`);
        return;
    }

    if (role) {
        return message.member
            .addRole(role)
            .then(() => {
                message.channel.send(`Gave you role ${role.name}`);
                console.log(`Gave role ${role.name} to ${message.author.tag}`);
            })
            .catch((error) => {
                message.channel.send("Missing permissions!");
                console.log(`${error.message} - ${message.guild.name}`);
            });
    }
}

function cmdPlatform(message) {
    let entered_platform = message.content.split(" ")[1].toLowerCase();

    switch (entered_platform) {
        case 'pc':
            entered_platform = 'PC';
            break;
        case 'ps4':
        case 'ps':
        case 'playstation': {
            entered_platform = 'PS4';
            break;
        }
        case 'xbox':
        case 'xb1': {
            entered_platform = 'XB1';
            break;
        }
        default:
            entered_platform = '';
    }
    let role = message.guild.roles.find(x => x.name === entered_platform);

    if (role == null) {
        message.channel.send("Platform role not found. Available platform roles are PC, PS4, and XB1.");
        console.log(`Platform role not found - ${message.author.tag}`);
        return;
    }
    if (message.member.roles.has(role.id)) {
        message.channel.send("You already have this role.");
        console.log(`You already have this role - ${message.author.tag}`);
        return;
    }

    if (role) {
        return message.member
            .addRole(role)
            .then(() => {
                message.channel.send(`Gave you role ${role.name}`);
                console.log(`Gave role ${role.name} to ${message.author.tag}`);
            })
            .catch((error) => {
                message.channel.send("Missing permissions!");
                console.log(`${error.message} - ${message.guild.name}`);
            });
    }
}

client.login('NDk5NDcyMzU1NTEzNTk3OTYy.Dp8yKA.aVmdAkM90dpeEsTtkA51krCakrQ');