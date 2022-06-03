import adaLogo from "./assets/icons/ada.png";
import bnbLogo from "./assets/icons/bnb.png";
import btcLogo from "./assets/icons/btc.png";
import dogeLogo from "./assets/icons/doge.png";
import ethLogo from "./assets/icons/eth.png";
import manaLogo from "./assets/icons/mana.png";
import shibLogo from "./assets/icons/shib.png";
import solLogo from "./assets/icons/sol.png";

let cryptoCards = [
  { currency: "ADA", number: "1", logo: adaLogo, found: false },
  { currency: "ADA", number: "2", logo: adaLogo, found: false },
  { currency: "BNB", number: "1", logo: bnbLogo, found: false },
  { currency: "BNB", number: "2", logo: bnbLogo, found: false },
  { currency: "BTC", number: "1", logo: btcLogo, found: false },
  { currency: "BTC", number: "2", logo: btcLogo, found: false },
  { currency: "DOGE", number: "1", logo: dogeLogo, found: false },
  { currency: "DOGE", number: "2", logo: dogeLogo, found: false },
  { currency: "ETH", number: "1", logo: ethLogo, found: false },
  { currency: "ETH", number: "2", logo: ethLogo, found: false },
  { currency: "MANA", number: "1", logo: manaLogo, found: false },
  { currency: "MANA", number: "2", logo: manaLogo, found: false },
  { currency: "SHIB", number: "1", logo: shibLogo, found: false },
  { currency: "SHIB", number: "2", logo: shibLogo, found: false },
  { currency: "SOL", number: "1", logo: solLogo, found: false },
  { currency: "SOL", number: "2", logo: solLogo, found: false },
];

const shuffleArray = (array) => array.sort(() => Math.random() - 0.5); // Shuffle array method
const shuffledCards = shuffleArray(cryptoCards);

export default shuffledCards;
