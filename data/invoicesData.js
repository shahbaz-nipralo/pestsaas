export const gstInvoices = [
    {
      id: "INV-GST-2025-001",
      customer: "Robert Johnson",
      email: "robert.johnson@example.com",
      amount: 165.0, // Including GST
      baseAmount: 150.0,
      gstAmount: 15.0,
      status: "Paid",
      date: "2025-04-01",
      dueDate: "2025-04-15",
      paymentDate: "2025-04-05",
      paymentMethod: "Credit Card",
      service: "Quarterly Pest Control",
      items: [
        { description: "General Pest Control Service", quantity: 1, rate: 120.0, amount: 120.0 },
        { description: "Rodent Bait Stations", quantity: 2, rate: 15.0, amount: 30.0 },
      ],
    },
    {
      id: "INV-GST-2025-002",
      customer: "Sarah Williams",
      email: "sarah.williams@example.com",
      amount: 247.5, // Including GST
      baseAmount: 225.0,
      gstAmount: 22.5,
      status: "Paid",
      date: "2025-03-28",
      dueDate: "2025-04-11",
      paymentDate: "2025-04-02",
      paymentMethod: "Bank Transfer",
      service: "Termite Inspection",
      items: [
        { description: "Annual Termite Inspection", quantity: 1, rate: 175.0, amount: 175.0 },
        { description: "Moisture Barrier Installation", quantity: 1, rate: 50.0, amount: 50.0 },
      ],
    },
    {
      id: "INV-GST-2025-003",
      customer: "Oakridge Apartments",
      email: "manager@oakridgeapts.com",
      amount: 825.0, // Including GST
      baseAmount: 750.0,
      gstAmount: 75.0,
      status: "Pending",
      date: "2025-03-25",
      dueDate: "2025-04-08",
      paymentDate: null,
      paymentMethod: null,
      service: "Commercial Pest Control",
      items: [{ description: "Monthly Commercial Service - 24 Units", quantity: 1, rate: 750.0, amount: 750.0 }],
    },
    {
      id: "INV-GST-2025-004",
      customer: "Springfield Elementary School",
      email: "facilities@springfieldelementary.edu",
      amount: 1320.0, // Including GST
      baseAmount: 1200.0,
      gstAmount: 120.0,
      status: "Overdue",
      date: "2025-03-15",
      dueDate: "2025-03-29",
      paymentDate: null,
      paymentMethod: null,
      service: "Commercial Pest Control",
      items: [
        { description: "Quarterly Commercial Service", quantity: 1, rate: 1000.0, amount: 1000.0 },
        { description: "Rodent Control Program", quantity: 1, rate: 200.0, amount: 200.0 },
      ],
    },
  ]
  
  // Sample data for Non-GST invoices
  export const nonGstInvoices = [
    {
      id: "INV-NGST-2025-001",
      customer: "Michael Brown",
      email: "michael.brown@example.com",
      amount: 180.0, // No GST
      status: "Paid",
      date: "2025-04-02",
      dueDate: "2025-04-16",
      paymentDate: "2025-04-10",
      paymentMethod: "Credit Card",
      service: "Mosquito Control",
      items: [
        { description: "Mosquito Barrier Treatment", quantity: 1, rate: 150.0, amount: 150.0 },
        { description: "Standing Water Treatment", quantity: 2, rate: 15.0, amount: 30.0 },
      ],
    },
    {
      id: "INV-NGST-2025-002",
      customer: "Jennifer Miller",
      email: "jennifer.miller@example.com",
      amount: 350.0, // No GST
      status: "Pending",
      date: "2025-03-30",
      dueDate: "2025-04-13",
      paymentDate: null,
      paymentMethod: null,
      service: "Bed Bug Treatment",
      items: [
        { description: "Bed Bug Heat Treatment", quantity: 1, rate: 300.0, amount: 300.0 },
        { description: "Follow-up Inspection", quantity: 1, rate: 50.0, amount: 50.0 },
      ],
    },
    {
      id: "INV-NGST-2025-003",
      customer: "Thomas Anderson",
      email: "thomas.anderson@example.com",
      amount: 120.0, // No GST
      status: "Overdue",
      date: "2025-03-20",
      dueDate: "2025-04-03",
      paymentDate: null,
      paymentMethod: null,
      service: "Cockroach Treatment",
      items: [{ description: "Cockroach Treatment - Kitchen and Bathroom", quantity: 1, rate: 120.0, amount: 120.0 }],
    },
  ]
  
  // Sample data for Split invoices
  export const splitInvoices = [
    {
      id: "INV-SPLIT-2025-001",
      customer: "Jessica Lee",
      email: "jessica.lee@example.com",
      totalAmount: 275.0,
      splits: [
        {
          description: "Insurance Coverage",
          amount: 200.0,
          status: "Paid",
          paymentDate: "2025-04-05",
          paymentMethod: "Insurance Claim",
        },
        {
          description: "Customer Portion",
          amount: 75.0,
          status: "Pending",
          paymentDate: null,
          paymentMethod: null,
        },
      ],
      status: "Partially Paid",
      date: "2025-04-01",
      dueDate: "2025-04-15",
      service: "Termite Damage Repair",
      items: [
        { description: "Termite Damage Assessment", quantity: 1, rate: 75.0, amount: 75.0 },
        { description: "Structural Repair", quantity: 1, rate: 200.0, amount: 200.0 },
      ],
    },
    {
      id: "INV-SPLIT-2025-002",
      customer: "Oakridge Apartments",
      email: "manager@oakridgeapts.com",
      totalAmount: 1500.0,
      splits: [
        {
          description: "Building A",
          amount: 500.0,
          status: "Paid",
          paymentDate: "2025-03-28",
          paymentMethod: "Bank Transfer",
        },
        {
          description: "Building B",
          amount: 500.0,
          status: "Paid",
          paymentDate: "2025-03-30",
          paymentMethod: "Bank Transfer",
        },
        {
          description: "Building C",
          amount: 500.0,
          status: "Pending",
          paymentDate: null,
          paymentMethod: null,
        },
      ],
      status: "Partially Paid",
      date: "2025-03-25",
      dueDate: "2025-04-08",
      service: "Commercial Pest Control",
      items: [{ description: "Quarterly Pest Control - 3 Buildings", quantity: 3, rate: 500.0, amount: 1500.0 }],
    },
    {
      id: "INV-SPLIT-2025-003",
      customer: "Emily Davis",
      email: "emily.davis@example.com",
      totalAmount: 450.0,
      splits: [
        {
          description: "Initial Treatment",
          amount: 250.0,
          status: "Paid",
          paymentDate: "2025-03-15",
          paymentMethod: "Credit Card",
        },
        {
          description: "Follow-up Treatment",
          amount: 200.0,
          status: "Pending",
          paymentDate: null,
          paymentMethod: null,
          dueDate: "2025-04-15",
        },
      ],
      status: "Partially Paid",
      date: "2025-03-15",
      dueDate: "2025-04-15",
      service: "Termite Treatment",
      items: [
        { description: "Initial Termite Treatment", quantity: 1, rate: 250.0, amount: 250.0 },
        { description: "Follow-up Treatment", quantity: 1, rate: 200.0, amount: 200.0 },
      ],
    },
  ]


  // quotation data

 export const gstQuotations = [
    {
      id: "QUO-GST-2025-001",
      customer: "Robert Johnson",
      email: "robert.johnson@example.com",
      amount: 165.0, // Including GST
      baseAmount: 150.0,
      gstAmount: 15.0,
      status: "Pending",
      date: "2025-04-01",
      validUntil: "2025-05-01",
      service: "Quarterly Pest Control",
      items: [
        { description: "General Pest Control Service", quantity: 1, rate: 120.0, amount: 120.0 },
        { description: "Rodent Bait Stations", quantity: 2, rate: 15.0, amount: 30.0 },
      ],
    },
    {
      id: "QUO-GST-2025-002",
      customer: "Sarah Williams",
      email: "sarah.williams@example.com",
      amount: 247.5, // Including GST
      baseAmount: 225.0,
      gstAmount: 22.5,
      status: "Approved",
      date: "2025-03-28",
      validUntil: "2025-04-28",
      service: "Termite Inspection",
      items: [
        { description: "Annual Termite Inspection", quantity: 1, rate: 175.0, amount: 175.0 },
        { description: "Moisture Barrier Installation", quantity: 1, rate: 50.0, amount: 50.0 },
      ],
    },
    {
      id: "QUO-GST-2025-003",
      customer: "Oakridge Apartments",
      email: "manager@oakridgeapts.com",
      amount: 825.0, // Including GST
      baseAmount: 750.0,
      gstAmount: 75.0,
      status: "Pending",
      date: "2025-03-25",
      validUntil: "2025-04-25",
      service: "Commercial Pest Control",
      items: [{ description: "Monthly Commercial Service - 24 Units", quantity: 1, rate: 750.0, amount: 750.0 }],
    },
    {
      id: "QUO-GST-2025-004",
      customer: "Springfield Elementary School",
      email: "facilities@springfieldelementary.edu",
      amount: 1320.0, // Including GST
      baseAmount: 1200.0,
      gstAmount: 120.0,
      status: "Approved",
      date: "2025-03-20",
      validUntil: "2025-04-20",
      service: "Commercial Pest Control",
      items: [
        { description: "Quarterly Commercial Service", quantity: 1, rate: 1000.0, amount: 1000.0 },
        { description: "Rodent Control Program", quantity: 1, rate: 200.0, amount: 200.0 },
      ],
    },
    {
      id: "QUO-GST-2025-005",
      customer: "Emily Davis",
      email: "emily.davis@example.com",
      amount: 104.5, // Including GST
      baseAmount: 95.0,
      gstAmount: 9.5,
      status: "Rejected",
      date: "2025-03-15",
      validUntil: "2025-04-15",
      service: "Ant Treatment",
      items: [{ description: "Targeted Ant Treatment", quantity: 1, rate: 95.0, amount: 95.0 }],
    },
  ]
  
  // Sample data for Non-GST quotations
 export const nonGstQuotations = [
    {
      id: "QUO-NGST-2025-001",
      customer: "Michael Brown",
      email: "michael.brown@example.com",
      amount: 180.0, // No GST
      status: "Pending",
      date: "2025-04-02",
      validUntil: "2025-05-02",
      service: "Mosquito Control",
      items: [
        { description: "Mosquito Barrier Treatment", quantity: 1, rate: 150.0, amount: 150.0 },
        { description: "Standing Water Treatment", quantity: 2, rate: 15.0, amount: 30.0 },
      ],
    },
    {
      id: "QUO-NGST-2025-002",
      customer: "Jennifer Miller",
      email: "jennifer.miller@example.com",
      amount: 350.0, // No GST
      status: "Approved",
      date: "2025-03-30",
      validUntil: "2025-04-30",
      service: "Bed Bug Treatment",
      items: [
        { description: "Bed Bug Heat Treatment", quantity: 1, rate: 300.0, amount: 300.0 },
        { description: "Follow-up Inspection", quantity: 1, rate: 50.0, amount: 50.0 },
      ],
    },
    {
      id: "QUO-NGST-2025-003",
      customer: "Thomas Anderson",
      email: "thomas.anderson@example.com",
      amount: 120.0, // No GST
      status: "Pending",
      date: "2025-03-27",
      validUntil: "2025-04-27",
      service: "Cockroach Treatment",
      items: [{ description: "Cockroach Treatment - Kitchen and Bathroom", quantity: 1, rate: 120.0, amount: 120.0 }],
    },
    {
      id: "QUO-NGST-2025-004",
      customer: "Jessica Lee",
      email: "jessica.lee@example.com",
      amount: 175.0, // No GST
      status: "Rejected",
      date: "2025-03-22",
      validUntil: "2025-04-22",
      service: "Termite Inspection",
      items: [{ description: "Termite Inspection", quantity: 1, rate: 175.0, amount: 175.0 }],
    },
  ]

  // Deleted records data

