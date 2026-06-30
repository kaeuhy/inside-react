import { lazy, Suspense } from "react";

const Home = lazy(() => import("./routes/Home"));

const About = lazy(() => import("./routes/About"));

const Profile = lazy(() => import("./routes/Profile"));

const App = () => (
  <Router>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<About />} />
        <Route path="/" element={<Profile />} />
      </Routes>
    </Suspense>
  </Router>
);
