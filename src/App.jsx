import "./App.css";
import UpcomingEvents from "./components/ComingEvents/UpcomingEvents";
import Header from "./components/Header/Header";
import HeaderSection from "./components/Header/HeaderSection";
import HighlightsSection from "./components/Highlights/HighlightsSection";
import JobsSection from "./components/Jobs/JobsSection";
import NewsFeed from "./components/News/NewsFeed";
import Footer from "./components/RandomComponents/Footer";
import JoinUsSection from "./components/RandomComponents/JoinUsSection";

function App() {
  return (
    <>
      <Header />
      <HeaderSection />
      <HighlightsSection />
      <NewsFeed />
      <UpcomingEvents />
      <JobsSection />
      <JoinUsSection />
      <Footer />
    </>
  );
}

export default App;
