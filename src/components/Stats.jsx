const stats = [
  { value: '100%', label: 'Organic Certified' },
  { value: '50K+', label: 'Happy Customers' },
  { value: '0', label: 'Additives or Preservatives' },
  { value: '48h', label: 'Dispatch Guarantee' },
];

export default function Stats() {
  return (
    <section className="bg-green-700 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-3xl font-bold font-serif mb-1">{stat.value}</p>
            <p className="text-green-200 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