export const deletedRecords = [
    {
      id: "DR001",
      recordType: "Customer",
      recordId: "CUST-1023",
      recordName: "Johnson Family",
      deletedBy: "John Doe",
      deletedAt: "2023-04-01 09:15:22",
      reason: "Duplicate record",
      recoverable: true,
    },
    {
      id: "DR002",
      recordType: "Appointment",
      recordId: "APT-4567",
      recordName: "Termite Inspection - Wilson Property",
      deletedBy: "Jane Smith",
      deletedAt: "2023-04-02 14:30:45",
      reason: "Customer cancelled service",
      recoverable: true,
    },
    {
      id: "DR003",
      recordType: "Invoice",
      recordId: "INV-7890",
      recordName: "Invoice #7890 - Brown Apartments",
      deletedBy: "Mike Johnson",
      deletedAt: "2023-04-03 11:20:18",
      reason: "Incorrect billing information",
      recoverable: true,
    },
    {
      id: "DR004",
      recordType: "Technician",
      recordId: "TECH-0045",
      recordName: "Robert Williams",
      deletedBy: "John Doe",
      deletedAt: "2023-04-05 16:45:33",
      reason: "Employee no longer with company",
      recoverable: false,
    },
    {
      id: "DR005",
      recordType: "Quotation",
      recordId: "QUOT-3456",
      recordName: "Quotation #3456 - Davis Daycare",
      deletedBy: "Jane Smith",
      deletedAt: "2023-04-07 10:05:12",
      reason: "Customer requested new quote",
      recoverable: true,
    },
    {
      id: "DR006",
      recordType: "Lead",
      recordId: "LEAD-2345",
      recordName: "Martinez Grocery",
      deletedBy: "Mike Johnson",
      deletedAt: "2023-04-10 09:30:27",
      reason: "Lead converted to customer",
      recoverable: false,
    },
    {
      id: "DR007",
      recordType: "Expense",
      recordId: "EXP-5678",
      recordName: "Office Supplies - $65.30",
      deletedBy: "John Doe",
      deletedAt: "2023-04-12 13:15:40",
      reason: "Duplicate expense entry",
      recoverable: true,
    },
  ]




