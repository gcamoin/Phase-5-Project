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

g1 = Genre.create(name: "Adventure/Thriller", image:"https://qph.cf2.quoracdn.net/main-qimg-50d3c8034e0776fe81cfa4433a0ff5af-lq")
g2 = Genre.create(name: "Science-Fiction", image:"https://cdn.britannica.com/09/92009-050-122EC720/Enterprise-from-Star-Trek-III-The-Search.jpg")
g3 = Genre.create(name: "Mystery", image:"https://2.bp.blogspot.com/-ieLdCVVLhX0/WvL3q3rUYZI/AAAAAAAABUw/CjqH47DvPOw-OC3vbOm8kZ3C7nPjrIRTQCLcBGAs/s1600/mystery.jpg")
g4 = Genre.create(name: "Historical Non-Fiction", image:"https://celadonbooks.com/wp-content/uploads/2020/03/Historical-Fiction-scaled.jpg")
g5 = Genre.create(name: "Biography", image:"https://images.immediate.co.uk/production/volatile/sites/7/2017/08/150-Historic-People-620x413-9327db9.jpg?quality=90&resize=620,414" )
g6 = Genre.create(name: "Romance", image:"https://www.premiumbeat.com/blog/wp-content/uploads/2020/04/titanic-cover.jpg")

