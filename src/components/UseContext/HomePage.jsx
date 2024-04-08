import { useUser } from "./context";

const HomePage = () => {
  const { userName } = useUser();

  return (
    <div className="bg-[#1b1b1b] h-[100vh] w-full flex items-center justify-center">
      <h1 className="text-yellow-500 text-4xl font-bold font-[poppins] ">
        Hello, {userName} <br />{" "}
        <span className="font-[200] text-white">How can i help you today?</span>
      </h1>
    </div>
  );
};

export default HomePage;
