export type Quiz = {
    id: string;
    title: string;
    answers: string[];
};

export const quizzes: Quiz[] = [
    {
        id: "us-states",
        title: "U.S. States",
        answers: [
            "Alabama", "Alaska", "Arizona", "Arkansas", "California",
            "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
            "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
            "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
            "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri",
            "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
            "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
            "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
            "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
            "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
        ],
    },
    {
        id: "mbta-b-branch",
        title: 'MBTA "B" Branch Stations',
        answers: [
            "Boston College", "South Street", "Chestnut Hill Avenue", "Chiswick Road", "Sutherland Road",
            "Washington Street", "Warren Street", "Allston Street", "Griggs Street", "Harvard Avenue",
            "Packard's Corner", "Babcock Street", "Amory Street", "Boston University Central", "Boston University East",
            "Blandford Street", "Kenmore", "Hynes Convention Center", "Copley", "Arlington",
            "Boylston", "Park Street", "Government Center"
        ],
    },
    {
        id: "first-18-elements",
        title: "First 18 Elements",
        answers: [
            "Hydrogen", "Helium", "Lithium", "Beryllium", "Boron",
            "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon",
            "Sodium", "Magnesium", "Aluminum", "Silicon", "Phosphorus",
            "Sulfur", "Chlorine", "Argon"
        ],
    },
];

export function getQuizById(id: string): Quiz | undefined {
    return quizzes.find((q) => q.id === id);
}