const mongoose = require("mongoose");

const db = require("./models");
const { DB_URI, MONGOOSE_OPTIONS } = require("./config");

mongoose.connect(DB_URI, MONGOOSE_OPTIONS);

const books = [
  {
    authors: ["Suzanne Collins"],
    description:
      "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
    image:
      "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link:
      "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
    title: "The Hunger Games",
    subTitle: "War between the districts",
  },
  {
    authors: ["J.K. Rowling"],
    description:
      "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!",
    image:
      "https://books.google.co.uk/books/content?id=39iYWTb6n6cC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link:
      "https://books.google.co.uk/books?id=39iYWTb6n6cC&dq=harry+potter&source=gbs_book_similarbooks",
    title: "Harry Potter and the Philosopher's Stone",
    subTitle: "The Wizarding World",
  },
  {
    authors: ["J.K. Rowling, J.K. Rowling 2"],
    description:
      "Harry Potter's summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys by his friend Ron Weasley in a magical flying car! Back at Hogwarts School of Witchcraft and Wizardry for his second year, Harry hears strange whispers echo through empty corridors - and then the attacks start. Students are found as though turned to stone... Dobby's sinister predictions seem to be coming true.",
    image:
      "https://books.google.co.uk/books/content?id=1o7D0m_osFEC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link:
      "https://books.google.co.uk/books?id=1o7D0m_osFEC&dq=harry+potter&source=gbs_book_similarbooks",
    title: "Harry Potter and the Chamber of Secrets",
  },
  {
    authors: ["J.K. Rowling, J.K. Rowling 2"],
    description:
      "When the Knight Bus crashes through the darkness and screeches to a halt in front of him, it's the start of another far from ordinary year at Hogwarts for Harry Potter. Sirius Black, escaped mass-murderer and follower of Lord Voldemort, is on the run - and they say he is coming after Harry. In his first ever Divination class, Professor Trelawney sees an omen of death in Harry's tea leaves... But perhaps most terrifying of all are the Dementors patrolling the school grounds, with their soul-sucking kiss...",
    image:
      "https://books.google.co.uk/books/content?id=wHlDzHnt6x0C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link:
      "https://books.google.co.uk/books?id=wHlDzHnt6x0C&dq=harry+potter&source=gbs_book_similarbooks",
    title: "Harry Potter and the Prisoner of Azkaban",
  },
  {
    authors: ["J.K. Rowling"],
    description:
      "The Triwizard Tournament is to be held at Hogwarts. Only wizards who are over seventeen are allowed to enter - but that doesn't stop Harry dreaming that he will win the competition. Then at Hallowe'en, when the Goblet of Fire makes its selection, Harry is amazed to find his name is one of those that the magical cup picks out. He will face death-defying tasks, dragons and Dark wizards, but with the help of his best friends, Ron and Hermione, he might just make it through - alive!",
    image:
      "https://books.google.co.uk/books/content?id=KKFTfEQ8bRAC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link:
      "https://books.google.co.uk/books?id=KKFTfEQ8bRAC&dq=harry+potter&source=gbs_book_similarbooks",
    title: "Harry Potter and the Prisoner of Azkaban",
  },
];

db.Book.deleteMany({})
  .then(() => db.Book.collection.insertMany(books))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
