import Home from './pages/Home';
import Footer from './shared/Footer';
import Navbar from './shared/Navbar';

const App = () => {
  return (
    <div className="relative px-4 font-[Manrope] before:fixed before:left-0 before:top-0 before:-z-10 before:h-[435px] before:w-full before:rounded-bl-3xl before:bg-[#EAE6D7] max-md:px-4 lg:text-lg before:lg:rounded-bl-[79px]">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
