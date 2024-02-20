import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="min-h-screen flex-col">
      <Header />
      <main className="flex flex-wrap justify-center items-center flex-row bg-gray-100 px-10 md:flex-nowrap">
        {/*<LeftSide />*/}
        {/*<Visualisation />*/}
      </main>
      <Footer />
    </div>
  );
}

export default App;