// Sample expense data
export const expenses = [
  {
    id: "EXP001",
    date: "2023-04-01",
    category: "Vehicle",
    description: "Fuel for service vehicles",
    amount: 120.5,
    paymentMethod: "Credit Card",
    status: "Approved",
    submittedBy: "John Doe",
    hasReceipt: true,
  },
  {
    id: "EXP002",
    date: "2023-04-02",
    category: "Equipment",
    description: "New spraying equipment",
    amount: 450.75,
    paymentMethod: "Credit Card",
    status: "Pending",
    submittedBy: "Jane Smith",
    hasReceipt: true,
  },
  {
    id: "EXP003",
    date: "2023-04-03",
    category: "Chemicals",
    description: "Pest control chemicals",
    amount: 875.25,
    paymentMethod: "Bank Transfer",
    status: "Approved",
    submittedBy: "Mike Johnson",
    hasReceipt: true,
  },
  {
    id: "EXP004",
    date: "2023-04-05",
    category: "Office",
    description: "Office supplies",
    amount: 65.3,
    paymentMethod: "Cash",
    status: "Approved",
    submittedBy: "John Doe",
    hasReceipt: false,
  },
  {
    id: "EXP005",
    date: "2023-04-07",
    category: "Marketing",
    description: "Facebook ads campaign",
    amount: 300.0,
    paymentMethod: "Credit Card",
    status: "Pending",
    submittedBy: "Jane Smith",
    hasReceipt: true,
  },
  {
    id: "EXP006",
    date: "2023-04-10",
    category: "Training",
    description: "Staff training workshop",
    amount: 750.0,
    paymentMethod: "Bank Transfer",
    status: "Approved", 
    submittedBy: "Mike Johnson",
    hasReceipt: true,
  },
  {
    id: "EXP007",
    date: "2023-04-12",
    category: "Vehicle",
    description: "Vehicle maintenance",
    amount: 210.45,
    paymentMethod: "Credit Card",
    status: "Approved",
    submittedBy: "John Doe",
    hasReceipt: true,
  },
]


