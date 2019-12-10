var quotes = [ '"Be brave and take risks... You do not have to have it all figured out to move forward." - Roy Bennett',
'"Life will just not wait for us to live it We are in it now and Now is the time to Live" - Michelle Geaney',
'"A funny thing about life, once you begin to take note of the things you are grateful for, you begin to lose sight of the things that you lack." - Germany Kent',
'"Life does not come with any guarantees. You have to risk it to get the biscuit." - Paulo Coelho, The Alchemist',
'"It is one thing to lose people you love. It is another to lose yourself. That is a greater loss." - Donna Goddard, Waldmeer'
]
function genQuote(){
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('displayquote').innerHTML = quotes[randomNumber];
}