let animals = [
  ["Edgar the Cat",
    "https://learn.grasshopper.app/static/images/catOnTower.jpg",
    "Enjoys adventures",
    "Edgar"],
  ["Summer the Dog",
    "https://learn.grasshopper.app/static/images/dogTrick.gif",
    "Loves chasing tail",
    "Summer"],
  ["Llarry the Llama",
    "https://learn.grasshopper.app/static/images/llama.jpg",
    "Likes snacks and cuddles",
    "Llary"]
];

let title = document.createElement('h1');
title.textContent = 'Adoptable Animals';
document.body.appendChild(title);

for (let animal of animals) {
    
    let animalName = document.createElement('h2');
    animalName.textContent = animal[0];
    document.body.appendChild(animalName);
    
    let picture = document.createElement('img');
    picture.src = animal[1];
    document.body.appendChild(picture);
    
    let description = document.createElement('p');
    description.textContent = animal[2];
    document.body.appendChild(description);
    
    let button = document.createElement('button');
    button.textContent = 'Like';
    document.body.appendChild(button);
    
    button.addEventListener ('click',() => {
        if (button.textContent === 'Like') {
            button.textContent = 'Liked!';
        } else {
            button.textContent = 'Like';
        }
});
document.body.appendChild(button);
}
