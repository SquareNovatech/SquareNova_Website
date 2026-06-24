import { useEffect } from 'react';

const DEFAULT_OG_IMAGE = 'https://squarenovatech.com/logo.png';

function upsertMeta(selector, attributes) {
  let element = document.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    Object.entries(attributes).forEach(([key, value]) => {
      if (key !== 'content') element.setAttribute(key, value);
    });
    document.head.appendChild(element);
  }
  if (attributes.content) element.setAttribute('content', attributes.content);
}

export default function usePageSEO({
  title,
  description,
  path,
  ogType = 'website',
  ogImage = DEFAULT_OG_IMAGE,
}) {
  useEffect(() => {
    const previousTitle = document.title;
    const url = `https://squarenovatech.com${path}`;

    document.title = title;

    upsertMeta('meta[name="description"]', { name: 'description', content: description });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title });
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description,
    });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: ogType });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: url });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: ogImage });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: description,
    });

    return () => {
      document.title = previousTitle;
    };
  }, [title, description, path, ogType, ogImage]);
}
