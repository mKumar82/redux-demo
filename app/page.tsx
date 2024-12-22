// app/page.tsx
import Counter from "../components/Counter";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <Counter />
    </div>
  );
}
