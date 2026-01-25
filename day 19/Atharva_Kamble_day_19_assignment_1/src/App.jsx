import "./App.css";
import Button from "./components/Button";

function App() {

  const handlers = {
    func1: () => alert("Function 1 executed"),
    func2: () => alert("Function 2 executed"),
  };

  
  const test_cases = [
    {
      id: 1,
      label: "test case 1"
    },
    {
      id: 2,
      disabled: false,
      label: "test case 2",
      size: "SMALL",
      type: "SECONDARY",
    },
    {
      id: 3,
      disabled:false,
      label:"test case 3",
      size:"LARGE",
      type:"TERTIARY",
      onClickHandler:"func1"
    }
  ];

  return (
    <>
      {test_cases.map((btn) => (
        <Button
          key={btn.id}
          disabled={btn.disabled}
          label={btn.label}
          size={btn.size}
          type={btn.type}
          onClickHandler={handlers[btn.onClickHandler]}
        />
      ))}
    </>
  );
}

export default App;
