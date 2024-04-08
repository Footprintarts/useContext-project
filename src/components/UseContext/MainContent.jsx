import { useUser } from "./context";
import SignIn from "./SignIn";
import HomePage from "./HomePage";

const MainContent = () => {
  const { signedIn } = useUser();

  return <div>{signedIn ? <HomePage /> : <SignIn />}</div>;
};

export default MainContent;
