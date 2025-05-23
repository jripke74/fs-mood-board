export function MoodBoardItem({ color, image, description }) {
  return (
    <div className="mood-board-item" style={{ backgroundColor: color }}>
      <img src={image} alt="" className="mood-board-image" />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
}

export function MoodBoard() {
  return (
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <div className="mood-board">
        <MoodBoardItem
          color="blue"
          image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg"
          description="this is it"
        />
        <MoodBoardItem
          color="green"
          image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg"
          description="this is it"
        />
        <MoodBoardItem
          color="yellow"
          image="https://cdn.freecodecamp.org/curriculum/labs/grass.jpg"
          description="this is it"
        />
      </div>
    </div>
  );
}
