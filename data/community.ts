export type Country = {
  name: string;
  region: "West Africa" | "Central Africa";
  students: number;
  description: string;
  integrationNotes: string;
};

export const countries: Country[] = [
  {
    name: "Senegal",
    region: "West Africa",
    students: 18,
    description:
      "Senegalese students are active in engineering clubs and peer tutoring circles.",
    integrationNotes:
      "French language familiarity helps, while Moroccan Darija improves daily communication over time."
  },
  {
    name: "Côte d’Ivoire",
    region: "West Africa",
    students: 16,
    description:
      "Ivorian students often collaborate in project-based labs and group assignments.",
    integrationNotes:
      "Early participation in student associations supports both social and academic integration."
  },
  {
    name: "Mali",
    region: "West Africa",
    students: 12,
    description:
      "Malian students bring strong resilience and teamwork to demanding technical programs.",
    integrationNotes:
      "Shared cultural values make adaptation smoother, especially through mentorship by older students."
  },
  {
    name: "Gabon",
    region: "Central Africa",
    students: 8,
    description:
      "Gabonese students are highly represented in mechanical systems and industrial design tracks.",
    integrationNotes:
      "Structured study planning helps balance practical workshops with theoretical modules."
  },
  {
    name: "Guinea",
    region: "West Africa",
    students: 11,
    description:
      "Guinean students contribute actively to intercultural events and language exchange groups.",
    integrationNotes:
      "New students benefit from orientation support for administrative procedures and housing."
  },
  {
    name: "Cameroon",
    region: "Central Africa",
    students: 14,
    description:
      "Cameroonian students show strong participation in robotics and digital innovation projects.",
    integrationNotes:
      "Joining technical clubs early helps students build practical networks in Meknès."
  },
  {
    name: "Burkina Faso",
    region: "West Africa",
    students: 10,
    description:
      "Students from Burkina Faso often collaborate in mutual support groups for exam preparation.",
    integrationNotes:
      "Peer-based note sharing and study circles are key tools for successful adaptation."
  },
  {
    name: "Congo",
    region: "Central Africa",
    students: 7,
    description:
      "Congolese students contribute to cultural evenings that celebrate African artistic diversity.",
    integrationNotes:
      "Consistent contact with tutors helps students align with ENSAM assessment expectations."
  },
  {
    name: "Benin",
    region: "West Africa",
    students: 9,
    description:
      "Beninese students are known for active participation in community volunteering activities.",
    integrationNotes:
      "Local student networks simplify access to accommodation and practical city information."
  },
  {
    name: "Togo",
    region: "West Africa",
    students: 6,
    description:
      "Togolese students contribute to collaborative learning spaces across engineering disciplines.",
    integrationNotes:
      "Regular communication with administrative offices reduces delays in document processing."
  }
];
