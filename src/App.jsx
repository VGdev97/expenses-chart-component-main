import TopBar from "./components/TopBar";
import BottomBar from "./components/BottomBar";

function App() {
  return (
    <main className="bg-[#f7e9dc] h-screen flex justify-center items-center">
      <div className="w-[380px] lg:w-[450px] ">
        {/* Top Bar */}
        <TopBar />
        {/* Bottom */}
        <BottomBar />
      </div>
    </main>
  );
}

export default App;
