import HomePage from "../containers/HomePage/HomePage";
import PeoplePage from "../containers/PeoplePage/PeoplePage";
import PersonPage from "../containers/PersonPage/PersonPage";
import SearchPage from "../containers/SearchPage/SearchPage";
import FavouritePage from "../containers/FavouritePage/FavouritePage";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
export const routeConfig = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <HomePage />,
  },
  {
    path: "/people",
    element: <PeoplePage />,
  },
  {
    path: "/person/:id",
    element: <PersonPage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/favourites",
    element: <FavouritePage />,
  },
  {
    path: "/fail",
    element: <ErrorMessage />,
  },
];
