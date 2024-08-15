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
   units: string,
   spent: string,
   quantity: string
}

export interface BudgetProps {
   resources: Pick<ResourceProps, 'name'|'units'|'spent'>[],
   totalBudget: string,
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
   units: string,
   spent: string,
   quantity: string
}

export interface BudgetProps {
   resources: Pick<ResourceProps, 'name'|'units'|'spent'>[],
   totalBudget: string,
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
      startDate: '2023-01-01',
      endDate: '2024-07-01',
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
      { name: 'Concrete', units: '5000', spent: '2500', quantity: 'tons' },
      { name: 'Steel', units: '4000', spent: '2000', quantity: 'tons' },
      { name: 'Labor', units: '10000', spent: '4500', quantity: 'hours' },
      { name: 'Electrical wiring', units: '2000', spent: '1000', quantity: 'meters' },
      { name: 'Plumbing pipes', units: '3000', spent: '1500', quantity: 'meters' }
    ],
    budget: {
      resources: [
        { name: 'Concrete', units: '1000000', spent: '500000' },
        { name: 'Steel', units: '800000', spent: '400000' },
        { name: 'Labor', units: '1500000', spent: '750000' },
        { name: 'Electrical wiring', units: '500000', spent: '250000' },
        { name: 'Plumbing pipes', units: '600000', spent: '300000' }
      ],
      totalBudget: '5000000',
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
      startDate: '2023-03-15',
      endDate: '2024-09-15',
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
      { name: 'Concrete', units: '7000', spent: '3500', quantity: 'tons' },
      { name: 'Steel cables', units: '5000', spent: '3000', quantity: 'meters' },
      { name: 'Labor', units: '12000', spent: '6000', quantity: 'hours' },
      { name: 'Machinery', units: '500', spent: '250', quantity: 'hours' },
      { name: 'Environmental consultants', units: '2000', spent: '1000', quantity: 'hours' }
    ],
    budget: {
      resources: [
        { name: 'Concrete', units: '1400000', spent: '700000' },
        { name: 'Steel cables', units: '1200000', spent: '600000' },
        { name: 'Labor', units: '1800000', spent: '900000' },
        { name: 'Machinery', units: '500000', spent: '250000' },
        { name: 'Environmental consultants', units: '400000', spent: '200000' }
      ],
      totalBudget: '5300000',
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
      startDate: '2022-06-01',
      endDate: '2024-01-01',
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
      { name: 'Asphalt', units: '8000', spent: '5760', quantity: 'tons' },
      { name: 'Gravel', units: '10000', spent: '7200', quantity: 'tons' },
      { name: 'Labor', units: '15000', spent: '10800', quantity: 'hours' },
      { name: 'Machinery', units: '1000', spent: '720', quantity: 'hours' },
      { name: 'Bridge materials', units: '6000', spent: '4320', quantity: 'tons' }
    ],
    budget: {
      resources: [
        { name: 'Asphalt', units: '1600000', spent: '1152000' },
        { name: 'Gravel', units: '2000000', spent: '1440000' },
        { name: 'Labor', units: '3000000', spent: '2160000' },
        { name: 'Machinery', units: '800000', spent: '576000' },
        { name: 'Bridge materials', units: '1200000', spent: '864000' }
      ],
      totalBudget: '8600000',
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
      startDate: '2023-05-01',
      endDate: '2024-11-01',
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
      { name: 'Concrete', units: '7000', spent: '3710', quantity: 'tons' },
      { name: 'Steel', units: '4000', spent: '2120', quantity: 'tons' },
      { name: 'Labor', units: '12000', spent: '6360', quantity: 'hours' },
      { name: 'Medical equipment', units: '500', spent: '265', quantity: 'units' },
      { name: 'Interior materials', units: '3000', spent: '1590', quantity: 'sq.m' }
    ],
    budget: {
      resources: [
        { name: 'Concrete', units: '1400000', spent: '742000' },
        { name: 'Steel', units: '800000', spent: '424000' },
        { name: 'Labor', units: '2400000', spent: '1272000' },
        { name: 'Medical equipment', units: '1000000', spent: '530000' },
        { name: 'Interior materials', units: '600000', spent: '318000' }
      ],
      totalBudget: '6200000',
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
      startDate: '2022-01-01',
      endDate: '2023-01-01',
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
      { name: 'Concrete', units: '8000', spent: '8000', quantity: 'tons' },
      { name: 'Steel', units: '6000', spent: '6000', quantity: 'tons' },
      { name: 'Labor', units: '15000', spent: '15000', quantity: 'hours' },
      { name: 'Interior materials', units: '4000', spent: '4000', quantity: 'sq.m' },
      { name: 'Landscaping materials', units: '1000', spent: '1000', quantity: 'sq.m' }
    ],
    budget: {
      resources: [
        { name: 'Concrete', units: '1600000', spent: '1600000' },
        { name: 'Steel', units: '1200000', spent: '1200000' },
        { name: 'Labor', units: '3000000', spent: '3000000' },
        { name: 'Interior materials', units: '800000', spent: '800000' },
        { name: 'Landscaping materials', units: '200000', spent: '200000' }
      ],
      totalBudget: '6800000',
      quantity: '$'
    },
    status: 'complete',
    id: nanoid()
  },
  {
    projectDetails: {
      name: 'Office Building Renovation',
      manager: 'David Smith',
      progress: 100,
      startDate: '2022-03-01',
      endDate: '2023-03-01',
      keyDetails: [
        'Building facade updated',
        'Interior spaces remodeled',
        'HVAC systems upgraded',
        'Energy-efficient lighting installed',
        'Parking lot resurfaced'
      ],
      milestones: [
        'Facade update',
        'Interior remodeling',
        'HVAC upgrade',
        'Lighting installation',
        'Final inspection'
      ]
    },
    resources: [
      { name: 'Facade materials', units: '5000', spent: '5000', quantity: 'sq.m' },
      { name: 'Interior materials', units: '4000', spent: '4000', quantity: 'sq.m' },
      { name: 'Labor', units: '12000', spent: '12000', quantity: 'hours' },
      { name: 'HVAC systems', units: '100', spent: '100', quantity: 'units' },
      { name: 'Lighting systems', units: '500', spent: '500', quantity: 'units' }
    ],
    budget: {
      resources: [
        { name: 'Facade materials', units: '1000000', spent: '1000000' },
        { name: 'Interior materials', units: '800000', spent: '800000' },
        { name: 'Labor', units: '2400000', spent: '2400000' },
        { name: 'HVAC systems', units: '500000', spent: '500000' },
        { name: 'Lighting systems', units: '300000', spent: '300000' }
      ],
      totalBudget: '5000000',
      quantity: '$'
    },
    status: 'complete',
    id: nanoid()
  },
  {
    projectDetails: {
      name: 'Public Park Development',
      manager: 'Emma Brown',
      progress: 100,
      startDate: '2022-05-01',
      endDate: '2023-06-01',
      keyDetails: [
        'Playgrounds installed',
        'Walking paths paved',
        'Trees and plants planted',
        'Lighting installed',
        'Water features completed'
      ],
      milestones: [
        'Landscaping',
        'Path paving',
        'Playground installation',
        'Lighting installation',
        'Final inspection'
      ]
    },
    resources: [
      { name: 'Paving materials', units: '6000', spent: '6000', quantity: 'sq.m' },
      { name: 'Trees and plants', units: '3000', spent: '3000', quantity: 'units' },
      { name: 'Labor', units: '10000', spent: '10000', quantity: 'hours' },
      { name: 'Lighting systems', units: '300', spent: '300', quantity: 'units' },
      { name: 'Water features', units: '100', spent: '100', quantity: 'units' }
    ],
    budget: {
      resources: [
        { name: 'Paving materials', units: '1200000', spent: '1200000' },
        { name: 'Trees and plants', units: '600000', spent: '600000' },
        { name: 'Labor', units: '2000000', spent: '2000000' },
        { name: 'Lighting systems', units: '400000', spent: '400000' },
        { name: 'Water features', units: '300000', spent: '300000' }
      ],
      totalBudget: '4500000',
      quantity: '$'
    },
    status: 'complete',
    id: nanoid()
  },

  // Near Completion
  {
    projectDetails: {
      name: 'School Building Construction',
      manager: 'Jessica White',
      progress: 93,
      startDate: '2023-02-01',
      endDate: '2024-09-01',
      keyDetails: [
        'Roofing completed',
        'Windows and doors installed',
        'Interior painting underway',
        'Playground construction ongoing',
        'Final safety checks scheduled'
      ],
      milestones: [
        'Foundation work',
        'Structural framework',
        'Roofing',
        'Interior work',
        'Final inspection'
      ]
    },
    resources: [
      { name: 'Concrete', units: '6000', spent: '5580', quantity: 'tons' },
      { name: 'Bricks', units: '8000', spent: '7440', quantity: 'units' },
      { name: 'Labor', units: '12000', spent: '11160', quantity: 'hours' },
      { name: 'Roofing materials', units: '3000', spent: '2790', quantity: 'sq.m' },
      { name: 'Interior paint', units: '2000', spent: '1860', quantity: 'liters' }
    ],
    budget: {
      resources: [
        { name: 'Concrete', units: '1200000', spent: '1116000' },
        { name: 'Bricks', units: '1600000', spent: '1488000' },
        { name: 'Labor', units: '2400000', spent: '2232000' },
        { name: 'Roofing materials', units: '600000', spent: '558000' },
        { name: 'Interior paint', units: '400000', spent: '372000' }
      ],
      totalBudget: '6200000',
      quantity: '$'
    },
    status: 'near completion',
    id: nanoid()
  },
  {
    projectDetails: {
      name: 'Commercial Plaza',
      manager: 'James Anderson',
      progress: 87,
      startDate: '2022-08-01',
      endDate: '2024-05-01',
      keyDetails: [
        'Glass facade installed',
        'Elevators and escalators operational',
        'Interior work in progress',
        'Parking structure nearing completion',
        'Final permits and inspections pending'
      ],
      milestones: [
        'Structural work',
        'Facade installation',
        'Interior finishing',
        'Equipment installation',
        'Final inspection'
      ]
    },
    resources: [
      { name: 'Concrete', units: '9000', spent: '7830', quantity: 'tons' },
      { name: 'Glass', units: '5000', spent: '4350', quantity: 'sq.m' },
      { name: 'Labor', units: '18000', spent: '15660', quantity: 'hours' },
      { name: 'Electrical systems', units: '1000', spent: '870', quantity: 'units' },
      { name: 'HVAC systems', units: '500', spent: '435', quantity: 'units' }
    ],
    budget: {
      resources: [
        { name: 'Concrete', units: '1800000', spent: '1566000' },
        { name: 'Glass', units: '1000000', spent: '870000' },
        { name: 'Labor', units: '3600000', spent: '3132000' },
        { name: 'Electrical systems', units: '2000000', spent: '1740000' },
        { name: 'HVAC systems', units: '1000000', spent: '870000' }
      ],
      totalBudget: '9400000',
      quantity: '$'
    },
    status: 'near completion',
    id: nanoid()
  },
  {
    projectDetails: {
      name: 'Airport Terminal Expansion',
      manager: 'Olivia Martinez',
      progress: 99,
      startDate: '2022-02-01',
      endDate: '2024-10-01',
      keyDetails: [
        'Runway extension completed',
        'Terminal building construction completed',
        'Security systems installed',
        'Passenger amenities installed',
        'Final testing and commissioning underway'
      ],
      milestones: [
        'Runway extension',
        'Terminal building',
        'Security systems',
        'Passenger amenities',
        'Final inspection'
      ]
    },
    resources: [
      { name: 'Concrete', units: '10000', spent: '9900', quantity: 'tons' },
      { name: 'Steel', units: '8000', spent: '7920', quantity: 'tons' },
      { name: 'Labor', units: '20000', spent: '19800', quantity: 'hours' },
      { name: 'Security systems', units: '2000', spent: '1980', quantity: 'units' },
      { name: 'Passenger amenities', units: '3000', spent: '2970', quantity: 'units' }
    ],
    budget: {
      resources: [
        { name: 'Concrete', units: '2000000', spent: '1980000' },
        { name: 'Steel', units: '1600000', spent: '1584000' },
        { name: 'Labor', units: '4000000', spent: '3960000' },
        { name: 'Security systems', units: '2000000', spent: '1980000' },
        { name: 'Passenger amenities', units: '3000000', spent: '2970000' }
      ],
      totalBudget: '12600000',
      quantity: '$'
    },
    status: 'near completion',
    id: nanoid()
  }
];
