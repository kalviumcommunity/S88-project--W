// Runs ONLY on the server during SSR

export type WasteReport = {
  id: number;
  household: string;
  ward: string;
  dry: number;
  wet: number;
  hazardous: number;
  score: number;
  verified: boolean;
  createdAt: string;
};

export function getDummyReports(): WasteReport[] {
  return Array.from({ length: 5 }).map((_, i) => {
    const dry = Math.floor(Math.random() * 5) + 1;
    const wet = Math.floor(Math.random() * 7) + 1;
    const hazardous = Math.floor(Math.random() * 2);
    const score = Math.min(100, (dry + wet) * 10);

    return {
      id: i + 1,
      household: `House-${100 + i}`,
      ward: `Ward-${Math.floor(Math.random() * 4) + 1}`,
      dry,
      wet,
      hazardous,
      score,
      verified: Math.random() > 0.3,
      createdAt: new Date().toISOString(),
    };
  });
}
