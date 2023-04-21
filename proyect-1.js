//make of variable bottun and text area and person of the quote

const btn = document.querySelector("#new-quote");

const quote = document.querySelector(".quote");

const person = document.querySelector(".person");


// make the array of quote 


const quotes = [

    {
        quote: "Patience is a virtue, and I'm learning patience. It's a tough lesson .",
        person: 'Elon Musk'
    },
    {
        quote: "It's fine to celebrate success but it is more important to heed the lessons of failure.",
        person: 'Bill Gate'
    },
    {
        quote: "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.",
        person: 'Linus Torvalds'
    },
    {
        quote: "If the web can be evolved to include the missing APIs and have better performance, [developers] won't need to go beyond the web.",
        person: 'Brendan eich'
    },
    {
        quote: "One of the toughest things about life is making choices. I had a hard time saying 'no' to a bunch of other excellent possibilities.",
        person: 'James Gosling'
    },
    {
        quote: "I love working with smart people and being challenged. I also like working on stuff that's relevant. That's my adrenaline shot.",
        person: 'Anders Hejlsberg'
    },
    {
        quote: "Great things in business are never done by one person. They're done by a team of people.",
        person: 'Steve Jobs'
    },
    {
        quote: "If you're changing the world, you're working on important things. You're excited to get up in the morning.",
        person: 'Larry Page'
    },

    {
        quote: "I have this hope that there is a better way. Higher-level tools that actually let you see the structure of the software more clearly will be of tremendous value",
        person: 'Guido van Rossum'
    },

    {
        quote: "The kind of programming that C provides will probably remain similar absolutely or slowly decline in usage, but relatively, JavaScript or its variants, or XML, will continue to become more central.",
        person: 'Dennis Ritchie'
    }]


    // make de add event to the botton 

    btn.addEventListener('click', function() {

        //add the variable  that calculate rando array

        const random = Math.floor(Math.random() * quotes.length); 

        //show the quote and person

        quote.innerText = quotes[random].quote;
        person.innerText = quotes[random].person;
        
    
    })