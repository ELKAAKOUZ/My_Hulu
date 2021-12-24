import Thumbnail from "./Thumbnail";

function Results({ results }) {
  return (
    <div>
      {results.map((request) => (
        <Thumbnail key={request.id} result={request} />
      ))}
    </div>
  );
}

export default Results;
