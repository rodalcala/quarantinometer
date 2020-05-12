// Next.js handles import of CSS files only thru /pages/_app.js
import 'react-datepicker/dist/react-datepicker.css';
import 'react-responsive-modal/styles.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
