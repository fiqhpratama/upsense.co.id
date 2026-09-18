'use client';

import { useState } from 'react';
import { Facebook, Linkedin, Twitter, Link2, Check } from 'lucide-react';

export default function ShareRow({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API tidak tersedia (mis. non-HTTPS) — biarkan saja
    }
  };

  const shares = [
    { name: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, icon: Facebook },
    { name: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, icon: Linkedin },
    { name: 'Twitter/X', href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`, icon: Twitter },
  ];

  return (
    <div className="flex gap-2.5">
      {shares.map(({ name, href, icon: Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Bagikan ke ${name}`}
          className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#0A1E43] text-white transition-colors hover:bg-[#13264A]"
        >
          <Icon className="h-[15px] w-[15px]" />
        </a>
      ))}
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? 'Tautan tersalin' : 'Salin tautan artikel'}
        className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#0A1E43] text-white transition-colors hover:bg-[#13264A]"
      >
        {copied ? <Check className="h-[15px] w-[15px] text-[#6EE7B7]" /> : <Link2 className="h-[15px] w-[15px]" />}
      </button>
    </div>
  );
}
