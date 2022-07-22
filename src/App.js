import Contact from "./components/ContactList";
import Title from "./components/Title";
function App() {
  return (
    <div class="container flex flex-col items-center min-h-screen bg-slate-400">
      <Title />
      <Contact />
    </div>
  );
}
export default App;
