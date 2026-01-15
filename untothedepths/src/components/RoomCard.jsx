import './RoomCard.css';

const RoomCard = () => {
  return (
    <div className="room-card-container">
      <div className="room-card">
        <textarea
          readOnly
          value="1. SLIMY CROSSROADS (D,T)"
          className="room-header"
        />
        <textarea
          readOnly
          value="The entrance pipe leads north to a square chamber with rounded edges. Filthy water forms a deep well at its centre, fed by streams running from west, north, and east, a tunnel leading each way"
          className="description"
        />
        <textarea
          readOnly
          value="A. Room Trap: Well of Filth"
          className="detail-header"
        />
        <textarea
          readOnly
          value="A filthy well"
          className="details"
        />
      </div>
    </div>
  );
};

export default RoomCard;