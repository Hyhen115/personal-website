import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Forum from "./pages/Forum";
import LoadingEffect from "./components/ui/loading_effect";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => setIsLoading(false);

  return (
    <BrowserRouter basename="/personal-website">
      {isLoading && <LoadingEffect onLoadingComplete={handleLoadingComplete} />}
      {!isLoading && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forum" element={<Forum />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
