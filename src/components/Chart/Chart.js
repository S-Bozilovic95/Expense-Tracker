import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ dataPoints }) => {
  // izvlacim sve vrednosti iz svih 12 meseci i pretvaram ih u niz
  // da bih mogao da preko max() nadjem najvecu vrednost
  // spread operator izvlaci sve vrednosti iz niza i prikazuje ih pojedinacno
  // da bi max() mogao da ih obradi jer ne prihvata niz kao arg
  const dataPointValues = dataPoints.map((item) => item.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {dataPoints.map((item) => (
        <ChartBar
          value={item.value}
          maxValue={totalMaximum}
          label={item.label}
          key={item.label}
        />
      ))}
    </div>
  );
};

export default Chart;
