export type EducationComparison = {
  country: string;
  teachingMethods: string;
  relationship: string;
  exams: string;
  structure: string;
  opportunities: string;
  challenges: string;
};

export const educationComparisons: EducationComparison[] = [
  {
    country: "Senegal",
    teachingMethods:
      "Often theory-centered in larger classes; ENSAM Meknès adds stronger lab and workshop integration.",
    relationship:
      "Respectful and formal in both contexts, with ENSAM encouraging more direct project dialogue.",
    exams:
      "Continuous assessment exists in both systems, but ENSAM places heavier weight on practical deliverables.",
    structure:
      "Both systems are structured, while ENSAM combines engineering fundamentals with applied technical projects.",
    opportunities:
      "Students gain exposure to multidisciplinary teams and industrially-oriented assignments.",
    challenges:
      "Adapting to faster project cycles and managing multiple deadlines can be demanding at first."
  },
  {
    country: "Cameroon",
    teachingMethods:
      "Strong theoretical foundation at home institutions; ENSAM introduces more workshop-driven experimentation.",
    relationship:
      "Teacher-student communication remains formal, but ENSAM offers closer supervision in project teams.",
    exams:
      "Written evaluations remain central, complemented by practical reports and oral presentations.",
    structure:
      "Comparable semester rhythm, with ENSAM emphasizing integration between classroom and field applications.",
    opportunities:
      "Access to collaborative engineering environments and intercultural academic exchange.",
    challenges:
      "Initial adaptation to local academic terminology and expectations in technical documentation."
  },
  {
    country: "Mali",
    teachingMethods:
      "Lecture-based instruction is common; ENSAM extends learning through lab sessions and design challenges.",
    relationship:
      "Both contexts value discipline, while ENSAM promotes more frequent feedback cycles.",
    exams:
      "Traditional exams remain important, with ENSAM adding graded teamwork and project milestones.",
    structure:
      "Core engineering progression is similar, but ENSAM places stronger emphasis on professional competencies.",
    opportunities:
      "Students develop practical communication, presentation, and teamwork skills.",
    challenges:
      "Balancing independent revision with practical tasks requires careful time planning."
  }
];

export const keyNotices = [
  "Practical project work is often more intensive at ENSAM Meknès than many students expect.",
  "Collaborative learning and peer support are essential for adaptation and long-term success.",
  "Communication style may be more interactive in project environments than in previous institutions.",
  "Language flexibility (French, Darija, and technical English) significantly improves integration."
];
