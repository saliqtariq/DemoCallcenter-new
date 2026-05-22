export type ServiceItem = {
  slug: string;
  title: string;
  shortDescription: string;
  intro: string;
  bullets: string[];
  outcomes: string[];
};

export const SERVICES: ServiceItem[] = [
  {
    slug: "call-center-solutions",
    title: "Call Center Solutions",
    shortDescription:
      "Professional inbound and outbound support solutions designed to improve customer satisfaction and business growth.",
    intro:
      "Our call center team handles customer conversations with clear scripts, QA monitoring, and KPI-based reporting so every call contributes to better business outcomes.",
    bullets: [
      "Inbound support for inquiries, complaints, and order handling",
      "Outbound campaigns for follow-ups, lead qualification, and appointment setting",
      "Call recordings, QA scorecards, and weekly performance reviews",
      "CRM updates and structured call notes after every interaction",
    ],
    outcomes: [
      "Lower missed-call rate",
      "Faster first-response and resolution time",
      "Higher conversion from phone interactions",
    ],
  },
  {
    slug: "truck-dispatching",
    title: "Truck Dispatching",
    shortDescription:
      "Efficient dispatch solutions that keep your fleet moving with optimized routes and load management.",
    intro:
      "We support dispatch operations with load planning, carrier coordination, and real-time communication to keep drivers moving and reduce deadhead miles.",
    bullets: [
      "Load booking and lane matching based on profitability",
      "Broker and shipper communication throughout the trip",
      "Route support, delay handling, and POD follow-up",
      "Daily dispatch summaries with completed and pending loads",
    ],
    outcomes: [
      "Improved truck utilization",
      "Better on-time pickup and delivery rates",
      "Smoother day-to-day dispatch operations",
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortDescription:
      "Targeted social media and paid campaign management to generate quality leads and measurable growth.",
    intro:
      "Our social media and paid ads team builds data-backed campaigns that attract the right audience and convert attention into booked calls, inquiries, and sales opportunities.",
    bullets: [
      "Paid ads setup and optimization (Meta and Google)",
      "Content calendars for consistent brand presence",
      "Lead form and landing page funnel coordination",
      "Weekly reporting on CPL, ROAS, and conversion quality",
    ],
    outcomes: [
      "Lower cost per qualified lead",
      "More consistent monthly lead flow",
      "Clear performance visibility for budget decisions",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}
