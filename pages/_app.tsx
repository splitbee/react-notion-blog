import { AppProps } from "next/app";

import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

import "../styles.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
