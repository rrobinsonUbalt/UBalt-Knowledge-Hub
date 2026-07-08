// ============================================================
//  data.js — UBalt OIE Knowledge Hub Database
//  NEW FIELDS ADDED: status, version, lastUpdated
//  Status options: "Draft" | "Under Review" | "Published"
// ============================================================

const knowledgeData = [

  {
    id: "headcount",
    name: "Headcount Enrollment",
    status: "Published",
    version: "1.0",
    lastUpdated: "July 2026",
    area: "Enrollment",
    synonyms: "HC, Total Enrollment, Student Count",
    steward: "Office of Institutional Effectiveness",
    tags: ["IPEDS", "MHEC", "federal definitions", "dashboard methodologies"],
    definition: "The total number of students enrolled at the institution as of the official census date, regardless of credit hours attempted.",
    logicCodes: `IPEDS Fall Enrollment Survey — EF Component
Reporting Period: Fall census date (typically 15th instructional day)

Inclusion: Degree-seeking, non-degree-seeking, UG/GR, full-time/part-time
Exclusion: Auditors, non-credit CE students

MHEC Equivalent: Total Unduplicated Headcount (Table 1)`,
    comments: `Headcount is the most commonly cited enrollment figure and serves as the denominator for many institutional metrics.

The census date is critical — students who withdraw before it are NOT counted.

Note: Headcount differs from FTE. A student taking 6 credits counts as 1 in headcount but 0.5 in FTE.`,
    image: "assets/images/headcount-logic.png",
    files: [
      { title: "IPEDS EF Survey Instructions", url: "assets/docs/ipeds-ef-instructions.pdf" },
      { title: "MHEC Enrollment Reporting Guide", url: "assets/docs/mhec-enrollment-guide.pdf" }
    ],
    relatedTerms: ["fte", "census-date", "retention-rate"]
  },

  {
    id: "fte",
    name: "Full-Time Equivalent (FTE)",
    status: "Published",
    version: "1.0",
    lastUpdated: "July 2026",
    area: "Enrollment",
    synonyms: "FTE Enrollment, Student FTE",
    steward: "Office of Institutional Effectiveness",
    tags: ["IPEDS", "MHEC", "federal definitions", "dashboard methodologies"],
    definition: "A standardized measure of enrollment that converts part-time students into full-time equivalents based on credit hours attempted.",
    logicCodes: `Undergraduate FTE = Total UG credit hours / 12
Graduate FTE      = Total GR credit hours / 9

Example:
  100 FT students x 15 credits = 1,500 / 12 = 125 FTE
  50 PT students x 6 credits   =   300 / 12 =  25 FTE
  Total UG FTE = 150`,
    comments: `FTE is used for resource allocation, state funding formulas, and benchmarking.

Maryland's state funding formula uses FTE as the primary enrollment driver. A 1% change in FTE can have significant budget implications.`,
    image: null,
    files: [],
    relatedTerms: ["headcount", "census-date"]
  },

  {
    id: "census-date",
    name: "Census Date",
    status: "Published",
    version: "1.0",
    lastUpdated: "July 2026",
    area: "Enrollment",
    synonyms: "Official Enrollment Date, Snapshot Date",
    steward: "Registrar / Office of Institutional Effectiveness",
    tags: ["internal definitions", "dashboard methodologies", "IPEDS"],
    definition: "The official date on which enrollment is frozen for reporting purposes.",
    logicCodes: `UBalt Census Date Schedule:
  Fall Semester:   15th instructional day
  Spring Semester: 15th instructional day
  Summer Session:  Typically 10th day`,
    comments: `The census date is the single most important date in enrollment reporting. All headcount, FTE, and demographic breakdowns are based on enrollment as of this date.`,
    image: null,
    files: [],
    relatedTerms: ["headcount", "fte"]
  },

  {
    id: "schs",
    name: "Student Credit Hours (SCH)",
    status: "Published",
    version: "1.0",
    lastUpdated: "July 2026",
    area: "Instruction",
    synonyms: "Credit Hours Generated, SCH",
    steward: "Office of Institutional Effectiveness",
    tags: ["MHEC", "internal definitions", "dashboard methodologies"],
    definition: "The total number of credit hours attempted by all students in a given term.",
    logicCodes: `SCH = Sum of credit hours for all enrolled students

Example:
  500 students x 15 credits = 7,500 SCH (UG)
  200 students x 9 credits  = 1,800 SCH (GR)`,
    comments: `SCH drives FTE calculations, faculty workload analysis, and departmental resource allocation.

At UBalt, SCH is tracked by college, department, course level, and delivery modality.`,
    image: null,
    files: [],
    relatedTerms: ["fte", "headcount"]
  },

  {
    id: "retention-rate",
    name: "Retention Rate",
    status: "Published",
    version: "1.0",
    lastUpdated: "July 2026",
    area: "Student Success",
    synonyms: "First-Year Retention, Freshman Retention",
    steward: "Office of Institutional Effectiveness",
    tags: ["IPEDS", "federal definitions", "dashboard methodologies", "CDS"],
    definition: "The percentage of first-time, full-time degree-seeking freshmen who return to the same institution the following fall semester.",
    logicCodes: `Retention Rate = Returned students / Cohort size x 100

Cohort: First-time, full-time, degree-seeking students in Fall N
Measured: Enrollment in Fall N+1

Example: 320 returned / 400 cohort = 80%`,
    comments: `Retention rate is reported annually to IPEDS and published in the Common Data Set (CDS).

IPEDS only measures full-time, first-time students. UBalt also tracks part-time and transfer retention internally.`,
    image: null,
    files: [
      { title: "Common Data Set Template", url: "assets/docs/cds-template.pdf" }
    ],
    relatedTerms: ["headcount", "graduation-rate"]
  },

  {
    id: "graduation-rate",
    name: "Graduation Rate",
    status: "Published",
    version: "1.0",
    lastUpdated: "July 2026",
    area: "Student Success",
    synonyms: "Completion Rate, 6-Year Graduation Rate",
    steward: "Office of Institutional Effectiveness",
    tags: ["IPEDS", "federal definitions", "dashboard methodologies", "CDS", "Board of Regents"],
    definition: "The percentage of first-time, full-time degree-seeking students who complete their degree within 150% of normal program time.",
    logicCodes: `Graduation Rate = Completers within 150% time / Adjusted cohort x 100

150% time = 6 years for a 4-year degree
Cohort entry: Fall N | Completion window: Through August N+6

MHEC also reports 4-year (100%) and 5-year (125%) rates.`,
    comments: `The 6-year graduation rate is the standard federal metric under the Student Right-to-Know Act.

UBalt's working adult population can affect rates compared to traditional residential institutions — context matters when presenting this metric.`,
    image: null,
    files: [],
    relatedTerms: ["retention-rate", "headcount"]
  },

  {
    id: "net-tuition-revenue",
    name: "Net Tuition Revenue",
    status: "Published",
    version: "1.0",
    lastUpdated: "July 2026",
    area: "Finance",
    synonyms: "Net Tuition, Tuition Revenue Net of Aid",
    steward: "Finance / Budget Office",
    tags: ["internal definitions", "dashboard methodologies", "IPEDS"],
    definition: "Gross tuition and fee revenue minus institutional grant aid and scholarships awarded to students.",
    logicCodes: `Net Tuition = Gross Tuition & Fees - Institutional Aid

IPEDS Finance Survey:
  Line 01: Tuition and fees (gross)
  Line 02: Scholarship allowances
  Net = Line 01 - Line 02

Note: Federal/state grants are NOT subtracted.`,
    comments: `Net tuition revenue is the most important revenue line for tuition-dependent institutions like UBalt.

The tuition discount rate (institutional aid / gross tuition) is a key financial health indicator.`,
    image: null,
    files: [],
    relatedTerms: []
  }

  // ──────────────────────────────────────────────────────────
  //  ADD NEW TERMS BELOW — copy this template, fill it in!
  // ──────────────────────────────────────────────────────────
  /*
  ,{
    id: "your-unique-id",           // lowercase, hyphens only
    name: "Your Term Name",
    status: "Draft",                // Draft | Under Review | Published
    version: "1.0",
    lastUpdated: "July 2026",
    area: "Enrollment",             // Enrollment | Instruction | Finance | Student Success
    synonyms: "Alt name, Another name",
    steward: "Office Name",
    tags: ["IPEDS", "federal definitions"],
    definition: "Short plain-language definition.",
    logicCodes: `Your logic codes here.`,
    comments: `Longer explanation here.

Double line breaks create new paragraphs.`,
    image: "assets/images/your-image.png",  // or null
    files: [
      { title: "Document Title", url: "assets/docs/your-file.pdf" }
    ],
    relatedTerms: ["headcount", "fte"]
  }
  */

];
