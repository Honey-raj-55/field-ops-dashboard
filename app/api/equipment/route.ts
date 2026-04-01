// app/api/equipment/route.ts

import { NextResponse } from 'next/server';

type Status = 'Ready' | 'In Use' | 'Repair';

type EquipmentItem = {
  id: string;
  name: string;
  site: string;
  status: Status;
};

const ALL_EQUIPMENT: EquipmentItem[] = [
  { id: 'EQ-001', name: 'Excavator 320D', site: 'Dallas Site A', status: 'Ready' },
  { id: 'EQ-002', name: 'Bulldozer D6', site: 'Plano Site B', status: 'In Use' },
  { id: 'EQ-003', name: 'Tower Crane TC1', site: 'Irving Site C', status: 'Repair' },
  { id: 'EQ-004', name: 'Concrete Mixer CM9', site: 'Dallas Site A', status: 'Ready' },
  { id: 'EQ-005', name: 'Forklift FL12', site: 'Frisco Site D', status: 'In Use' },
  { id: 'EQ-006', name: 'Loader LD7', site: 'Arlington Site E', status: 'Repair' },
];

export async function GET() {
  try {
    return NextResponse.json(
      {
        success: true,
        message: 'Equipment fetched successfully.',
        data: ALL_EQUIPMENT,
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to fetch equipment.',
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { id, name, site, status } = body as Partial<EquipmentItem>;

    if (!id || !name || !site || !status) {
      return NextResponse.json(
        {
          success: false,
          message: 'id, name, site, and status are required.',
        },
        { status: 400 }
      );
    }

    const validStatuses: Status[] = ['Ready', 'In Use', 'Repair'];

    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid status value.',
        },
        { status: 400 }
      );
    }

    const newEquipment: EquipmentItem = {
      id,
      name,
      site,
      status,
    };

    return NextResponse.json(
      {
        success: true,
        message: 'Equipment created successfully.',
        data: newEquipment,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to create equipment.',
      },
      { status: 500 }
    );
  }
}