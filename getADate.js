let readlineSync = require('readline-sync');
let genders = ["Guy", "Girl"]
let decisions = ["Approach", "Don't approach"]
let moves = ["Be yourself", "Use a funny pickup line", "Flex", "Dragon Punch"]
let flexResult = ["She's unimpressed. Uninterested. Unbothered, cuz every girl is for some reason. Better luck next time brother.", "She fell for it. You're in there like swimwear. You gotADate!"]
let beYourselfResult = ["You decided to be yourself, which is probably the worst thing you could have done. G A M E O V E R", "The stars have literally aligned because she totally likes you for you! Congratulations you gotADate! Against all odds! Being yourself isn't even a strategy, let alone a winning one. But if you succeed in this way it means more."]
let funnyPickupLines = ["Girl is your name Google? Cuz you got everything I'm searching for!", "Girl are you a Nissan? Cuz I want you Altima self!",]
let googlePickupResults = ["Great line honestly. It's not surprising she's heard it before. Too bad.", "She hasn't heard it before so of course she thinks you're funny. Congratulations you gotADate! Try not to bore her to death."]
console.log("getADate")
console.log("That's the name of the game, and your objective basically")
index = readlineSync.keyInSelect(genders, 'Are you a guy or a girl?');
if(index === 1) {
    console.log("Congratulations you gotADate! Why wouldn't that happen right?")
} else if(index === -1) {
    process.exit()
} else {
    index = readlineSync.keyInSelect(decisions, "You spot a hot girl wherever you're picturing this in your head right now. What do you do?!");
    if (index === -1) {
        process.exit()
    } else if(index === 1) {
        console.log("You don't approach, which is essentially the same as quitting because you can't getADate that way!")
    } else {
        index = readlineSync.keyInSelect(moves, "There's only ever one choice in these scenarios and you made it! How do you approach?")
        if(index === -1) {
            process.exit()
        } else if(index === 3) {
            console.log("Not sure why you picked this. You knew it wouldn't work")
        } else if(index === 2) {
            console.log(flexResult[Math.floor(Math.random() * flexResult.length)])
        } else if(index === 0) {
            console.log(beYourselfResult[Math.floor(Math.random() * beYourselfResult.length)])
        } else if(index === 1) {
            index = readlineSync.keyInSelect(funnyPickupLines, "It's a gamble. Which one do you hit her with?");
            if (index === -1) {
                process.exit()
            } else if(index === 1) {
                console.log("Did you just assume her gender? Just kidding but that pickup line sucked dude.")
            } else if(index === 0) {
                console.log(googlePickupResults[Math.floor(Math.random() * googlePickupResults.length)])
            }
        }
    }
}