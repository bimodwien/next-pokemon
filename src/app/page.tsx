import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-screen-2xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">Welcome to Pokemon Web</h1>
          <p className="text-lg">This is Pokemon website with PokeAPI</p>
        </div>
      </main>
    </div>
  );
}
