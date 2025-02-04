import { useEffect, useState } from 'react';

interface TypeWriterProps {
  text: string;
  delay?: number;
}

export default function TypeWriter({ text, delay = 100 }: TypeWriterProps) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Reset animation when text changes
    setCurrentText('');
    setCurrentIndex(0);
  }, [text]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <span className="text-black dark:text-white border-r-2 border-indigo-600 dark:border-indigo-400 pr-1 animate-pulse">
      {currentText}
    </span>
  );
}