// Leads data

export const leads = [
  {
    id: "LEAD001",
    name: "John Smith",
    company: "Smith Residence",
    email: "john.smith@example.com",
    phone: "(555) 123-4567",
    source: "Website",
    status: "New",
    date: "2023-04-01",
    notes: "Interested in residential pest control services.",
    assignedTo: "Mike Johnson",
  },
  {
    id: "LEAD002",
    name: "Sarah Williams",
    company: "Williams Family Restaurant",
    email: "sarah@williamsrestaurant.com",
    phone: "(555) 234-5678",
    source: "Referral",
    status: "Contacted",
    date: "2023-04-02",
    notes: "Needs commercial pest control for restaurant. Referred by John Smith.",
    assignedTo: "Jane Smith",
  },
  {
    id: "LEAD003",
    name: "Robert Davis",
    company: "Davis Apartments",
    email: "robert@davisapartments.com",
    phone: "(555) 345-6789",
    source: "Google Ads",
    status: "Qualified",
    date: "2023-04-03",
    notes: "Property manager for 50-unit apartment complex. Needs regular service.",
    assignedTo: "Mike Johnson",
  },
  {
    id: "LEAD004",
    name: "Emily Johnson",
    company: "Johnson Daycare",
    email: "emily@johnsondaycare.com",
    phone: "(555) 456-7890",
    source: "Facebook",
    status: "Proposal",
    date: "2023-04-05",
    notes: "Daycare center requiring child-safe pest control solutions.",
    assignedTo: "Jane Smith",
  },
  {
    id: "LEAD005",
    name: "Michael Brown",
    company: "Brown Office Complex",
    email: "michael@brownoffices.com",
    phone: "(555) 567-8901",
    source: "Trade Show",
    status: "Negotiation",
    date: "2023-04-07",
    notes: "Office complex with 5 buildings. Looking for annual contract.",
    assignedTo: "Mike Johnson",
  },
  {
    id: "LEAD006",
    name: "Jennifer Wilson",
    company: "Wilson Hotel",
    email: "jennifer@wilsonhotel.com",
    phone: "(555) 678-9012",
    source: "Website",
    status: "Won",
    date: "2023-04-10",
    notes: "Hotel with 120 rooms. Signed annual contract for monthly service.",
    assignedTo: "Jane Smith",
  },
  {
    id: "LEAD007",
    name: "David Martinez",
    company: "Martinez Grocery",
    email: "david@martinezgrocery.com",
    phone: "(555) 789-0123",
    source: "Google Ads",
    status: "Lost",
    date: "2023-04-12",
    notes: "Went with competitor due to pricing.",
    assignedTo: "Mike Johnson",
  },
]



