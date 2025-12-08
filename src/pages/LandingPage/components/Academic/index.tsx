import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

type EducationType = {
  institution: string;
  title: string;
  period: string;
};

type CertificationType = {
  org: string;
  title: string;
  date: string;
};

export default function Academic() {
  const { t } = useTranslation();
  const education = t("academic.educationList", {
    returnObjects: true,
  }) as EducationType[];
  const certifications = t("academic.certificationsList", {
    returnObjects: true,
  }) as CertificationType[];

  return (
    <section
      className="bg-background dark:bg-background w-full py-20"
      id="academic-career"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-bold mb-10"
        >
          {t("academic.title")}
        </motion.h2>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              {t("academic.eduction")}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="rounded-2xl shadow-md h-full">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold">{item.title}</h4>
                      <p className="text-sm mt-2 opacity-80">
                        {item.institution}
                      </p>
                      <p className="text-xs mt-2 opacity-60">{item.period}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              {t("academic.certifications")}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="rounded-2xl shadow-md h-full">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold">{cert.title}</h4>
                      <p className="text-sm mt-2 opacity-80">{cert.org}</p>
                      <p className="text-xs mt-2 opacity-60">{cert.date}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
