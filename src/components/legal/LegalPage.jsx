import { motion } from 'framer-motion';
import PageHero from '../ui/PageHero';
import usePageSEO from '../../hooks/usePageSEO';
import { fadeInUp } from '../../utils/animations';

function TableOfContents({ sections, className = '' }) {
  return (
    <nav aria-label="Table of contents" className={className}>
      <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-300 mb-4">
        On this page
      </h2>
      <ol className="space-y-2 text-sm max-h-[calc(100vh-10rem)] overflow-y-auto pr-1">
        {sections.map((section, index) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="text-zinc-400 hover:text-brand-400 transition-colors leading-snug block py-0.5"
            >
              {index + 1}. {section.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function LegalSection({ section, index }) {
  return (
    <motion.article
      id={section.id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index * 0.05}
      variants={fadeInUp}
      className="glass rounded-2xl p-6 sm:p-8 scroll-mt-28"
    >
      <h2 className="text-lg sm:text-xl font-bold text-white mb-4">{section.title}</h2>

      {section.content && (
        <div className="text-gray-400 leading-relaxed text-sm sm:text-[0.9375rem] whitespace-pre-line">
          {section.content}
        </div>
      )}

      {section.subsections?.length > 0 && (
        <div className={section.content ? 'mt-6 space-y-5' : 'space-y-5'}>
          {section.subsections.map((subsection) => (
            <div
              key={subsection.title}
              className="border-l-2 border-brand-500/30 pl-4 sm:pl-5"
            >
              <h3 className="text-sm sm:text-base font-semibold text-zinc-200 mb-2">
                {subsection.title}
              </h3>
              <div className="text-gray-400 leading-relaxed text-sm sm:text-[0.9375rem] whitespace-pre-line">
                {subsection.content}
              </div>
            </div>
          ))}
        </div>
      )}

      {section.list?.length > 0 && (
        <ul className="mt-4 space-y-2 text-gray-400 text-sm sm:text-[0.9375rem] leading-relaxed">
          {section.list.map((item) => (
            <li key={item} className="flex gap-2.5">
              <span className="text-brand-400 mt-1.5 shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {section.footer && (
        <p className="mt-4 text-gray-400 leading-relaxed text-sm sm:text-[0.9375rem]">
          {section.footer}
        </p>
      )}
    </motion.article>
  );
}

export default function LegalPage({
  seo,
  badge = 'Legal',
  title,
  subtitle,
  lastUpdated,
  intro,
  sections,
  tableOfContents = true,
}) {
  usePageSEO(seo);

  return (
    <>
      <PageHero badge={badge} title={title} subtitle={subtitle} lastUpdated={lastUpdated} />

      <section className="section-padding pt-0 pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto">
          <div
            className={
              tableOfContents && sections.length > 3
                ? 'lg:grid lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] xl:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] lg:gap-10 xl:gap-14'
                : ''
            }
          >
            {tableOfContents && sections.length > 3 && (
              <aside className="hidden lg:block">
                <div className="sticky top-28 glass rounded-2xl p-6">
                  <TableOfContents sections={sections} />
                </div>
              </aside>
            )}

            <div className="min-w-0 max-w-4xl lg:max-w-none">
              {tableOfContents && sections.length > 3 && (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="lg:hidden glass rounded-2xl p-6 sm:p-8 mb-8 sm:mb-10"
                >
                  <TableOfContents
                    sections={sections}
                    className="[&_ol]:grid [&_ol]:gap-2 [&_ol]:sm:grid-cols-2 [&_ol]:max-h-none"
                  />
                </motion.div>
              )}

              {intro && (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="glass rounded-2xl p-6 sm:p-8 mb-8 sm:mb-10"
                >
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-[0.9375rem]">
                    {intro}
                  </p>
                </motion.div>
              )}

              <div className="space-y-6 sm:space-y-8">
                {sections.map((section, index) => (
                  <LegalSection key={section.id} section={section} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