// Employees data
export const employee = [
  {
    id: 1,
    name: "Mike Smith",
    email: "mike.smith@pestpro.com",
    phone: "(555) 123-4567",
    address: "123 Tech St, Springfield, IL 62704",
    status: "Active",
    role: "Senior Technician",
    hireDate: "2020-05-15",
    certifications: ["General Pest Control", "Termite Control", "Rodent Control"],
    assignedZones: ["North Springfield", "Downtown"],
    completedJobs: 248,
    customerRating: 4.8,
    availability: "Full-time",
    schedule: [
      { date: "2025-04-05", appointments: 5, startTime: "08:00", endTime: "17:00" },
      { date: "2025-04-06", appointments: 4, startTime: "08:00", endTime: "17:00" },
      { date: "2025-04-07", appointments: 6, startTime: "08:00", endTime: "17:00" },
      { date: "2025-04-08", appointments: 5, startTime: "08:00", endTime: "17:00" },
      { date: "2025-04-09", appointments: 4, startTime: "08:00", endTime: "17:00" },
    ],
    notes: "Experienced technician with excellent customer service skills. Preferred for complex termite jobs.",
  },
  {
    id: 2,
    name: "David Chen",
    email: "david.chen@pestpro.com",
    phone: "(555) 987-6543",
    address: "456 Tech Ave, Springfield, IL 62701",
    status: "Active",
    role: "Technician",
    hireDate: "2022-03-10",
    certifications: ["General Pest Control", "Termite Control"],
    assignedZones: ["East Springfield", "Southeast County"],
    completedJobs: 187,
    customerRating: 4.6,
    availability: "Full-time",
    schedule: [
      { date: "2025-04-05", appointments: 4, startTime: "08:00", endTime: "17:00" },
      { date: "2025-04-06", appointments: 5, startTime: "08:00", endTime: "17:00" },
      { date: "2025-04-07", appointments: 3, startTime: "08:00", endTime: "17:00" },
      { date: "2025-04-08", appointments: 4, startTime: "08:00", endTime: "17:00" },
      { date: "2025-04-09", appointments: 5, startTime: "08:00", endTime: "17:00" },
    ],
    notes: "Specializes in commercial pest control. Very detail-oriented and thorough.",
  },
  {
    id: 3,
    name: "Lisa Wong",
    email: "lisa.wong@pestpro.com",
    phone: "(555) 456-7890",
    address: "789 Tech Rd, Springfield, IL 62702",
    status: "Active",
    role: "Technician",
    hireDate: "2021-08-22",
    certifications: ["General Pest Control", "Mosquito Control", "Ant Control"],
    assignedZones: ["West Springfield", "Northwest County"],
    completedJobs: 203,
    customerRating: 4.9,
    availability: "Full-time",
    schedule: [
      { date: "2025-04-05", appointments: 5, startTime: "08:00", endTime: "17:00" },
      { date: "2025-04-06", appointments: 4, startTime: "08:00", endTime: "17:00" },
      { date: "2025-04-07", appointments: 5, startTime: "08:00", endTime: "17:00" },
      { date: "2025-04-08", appointments: 3, startTime: "08:00", endTime: "17:00" },
      { date: "2025-04-09", appointments: 4, startTime: "08:00", endTime: "17:00" },
    ],
    notes: "Excellent with residential customers. Has received multiple customer commendations.",
  },
  {
    id: 4,
    name: "James Taylor",
    email: "james.taylor@pestpro.com",
    phone: "(555) 234-5678",
    address: "321 Tech Ln, Springfield, IL 62703",
    status: "Active",
    role: "Technician",
    hireDate: "2023-01-15",
    certifications: ["General Pest Control", "Mosquito Control"],
    assignedZones: ["South Springfield", "Southwest County"],
    completedJobs: 124,
    customerRating: 4.5,
    availability: "Full-time",
    schedule: [
      { date: "2025-04-05", appointments: 4, startTime: "08:00", endTime: "17:00" },
      { date: "2025-04-06", appointments: 3, startTime: "08:00", endTime: "17:00" },
      { date: "2025-04-07", appointments: 4, startTime: "08:00", endTime: "17:00" },
      { date: "2025-04-08", appointments: 5, startTime: "08:00", endTime: "17:00" },
      { date: "2025-04-09", appointments: 3, startTime: "08:00", endTime: "17:00" },
    ],
    notes: "Newer technician showing great promise. Particularly good with mosquito control services.",
  },
  {
    id: 5,
    name: "Sarah Johnson",
    email: "sarah.johnson@pestpro.com",
    phone: "(555) 876-5432",
    address: "654 Tech Dr, Springfield, IL 62704",
    status: "On Leave",
    role: "Senior Technician",
    hireDate: "2019-06-10",
    certifications: ["General Pest Control", "Termite Control", "Bed Bug Control", "Wildlife Control"],
    assignedZones: ["Central Springfield", "Northeast County"],
    completedJobs: 312,
    customerRating: 4.9,
    availability: "On Medical Leave",
    schedule: [],
    notes:
      "On medical leave until April 15, 2025. One of our most experienced technicians with excellent customer feedback.",
  },
  {
    id: 6,
    name: "Robert Martinez",
    email: "robert.martinez@pestpro.com",
    phone: "(555) 345-6789",
    address: "987 Tech Blvd, Springfield, IL 62701",
    status: "Active",
    role: "Part-time Technician",
    hireDate: "2024-01-05",
    certifications: ["General Pest Control"],
    assignedZones: ["South Springfield"],
    completedJobs: 45,
    customerRating: 4.3,
    availability: "Part-time",
    schedule: [
      { date: "2025-04-05", appointments: 3, startTime: "08:00", endTime: "13:00" },
      { date: "2025-04-07", appointments: 3, startTime: "08:00", endTime: "13:00" },
      { date: "2025-04-09", appointments: 3, startTime: "08:00", endTime: "13:00" },
    ],
    notes: "Part-time technician currently working on additional certifications.",
  },
]


