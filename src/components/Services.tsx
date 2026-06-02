import { motion } from "framer-motion";
import training from "@/assets/training.jpg";
import cac from "@/assets/cac.jpg";
import range from "@/assets/range.jpg";

const services = [
  {
    n: "01",
    title: "Cursos Especializados",
    desc: "Capacitamos atiradores com treinamentos práticos e técnicas avançadas, conduzidos por instrutores certificados.",
    img: training,
  },
  {
    n: "02",
    title: "Assessoria CAC",
    desc: "Apoio completo na regularização e obtenção de documentação para Colecionadores, Atiradores e Caçadores.",
    img: cac,
  },
  {
    n: "03",
    title: "Filiação & Suporte",
    desc: "Associação simplificada ao clube com atendimento personalizado e acompanhamento dedicado em cada etapa.",
    img: range,
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between mb-16 md:mb-24 flex-wrap gap-6"
        >
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-primary mb-5">
              <span className="h-px w-10 bg-primary" />
              O que oferecemos
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-black max-w-2xl text-balance">
              Estrutura completa para o atirador esportivo.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Serviços pensados para quem está começando e para quem já vive a
            prática do tiro esportivo com seriedade.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.article
              key={s.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-md bg-card border border-border"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={1280}
                  height={1600}
                  className="h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <div className="absolute top-5 left-5 text-primary font-display text-sm tracking-widest">
                  {s.n}
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl font-bold mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  Saiba mais <span>→</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
