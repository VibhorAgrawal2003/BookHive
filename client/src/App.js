import React from 'react';
import Navbar from './components/Navbar';
import EbookCard from './components/EbookCard';
import Toaster from './components/Toaster';

function App() {
  return (
    <div>
      <Navbar />
      <section className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to BookHub</h1>
          <p className="text-lg">"Unlock the world of knowledge through our vast collection of digital ebooks."</p>
        </div>
      </section>
      <div className="container mx-auto mt-8 grid grid-cols-3 gap-8">
        <EbookCard
          title="To Kill a Mockingbird"
          author="Harper Lee"
          description="Scout Finch lives with her brother, Jem, and their widowed father, Atticus, in the sleepy Alabama town of Maycomb. Maycomb is suffering through the Great Depression, but Atticus is a prominent lawyer and the Finch family is reasonably well off in comparison to the rest of society. One summer, Jem and Scout befriend a boy named Dill, who has come to live in their neighborhood for the summer, and the trio acts out stories together."
        />
        <EbookCard
          title="Harry Potter and the Sorcerer's Stone"
          author="J.K. Rowling"
          description="Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry."
        />
        <EbookCard
          title="1984"
          author="George Orwell"
          description="Nineteen Eighty-Four, often referred to as 1984, is a dystopian social science fiction novel by English novelist George Orwell. It was published on 8 June 1949 by Secker & Warburg as Orwell's ninth and final book completed in his lifetime."
        />
        <EbookCard
          title="The Great Gatsby"
          author="F. Scott Fitzgerald"
          description="The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan."
        />
        <EbookCard
          title="Pride and Prejudice"
          author="Jane Austen"
          description="Pride and Prejudice is an 1813 romantic novel of manners written by Jane Austen. The novel follows the character development of Elizabeth Bennet, the dynamic protagonist of the book who learns about the repercussions of hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness."
        />
      </div>
      <Toaster message="File download has started." />
    </div>
  );
}

export default App;
