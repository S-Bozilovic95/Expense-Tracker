import "./Card.css";

// kada se doda props children komponenta moze da se koristi kao wrapper
// card prima classname i children kao props i primenjuje ga na element koji menjam
// na ovaj nacin se css pravila iz klase card dodaju pravilima elementa
// umesto da ih overwrite, na taj nacin mogu bilo gde da koristim wrapper card
// bez da mi poremeti sve stilove
// children kao props ne mora explicitno da bude prosledjen komponenti, to je built in props

function Card({ children, className }) {
  const classes = "card " + className;
  return <div className={classes}>{children}</div>;
}

export default Card;
