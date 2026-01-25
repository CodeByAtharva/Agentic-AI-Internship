const SHADES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function ColorPalette({ palette }) {
  return (
    <div className="palette">
      {palette.map((color) => (
        <div key={color.name} className="color-group">
          <div className="color-title">
            <strong>{color.name}</strong>
            <span>colors.{color.key}</span>
          </div>

          <div className="shade-row">
            {color.shades.map((hex, index) => (
              <div key={hex} className="shade">
                <div
                  className="shade-box"
                  style={{ backgroundColor: hex }}
                />
                <div className="shade-label">{SHADES[index]}</div>
                <div className="shade-hex">{hex}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ColorPalette;
