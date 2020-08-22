function Header() {
  return (
    <header>
      <h1>WELCOME TO AWESOME QUOTES</h1>
    </header>
  );
}
const quotes = [
  {
    quoteContent:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "-Nelson Mandela",
  },
  {
    quoteContent: "The way to get started is to quit talking and begin doing.",
    author: "-Walt Disney",
  },
  {
    quoteContent:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    author: "-Steve Jobs",
  },
  {
    quoteContent:
      "If life were predictable it would cease to be life, and be without flavor.",
    author: "-Eleanor Roosevelt",
  },
  {
    quoteContent:
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    author: "-Oprah Winfrey",
  },
  {
    quoteContent:
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author: "-James Cameron",
  },
  {
    quoteContent: "Life is what happens when you're busy making other plans.",
    author: "-John Lennon",
  },
  {
    quoteContent:
      "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "-Mother Teresa",
  },
  {
    quoteContent:
      "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    author: "-Benjamin Franklin",
  },
];
function Quote() {
  return (
    <quote className="container">
     <div className="row">
    {quotes.map((value,index) => {
      return(
      <div className="col col-lg-3 card" key={index}>
        <div>
            <h3>
            {value.quoteContent}
          </h3>
          <h4>
            <i className="text-right">{value.author}</i>
          </h4>  
        </div>
      </div>
     
    );
    }
    )}
    </div>
    </quote>
  );
}

function App() {
  return (
    <React.Fragment>
      <Header />
      <Quote />
    </React.Fragment>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
