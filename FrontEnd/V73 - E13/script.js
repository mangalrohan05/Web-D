function createCard(title, cName, views, monthsOld, duration, thumbnailUrl) {
    // finish
    let cont = document.getElementById("container");

    const newCard = document.createElement("div");
    newCard.className = "card";
// new card
    cont.appendChild(newCard);

    // left
    const left = document.createElement("div");
    left.className = "left";

    const thumbnail = document.createElement("img");
    thumbnail.src = thumbnailUrl;

    const dura = document.createElement("div");
    dura.className = "duration";
    dura.innerText = duration;

    left.appendChild(thumbnail);
    left.appendChild(dura);


    // right
    const right = document.createElement("div");
    right.className = "right";

    // title
    const titleElement = document.createElement("div");
    titleElement.className = "title";
    titleElement.innerText = title;


    // bottom

    const bottom = document.createElement("div");
    bottom.className = "bottom";

    // channel name
    const cNameElement = document.createElement("div");
    cNameElement.className = "cName";
    cNameElement.innerText = cName;

    // views
    const viewsElement = document.createElement("div");
    viewsElement.className = "views";
    if (views >= 1000000) {
        viewsElement.innerText = (views / 1000000).toFixed(2) + "M views";
    } else if (views >= 1000) {
        viewsElement.innerText = (views / 1000).toFixed(2) + "K views";
    } else {
        viewsElement.innerText = views + " views";
    }

    // months old
    const monthsOldElement = document.createElement("div");
    monthsOldElement.className = "time";
    monthsOldElement.innerText = monthsOld + " months ago";

    bottom.appendChild(cNameElement);
    bottom.appendChild(viewsElement);
    bottom.appendChild(monthsOldElement);

    right.appendChild(titleElement);
    right.appendChild(bottom);


    // appending to card
    newCard.appendChild(left);
    newCard.appendChild(right);
}

function AddCard(){
    let title = prompt("Enter the title of the video:");
    let cName = prompt("Enter the channel name:");
    let views = parseInt(prompt("Enter the number of views:"));
    let monthsOld = parseInt(prompt("Enter the number of months old:"));
    let duration = prompt("Enter the duration of the video:");
    let thumbnailUrl = prompt("Enter the thumbnail URL:");

    createCard(title, cName, views, monthsOld, duration, thumbnailUrl);
}

// title, cName, views, monthsOld, duration, thumbnailUrl

// Add more cards