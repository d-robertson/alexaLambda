'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Derek Facts';

/**
 * Array containing space facts.
 */
// var FACTS = [
//     "A year on Mercury is just 88 days long.",
//     "Despite being farther from the Sun, Venus experiences higher temperatures than Mercury.",
//     "Venus rotates counter-clockwise, possibly because of a collision in the past with an asteroid.",
//     "On Mars, the Sun appears about half the size as it does on Earth.",
//     "Earth is the only planet not named after a god.",
//     "Jupiter has the shortest day of all the planets.",
//     "The Milky Way galaxy will collide with the Andromeda Galaxy in about 5 billion years.",
//     "The Sun contains 99.86% of the mass in the Solar System.",
//     "The Sun is an almost perfect sphere.",
//     "A total solar eclipse can happen once every 1 to 2 years. This makes them a rare event.",
//     "Saturn radiates two and a half times more energy into space than it receives from the sun.",
//     "The temperature inside the Sun can reach 15 million degrees Celsius.",
//     "The Moon is moving approximately 3.8 cm away from our planet every year."
// ];

var FACTS = [
    "Derek was born on January fourth 1989.",
    "Derek's favorite beer is Top Cutter IPA.",
    "Derek's favorite color is green, because he is a smart guy.",
    "Derek likes to play triva games.",
    "Derek has been writing code since 2015.",
    "Derek likes to dance to electric swing music.",
    "Derek likes to build furniture from recycled pallets.",
    "Derek likes to build bicycles for fun times.",
    "Derek enjoys eating sandwhichs.",
    "Derek used to build homes for a living.",
    "Derek enjoys watching Wes Anderson movies.",
    "Derek loves to laugh, even sometimes when its inapropriate."
]

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's something about Derek that maybe you didn't know: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a fact about Derek, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};