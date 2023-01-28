import "./ChartBar.css";
const ChartBar = ({ value, maxValue, label }) => {
  let barFillHeight = "0%";

  if (maxValue > 0) {
    // maxValue mi sluzi kao referenca za procente
    // vraca koliko procenata treba da bude pun bar i zaokruzuje na najblizi int
    barFillHeight = Math.round((value / maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