# Adventure/Thriller
b1 = Book.create(title: "The Fury", pages: Faker::Number.within(range: 250..550), author: "Alex Michaelides", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1684763144l/123206645.jpg", genre_id: g1.id)
b2 = Book.create(title: "The Hieress", pages: Faker::Number.within(range: 250..550), author: "Rachel Hawkins", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1684155150l/126919284.jpg", genre_id: g1.id)
b3 = Book.create(title: "Only If You're Lucky", pages: Faker::Number.within(range: 250..550), author: "Stacy Willingham", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1687783124l/60891867._SY475_.jpg", genre_id: g1.id)
b4 = Book.create(title: "No One Can Know", pages: Faker::Number.within(range: 250..550), author: "Kate Alice Marshall", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1684451250l/127305892._SY475_.jpg", genre_id: g1.id)
b5 = Book.create(title: "The Clinic", pages: Faker::Number.within(range: 250..550), author: "Cate Quinn", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1682065129l/123430981._SY475_.jpg", genre_id: g1.id)
b6 = Book.create(title: "The House of Last Resort", pages: Faker::Number.within(range: 250..550), author: "Christopher Golden", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1681241011l/126918644.jpg", genre_id: g1.id)
b7 = Book.create(title: "The Mayor of Maxwell Street", pages: Faker::Number.within(range: 250..550), author: "Avery Cunningham", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1681770225l/133206574.jpg", genre_id: g1.id)
b8 = Book.create(title: "Rabbit Hole", pages: Faker::Number.within(range: 250..550), author: "Kate Brody", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1702929083l/125476780._SY475_.jpg", genre_id: g1.id)

# Science-Fiction
b9 = Book.create(title: "A Quantum Love Story", pages: Faker::Number.within(range: 250..550), author: "Mike Chen", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1692281364l/150444415._SY475_.jpg", genre_id: g2.id)
b10 = Book.create(title: "The Day Tripper", pages: Faker::Number.within(range: 250..550), author: "James Goodhand", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1699912822l/156347494._SY475_.jpg", genre_id: g2.id)
b11 = Book.create(title: "Into The Sunken City", pages: Faker::Number.within(range: 250..550), author: "Dinesh Thiru", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1691424581l/62193720._SY475_.jpg", genre_id: g2.id)
b12 = Book.create(title: "The Glass Box", pages: Faker::Number.within(range: 250..550), author: "J. Michael Straczynski", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1699462361l/195083767._SY475_.jpg", genre_id: g2.id)
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
b25 = Book.create(title: "Our Hidden Conversations", pages: Faker::Number.within(range: 250..550), author: "Nichele Norris", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1690496935l/191004852._SX318_.jpg", genre_id: g4.id)
b26 = Book.create(title: "Disillusioned", pages: Faker::Number.within(range: 250..550), author: "Benjamin Herold", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1681788463l/134939419._SY475_.jpg", genre_id: g4.id)
b27 = Book.create(title: "Madness", pages: Faker::Number.within(range: 250..550), author: "Antonia Hylton", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1700681997l/145624993._SY475_.jpg", genre_id: g4.id)
b28 = Book.create(title: "Fluke", pages: Faker::Number.within(range: 250..550), author: "Brian Klass", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1686591877l/177058906._SY475_.jpg", genre_id: g4.id)
b29 = Book.create(title: "The Tigerbelles", pages: Faker::Number.within(range: 250..550), author: "Aime Ally Card", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1706732719l/79743331._SY475_.jpg", genre_id: g4.id)
b30 = Book.create(title: "Everyone Who is Gone Here", pages: Faker::Number.within(range: 250..550), author: "Jonathan Blitzer", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1697736195l/145624514._SY475_.jpg", genre_id: g4.id)
b31 = Book.create(title: "Our Enemies Will Vanish", pages: Faker::Number.within(range: 250..550), author: "Yaroslav Trofimov", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1704845647l/80342131._SY475_.jpg", genre_id: g4.id)
b32 = Book.create(title: "Making It In America", pages: Faker::Number.within(range: 250..550), author: "Rachel Slade", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1706213172l/125531531._SY475_.jpg", genre_id: g4.id)

# Biography
b33 = Book.create(title: "God Save Benedict Arnold", pages: Faker::Number.within(range: 250..550), author: "Jack Kelly", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1676131109l/65214550._SY475_.jpg", genre_id: g5.id)
b34 = Book.create(title: "Legacy", pages: Faker::Number.within(range: 250..550), author: "Uche Blackstock", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1685351143l/66087028.jpg", genre_id: g5.id)
b35 = Book.create(title: "American Girls", pages: Faker::Number.within(range: 250..550), author: "Jessica Roy", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1686501407l/176443214.jpg", genre_id: g5.id)
b36 = Book.create(title: "Mirrors of Greatness", pages: Faker::Number.within(range: 250..550), author: "David Reynolds", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1696089055l/123404748._SY475_.jpg", genre_id: g5.id)
b37 = Book.create(title: "Loaded", pages: Faker::Number.within(range: 250..550), author: "Dylan Jones", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1681176076l/128116222._SY475_.jpg", genre_id: g5.id)
b38 = Book.create(title: "Soldier of Destiny", pages: Faker::Number.within(range: 250..550), author: "John Reeves", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1675614984l/101017233._SY475_.jpg", genre_id: g5.id)
b39 = Book.create(title: "The World That Wasn't", pages: Faker::Number.within(range: 250..550), author: "Benn Steil", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1686501599l/176443769.jpg", genre_id: g5.id)
b40 = Book.create(title: "Charles III: The Making of a Modern Monarch", pages: Faker::Number.within(range: 250..550), author: "Robert Hardman", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1682298333l/128184511._SY475_.jpg", genre_id: g5.id)

# Romance
b41 = Book.create(title: "A Fragile Enchanment", pages: Faker::Number.within(range: 250..550), author: "Allison Saft", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1683815235l/127305900.jpg", genre_id: g6.id)
b42 = Book.create(title: "Say You'll Be Mine", pages: Faker::Number.within(range: 250..550), author: "Naina Kumar", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1691745417l/134117190._SY475_.jpg", genre_id: g6.id)
b43 = Book.create(title: "Midnight Ruin", pages: Faker::Number.within(range: 250..550), author: "Katee Robert", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1687148513l/123416326.jpg", genre_id: g6.id)
b44 = Book.create(title: "The City Of Stardust", pages: Faker::Number.within(range: 250..550), author: "Georgia Summers", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1686838393l/145624782.jpg", genre_id: g6.id)
b45 = Book.create(title: "The Getaway List", pages: Faker::Number.within(range: 250..550), author: "Emma Lord", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1682194701l/126919196.jpg", genre_id: g6.id)
b46 = Book.create(title: "Recipe For A Charmed Life", pages: Faker::Number.within(range: 250..550), author: "Rachel Linden", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1685352608l/71872867.jpg", genre_id: g6.id)
b47 = Book.create(title: "Destroy The Day", pages: Faker::Number.within(range: 250..550), author: "Brigid Kemmerer", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1683230042l/133939087.jpg", genre_id: g6.id)
b48 = Book.create(title: "Hedging Your Bets", pages: Faker::Number.within(range: 250..550), author: "Jayne Denker", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1684203540l/127281714.jpg", genre_id: g6.id)


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