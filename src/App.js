import AppHeader from "layout/AppHeader";
import AppContent from "layout/AppContent";
import AppFooter from "layout/AppFooter";
import TopButton from "common/TopBtn";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <AppContent />
      <AppFooter />
      <TopButton />
    </div>
  );
}

export default App;