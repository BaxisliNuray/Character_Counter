import React, { useState } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const [excludeSpace, setExcludeSpace] = useState(false);
  const [letterDensity, setLetterDensity] = useState(0);
  const [letterDistribution, setLetterDistribution] = useState([]);
  const [charCount, setCharCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);
  const [readTime, setReadTime] = useState(0);

  const handleChange = (e) => {
    let newText = e.target.value;
    setText(newText);

    // Calculate character, word, sentence count, and reading time
    let charCount = excludeSpace ? newText.replace(/\s/g, '').length : newText.length;
    let wordCount = newText.trim() === '' ? 0 : newText.trim().split(/\s+/).length;
    let sentenceCount = (newText.match(/[^.!?]+[.!?]+/g) || []).length;
    let readTime = Math.ceil(wordCount / 200);

    setCharCount(charCount);
    setWordCount(wordCount);
    setSentenceCount(sentenceCount);
    setReadTime(readTime);

    // Calculate letter density and letter distribution
    let letterOnlyText = newText.replace(/[^a-zA-Z]/g, '').toLowerCase();
    let letterCount = letterOnlyText.length;

    let density = charCount > 0 ? letterCount / charCount : 0;
    setLetterDensity(density);

    let letterFreq = {};
    for (let letter of letterOnlyText) {
      letterFreq[letter] = (letterFreq[letter] || 0) + 1;
    }

    let sortedLetters = Object.entries(letterFreq)
      .map(([letter, count]) => ({ letter, count, percentage: (count / letterCount) * 100 }))
      .sort((a, b) => b.percentage - a.percentage);

    setLetterDistribution(sortedLetters);
  };

  const handleCounterCheckbox = () => {
    setExcludeSpace(!excludeSpace);
  };

  let maxPercentage = letterDistribution.length > 0 ? letterDistribution[0].percentage : 1;

  return (
    <div className="hero-section">
      <div className="hero-top">
        <div className="hero">
          <h2>Analyze your text <br /> in real-time.</h2>
        </div>

        <div className="char-container">
          <textarea
            value={text}
            onChange={handleChange}
            placeholder="Start typing here...(or paste your text)"
          />
        </div>

        <div className="options">
          <div className="checkbox">
            <label>
              <input type="checkbox" checked={excludeSpace} onChange={handleCounterCheckbox} />
              Exclude Spaces
            </label>
            <label>
              <input type="checkbox" />
              Set Character Limit
            </label>
          </div>
          <p className="read-time">Approx, reading time: {readTime} minute</p>
        </div>

        <div className="counter-section">
          <div className="counter-box">
            <p>{charCount}</p>
            <h3>Total Characters</h3>
          </div>
          <div className="counter-box">
            <p>{wordCount}</p>
            <h3>Word Count</h3>
          </div>
          <div className="counter-box">
            <p>{sentenceCount}</p>
            <h3>Sentence Count</h3>
          </div>
        </div>
      </div>

      <div className="density-section">
        <h3>Letter Density</h3>
        {letterDensity === 0 ? (
          <p>No characters found.</p>
        ) : (      
        <div className="letters">
          {letterDistribution.map((item) => (
            <div key={item.letter} className="letter-item">
              <div className="progress-container">
                <span className="letter-label">{item.letter.toUpperCase()}</span>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${(item.percentage / maxPercentage) * 100}%`,
                    }}
                  ></div>
                  <span className="percentage-text">{item.percentage.toFixed(2)}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
