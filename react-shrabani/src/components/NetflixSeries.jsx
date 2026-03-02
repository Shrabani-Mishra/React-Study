import seriesData from "../api/seriesData.json";

const NetflixSeries = () => {
  return (
    <div>
      {seriesData.map((curElm, index) => (
        <div
          key={curElm.id || index}
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            margin: "20px",
            borderRadius: "10px",
            width: "300px",
          }}
        >
          <img
            src={curElm.img_url}
            alt={curElm.name}
            width="100%"
            height="200px"
          />

          <h2>{curElm.name}</h2>
          <h3>Rating: {curElm.rating}</h3>

          <p><strong>Summary:</strong> {curElm.description}</p>
          <p><strong>Genre:</strong> {curElm.genre}</p>
          <p><strong>Cast:</strong> {curElm.cast}</p>

          <a
            href={curElm.watch_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              style={{
                padding: "8px 15px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Watch Now
            </button>
          </a>
        </div>
      ))}
    </div>
  );
};

export default NetflixSeries;