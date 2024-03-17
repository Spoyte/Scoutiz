import React from "react";
import { FormEvent } from "react";

// Import FormEvent here

interface Player {
  name: string;
  nationality: string;
  birthdate: Date;
  strongFoot: "Left" | "Right";
  position: string[];
  style: string;
  club: string;
}

const nationalities = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  // ... include all nationalities
];

const MyForm: React.FC = () => {
  const [player, setPlayer] = React.useState<Player>({
    name: "",
    nationality: "",
    birthdate: new Date(),
    strongFoot: "Left",
    position: [],
    style: "",
    club: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setPlayer({ ...player, [name]: value });
  };

  const handlePositionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target;

    if (checked) {
      setPlayer({ ...player, position: [...player.position, value] });
    } else {
      setPlayer({
        ...player,
        position: player.position.filter(p => p !== value),
      });
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Player:", player);
    // Submit form data to your backend here
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Name */}
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={player.name} onChange={handleChange} />
      </div>

      {/* Nationality */}
      <div className="form-group">
        <label htmlFor="nationality">Nationality:</label>
        <select id="nationality" name="nationality" value={player.nationality} onChange={handleChange}>
          <option value="">Select Nationality</option>
          {nationalities.map(nationality => (
            <option key={nationality} value={nationality}>
              {nationality}
            </option>
          ))}
        </select>
      </div>

      {/* Birthdate */}
      <div className="form-group">
        <label htmlFor="birthdate">Birthdate:</label>
        <input
          type="date"
          id="birthdate"
          name="birthdate"
          value={player.birthdate.toISOString().substring(0, 10)}
          onChange={handleChange}
        />
      </div>

      {/* Strong Foot */}
      <div className="form-group">
        <label htmlFor="strongFoot">Strong Foot:</label>
        <select id="strongFoot" name="strongFoot" value={player.strongFoot} onChange={handleChange}>
          <option value="Left">Left</option>
          <option value="Right">Right</option>
        </select>
      </div>

      {/* Position */}
      <div className="form-group">
        <label>Position:</label>
        <div>
          <input type="checkbox" id="position-GK" name="position" value="GK" onChange={handlePositionChange} />
          <label htmlFor="position-GK">Goalkeeper</label>
        </div>
        <div>
          <input type="checkbox" id="position-DF" name="position" value="DF" onChange={handlePositionChange} />
          <label htmlFor="position-DF">Defender</label>
        </div>
        <div>
          <input type="checkbox" id="position-MF" name="position" value="MF" onChange={handlePositionChange} />
          <label htmlFor="position-MF">Midfielder</label>
        </div>
        <div>
          <input type="checkbox" id="position-FW" name="position" value="FW" onChange={handlePositionChange} />
          <label htmlFor="position-FW">Forward</label>
        </div>
      </div>

      {/* Style */}
      <div className="form-group">
        <label htmlFor="style">Style:</label>
        <input type="text" id="style" name="style" value={player.style} onChange={handleChange} />
      </div>

      {/* Club */}
      <div className="form-group">
        <label htmlFor="club">Club:</label>
        <input type="text" id="club" name="club" value={player.club} onChange={handleChange} />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