// Sample data for charts
export const monthlyRevenue = [
  { name: "Jan", revenue: 12500 },
  { name: "Feb", revenue: 14200 },
  { name: "Mar", revenue: 16800 },
  { name: "Apr", revenue: 15900 },
  { name: "May", revenue: 17500 },
  { name: "Jun", revenue: 19200 },
  { name: "Jul", revenue: 20100 },
  { name: "Aug", revenue: 21500 },
  { name: "Sep", revenue: 22800 },
  { name: "Oct", revenue: 24500 },
  { name: "Nov", revenue: 23700 },
  { name: "Dec", revenue: 25000 },
]

export const serviceBreakdown = [
  { name: "General Pest Control", value: 45 },
  { name: "Termite Control", value: 20 },
  { name: "Rodent Control", value: 15 },
  { name: "Mosquito Control", value: 10 },
  { name: "Other Services", value: 10 },
]

export const customerGrowth = [
  { name: "Jan", residential: 120, commercial: 15 },
  { name: "Feb", residential: 132, commercial: 18 },
  { name: "Mar", residential: 145, commercial: 20 },
  { name: "Apr", residential: 160, commercial: 22 },
  { name: "May", residential: 178, commercial: 25 },
  { name: "Jun", residential: 195, commercial: 28 },
  { name: "Jul", residential: 210, commercial: 30 },
  { name: "Aug", residential: 228, commercial: 32 },
  { name: "Sep", residential: 245, commercial: 35 },
  { name: "Oct", residential: 260, commercial: 38 },
  { name: "Nov", residential: 275, commercial: 40 },
  { name: "Dec", residential: 290, commercial: 42 },
]

