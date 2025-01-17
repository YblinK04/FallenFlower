import Image from "next/image";
import CreateMeeting from "./components/CreateMeeting";
import JoinMeeting from "./components/JoinMeeting";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4 sm: px-6 lg:px-8 min-h-[90vh]  flex flex-col md:flex-row gap-20 items-center justify-between ">
     <div>
      <div className="mb-10">
        <h1 className="text-4xl mb-2">
          Video calls and metings for
          <span className="text-pink-700 font-medium"> everyone.</span>
        </h1>
        <p>Join meeting with simple code nad share screen with others</p>
      </div>
     
     <div>
      <CreateMeeting />
     <JoinMeeting /> 
     </div>
     </div>
     <Image  src='/flower.svg' alt="flower" width={600} height={600} />
    </div>
  );
}
