import MangaInput from "../components/MangaInput";

export default function Home() {
  return (
    <div className="bg-[#121217] min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-[640px] px-4">
        <h1 className="text-white text-2xl mb-4 text-center">Mangafy</h1>
        <MangaInput />
      </div>
    </div>
  );
}