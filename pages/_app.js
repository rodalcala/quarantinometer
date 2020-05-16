import App from 'next/app';
import Router from 'next/router';

import * as gtag from '../lib/gtag';

// Next.js handles import of CSS files only thru /pages/_app.js
import 'react-datepicker/dist/react-datepicker.css';
import 'react-responsive-modal/styles.css';

Router.events.on('routeChangeComplete', url => gtag.pageview(url));

export default App;