export const technicianPerformance = [
  { name: "Mike Smith", completedJobs: 248, customerRating: 4.8 },
  { name: "David Chen", completedJobs: 187, customerRating: 4.6 },
  { name: "Lisa Wong", completedJobs: 203, customerRating: 4.9 },
  { name: "James Taylor", completedJobs: 124, customerRating: 4.5 },
  { name: "Sarah Johnson", completedJobs: 312, customerRating: 4.9 },
  { name: "Robert Martinez", completedJobs: 45, customerRating: 4.3 },
]

export const COLORS = ["#10b981", "#0ea5e9", "#8b5cf6", "#f59e0b", "#ef4444"]

// Sample data for reports list
export const availableReports = [
  {
    id: 1,
    name: "Monthly Revenue Report",
    description: "Summary of revenue by month with comparisons to previous periods",
    category: "Financial",
    lastGenerated: "2025-04-01",
  },
  {
    id: 2,
    name: "Service Breakdown Analysis",
    description: "Analysis of services performed and their contribution to revenue",
    category: "Operations",
    lastGenerated: "2025-04-01",
  },
  {
    id: 3,
    name: "Customer Growth Report",
    description: "Tracking of customer acquisition and retention over time",
    category: "Sales",
    lastGenerated: "2025-04-01",
  },
  {
    id: 4,
    name: "Technician Performance Report",
    description: "Evaluation of technician productivity and customer satisfaction",
    category: "HR",
    lastGenerated: "2025-04-01",
  },
  {
    id: 5,
    name: "Accounts Receivable Aging",
    description: "Analysis of outstanding invoices by age",
    category: "Financial",
    lastGenerated: "2025-04-01",
  },
  {
    id: 6,
    name: "Service Area Heat Map",
    description: "Geographic distribution of service calls",
    category: "Operations",
    lastGenerated: "2025-04-01",
  },
  {
    id: 7,
    name: "Customer Satisfaction Survey Results",
    description: "Summary of customer feedback and satisfaction scores",
    category: "Customer Service",
    lastGenerated: "2025-04-01",
  },
  {
    id: 8,
    name: "Inventory Usage Report",
    description: "Tracking of chemical and equipment usage",
    category: "Operations",
    lastGenerated: "2025-04-01",
  },
]


