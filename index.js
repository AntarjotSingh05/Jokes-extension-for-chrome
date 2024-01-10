fetch("https://icanhazdadjoke.com/slack")
    .then(response => response.json())
    .then(jokeData => {
        const jokeText = jokeData.attachments[0].text;
        const myJokes = document.getElementById("myJokes");

        myJokes.innerHTML = jokeText;
    })
    .catch(error => {
        console.error('Error fetching joke:', error);
    });
