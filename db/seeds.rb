puts "🌱 Seeding spices..."

user1 = User.create(username: Faker::Internet.username(specifier: 5..10), password: Faker::Internet.password(min_length: 5, max_length: 15))
user2 = User.create(username: Faker::Internet.username(specifier: 5..10), password: Faker::Internet.password(min_length: 5, max_length: 15))
user3 = User.create(username: Faker::Internet.username(specifier: 5..10), password: Faker::Internet.password(min_length: 5, max_length: 15))
user4 = User.create(username: Faker::Internet.username(specifier: 5..10), password: Faker::Internet.password(min_length: 5, max_length: 15))
user5 = User.create(username: Faker::Internet.username(specifier: 5..10), password: Faker::Internet.password(min_length: 5, max_length: 15))
user6 = User.create(username: Faker::Internet.username(specifier: 5..10), password: Faker::Internet.password(min_length: 5, max_length: 15))
user7 = User.create(username: Faker::Internet.username(specifier: 5..10), password: Faker::Internet.password(min_length: 5, max_length: 15))
user8 = User.create(username: Faker::Internet.username(specifier: 5..10), password: Faker::Internet.password(min_length: 5, max_length: 15))
user9 = User.create(username: Faker::Internet.username(specifier: 5..10), password: Faker::Internet.password(min_length: 5, max_length: 15))
user10 = User.create(username: Faker::Internet.username(specifier: 5..10), password: Faker::Internet.password(min_length: 5, max_length: 15))
user11 = User.create(username: Faker::Internet.username(specifier: 5..10), password: Faker::Internet.password(min_length: 5, max_length: 15))
user12 = User.create(username: Faker::Internet.username(specifier: 5..10), password: Faker::Internet.password(min_length: 5, max_length: 15))

g1 = Genre.create(name: "Adventure/Thriller")
g2 = Genre.create(name: "Science-Fiction")
g3 = Genre.create(name: "Mystery")
g4 = Genre.create(name: "Historical Non-Fiction")
g5 = Genre.create(name: "Biography")
g6 = Genre.create(name: "Romance")

