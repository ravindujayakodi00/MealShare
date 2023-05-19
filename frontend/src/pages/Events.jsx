import React from "react";
import AdminTable from "../components/adminTable";

function EventsPage() {
    return (
      <div>
         <AdminTable endpoint={"http://localhost:8000/events"} attributes={["name","description","startDate","location"]} dataKey={"events"} />
    </div>
      
    );
  }
  
  export default EventsPage;