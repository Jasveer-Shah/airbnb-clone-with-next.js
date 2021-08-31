import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import Router from 'next/router';
import ProgressBar from '@badrap/bar-of-progress';


const progress = new ProgressBar({
  size: 4,
  color: '#FE595E',
  classname: 'z-50',
  delay: 100,
})
// styleUrl = mapbox://styles/talkjasveer/cksl1jbf41dem17pjdka2dny6
// accessToken = pk.eyJ1IjoidGFsa2phc3ZlZXIiLCJhIjoiY2tzbDB0OHhxMnN5OTMwbjVqNXE1amVpbiJ9.xO3wVJ1H6z8VkAFvGJw1AA
// acessToken = pk.eyJ1IjoidGFsa2phc3ZlZXIiLCJhIjoiY2tzbDB0OHhxMnN5OTMwbjVqNXE1amVpbiJ9.xO3wVJ1H6z8VkAFvGJw1AA
Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
