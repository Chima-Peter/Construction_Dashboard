import { nanoid } from "@reduxjs/toolkit"

export interface ProjectDetails {
   name: string,
   manager: string,
   progress: number
   startDate: string,
   endDate: string,
   keyDetails: string[],
   milestones: string[]
}

export interface ResourceProps {
   name: string
   units: number,
   spent: number,
   quantity: string
}

export interface BudgetProps {
   resources: Pick<ResourceProps, 'name'|'units'|'spent'>[],
   totalBudget: number,
   quantity: string
}

// Create type of slice in state
export interface ProjectProps {
   projectDetails: ProjectDetails,
   resources: ResourceProps[],
   budget: BudgetProps,
   status: string,
   id: string
}



// declare initial state
export interface ProjectDetails {
   name: string,
   manager: string,
   progress: number
   startDate: string,
   endDate: string,
   keyDetails: string[],
   milestones: string[]
}

export interface ResourceProps {
   name: string
   units: number,
   spent: number,
   quantity: string
}

export interface BudgetProps {
   resources: Pick<ResourceProps, 'name'|'units'|'spent'>[],
   totalBudget: number,
   quantity: string
}

// Create type of slice in state
export interface ProjectProps {
   projectDetails: ProjectDetails,
   resources: ResourceProps[],
   budget: BudgetProps,
   status: string,
   id: string
}
export const projectStatuses = [
   'not started',
   'planning',
   'in progress',
   'near completion',
   'complete',
   'paused',
   'cancelled',
 ];
 

