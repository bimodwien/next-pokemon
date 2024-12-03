import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-8">
        <Navbar />
        <h1 className="text-3xl font-bold mb-4 pt-4">Welcome to Pokemon Web</h1>
        <p className="text-lg">This is Pokemon website with PokeAPI</p>
      </main>
    </div>
  );
}