// Customer Data data
export const customers = [
  {
    id: 1,
    name: "Robert Johnson",
    email: "robert.johnson@example.com",
    phone: "(555) 123-4567",
    address: "123 Main St, Apt 4B",
    city: "Springfield",
    state: "IL",
    zip: "62704",
    status: "Active",
    type: "Residential",
    lastService: "2025-03-15",
    nextService: "2025-04-15",
    notes: "Customer prefers afternoon appointments. Has a dog that needs to be secured during service.",
    serviceHistory: [
      {
        date: "2025-03-15",
        type: "Quarterly Pest Control",
        technician: "Mike Smith",
        notes: "Treated for ants in kitchen and bathroom.",
      },
      {
        date: "2024-12-10",
        type: "Quarterly Pest Control",
        technician: "David Chen",
        notes: "Treated exterior perimeter.",
      },
      {
        date: "2024-09-05",
        type: "Quarterly Pest Control",
        technician: "Lisa Wong",
        notes: "Customer reported spiders in basement.",
      },
    ],
  },
  {
    id: 2,
    name: "Sarah Williams",
    email: "sarah.williams@example.com",
    phone: "(555) 987-6543",
    address: "456 Oak Ave",
    city: "Springfield",
    state: "IL",
    zip: "62701",
    status: "Active",
    type: "Residential",
    lastService: "2025-03-20",
    nextService: "2025-04-20",
    notes: "Has termite warranty. Annual inspection due in November.",
    serviceHistory: [
      {
        date: "2025-03-20",
        type: "Termite Inspection",
        technician: "David Chen",
        notes: "No signs of termite activity.",
      },
      {
        date: "2024-11-15",
        type: "Annual Termite Inspection",
        technician: "Mike Smith",
        notes: "Renewed warranty for another year.",
      },
    ],
  },
  {
    id: 3,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    phone: "(555) 456-7890",
    address: "789 Pine Rd",
    city: "Springfield",
    state: "IL",
    zip: "62702",
    status: "Active",
    type: "Residential",
    lastService: "2025-03-10",
    nextService: "2025-04-10",
    notes: "Recurring ant problem in bathroom and kitchen.",
    serviceHistory: [
      {
        date: "2025-03-10",
        type: "Ant Treatment",
        technician: "Lisa Wong",
        notes: "Applied gel bait in kitchen and bathroom.",
      },
      {
        date: "2025-02-15",
        type: "Ant Treatment",
        technician: "Mike Smith",
        notes: "Customer reported ants returning.",
      },
      {
        date: "2025-01-20",
        type: "Initial Treatment",
        technician: "Lisa Wong",
        notes: "Full home inspection and initial treatment.",
      },
    ],
  },
  {
    id: 4,
    name: "Michael Brown",
    email: "michael.brown@example.com",
    phone: "(555) 234-5678",
    address: "321 Cedar Ln",
    city: "Springfield",
    state: "IL",
    zip: "62703",
    status: "Active",
    type: "Residential",
    lastService: "2025-03-05",
    nextService: "2025-04-05",
    notes: "Monthly mosquito treatment for backyard.",
    serviceHistory: [
      {
        date: "2025-03-05",
        type: "Mosquito Control",
        technician: "James Taylor",
        notes: "Treated yard perimeter and standing water areas.",
      },
      {
        date: "2025-02-05",
        type: "Mosquito Control",
        technician: "James Taylor",
        notes: "Winter treatment for dormant mosquitoes.",
      },
    ],
  },
  {
    id: 5,
    name: "Jennifer Miller",
    email: "jennifer.miller@example.com",
    phone: "(555) 876-5432",
    address: "654 Birch St",
    city: "Springfield",
    state: "IL",
    zip: "62704",
    status: "Active",
    type: "Residential",
    lastService: "2025-03-25",
    nextService: "2025-04-15",
    notes: "Bed bug treatment series in progress. Second of three treatments completed.",
    serviceHistory: [
      {
        date: "2025-03-25",
        type: "Bed Bug Treatment",
        technician: "Mike Smith",
        notes: "Second treatment completed. Customer following preparation instructions well.",
      },
      {
        date: "2025-03-11",
        type: "Bed Bug Treatment",
        technician: "David Chen",
        notes: "Initial treatment. Heavy infestation in bedroom.",
      },
    ],
  },
  {
    id: 6,
    name: "Oakridge Apartments",
    email: "manager@oakridgeapts.com",
    phone: "(555) 345-6789",
    address: "987 Elm St",
    city: "Springfield",
    state: "IL",
    zip: "62701",
    status: "Active",
    type: "Commercial",
    lastService: "2025-03-18",
    nextService: "2025-04-18",
    notes: "Monthly service for 24-unit apartment complex. Contact property manager upon arrival.",
    serviceHistory: [
      {
        date: "2025-03-18",
        type: "Commercial Pest Control",
        technician: "David Chen",
        notes: "Treated common areas and exterior.",
      },
      {
        date: "2025-02-18",
        type: "Commercial Pest Control",
        technician: "Lisa Wong",
        notes: "Treated units 103, 108, and 212 for reported cockroach issues.",
      },
    ],
  },
  {
    id: 7,
    name: "Springfield Elementary School",
    email: "facilities@springfieldelementary.edu",
    phone: "(555) 654-3210",
    address: "741 Maple Ave",
    city: "Springfield",
    state: "IL",
    zip: "62702",
    status: "Active",
    type: "Commercial",
    lastService: "2025-03-22",
    nextService: "2025-04-22",
    notes: "Monthly service. Must be performed after school hours or on weekends.",
    serviceHistory: [
      {
        date: "2025-03-22",
        type: "Commercial Pest Control",
        technician: "Mike Smith",
        notes: "Treated cafeteria and exterior perimeter.",
      },
      {
        date: "2025-02-22",
        type: "Commercial Pest Control",
        technician: "James Taylor",
        notes: "Focused on rodent prevention in storage areas.",
      },
    ],
  },
  {
    id: 8,
    name: "Thomas Anderson",
    email: "thomas.anderson@example.com",
    phone: "(555) 987-1234",
    address: "852 Walnut Dr",
    city: "Springfield",
    state: "IL",
    zip: "62703",
    status: "Inactive",
    type: "Residential",
    lastService: "2024-12-15",
    nextService: null,
    notes: "Customer moved out of service area. Final service completed in December 2024.",
    serviceHistory: [
      {
        date: "2024-12-15",
        type: "General Pest Control",
        technician: "David Chen",
        notes: "Final service before customer relocation.",
      },
      { date: "2024-09-15", type: "General Pest Control", technician: "Lisa Wong", notes: "Quarterly service." },
    ],
  },
]