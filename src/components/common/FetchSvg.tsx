import React, { useEffect, useState } from 'react';

const FetchSvg = ({ url }: { url: string }) => {
  if (!url.endsWith('.svg')) {
    return <span />;
  }
  const [svg, setSvg] = useState('');

  // this runs when first time component render
  useEffect(() => {
    // fetch from server
    fetch(url)
      .then((res) => res.text())
      .then((content: string) => {
        setSvg(content);
      });
  }, [url]);

  return <span dangerouslySetInnerHTML={{ __html: svg }} />;
};

export { FetchSvg };
