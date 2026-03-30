export interface ParkingZone {
  id: string;
  name: string;
  zone: string;
  level: string;
  spot: string;
  rate: number;
  distance: string;
  spotsFree: number;
  maxDuration: string;
  security: string;
}

export const MOCK_ZONES: ParkingZone[] = [
  {
    id: '1',
    name: 'Financial District North',
    zone: '402',
    level: 'L3',
    spot: '12A',
    rate: 4.50,
    distance: '0.4 miles',
    spotsFree: 42,
    maxDuration: '4 Hours',
    security: 'CCTV & Patrol'
  },
  {
    id: '2',
    name: 'Central Plaza Garage',
    zone: '402',
    level: 'Floor 3',
    spot: '12A',
    rate: 6.00,
    distance: '0.2 miles',
    spotsFree: 15,
    maxDuration: '8 Hours',
    security: '24/7 Guarded'
  },
  {
    id: '3',
    name: 'Metropolis Plaza',
    zone: '4492',
    level: 'Level B2',
    spot: 'B2-45',
    rate: 4.00,
    distance: '0.8 miles',
    spotsFree: 120,
    maxDuration: 'Unlimited',
    security: 'Automated'
  }
];
