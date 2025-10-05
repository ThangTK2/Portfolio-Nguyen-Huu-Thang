import AnimatedCursor from "react-animated-cursor";

export default function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={10}
        outerSize={40}
        color="204, 153, 255"
        outerAlpha={0.4}
        innerScale={1.2}
        outerScale={1.5}
        trailingSpeed={5}
        // lickables={["a", "button"]}
      />
    </>
  );
}
