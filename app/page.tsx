import NavBar from "@/components/NavBar";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import Header from "@/components/ui/Header";

export default function Home() { 
  return (
    <div className="grid grid-cols-[250px_1fr] min-h-screen gap-4 p-6">

      {/* Left column */}
      <div className="flex flex-col gap-6">
        <Header className="mb-4" />
<div className="grid grid-cols-[250px_1fr] min-h-screen gap-4 p-6">




    <div className="flex flex-1 items-center">
      <Sidebar />
    </div>
  </div>

  {/* Right column */}
  <div className="flex flex-col gap-6">
    <NavBar />

  

</div>
        <Sidebar />
      </div>

      {/* Right column */}
      <div className="flex flex-col gap-6">
        <NavBar />

        <Button>Click me</Button>

        
  
        </div>
      </div>

  
  );
}
