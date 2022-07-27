const presenters = [
  {
    name: 'Ali Kennedy',
    title: 'President of the Digital Transform Club',
    description:
      'He started his business journey in early childhood and hopped on the hype train of the rapidly growing Internet technology in ’90s.',
    img: './Images/speaker1.jpg',
  },
  {
    name: 'John Martin',
    title: 'CEO of DigitalMania',
    description:
      'Besides his own businesses, he has consulted and growth-hacked such companies as Amazon, General Motors and Hewlett Packard.',
    img: './Images/speaker3.jpg',
  },
  {
    name: 'Anna Patrick',
    title: 'CTO of Creative News',
    description:
      'She shares the best strategies and techniques for boosting branding, selling on social media, brand development and much more.',
    img: './Images/speaker2.jpg',
  },
  {
    name: 'Landa Okyle',
    title: 'President of Young Digital marketers',
    description:
      'Besides numerous books, she is also known for his podcasts and audio shows that have already exceeded 100 million downloads.',
    img: './Images/speaker5.jpg',
  },
  {
    name: 'Eliah Markley',
    title: 'CEO of IT tips and tricks',
    description:
      'He consulted companies like PepsiCo, Walmart, Microsoft, and Adobe. Eliah’s favorite topic is the disruption in marketing.',
    img: './Images/speaker4.jpg',
  },
  {
    name: 'Malik Blant',
    title: 'Executive Director of 99days',
    description:
      'His main specialization is word-of-mouth and viral marketing that makes your customers bring more customers.',
    img: './Images/speaker6.jpg',
  },
];

presenters.forEach((element) => {
  const presentering = document.querySelector('.presenters');
  const presenter = document.createElement('div');
  presentering.appendChild(presenter);
  presenter.classList.add('speakers');

  presenter.innerHTML = ` 
<div class="speaker">
<img src="./Images/chess-bg.png" class="bg-chess" alt="chess" />
<img src=${element.img} class="speakers-img" alt="speaker image">
</div>
<div>
<h3 class="speaker-name">${element.name}</h3>
<h5 class="speaker-title">${element.title}</h5>
<hr class="hr">
<p class="speaker-description"> ${element.description}</p>
</div>
</div>`;
});
