import Script from "next/script";
import React from "react";

const Adsense = (pId) => {
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${pId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    ></Script>
  );
};

export default Adsense;