# Adventure/Thriller
b1 = Book.create(title: "Lord of the Flies", pages: Faker::Number.within(range: 250..550), author: "William Golding", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327869409l/7624._SY75_.jpg", genre_id: g1.id)
b2 = Book.create(title: "The Alchemist", pages: Faker::Number.within(range: 250..550), author: "Paulo Coehlo", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1654371463l/18144590._SY75_.jpg", genre_id: g1.id)
b3 = Book.create(title: "Jurassic Park", pages: Faker::Number.within(range: 250..550), author: "Cheryl Strayed", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1529604411l/40604658._SY75_.jpg", genre_id: g1.id)
b4 = Book.create(title: "Moby Dick", pages: Faker::Number.within(range: 250..550), author: "Herman Melville", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327940656l/153747._SY75_.jpg", genre_id: g1.id)
b5 = Book.create(title: "Hatchet", pages: Faker::Number.within(range: 250..550), author: "Gary Paulsen", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1385297074l/50._SX50_.jpg", genre_id: g1.id)
b6 = Book.create(title: "The Voyage of the Dawn Treader", pages: Faker::Number.within(range: 250..550), author: "C.S. Lewis", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1661032500l/140225._SX50_.jpg", genre_id: g1.id)
b7 = Book.create(title: "Gulliver's Travels", pages: Faker::Number.within(range: 250..550), author: "Jonathan Swift", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1427829692l/7733._SY75_.jpg", genre_id: g1.id)
b8 = Book.create(title: "Peter Pan", pages: Faker::Number.within(range: 250..550), author: "J.M. Barrie", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1337714526l/34268._SX50_.jpg", genre_id: g1.id)

# Science-Fiction
b9 = Book.create(title: "The Lightning Thief", pages: Faker::Number.within(range: 250..550), author: "Rick Riordan", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1400602609l/28187._SY75_.jpg", genre_id: g2.id)
b10 = Book.create(title: "The Hobbit", pages: Faker::Number.within(range: 250..550), author: "J.R.R. Tolkien", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546071216l/5907._SY75_.jpg", genre_id: g2.id)
b11 = Book.create(title: "Mocking Jay", pages: Faker::Number.within(range: 250..550), author: "Suzanne Collins", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1586722918l/7260188._SY75_.jpg", genre_id: g2.id)
b12 = Book.create(title: "The Lion, the Witch and the Wardrobe", pages: Faker::Number.within(range: 250..550), author: "C.S. Lewis", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1353029077i/100915._SY75_.jpg", genre_id: g2.id)
b13 = Book.create(title: "The Oxygen Farmer", pages: Faker::Number.within(range: 250..550), author: "Colin Homes", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1686091013l/122757689._SY475_.jpg", genre_id: g2.id)
b14 = Book.create(title: "Beyond the Fringe", pages: Faker::Number.within(range: 250..550), author: "Miles Cameron", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1697018268l/199389767._SY475_.jpg", genre_id: g2.id)
b15 = Book.create(title: "Ender's Game", pages: Faker::Number.within(range: 250..550), author: "Orson Scott Card", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1408303130l/375802._SY475_.jpg", genre_id: g2.id)
b16 = Book.create(title: "Dune", pages: Faker::Number.within(range: 250..550), author: "Frank Herbert", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1555447414l/44767458.jpg", genre_id: g2.id)

# Mystery
b17 = Book.create(title: "The Curse if Penryth Hall", pages: Faker::Number.within(range: 250..550), author: "Jess Armstrong", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1678750187l/65213227.jpg", genre_id: g3.id)
b18 = Book.create(title: "The Vacation House", pages: Faker::Number.within(range: 250..550), author: "Jane Shemilt", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1680590876l/124944200.jpg", genre_id: g3.id)
b19 = Book.create(title: "Lest She Forget", pages: Faker::Number.within(range: 250..550), author: "Alexis Soloski", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1679758198l/122757697.jpg", genre_id: g3.id)
b20 = Book.create(title: "Lost Hours", pages: Faker::Number.within(range: 250..550), author: "Paige Shelton", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1672016255l/65213197.jpg", genre_id: g3.id)
b21 = Book.create(title: "Missing", pages: Faker::Number.within(range: 250..550), author: "Savannah Brown", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1686001523l/123416690.jpg", genre_id: g3.id)
b22 = Book.create(title: "The Guest List", pages: Faker::Number.within(range: 250..550), author: "Lucy Foley", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1591461181l/52656911._SY475_.jpg", genre_id: g3.id)
b23 = Book.create(title: "A Flicker In The Dark", pages: Faker::Number.within(range: 250..550), author: "Stacy Willingham", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1621347398l/57693172._SY475_.jpg", genre_id: g3.id)
b24 = Book.create(title: "The Silent Patient", pages: Faker::Number.within(range: 250..550), author: "Alex Michaelides", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1668782119l/40097951._SY475_.jpg", genre_id: g3.id)

# Historical Non-Fiction
b25 = Book.create(title: "Flags of Our Father", pages: Faker::Number.within(range: 250..550), author: "James D. Bradley", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1386923564i/10058._SY75_.jpg", genre_id: g4.id)
b26 = Book.create(title: "A bridge Too Far", pages: Faker::Number.within(range: 250..550), author: "Cornelius Ryan", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1326921431i/539904._SX50_.jpg", genre_id: g4.id)
b27 = Book.create(title: "Battle Cry of Our freedom", pages: Faker::Number.within(range: 250..550), author: "James M. McPherson", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388185755i/35100._SY75_.jpg", genre_id: g4.id)
b28 = Book.create(title: "Pompeii", pages: Faker::Number.within(range: 250..550), author: "Robert Harris", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388189565i/880._SY75_.jpg", genre_id: g4.id)
b29 = Book.create(title: "The Decline and Fall of the Roman Empire", pages: Faker::Number.within(range: 250..550), author: "Edward Gibson", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1435759367i/19400._SY75_.jpg", genre_id: g4.id)
b30 = Book.create(title: "The October Horse", pages: Faker::Number.within(range: 250..550), author: "Colleen mcCullough", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388489356i/3421._SY75_.jpg", genre_id: g4.id)
b31 = Book.create(title: "Guns Germs abd Steel", pages: Faker::Number.within(range: 250..550), author: "Jared Diamond", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1453215833i/1842._SY75_.jpg", genre_id: g4.id)
b32 = Book.create(title: "A Brief History of Time", pages: Faker::Number.within(range: 250..550), author: "Stephen Hawking", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1333578746i/3869._SX50_.jpg", genre_id: g4.id)

# Biography
b33 = Book.create(title: "Malcolm X", pages: Faker::Number.within(range: 250..550), author: "Alex Haley", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1434682864l/92057._SY75_.jpg", genre_id: g5.id)
b34 = Book.create(title: "Alexander Hamilton", pages: Faker::Number.within(range: 250..550), author: "Ron Chernow", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1436131915l/16130._SY75_.jpg", genre_id: g5.id)
b35 = Book.create(title: "Into the Wild", pages: Faker::Number.within(range: 250..550), author: "John Krakauer", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1650755924l/60869516._SY75_.jpg", genre_id: g5.id)
b36 = Book.create(title: "Benjamin Franklin: An American Life", pages: Faker::Number.within(range: 250..550), author: "Walter Isaacson", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1630510455l/10883._SX50_.jpg", genre_id: g5.id)
b37 = Book.create(title: "Steve Jobs", pages: Faker::Number.within(range: 250..550), author: "Walter Isaacson", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1511288482l/11084145._SY75_.jpg", genre_id: g5.id)
b38 = Book.create(title: "Washington: A Life", pages: Faker::Number.within(range: 250..550), author: "Ron Chernow", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348969179l/8255917._SY75_.jpg", genre_id: g5.id)
b39 = Book.create(title: "The Wright Brothers", pages: Faker::Number.within(range: 250..550), author: "David McCullough", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1430942575l/22609391._SX50_.jpg", genre_id: g5.id)
b40 = Book.create(title: "Leonardo da Vinci", pages: Faker::Number.within(range: 250..550), author: "Walter Isaacson", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1523543570l/34684622._SY75_.jpg", genre_id: g5.id)

# Romance
b41 = Book.create(title: "Twilight", pages: Faker::Number.within(range: 250..550), author: "Stephanie Meyer", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1700522826i/41865._SY75_.jpg", genre_id: g6.id)
b42 = Book.create(title: "The Notebook", pages: Faker::Number.within(range: 250..550), author: "Nicholas Sparks", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1483183484i/33648131._SY75_.jpg", genre_id: g6.id)
b43 = Book.create(title: "Pride and Predjudice", pages: Faker::Number.within(range: 250..550), author: "Jane Austen", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1320399351i/1885._SY75_.jpg", genre_id: g6.id)
b44 = Book.create(title: "Bared to You", pages: Faker::Number.within(range: 250..550), author: "Sylvia Day", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1433411511i/20448515._SY75_.jpg", genre_id: g6.id)
b45 = Book.create(title: "Gone with the Wind", pages: Faker::Number.within(range: 250..550), author: "Margaret Mitchell", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1551144577i/18405._SY75_.jpg", genre_id: g6.id)
b46 = Book.create(title: "The Fault in Our stars", pages: Faker::Number.within(range: 250..550), author: "John Green", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1660273739i/11870085._SX50_.jpg", genre_id: g6.id)
b47 = Book.create(title: "Hopeless", pages: Faker::Number.within(range: 250..550), author: "Colleen Hoover", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1353489892i/15717943._SY75_.jpg", genre_id: g6.id)
b48 = Book.create(title: "Water for Elephants", pages: Faker::Number.within(range: 250..550), author: "Sara Gruen", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1667708346i/43641._SY75_.jpg", genre_id: g6.id)


review1 = Review.create(content: "This was such a fun read", book_id: b1.id, user_id: user1.id)
review2 = Review.create(content: "One of my favorite books of all time. I will defintely be reading this book again.", book_id: b2.id, user_id: user2.id)
review3 = Review.create(content: "I loved how this story was told. The dialgue was amazig. I would highly recommend this.", book_id: b3.id, user_id: user3.id)
review4 = Review.create(content: "Such a good book!", book_id: b4.id, user_id: user4.id)
review5 = Review.create(content: "I had so much fun reading this. It is my new favorite book.", book_id: b5.id, user_id: user5.id)
review6 = Review.create(content: "I did not particularly like it, but I felt like I had to finish it", book_id: b6.id, user_id: user6.id)
review7 = Review.create(content: "All avid readers should add this book to their list!", book_id: b7.id, user_id: user7.id)
review8 = Review.create(content: "One of the worst book I have ever read.", book_id: b8.id, user_id: user8.id)
review9 = Review.create(content: "This book is by my favorite author. They never dissapoint with their work.", book_id: b9.id, user_id: user9.id)
review10 = Review.create(content: "I was very bored reading this book.", book_id: b10.id, user_id: user10.id)
review11 = Review.create(content: "I was captivated by this book from the very first page. I just wish I did not read it so fast. Now I have to find my next book to read", book_id: b11.id, user_id: user11.id)
review12 = Review.create(content: "Such a great read!", book_id: b12.id, user_id: user12.id)
review13 = Review.create(content: "If you are not easily impressed, I would stay away from this book.", book_id: b13.id, user_id: user1.id)
review14 = Review.create(content: "I can't wait to finsih this book and see how it ends.", book_id: b14.id, user_id: user2.id)
review15 = Review.create(content: "I will be recommending this book to my friends. I know they will like it just as much as I did.", book_id: b15.id, user_id: user3.id)
review16 = Review.create(content: "Do not waste your time reading this book. I did not find it intriguing in any sense of the word.", book_id: b16.id, user_id: user4.id)
review17 = Review.create(content: "Written by my favorite author!", book_id: b17.id, user_id: user5.id)
review18 = Review.create(content: "I truly think that everyone should read this book. It was amazing from the very first page. This book made me fall in love with reading all over again!", book_id: b18.id, user_id: user6.id)
review19 = Review.create(content: "I think this s one of the best books ever written", book_id: b19.id, user_id: user7.id)
review20 = Review.create(content: "This author is just so talented and it shows on every page of the book.", book_id: b20.id, user_id: user8.id)
review21 = Review.create(content: "It is taking me forever to get through this book.", book_id: b21.id, user_id: user9.id)
review22 = Review.create(content: "Absolutely love this book!", book_id: b22.id, user_id: user10.id)
review23 = Review.create(content: "This is my new favorite author!", book_id: b23.id, user_id: user11.id)
review24 = Review.create(content: "This book will become a timeless classic. It had evrything that a good story should have and the author an amazing job telling it.", book_id: b24.id, user_id: user12.id)
review25= Review.create(content: "Not my favorite book, but defintely not my least favorite book either.", book_id: b25.id, user_id: user1.id)
review26 = Review.create(content: "I will defintely be reading more books by this author!", book_id: b26.id, user_id: user2.id)
review27 = Review.create(content: "Tops my list of all time favorite books I have ever read.", book_id: b27.id, user_id: user3.id)
review28 = Review.create(content: "One of the best reads ever and I am not just saying that. I have read many books in my time and this one takes the cake by far!", book_id: b28.id, user_id: user4.id)
review29 = Review.create(content: "I did not enjoy this book at all.", book_id: b29.id, user_id: user5.id)
review30 = Review.create(content: "I really enjoyed how the author portrayed the story. I was comletely captivated the entire time.", book_id: b30.id, user_id: user6.id)
review31 = Review.create(content: "This is one of my favorite authors for a reason. Time and time again they write amazing books and I am looking forward to reading the next one!", book_id: b31.id, user_id: user7.id)
review32 = Review.create(content: "I have to find books more like this. This genre is quickly becoming my favorite.", book_id: b32.id, user_id: user8.id)
review33 = Review.create(content: "A very well written book and 100% worth the read!", book_id: b33.id, user_id: user9.id)
review34 = Review.create(content: "This is the worst book I have ever read. I would not waste my time reading it. ", book_id: b34.id, user_id: user10.id)
review35 = Review.create(content: "I am defintely recommending this book to my book club next week! I would not mind at all reading it again.", book_id: b35.id, user_id: user11.id)
review36 = Review.create(content: "Such and intriguing read.", book_id: b36.id, user_id: user12.id)
review37 = Review.create(content: "My knew favorite author for sure!", book_id: b37.id, user_id: user1.id)
review38 = Review.create(content: "It is no wonder this book is so widely loved.", book_id: b38.id, user_id: user2.id)
review39 = Review.create(content: "I will admit that I am not usually a big book nerd, but I have to say that this book might change that!", book_id: b39.id, user_id: user3.id)
review40 = Review.create(content: "I am so glad that I finally sat down and gave this book a chance. I can't wait to read more books written by this author", book_id: b40.id, user_id: user4.id)
review41 = Review.create(content: "This book definitely makes my top 10 list", book_id: b41.id, user_id: user5.id)
review42 = Review.create(content: "I just finished reading this book and I think I am gonna start from page 1 tommorrow and re-read the whole book again lol", book_id: b42.id, user_id: user6.id)
review43 = Review.create(content: "Everyone else seems to really like this book, but I can't help but find it very bland.", book_id: b43.id, user_id: user7.id)
review44 = Review.create(content: "This book should be the #1 best seller. I have never enjoyed a book as much as I enjoyed this one.", book_id: b44.id, user_id: user8.id)
review45 = Review.create(content: "Usually I am not too picky about the books that I read, but this books is not one that I found to be good.", book_id: b45.id, user_id: user9.id)
review46 = Review.create(content: "One of the worst books I have ever read. It was all over the place and overwhelming at points.", book_id: b46.id, user_id: user10.id)
review47 = Review.create(content: "I will be reading this book again. I don't think it will ever get old.", book_id: b47.id, user_id: user11.id)
review48 = Review.create(content: "One of the most fascinating and exciting books out there.", book_id: b48.id, user_id: user12.id)
review49 = Review.create(content: "I haven't finished this book yet, but I am completely hooked!", book_id: b1.id, user_id: user1.id)
review50 = Review.create(content: "Not a fan of this author genrally speaking, but I will say that I was very entertained while reading this.", book_id: b9.id, user_id: user2.id)
review51 = Review.create(content: "Do not read this book!", book_id: b19.id, user_id: user3.id)
review52 = Review.create(content: "I loved it! Nothing but good things to say about it", book_id: b28.id, user_id: user4.id)
review53 = Review.create(content: "This will go down as one of my favorite books ever!", book_id: b37.id, user_id: user5.id)
review54 = Review.create(content: "This book and author should win an award!", book_id: b48.id, user_id: user6.id)
review55 = Review.create(content: "I read the whole book in less than a week. That should tell you how good it was.", book_id: b4.id, user_id: user7.id)
review56 = Review.create(content: "I thought this was a good story, but I don't think I would recommned it to a friend.", book_id: b12.id, user_id: user8.id)
review57 = Review.create(content: "I need to read more books like this. I never thought I would like this genre, but it turns out I was totally wrong. I am glad I gave it a chance.", book_id: b23.id, user_id: user9.id)
review58 = Review.create(content: "A great book all around!", book_id: b33.id, user_id: user10.id)
review59 = Review.create(content: "How have I not read this book sooner!", book_id: b43.id, user_id: user11.id)
review60 = Review.create(content: "I am really glad my friend recommended thia book to me!", book_id: b8.id, user_id: user12.id)
review61 = Review.create(content: "My favorite book! I have read it too many times too count", book_id: b14.id, user_id: user1.id)
review62 = Review.create(content: "Not a dull moment or page in this entire book. So happy that I decided to read it!", book_id: b29.id, user_id: user2.id)














puts "✅ Done seeding!"