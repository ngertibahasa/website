import { stats } from "@/data/stats";

const Stats: React.FC = () => {
  return (
    <section id="stats" className="mx-auto pb-20">
      <div className="grid sm:grid-cols-3 gap-8">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="text-center max-w-md sm:max-w-full mx-auto"
          >
            <h3 className="mb-5 flex items-center gap-2 text-3xl font-semibold justify-center hover:scale-105">
              {stat.icon}
              {stat.title}
            </h3>
            <p className="text-foreground-accent">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
