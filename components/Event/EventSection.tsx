import HeadingStyle1 from "../Headings/HeadingStyle1";
import EventList from "./EventsList";

function EventSection() {
  const heading = "Event";
  const title = "Algovera Events are open to everyone";
  const description1 =
    "We organise different events to help you learn and connect with others. We run hackathons, study groups, reading groups, discussions, hacking session and even events in the physical world.";
  const description2 =
    "The Algovera AI commons calendar has all the events currently happening within Algovera.";
  const action = (
    <a
      className="button-1"
      href="https://algovera.notion.site/Calendar-9d79fab364234b47b6d24021efc28e42"
      target="_blank"
      rel="noopener noreferrer"
    >
      Calender
    </a>
  );

  return (
    <div className="space-y-6">
      <HeadingStyle1
        heading={heading}
        title={title}
        description1={description1}
        description2={description2}
        action={action}
      />
      <div>
        <EventList />
      </div>
    </div>
  );
}

export default EventSection;
