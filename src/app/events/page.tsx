import EventContainer from "./_components/EventContainer";
export const metadata = {
  title: "Events",
  description: "All Events on Church Scroll",
};

const EventPage = () => {
  return (
    <div className="relative">
      <EventContainer></EventContainer>
    </div>
  );
};

export default EventPage;
