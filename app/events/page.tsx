import EventsHero from "@/components/events/EventsHero";
import EventsServices from "@/components/events/EventsServices";
import EventsHandle from "@/components/events/EventHandle";
import EventsWhy from "@/components/events/Eventswhy";
import EventsGallery from "@/components/events/EventsGallery";
import EventsProcess from "@/components/events/EventsProcess";
import EventsCTA from "@/components/events/EventsCTA";

export default function EventsPage() {
  return (
    <main>
      <EventsHero />
      <EventsServices />
      <EventsHandle />
      <EventsWhy />
      <EventsGallery />
      <EventsProcess />
      <EventsCTA />


  

      
    </main>
  );
}