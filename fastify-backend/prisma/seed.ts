import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Seed data written by Kende

async function main() {
    await prisma.book.createMany({
        data: [
            {
                title: 'The Old Man and the Sea',
                author: 'Ernest Hemingway',
                description: 'Santiago, an old and once great fisherman, has gone 84 days without catching a fish. His only friend, a loyal boy, takes care of him. To break his unlucky streak, Santiago takes his boat further than he ever has before and spends three days battling a giant marlin.',
                published: new Date('1952-01-01'),
                cover: 'https://cdn.kobo.com/book-images/99626919-f117-45d9-84f8-f19c222e2a04/1200/1200/False/the-old-man-and-the-sea-70.jpg'
            },
            {
                title: 'Don Quixote',
                author: 'Miguel de Cervantes',
                description: 'Don Quixote has become so entranced by reading romances of chivalry that he determines to become a knight errant and pursue bold adventures, accompanied by his squire, the cunning Sancho Panza. As they roam the world together, the aging Quixote`s fancy leads them wildly astray, tilting at windmills, fighting with friars, and distorting the rural Spanish landscape into a fantasy of impenetrable fortresses and wicked sorcerers.',
                published: new Date('1605-01-01'),
                cover: 'https://cdn.kobo.com/book-images/392971e9-4f19-4827-a041-3abe4d0e1f54/1200/1200/False/don-quixote-111.jpg'
            },
            {
                title: 'I Am a Cat',
                author: 'Soseki Natsume',
                description: 'Written from 1904 through 1906, Soseki Natsume`s comic masterpiece, I Am a Cat, satirizes the foolishness of upper-middle-class Japanese society during the Meiji era. With acerbic wit and sardonic perspective, it follows the whimsical adventures of a world-weary stray kitten who comments on the follies and foibles of the people around him.',
                published: new Date('1906-01-01'),
                cover: 'https://cdn.penguin.co.uk/dam-assets/books/9781784879792/9781784879792-jacket-large.jpg'
            },
            {
                title: 'One Minute Stories',
                author: 'István Örkény',
                description: 'English One-minute short stories, according to their author`s bold and not-so-serious take, are works that surpass entire novels and even novel cycles, even though they are strikingly short. He says they are not short because they have little to say, but because they want to say a lot with few words.',
                published: new Date('1968-01-01'),
                cover: 'https://moly.hu/system/covers/big/covers_177420.jpg?1395415163'
            },
            {
                title: 'The Journey to the West',
                author: 'Wu Cheng`en',
                description: 'Anthony C. Yu`s translation of The Journey to the West,initially published in 1983, introduced English-speaking audiences to the classic Chinese novel in its entirety for the first time. Written in the sixteenth century, The Journey to the West tells the story of the fourteen-year pilgrimage of the monk Xuanzang, one of China`s most famous religious heroes, and his three supernatural disciples, in search of Buddhist scriptures. Throughout his journey, Xuanzang fights demons who wish to eat him, communes with spirits, and traverses a land riddled with a multitude of obstacles, both real and fantastical. An adventure rich with danger and excitement, this seminal work of the Chinese literary canonis by turns allegory, satire, and fantasy.',
                published: new Date('1592-01-01'),
                cover: 'https://m.media-amazon.com/images/I/71+JBJUIiUL._UF1000,1000_QL80_.jpg'
            },
            {
                title: 'And Then There Were None',
                author: 'Agatha Christie',
                description: 'Ten people, each with something to hide and something to fear, are invited to an isolated mansion on Indian Island by a host who, surprisingly, fails to appear. On the island they are cut off from everything but each other and the inescapable shadows of their own past lives. One by one, the guests share the darkest secrets of their wicked pasts. And one by one, they die…',
                published: new Date('1939-01-01'),
                cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1638425885i/16299.jpg'
            },
            {
                title: 'The Metamorphosis',
                author: 'Franz Kafka',
                description: 'One morning, after a worried dream, Gregorio Samsa woke up transformed into a monstrous insect. It had many legs that were moving without he could control them and everything was indicating that it was not a question of a dream: the clock was indicating the six and average and the train was going out at five o`clock.',
                published: new Date('1915-01-01'),
                cover: 'https://m.media-amazon.com/images/I/81QOkf8RSIL._AC_UF1000,1000_QL80_.jpg'
            },
            {
                title: 'Ábel Alone',
                author: 'Áron Tamási',
                description: 'One of the most colourful personalities of the Hungarian literary scene between the two world wars, Aron Tamási (b. 1897) remains one of the outstanding contemporary writers. In his novels and short stories he portrays the people of his native Transylvania, the struggles of the poor against their masters and against nature, the native genius and strangely shrewd and droll thinking of the Székelys, the Hungarians of Transylvania. Abel Alone is the first part of his best known work, the Abel trilogy, and at the same time one of the most successful novels in modern Hungarian literature. It takes the reader into that strange and unique Székely-Hungarian world whose entry on to the stage of art was heralded by the music of Béla Bartók and Zoltán Kodály.',
                published: new Date('1934-01-01'),
                cover: 'https://moly.hu/system/covers/big/covers_198553.jpg?1395429851'
            },
            {
                title: 'Forgotten Realms the Legend of Drizzt Book 1: Homeland',
                author: 'R. A. Salvatore',
                description: 'Travel back to strange and exotic Menzoberranzan, the vast city of the drow and homeland to Icewind Dale hero Drizzt Do`Urden. The young prince of a royal house, Drizzt grows to maturity in the vile world of his dark kin. Possessing honor beyond the scope of his unprincipled society, young Drizzt faces an inevitable dilemma. Can he live in a world that rejects integrity?',
                published: new Date('1990-01-01'),
                cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1736095303i/50027.jpg'
            },
            {
                title: 'The Lord Of The Rings',
                author: 'J.R.R. Tolkien',
                description: 'In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell by chance into the hands of the hobbit Bilbo Baggins. From Sauron`s fastness in the Dark Tower of Mordor, his power spread far and wide. Sauron gathered all the Great Rings, but always he searched for the One Ring that would complete his dominion. When Bilbo reached his eleventy-first birthday he disappeared, bequeathing to his young cousin Frodo the Ruling Ring and a perilous quest: to journey across Middle-earth, deep into the shadow of the Dark Lord, and destroy the Ring by casting it into the Cracks of Doom. The Lord of the Rings tells of the great quest undertaken by Frodo and the Fellowship of the Ring: Gandalf the Wizard; the hobbits Merry, Pippin, and Sam; Gimli the Dwarf; Legolas the Elf; Boromir of Gondor; and a tall, mysterious stranger called Strider.',
                published: new Date('1954-01-01'),
                cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566425108l/33.jpg'
            },
            {
                title: 'The Little Prince',
                author: 'Antoine De Saint-Exupery',
                description: 'This parable tells the story of an air pilot who meets a Little Prince when he has to make a forced landing in the Sahara Desert. The Little Prince tells him wise and enchanted stories.',
                published: new Date('1943-01-01'),
                cover: 'https://prodimage.images-bn.com/pimages/9798765532645_p0_v1_s600x595.jpg'
            },
            {
                title: 'Rumini',
                author: 'Judit Berg',
                description: 'In Rumini`s world, nothing is quite as it seems at first. There are hidden dangers around every corner and valiant deeds to be done. Join Rumini as he travels from the narrow alleys of Mouseville through the treacherous Dragon Straits and down the twisting streets of a famous bazaar. His story is your gateway into the world of a little mouse with the heart of a lion. Welcome, we have been expecting you! LET`S SET SAIL! ADVENTURE AHOY!',
                published: new Date('2007-01-01'),
                cover: 'https://moly.hu/system/covers/big/covers_11997.jpg?1395346940'
            },
            {
                title: 'Bible',
                author: 'King James',
                description: 'The King James Version is the world`s most widely known Bible translation, using early seventeenth-century English. Its powerful, majestic style has made it a literary classic, with many of its phrases and expressions embedded in our language. Earlier generations were "brought up" with this translation and learnt many of its verses by heart.',
                published: new Date('1611-01-01'),
                cover: 'https://m.media-amazon.com/images/I/814x8l94dWL._UF1000,1000_QL80_.jpg'
            },
            {
                title: 'The Hitchhiker`s Guide to the Galaxy',
                author: 'Douglas Adams',
                description: 'Seconds before the Earth is demolished to make way for a new hyperspace bypass, Arthur Dent is saved by his friend Ford Prefect, a researcher for the titular guidebook. They hitch a ride on a spaceship and begin a wild journey through space.',
                published: new Date('1979-01-01'),
                cover: 'https://s01.static.libri.hu/cover/d1/e/2211370_4.jpg'
            },
            {
                title: 'No Longer Human',
                author: 'Osamu Dazai',
                description: 'No Longer Human is a poignant novel by Japanese author Osamu Dazai, presented as a first-person narrative that chronicles the life of Yozo, a man grappling with profound feelings of alienation and despair.',
                published: new Date('1948-01-01'),
                cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1481890798i/11222940.jpg'
            },
        ],
    });

    console.log('Database has been seeded!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });