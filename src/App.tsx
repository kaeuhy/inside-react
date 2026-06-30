import ComponentWithReact19 from "@/example/ch17/ComponentWithReact19.tsx";

interface productProps {
  name: string;
  description: string;
}

export default function App() {
  const product: productProps = {
    name: "당근",
    description: "안녕하세요",
  };

  return (
    <div>
      <ComponentWithReact19 product={product} />
    </div>
  );
}
