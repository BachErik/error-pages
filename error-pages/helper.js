const FOUR_ZERO_FOUR_QUOTES = [
    "This page is as rare as bug-free code.",
    "Oops, there's nothing here – try restarting!",
    "Looks like we've activated coffee break mode.",
    "This page went on vacation – try again later!",
    "The server just had a laughing fit."
];
const FIVE_ZERO_ZERO_QUOTES = [
    "Oops! Even servers need a break.",
    "500: The server is on a coffee break.",
    "Internal error – our server is having a bad day.",
    "Error 500: Sometimes, even code takes a vacation.",
    "The server is burning the midnight oil – please try again later."
];
const FIVE_ZERO_ONE_QUOTES = [
    "501: Not yet implemented, but coming soon!",
    "This page is under construction – more to come shortly.",
    "Feature in development – please check back later.",
    "501: The code is being written as we speak.",
    "Not implemented yet – maybe in a future release."
];
const FIVE_ZERO_THREE_QUOTES = [
    "503: Our server is on a lunch break.",
    "Service unavailable – please try again later.",
    "503: Even servers need a breather.",
    "Our service is currently in pause mode.",
    "Please try again in a few minutes."
];
const FIVE_ZERO_FIVE_TO_FIVE_NINE_NINE_QUOTES = [
    "An error in the error department – sorry for the inconvenience.",
    "Error 505-599: Something went awry on our end.",
    "Sometimes the internet has its off days – please try again later.",
    "Unexpected error: Our developers have been notified.",
    "Even code has its off moments."
];

function getQuote(error) {
    var quotes = [];
    switch(error) {
        case 404:
            quotes = FOUR_ZERO_FOUR_QUOTES;
        break;
        case 500:
            quotes = FIVE_ZERO_ZERO_QUOTES;
            break;
        case 501:
            quotes = FIVE_ZERO_ONE_QUOTES;
            break;
        case 503:
            quotes = FIVE_ZERO_THREE_QUOTES;
            break;
        case (error > 504 && error < 600):
            quotes = FIVE_ZERO_FIVE_TO_FIVE_NINE_NINE_QUOTES;
            break;
        default:
            break;
    }
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function redirectHomepage() {
    window.location.href = `${window.document.location.protocol}//${window.document.location.hostname}`;
}