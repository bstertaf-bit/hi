export const experienceTags = [
  "academic life",
  "social integration",
  "housing",
  "language",
  "daily life"
] as const;

export type Experience = {
  firstName: string;
  country: string;
  program: string;
  quote: string;
  summary: string;
  tags: (typeof experienceTags)[number][];
};

export const experiences: Experience[] = [
  {
    firstName: "Awa",
    country: "Senegal",
    program: "Industrial Engineering",
    quote: "The first semester was intense, but mentorship made a huge difference.",
    summary:
      "Awa highlights that structured revision groups and office-hour discussions helped her adapt to ENSAM's pace.",
    tags: ["academic life", "social integration"]
  },
  {
    firstName: "Landry",
    country: "Cameroon",
    program: "Mechanical Systems",
    quote: "I improved quickly when I practiced Darija with classmates after lectures.",
    summary:
      "Landry explains how language practice in everyday settings improved confidence in transport, shopping, and teamwork.",
    tags: ["language", "daily life"]
  },
  {
    firstName: "Mariam",
    country: "Mali",
    program: "Materials Science",
    quote: "Finding the right housing early reduced stress and improved my focus.",
    summary:
      "Mariam shares practical steps for evaluating housing options close to bus lines and campus facilities.",
    tags: ["housing", "daily life"]
  },
  {
    firstName: "Kevin",
    country: "Côte d’Ivoire",
    program: "Digital Manufacturing",
    quote: "Group projects helped me build friendships and professional skills at the same time.",
    summary:
      "Kevin emphasizes collaborative assignments as a pathway to both social integration and academic success.",
    tags: ["academic life", "social integration"]
  },
  {
    firstName: "Nadine",
    country: "Gabon",
    program: "Energy Engineering",
    quote: "I learned to balance independent study with active participation in class.",
    summary:
      "Nadine reflects on differences in teaching style and the value of regular feedback from instructors.",
    tags: ["academic life"]
  },
  {
    firstName: "Ismaël",
    country: "Guinea",
    program: "Civil Engineering",
    quote: "The community events made Meknès feel like a second home.",
    summary:
      "Ismaël notes that cultural events and weekly student meetups strengthened his sense of belonging.",
    tags: ["social integration", "daily life"]
  }
];