export const InitialState: ProjectProps[] = [
  // In Progress
  {
    projectDetails: {
      name: 'Urban Tower Development',
      manager: 'John Doe',
      progress: 45,
      startDate: new Date('2023-01-01').toDateString(),
      endDate: new Date('2024-07-01').toDateString(),
      keyDetails: [
        'Foundation completed',
        'Structural framework ongoing',
        'Electrical and plumbing installations in progress',
        'Concrete pouring scheduled',
        'Safety inspections passed'
      ],
      milestones: [
        'Foundation completion',
        'Structure completion',
        'Electrical installations',
        'Plumbing installations',
        'Facade completion'
      ]
    },
    resources: [
      { name: 'Concrete', units: 5000, spent: 2500, quantity: 'tons' },
      { name: 'Steel', units: 4000, spent: 2000, quantity: 'tons' },
      { name: 'Labor', units: 10000, spent: 4500, quantity: 'hours' },
      { name: 'Electrical wiring', units: 2000, spent: 1000, quantity: 'meters' },
      { name: 'Plumbing pipes', units: 3000, spent: 1500, quantity: 'meters' }
    ],
    budget: {
      resources: [
        { name: 'Concrete', units: 1000000, spent: 500000 },
        { name: 'Steel', units: 800000, spent: 400000 },
        { name: 'Labor', units: 1500000, spent: 750000 },
        { name: 'Electrical wiring', units: 500000, spent: 250000 },
        { name: 'Plumbing pipes', units: 600000, spent: 300000 }
      ],
      totalBudget: 5000000,
      quantity: '$'
    },
    status: 'in progress',
    id: nanoid()
  },
  {
    projectDetails: {
      name: 'Bridge Construction',
      manager: 'Alice Johnson',
      progress: 60,
      startDate: new Date('2023-03-15').toDateString(),
      endDate: new Date('2024-09-15').toDateString(),
      keyDetails: [
        'Initial ground surveys complete',
        'Piers and abutments constructed',
        'Deck placement ongoing',
        'Cable-stayed system installation started',
        'Environmental impact assessments conducted'
      ],
      milestones: [
        'Ground surveys',
        'Pier construction',
        'Deck placement',
        'Cable installation',
        'Final inspection'
      ]
    },
    resources: [
      { name: 'Concrete', units: 7000, spent: 3500, quantity: 'tons' },
      { name: 'Steel cables', units: 5000, spent: 3000, quantity: 'meters' },
      { name: 'Labor', units: 12000, spent: 6000, quantity: 'hours' },
      { name: 'Machinery', units: 500, spent: 250, quantity: 'hours' },
      { name: 'Environmental consultants', units: 2000, spent: 1000, quantity: 'hours' }
    ],
    budget: {
      resources: [
        { name: 'Concrete', units: 1400000, spent: 700000 },
        { name: 'Steel cables', units: 1200000, spent: 600000 },
        { name: 'Labor', units: 1800000, spent: 900000 },
        { name: 'Machinery', units: 500000, spent: 250000 },
        { name: 'Environmental consultants', units: 400000, spent: 200000 }
      ],
      totalBudget: 5300000,
      quantity: '$'
    },
    status: 'in progress',
    id: nanoid()
  },
  {
    projectDetails: {
      name: 'Highway Expansion',
      manager: 'Michael Lee',
      progress: 72,
      startDate: new Date('2022-06-01').toDateString(),
      endDate: new Date('2024-01-01').toDateString(),
      keyDetails: [
        'Land acquisition completed',
        'Initial earthwork and grading done',
        'Paving of lanes in progress',
        'Bridge construction ongoing',
        'Environmental clearances obtained'
      ],
      milestones: [
        'Land acquisition',
        'Earthwork',
        'Paving',
        'Bridge construction',
        'Final inspection'
      ]
    },
    resources: [
      { name: 'Asphalt', units: 8000, spent: 5760, quantity: 'tons' },
      { name: 'Gravel', units: 10000, spent: 7200, quantity: 'tons' },
      { name: 'Labor', units: 15000, spent: 10800, quantity: 'hours' },
      { name: 'Machinery', units: 1000, spent: 720, quantity: 'hours' },
      { name: 'Bridge materials', units: 6000, spent: 4320, quantity: 'tons' }
    ],
    budget: {
      resources: [
        { name: 'Asphalt', units: 1600000, spent: 1152000 },
        { name: 'Gravel', units: 2000000, spent: 1440000 },
        { name: 'Labor', units: 3000000, spent: 2160000 },
        { name: 'Machinery', units: 800000, spent: 576000 },
        { name: 'Bridge materials', units: 1200000, spent: 864000 }
      ],
      totalBudget: 8600000,
      quantity: '$'
    },
    status: 'in progress',
    id: nanoid()
  },
  {
    projectDetails: {
      name: 'Hospital Wing Extension',
      manager: 'Karen Miller',
      progress: 53,
      startDate: new Date('2023-05-01').toDateString(),
      endDate: new Date('2024-11-01').toDateString(),
      keyDetails: [
        'Foundations laid',
        'Walls and roofing in progress',
        'Interior planning underway',
        'Medical equipment procurement started',
        'Parking area construction started'
      ],
      milestones: [
        'Foundation work',
        'Walls and roofing',
        'Interior finishing',
        'Equipment installation',
        'Final inspection'
      ]
    },
    resources: [
      { name: 'Concrete', units: 7000, spent: 3710, quantity: 'tons' },
      { name: 'Steel', units: 4000, spent: 2120, quantity: 'tons' },
      { name: 'Labor', units: 12000, spent: 6360, quantity: 'hours' },
      { name: 'Medical equipment', units: 500, spent: 265, quantity: 'units' },
      { name: 'Interior materials', units: 3000, spent: 1590, quantity: 'sq.m' }
    ],
    budget: {
      resources: [
        { name: 'Concrete', units: 1400000, spent: 742000 },
        { name: 'Steel', units: 800000, spent: 424000 },
        { name: 'Labor', units: 2400000, spent: 1272000 },
        { name: 'Medical equipment', units: 1000000, spent: 530000 },
        { name: 'Interior materials', units: 600000, spent: 318000 }
      ],
      totalBudget: 6200000,
      quantity: '$'
    },
    status: 'in progress',
    id: nanoid()
  },

  // Complete
  {
    projectDetails: {
      name: 'Residential Complex',
      manager: 'Sarah Wilson',
      progress: 100,
      startDate: new Date('2022-01-01').toDateString(),
      endDate: new Date('2023-01-01').toDateString(),
      keyDetails: [
        'All units sold out',
        'Final safety checks passed',
        'Landscaping completed',
        'Interior finishing completed',
        'Building handed over to management company'
      ],
      milestones: [
        'Foundation completion',
        'Structural framework',
        'Interior finishing',
        'Safety checks',
        'Handover'
      ]
    },
    resources: [
      { name: 'Concrete', units: 8000, spent: 8000, quantity: 'tons' },
      { name: 'Steel', units: 6000, spent: 6000, quantity: 'tons' },
      { name: 'Labor', units: 15000, spent: 15000, quantity: 'hours' },
      { name: 'Interior materials', units: 4000, spent: 4000, quantity: 'sq.m' },
      { name: 'Landscaping materials', units: 1000, spent: 1000, quantity: 'sq.m' }
    ],
    budget: {
      resources: [
        { name: 'Concrete', units: 1600000, spent: 1600000 },
        { name: 'Steel', units: 1200000, spent: 1200000 },
        { name: 'Labor', units: 3000000, spent: 3000000 },
        { name: 'Interior materials', units: 800000, spent: 800000 },
        { name: 'Landscaping materials', units: 200000, spent: 200000 }
      ],
      totalBudget: 6800000,
      quantity: '$'
    },
    status: 'complete',
    id: nanoid()
  },
  {
    projectDetails: {
      name: 'University Research Center',
      manager: 'Brian Davis',
      progress: 100,
      startDate: new Date('2021-03-01').toDateString(),
      endDate: new Date('2022-12-01').toDateString(),
      keyDetails: [
        'Laboratories fully equipped',
        'Safety certifications obtained',
        'Advanced computing systems installed',
        'Faculty offices furnished',
        'Building inaugurated'
      ],
      milestones: [
        'Foundation completion',
        'Structural work',
        'Lab equipment installation',
        'Safety certification',
        'Inauguration'
      ]
    },
    resources: [
      { name: 'Concrete', units: 6000, spent: 6000, quantity: 'tons' },
      { name: 'Steel', units: 5000, spent: 5000, quantity: 'tons' },
      { name: 'Labor', units: 12000, spent: 12000, quantity: 'hours' },
      { name: 'Lab equipment', units: 1000, spent: 1000, quantity: 'units' },
      { name: 'Furnishing materials', units: 2000, spent: 2000, quantity: 'sq.m' }
    ],
    budget: {
      resources: [
        { name: 'Concrete', units: 1200000, spent: 1200000 },
        { name: 'Steel', units: 1000000, spent: 1000000 },
        { name: 'Labor', units: 2400000, spent: 2400000 },
        { name: 'Lab equipment', units: 2000000, spent: 2000000 },
        { name: 'Furnishing materials', units: 400000, spent: 400000 }
      ],
      totalBudget: 7000000,
      quantity: '$'
    },
    status: 'complete',
    id: nanoid()
  },

  // Near Completion
  {
    projectDetails: {
      name: 'City Park Renovation',
      manager: 'Emma Taylor',
      progress: 89,
      startDate: new Date('2023-01-01').toDateString(),
      endDate: new Date('2023-12-01').toDateString(),
      keyDetails: [
        'Playground installation completed',
        'Walking paths resurfaced',
        'New lighting installed',
        'Tree planting in progress',
        'Final landscaping touches ongoing'
      ],
      milestones: [
        'Initial demolition',
        'Playground installation',
        'Pathway resurfacing',
        'Lighting installation',
        'Final inspection'
      ]
    },
    resources: [
      { name: 'Paving materials', units: 3000, spent: 2670, quantity: 'sq.m' },
      { name: 'Lighting equipment', units: 200, spent: 178, quantity: 'units' },
      { name: 'Trees', units: 150, spent: 133, quantity: 'units' },
      { name: 'Labor', units: 4000, spent: 3560, quantity: 'hours' },
      { name: 'Landscaping materials', units: 2000, spent: 1780, quantity: 'sq.m' }
    ],
    budget: {
      resources: [
        { name: 'Paving materials', units: 600000, spent: 534000 },
        { name: 'Lighting equipment', units: 400000, spent: 356000 },
        { name: 'Trees', units: 300000, spent: 267000 },
        { name: 'Labor', units: 800000, spent: 712000 },
        { name: 'Landscaping materials', units: 400000, spent: 356000 }
      ],
      totalBudget: 2500000,
      quantity: '$'
    },
    status: 'near completion',
    id: nanoid()
  },
  {
    projectDetails: {
      name: 'Subway Station Upgrade',
      manager: 'Lucas Brown',
      progress: 93,
      startDate: new Date('2022-07-01').toDateString(),
      endDate: new Date('2023-09-01').toDateString(),
      keyDetails: [
        'Platform extensions completed',
        'Accessibility features installed',
        'New escalators installed',
        'Signage replacement in progress',
        'Final safety checks ongoing'
      ],
      milestones: [
        'Platform extension',
        'Accessibility installation',
        'Escalator installation',
        'Signage replacement',
        'Safety checks'
      ]
    },
    resources: [
      { name: 'Construction materials', units: 5000, spent: 4650, quantity: 'tons' },
      { name: 'Electrical systems', units: 2000, spent: 1860, quantity: 'meters' },
      { name: 'Labor', units: 8000, spent: 7440, quantity: 'hours' },
      { name: 'Signage', units: 1000, spent: 930, quantity: 'units' },
      { name: 'Escalators', units: 50, spent: 47, quantity: 'units' }
    ],
    budget: {
      resources: [
        { name: 'Construction materials', units: 1000000, spent: 930000 },
        { name: 'Electrical systems', units: 800000, spent: 744000 },
        { name: 'Labor', units: 1600000, spent: 1488000 },
        { name: 'Signage', units: 400000, spent: 372000 },
        { name: 'Escalators', units: 200000, spent: 186000 }
      ],
      totalBudget: 4000000,
      quantity: '$'
    },
    status: 'near completion',
    id: nanoid()
  },

  // Not Started
  {
    projectDetails: {
      name: 'Airport Terminal Expansion',
      manager: 'James Green',
      progress: 0,
      startDate: new Date('2024-01-01').toDateString(),
      endDate: new Date('2025-12-01').toDateString(),
      keyDetails: [
        'Project planning completed',
        'Architectural designs approved',
        'Construction permits obtained',
        'Initial site survey scheduled',
        'Pre-construction meeting held'
      ],
      milestones: [
        'Planning',
        'Design approval',
        'Permit acquisition',
        'Site survey',
        'Construction kickoff'
      ]
    },
    resources: [
      { name: 'Concrete', units: 0, spent: 0, quantity: 'tons' },
      { name: 'Steel', units: 0, spent: 0, quantity: 'tons' },
      { name: 'Labor', units: 0, spent: 0, quantity: 'hours' },
      { name: 'Electrical wiring', units: 0, spent: 0, quantity: 'meters' },
      { name: 'Interior materials', units: 0, spent: 0, quantity: 'sq.m' }
    ],
    budget: {
      resources: [
        { name: 'Concrete', units: 0, spent: 0 },
        { name: 'Steel', units: 0, spent: 0 },
        { name: 'Labor', units: 0, spent: 0 },
        { name: 'Electrical wiring', units: 0, spent: 0 },
        { name: 'Interior materials', units: 0, spent: 0 }
      ],
      totalBudget: 8000000,
      quantity: '$'
    },
    status: 'not started',
    id: nanoid()
  },
  {
    projectDetails: {
      name: 'Commercial Plaza Construction',
      manager: 'Victoria Baker',
      progress: 0,
      startDate: new Date('2024-04-01').toDateString(),
      endDate: new Date('2026-03-01').toDateString(),
      keyDetails: [
        'Land purchase finalized',
        'Designs under review',
        'Environmental impact study completed',
        'Zoning approvals pending',
        'Contractor bidding process ongoing'
      ],
      milestones: [
        'Land acquisition',
        'Design approval',
        'Impact study',
        'Zoning approval',
        'Construction kickoff'
      ]
    },
    resources: [
      { name: 'Concrete', units: 0, spent: 0, quantity: 'tons' },
      { name: 'Steel', units: 0, spent: 0, quantity: 'tons' },
      { name: 'Labor', units: 0, spent: 0, quantity: 'hours' },
      { name: 'Electrical systems', units: 0, spent: 0, quantity: 'meters' },
      { name: 'Furnishing materials', units: 0, spent: 0, quantity: 'sq.m' }
    ],
    budget: {
      resources: [
        { name: 'Concrete', units: 0, spent: 0 },
        { name: 'Steel', units: 0, spent: 0 },
        { name: 'Labor', units: 0, spent: 0 },
        { name: 'Electrical systems', units: 0, spent: 0 },
        { name: 'Furnishing materials', units: 0, spent: 0 }
      ],
      totalBudget: 10000000,
      quantity: '$'
    },
    status: 'not started',
    id: nanoid()
  },
   {
  projectDetails: {
    name: 'Old Stadium Renovation',
    manager: 'John Miller',
    progress: 0,
    startDate: new Date('2022-01-01').toDateString(),
    endDate: new Date('2023-06-01').toDateString(),
    keyDetails: [
      'Project halted due to funding issues',
      'Initial designs were completed',
      'Construction permits were obtained',
      'Contractors were selected',
      'Site preparation began'
    ],
    milestones: [
      'Initial planning',
      'Design completion',
      'Permit acquisition',
      'Contractor selection',
      'Site preparation'
    ]
  },
  resources: [
    { name: 'Concrete', units: 0, spent: 0, quantity: 'tons' },
    { name: 'Steel', units: 0, spent: 0, quantity: 'tons' },
    { name: 'Labor', units: 0, spent: 0, quantity: 'hours' },
    { name: 'Electrical systems', units: 0, spent: 0, quantity: 'meters' },
    { name: 'Interior materials', units: 0, spent: 0, quantity: 'sq.m' }
  ],
  budget: {
    resources: [
      { name: 'Concrete', units: 0, spent: 0 },
      { name: 'Steel', units: 0, spent: 0 },
      { name: 'Labor', units: 0, spent: 0 },
      { name: 'Electrical systems', units: 0, spent: 0 },
      { name: 'Interior materials', units: 0, spent: 0 }
    ],
    totalBudget: 5000000,
    quantity: '$'
  },
  status: 'cancelled',
  id: nanoid()
   },
   {
    projectDetails: {
      name: 'City Library Expansion',
      manager: 'Sophia White',
      progress: 45,
      startDate: new Date('2023-05-01').toDateString(),
      endDate: new Date('2024-08-01').toDateString(),
      keyDetails: [
        'Building design finalized',
        'Contractor selected',
        'Initial excavation completed',
        'Construction paused for redesign',
        'Funding adjustments in progress'
      ],
      milestones: [
        'Design completion',
        'Contractor selection',
        'Excavation',
        'Redesign pause',
        'Funding review'
      ]
    },
    resources: [
      { name: 'Concrete', units: 800, spent: 360, quantity: 'tons' },
      { name: 'Steel', units: 500, spent: 225, quantity: 'tons' },
      { name: 'Labor', units: 1200, spent: 540, quantity: 'hours' },
      { name: 'Electrical wiring', units: 3000, spent: 1350, quantity: 'meters' },
      { name: 'Interior materials', units: 2000, spent: 900, quantity: 'sq.m' }
    ],
    budget: {
      resources: [
        { name: 'Concrete', units: 1500000, spent: 675000 },
        { name: 'Steel', units: 1000000, spent: 450000 },
        { name: 'Labor', units: 2000000, spent: 900000 },
        { name: 'Electrical wiring', units: 500000, spent: 225000 },
        { name: 'Interior materials', units: 300000, spent: 135000 }
      ],
      totalBudget: 2000000,
      quantity: '$'
    },
    status: 'paused',
    id: nanoid()
  },
  {
    projectDetails: {
      name: 'Museum Upgrade Project',
      manager: 'Olivia Martin',
      progress: 62,
      startDate: new Date('2022-11-01').toDateString(),
      endDate: new Date('2024-03-01').toDateString(),
      keyDetails: [
        'Exhibition space redesign completed',
        'New lighting systems installed',
        'Construction paused for logistical reasons',
        'Final inspections pending',
        'Revised budget approval underway'
      ],
      milestones: [
        'Redesign completion',
        'Lighting installation',
        'Construction pause',
        'Inspection',
        'Budget approval'
      ]
    },
    resources: [
      { name: 'Lighting systems', units: 200, spent: 120, quantity: 'units' },
      { name: 'Exhibition materials', units: 500, spent: 310, quantity: 'units' },
      { name: 'Labor', units: 1500, spent: 930, quantity: 'hours' },
      { name: 'Construction materials', units: 4000, spent: 2480, quantity: 'tons' },
      { name: 'Interior finishes', units: 1000, spent: 620, quantity: 'sq.m' }
    ],
    budget: {
      resources: [
        { name: 'Lighting systems', units: 400000, spent: 240000 },
        { name: 'Exhibition materials', units: 1000000, spent: 620000 },
        { name: 'Labor', units: 3000000, spent: 1860000 },
        { name: 'Construction materials', units: 600000, spent: 3720000 },
        { name: 'Interior finishes', units: 200000, spent: 124000 }
      ],
      totalBudget: 4000000,
      quantity: '$'
    },
    status: 'paused',
    id: nanoid()
  }
];