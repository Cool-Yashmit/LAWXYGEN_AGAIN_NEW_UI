export type ServicePageContent = {
  summary: string;
  heroPoints: string[];
  facts: Array<{ label: string; value: string }>;
  overview: string[];
  eligibility: Array<{ title: string; text: string }>;
  benefits: Array<{ title: string; text: string }>;
  documentGroups: Array<{ title: string; items: string[] }>;
  process: Array<{ title: string; text: string }>;
  pricingNote: string;
  faqs: Array<[string, string]>;
};

const privateLimitedCompany: ServicePageContent = {
  summary:
    "Set up a Private Limited Company in India with support for MCA name reservation, incorporation filing, MoA/AoA, PAN/TAN and application tracking. This structure gives the business a separate legal identity and limits shareholder liability.",
  heroPoints: [
    "MCA name approval and incorporation support",
    "MoA, AoA, PAN and TAN coordination",
    "Track documents, status and next steps in one workspace",
  ],
  facts: [
    { label: "Minimum", value: "2 members + 2 directors" },
    { label: "Members", value: "Up to 200" },
    { label: "Filing route", value: "MCA SPICe+" },
  ],
  overview: [
    "A Private Limited Company is incorporated under the Companies Act, 2013 and becomes a legal entity separate from its shareholders and directors. Its shares are privately held rather than offered to the public.",
    "Incorporation is completed through the Ministry of Corporate Affairs using the SPICe+ process. The filing brings together company details, subscribers and directors, registered-office information, constitutional documents and linked registrations.",
  ],
  eligibility: [
    {
      title: "At least two members",
      text: "A private company is formed by two or more persons subscribing to its memorandum.",
    },
    {
      title: "At least two directors",
      text: "A private company must have a minimum of two directors; the statutory India-residency requirement must also be satisfied.",
    },
    {
      title: "Private membership structure",
      text: "The number of members is generally capped at 200, subject to the exclusions provided under company law.",
    },
    {
      title: "Registered-office details",
      text: "A valid correspondence or registered-office address and supporting proof are required for incorporation filings.",
    },
  ],
  benefits: [
    {
      title: "Separate legal identity",
      text: "The company can hold assets, enter contracts and operate in its own legal name.",
    },
    {
      title: "Limited liability",
      text: "Shareholder exposure is generally limited to the amount committed to the company, subject to law and specific circumstances.",
    },
    {
      title: "Structured ownership",
      text: "Shareholding and governance are formally documented through the company’s constitutional records.",
    },
    {
      title: "Continuity",
      text: "The company can continue independently of changes in shareholders or directors, subject to ongoing compliance.",
    },
  ],
  documentGroups: [
    {
      title: "Directors & shareholders",
      items: [
        "PAN and accepted identity proof",
        "Recent residential address proof",
        "Contact details and basic KYC information",
        "Director/subscriber declarations and consents as applicable",
      ],
    },
    {
      title: "Registered office",
      items: [
        "Ownership document or rent/lease agreement",
        "Owner NOC where applicable",
        "Recent utility bill for the premises",
      ],
    },
    {
      title: "Company information",
      items: [
        "Proposed company names",
        "Main business objects",
        "Shareholding and capital details",
        "State and registered-office particulars",
      ],
    },
  ],
  process: [
    {
      title: "Collect founder details",
      text: "Share proposed names, business activity, director/shareholder details and registered-office information.",
    },
    {
      title: "Digital signatures",
      text: "Complete the digital-signature requirements needed for electronic incorporation filings.",
    },
    {
      title: "Reserve the company name",
      text: "Submit the proposed name through the MCA incorporation workflow and address any name observations if raised.",
    },
    {
      title: "Prepare incorporation documents",
      text: "Prepare the incorporation particulars together with MoA, AoA and linked declarations/forms as applicable.",
    },
    {
      title: "File SPICe+ and linked forms",
      text: "Submit the incorporation package to the Registrar of Companies through the MCA system.",
    },
    {
      title: "Receive incorporation records",
      text: "After approval, receive the Certificate of Incorporation and identifiers such as CIN, PAN and TAN as applicable.",
    },
  ],
  pricingNote:
    "LAWXYGEN pricing will be shown as a clear professional fee plus applicable government, stamp-duty and statutory charges before filing. The final amount can vary with the application details and jurisdiction.",
  faqs: [
    [
      "What is Private Limited Company registration?",
      "It is the legal incorporation of a privately held company under the Companies Act, 2013 through the Ministry of Corporate Affairs. Once incorporated, the company exists as a separate legal entity.",
    ],
    [
      "How many people are required to start a Private Limited Company?",
      "A private company requires at least two members and at least two directors. One person can be both a shareholder and a director, subject to the applicable requirements.",
    ],
    [
      "Can the incorporation process be completed online?",
      "The MCA incorporation workflow is electronic and uses SPICe+ and linked forms. Supporting documents and digital signatures are used during the filing process.",
    ],
    [
      "What documents are usually required?",
      "Typical requirements include identity and address proofs for directors/shareholders, registered-office proof, NOC where applicable, and company information such as proposed names, business objects and shareholding details.",
    ],
    [
      "How will I track my LAWXYGEN service?",
      "Once the LAWXYGEN account workflow is connected, your service workspace can show document status, filing progress, pending actions and the next step from one place.",
    ],
  ],
};

export function getServicePageContent(title: string, category: string): ServicePageContent {
  if (title === "Private Limited Company Registration") {
    return privateLimitedCompany;
  }

  return {
    summary: `${title} support through LAWXYGEN with a clear digital workflow, document guidance and expert assistance. Service-specific legal content will be added as each page is reviewed and approved.`,
    heroPoints: [
      "Clear service requirements",
      "Document and application guidance",
      "Dashboard-based status tracking",
    ],
    facts: [
      { label: "Category", value: category },
      { label: "Mode", value: "Online assistance" },
      { label: "Support", value: "LAWXYGEN expert" },
    ],
    overview: [
      `This page is prepared for ${title}. The final service overview will be populated with reviewed, service-specific information before production publication.`,
    ],
    eligibility: [
      { title: "Eligibility review", text: "Service-specific eligibility will be added after review." },
      { title: "Applicant details", text: "The required applicant information will be listed clearly here." },
    ],
    benefits: [
      { title: "Clear workflow", text: "See requirements and next steps without searching across multiple pages." },
      { title: "Expert assistance", text: "Request help when the service needs professional review or filing support." },
    ],
    documentGroups: [
      { title: "Primary documents", items: ["Service-specific document list to be reviewed and added"] },
      { title: "Supporting documents", items: ["Additional requirements will appear here when confirmed"] },
    ],
    process: [
      { title: "Start your request", text: "Open the service from your LAWXYGEN account." },
      { title: "Share details", text: "Provide the information and documents required for the service." },
      { title: "Review and complete", text: "Track professional review, filing and completion from your workspace." },
    ],
    pricingNote: "Pricing for this service will be added after the LAWXYGEN commercial terms are approved.",
    faqs: [
      ["How do I start this service?", "Use the Start service action and sign in to your LAWXYGEN account."],
      ["Can I speak to an expert?", "Yes. You can request an expert consultation from the service page."],
    ],
  };
}
