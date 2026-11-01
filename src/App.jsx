import Header from "./components/header";
import Panel from "./components/panel";
import Overview from "./components/overview";
import Footer from "./components/footer";

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    status: "read",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    status: "read",
  },
  { id: 3, title: "1984", author: "George Orwell", status: "reading" },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    status: "unread",
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    status: "unread",
  },
  { id: 6, title: "The Hobbit", author: "J.R.R. Tolkien", status: "unread" },
  { id: 7, title: "Fahrenheit 451", author: "Ray Bradbury", status: "unread" },
  { id: 8, title: "Moby-Dick", author: "Herman Melville", status: "unread" },
  { id: 9, title: "War and Peace", author: "Leo Tolstoy", status: "unread" },
  { id: 10, title: "The Odyssey", author: "Homer", status: "unread" },
  {
    id: 11,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    status: "unread",
  },
  {
    id: 12,
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    status: "unread",
  },
  {
    id: 13,
    title: "Brave New World",
    author: "Aldous Huxley",
    status: "unread",
  },
  {
    id: 14,
    title: "The Divine Comedy",
    author: "Dante Alighieri",
    status: "unread",
  },
  { id: 15, title: "The Iliad", author: "Homer", status: "unread" },
  {
    id: 16,
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    status: "unread",
  },
  {
    id: 17,
    title: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    status: "unread",
  },
  { id: 18, title: "The Stranger", author: "Albert Camus", status: "unread" },
  {
    id: 19,
    title: "The Sun Also Rises",
    author: "Ernest Hemingway",
    status: "unread",
  },
  {
    id: 20,
    title: "The Sound and the Fury",
    author: "William Faulkner",
    status: "unread",
  },
];

function App() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex="-1">
        <Panel heading="Overview">
          <Overview books={books} />
        </Panel>
      </main>
      <Footer />
    </>
  );
}
export default App;
