import React from "react";

function Head(props: string = "qelement") {
  return (
    <head>
      {/* <meta charset="UTF-8" /> */}
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="favions/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="favions/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="favions/favicon-16x16.png"
      />
      <link rel="manifest" href="favions/site.webmanifest" />
      <link rel="stylesheet" href="styles.css" />
      <title>{props}</title>
    </head>
  );
}

export default Head;