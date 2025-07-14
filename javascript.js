function generate(){

    var quotes={

        "-Ms Dhoni":"Worry About The Controable Not the Result",
        "-Sachin Tendulkar":"I have never seen a watch while Practicing Cricket Because i love to do .",
        "-Rohit Sharma":"Mind is Everythings",
    }



    var authors=Object.keys(quotes);
    
    var author=authors[Math.floor(Math.random()*authors.length)];
var quote=quotes[author];
document.getElementById("quote").innerHTML=quote;
document.getElementById("author").innerHTML=author;
    
console.log(quotes.author)



}