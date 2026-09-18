'use client';

import { useEffect, useState } from 'react';

// Efek ketik dengan rotasi kata; SSR menampilkan kata pertama penuh (baik untuk SEO & no-JS)
export default function RotatingWord({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(words[0] ?? '');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];

    if (!deleting && text === word) {
      const hold = setTimeout(() => setDeleting(true), 2600);
      return () => clearTimeout(hold);
    }

    if (deleting && text === '') {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const tick = setTimeout(
      () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
      deleting ? 40 : 75
    );
    return () => clearTimeout(tick);
  }, [text, deleting, index, words]);

  return (
    <span className="text-[#FB923C]">
      {text}
      <span
        className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.08em] animate-pulse bg-[#FB923C]"
        aria-hidden="true"
      />
    </span>
  );
}
