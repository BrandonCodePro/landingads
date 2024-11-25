interface StatProps {
  value: string;
  label: string;
}

function Stat({ value, label }: StatProps) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-indigo-600 mb-2">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
      <Stat value="$15M+" label="Ad Spend Managed" />
      <Stat value="250+" label="Happy Clients" />
      <Stat value="98%" label="Client Retention" />
      <Stat value="3.8x" label="Avg. ROAS" />
    </div>
  );
}