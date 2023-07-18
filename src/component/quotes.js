import React, { useEffect, useState } from 'react';

function QuoteComponent() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchQuote = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=computers', {
          headers: { 'X-Api-Key': 'uLWr6B6XskNnt1fdEm7cwA==ahtDaYsuFaZtbYcg' },
        });
        if (!response.ok) {
          throw new Error("Can't fetch");
        }
        const data = await response.json();
        const randomQuote = data[0];
        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };

    fetchQuote();
  }, []);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (hasError) {
    return <div>Something went wrong!</div>;
  }

  return (
    <div className="quote-container">
      <h2> Quote:</h2>
      <p>{quote}</p>
      <p>{author}</p>
    </div>
  );
}

export default QuoteComponent;
