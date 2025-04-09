export interface ServiceItem {
    id: string
    title: string
    shortDescription: string
    fullDescription: string
    requirements: string[]
    remainder?: string[]
}

export const servicesData: ServiceItem[] = [
    {
        id: "franco-valuta",
        title: "Franco Valuta Service",
        shortDescription: "Supports diaspora members in participating in investment and business sectors in Ethiopia.",
        fullDescription:
            "The Franco Valuta service is available to Diasporas who have issued permission to participate in various investment and business sectors. To access the service they must meet:",
        requirements: [
            "The application form prepared by the institute",
            "A copy of the Ethiopian passport that has not expired and a copy of the foreign residence permit or ID that has not expired or",
            "If you have changed your nationality, a copy of your Ethiopian-born foreigner's identity card that has not expired",
            "Renewed investment license copy / business license copy",
            "If the investment/business license is through an association/PLC/, the diaspora who submitted the request must submit a copy of the association's bylaws, articles of incorporation and minutes of the association, showing that it is a member of the PLC.nt",
        ],
        remainder: [
            "If the request is submitted by a representative, a letter of support will be written to the regional and city administrations' investment offices/Ethiopian Customs Commission's branch offices when they",
        ],
    },
    {
        id: "investment-support",
        title: "Investment Support Service",
        shortDescription: "Facilitates diaspora involvement in Ethiopian investment opportunities.",
        fullDescription:
            "The Investment Support Service helps diaspora members navigate investment opportunities in Ethiopia, providing guidance on regulations, sectors, and procedures.",
        requirements: [
            "Valid identification documents",
            "Investment proposal or business plan",
            "Proof of funds or financing capability",
            "Completed application form from the investment commission",
        ],
    },
    {
        id: "tin-service",
        title: "Taxpayer Identification Number (TIN) Service",
        shortDescription: "Assists diaspora members in acquiring TIN for financial or business activities.",
        fullDescription:
            "The TIN Service helps diaspora members obtain their Taxpayer Identification Number, which is essential for conducting business and financial activities in Ethiopia.",
        requirements: [
            "Valid passport or ID",
            "Proof of address in Ethiopia (if available)",
            "Business registration documents (if applicable)",
            "Completed TIN application form",
        ],
    },
    {
        id: "foreign-currency",
        title: "Foreign Currency (Diaspora Account) Service",
        shortDescription: "Allows diaspora members to open foreign currency accounts in Ethiopia.",
        fullDescription:
            "This service enables diaspora members to maintain foreign currency accounts in Ethiopian banks, facilitating investment and business activities.",
        requirements: [
            "Valid passport or ID",
            "Proof of foreign residence",
            "Completed bank application forms",
            "Initial deposit as required by the specific bank",
        ],
    },
    {
        id: "housing-development",
        title: "40/60 Housing Development Program Savings Payment Service (Dollar to Birr Conversion)",
        shortDescription:
            "Supports diaspora members in converting savings from foreign currency to birr for housing development projects.",
        fullDescription:
            "The 40/60 Housing Development Program allows diaspora members to participate in housing schemes by converting foreign currency to birr for payments.",
        requirements: [
            "Registration in the housing program",
            "Proof of foreign currency source",
            "Valid identification documents",
            "Housing program payment schedule",
        ],
    },
    {
        id: "knowledge-transfer",
        title: "Knowledge, Skills, and Technology Transfer Service",
        shortDescription: "Empowers diaspora professionals to share expertise and skills in Ethiopia.",
        fullDescription:
            "This service facilitates the transfer of knowledge, skills, and technology from diaspora professionals to Ethiopian institutions and businesses.",
        requirements: [
            "Professional credentials and qualifications",
            "Proposal for knowledge/skills transfer",
            "Timeline and implementation plan",
            "Partner institution in Ethiopia (if applicable)",
        ],
    },
    {
        id: "refund-service",
        title: "Great Ethiopian Renaissance Dam Bond Refund Service",
        shortDescription: "Assists diaspora members in requesting refunds for purchased bonds.",
        fullDescription:
            "This service helps diaspora members who purchased bonds for the Great Ethiopian Renaissance Dam to request and receive refunds.",
        requirements: [
            "Original bond certificate",
            "Proof of purchase",
            "Valid identification",
            "Bank account details for refund transfer",
        ],
    },
    {
        id: "good-governance",
        title: "Good Governance Issue Resolution Service for the Diaspora",
        shortDescription: "Addresses diaspora challenges related to investment and development activities in Ethiopia.",
        fullDescription:
            "This service helps resolve governance issues and challenges faced by diaspora members in their investment and development activities in Ethiopia.",
        requirements: [
            "Detailed description of the issue",
            "Supporting documentation",
            "Previous communication with relevant authorities",
            "Proposed resolution (if available)",
        ],
    },
]
