




const data = [
    {
        cardId: 1,
        cardImage: './bir.webp',
        cardName: 'Hoops',
        cardPrice: 60,
        cardStars: 5
    },
    {
        cardId: 2,
        cardImage: './ik.webp',
        cardName: 'MEDIUM FLAT HOOPS',
        cardPrice: 80,
        cardStars: 4,
    },
    {
        cardId: 3,
        cardImage: './ik.webp',
        cardName: 'MEDIUM FLAT HOOPS',
        cardPrice: 80,
        cardStars: 4,
    },
    {
        cardId: 4,
        cardImage: './uchiki.webp',
        cardName: 'FLAT HOOPS',
        cardPrice: 90,
        cardStars: 5
    }
]

let container = '';
for (let i = 0; i < data.length; i++) {
    container += ` <div class="card1" style = background-image:url(${data[i].cardImage});>
    <div class="stars">
   ${Array(data[i].cardStars).fill().map((item, i) => `<i class="fa-sharp fa-solid fa-star"></i>`).join('')}
    </div>
    <h1>${data[i].cardName}</h1>
    <h3>${data[i].cardPrice}$</h3>
    <div class="icons">
    <i class="fa-sharp fa-solid fa-bag-shopping"></i>
    <i class="fa-solid fa-heart"></i>
    <i class="fa-solid fa-magnifying-glass"></i>
    </div>
  </div > `
}
document.querySelector('.cards').innerHTML = container;
