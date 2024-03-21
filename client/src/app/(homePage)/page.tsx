import {
  HeroSection,
  AboutEventSection,
  BenefitsSection,
  ClubHeadSection,
  CounterSection,
  RegisterNowSection,
  ScheduleSection,
  SponsorsSection,
  TestimonialSection,
} from "./_sections";

export default function Home() {
  return (
    <main className="bg-primaryBlue">
      {/* @assignedTo Arshil */}
      {/* hero section */}
      <HeroSection />
      {/* counter */}
      <CounterSection />
      {/* benefits section */}
      <BenefitsSection />

      {/* @assignedTo Het */}
      {/* about the event */}
      <AboutEventSection />
      {/* club head */}
      <ClubHeadSection />
      {/* schedules */}
      <ScheduleSection />
      {/* sponsors */}
      <SponsorsSection />

      {/* @assignedTo Nishtha */}
      {/* testimonials */}
      <TestimonialSection />
      {/* register now */}
      <RegisterNowSection />
      {/* footer */}
      {/* <Footer /> */}
    </main>
  );
}
