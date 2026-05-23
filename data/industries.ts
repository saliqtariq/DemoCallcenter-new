export type IndustryItem = {
  slug: string;
  tabLabel: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const INDUSTRIES: IndustryItem[] = [
  {
    slug: 'customer-support',
    tabLabel: 'Customer Support',
    title: 'Deliver exceptional customer experiences at scale',
    description:
      'Provide professional inbound customer support services designed to improve response times, strengthen customer relationships, and maintain high satisfaction across every interaction.',
    image: '/images/CustomerSupport.png',
    imageAlt: 'Customer support team with headsets in a call center',
  },
  {
    slug: 'outbound-sales',
    tabLabel: 'Outbound Sales',
    title: 'Accelerate pipeline growth with high-conversion outbound sales',
    description:
      'Boost revenue with targeted outbound sales strategies that engage the right prospects, spark meaningful conversations, and consistently convert outreach into qualified leads and booked meetings.',
    image: '/images/Outbound sells.png',
    imageAlt: 'Sales team collaborating in a modern office',
  },
  {
    slug: 'social-media-marketing',
    tabLabel: 'Social Media Marketing',
    title: 'Build brand presence that converts across social channels',
    description:
      'Grow your brand with strategic social media marketing that builds engagement, increases visibility, and turns followers into loyal customers through consistent, high-impact content.',
    image: '/images/SocialMediaMarketing.png',
    imageAlt: 'Social media marketing analytics on a laptop',
  },
  {
    slug: 'lead-generation',
    tabLabel: 'Lead Generation',
    title: 'Generate qualified leads that fuel predictable revenue',
    description:
      'Generate high-quality leads with precision targeting, compelling outreach, and data-backed strategies that attract the right audience and turn interest into consistent business opportunities.',
    image: '/images/LeadGeneration.png',
    imageAlt: 'Lead generation dashboard and growth metrics',
  },
  {
    slug: 'brand-advertising',
    tabLabel: 'Brand Advertising',
    title: 'Amplify your brand with campaigns built for reach and recall',
    description:
      'Elevate your brand with powerful advertising campaigns that increase visibility, build trust, and create lasting impressions across the channels your audience uses every day.',
    image: '/images/Brand Advertising.png',
    imageAlt: 'Brand advertising creative and campaign planning',
  },
  {
    slug: 'appointment-setting',
    tabLabel: 'Appointment Setting',
    title: 'Fill your calendar with confirmed, qualified appointments',
    description:
      'Book more qualified meetings with professional appointment setting that engages prospects, nurtures interest, and fills your calendar with high-intent leads ready to take the next step.',
    image: '/images/appointment.png',
    imageAlt: 'Professional scheduling and calendar appointment setting',
  },
];

export const DEFAULT_INDUSTRY_SLUG = INDUSTRIES[0].slug;

export function getIndustryBySlug(slug: string) {
  return INDUSTRIES.find((industry) => industry.slug === slug);
}
