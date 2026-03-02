import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./list";
import "./NetflixSeries.css";
const NetflixSeries = () => {
  return (
    <ul>
      {seriesData.map((curElem) => (
        <SeriesCard key={curElem.id} curElem={curElem} />
      ))}
    </ul>
  );
};

export default NetflixSeries;