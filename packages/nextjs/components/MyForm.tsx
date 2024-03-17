import React from "react";

interface Player {
  name: string;
  nationality: string;
  birthdate: Date;
  strongFoot: "Left" | "Right";
  position: string[];
  style: string;
  club: string;
}

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Player:", player);
    // Submit form data to your backend here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={player.name} onChange={handleChange} />

      <label htmlFor="nationality">Nationality:</label>
      <select id="nationality" name="nationality" value={player.nationality} onChange={handleChange}>
        <option value="">Select Nationality</option>
        {/* Add your nationality options here */}
      </select>

      <label htmlFor="birthdate">Birthdate:</label>
      <input
        type="date"
        id="birthdate"
        name="birthdate"
        value={player.birthdate.toISOString().substring(0, 10)}
        onChange={handleChange}
      />

      <label htmlFor="strongFoot">Strong Foot:</label>
      <select id="strongFoot" name="strongFoot" value={player.strongFoot} onChange={handleChange}>
        <option value="Left">Left</option>
        <option value="Right">Right</option>
      </select>

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

      <label htmlFor="style">Style:</label>
      <input type="text" id="style" name="style" value={player.style} onChange={handleChange} />

      <label htmlFor="club">Club:</label>
      <input type="text" id="club" name="club" value={player.club} onChange={handleChange} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
