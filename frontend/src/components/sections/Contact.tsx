import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";

export function Contact() {
  return (
    <Section id="contato" title="Contato">
      <p className="opacity-80">
        Me encontre no{" "}
        <a href={siteConfig.social.github} className="underline" rel="noopener" target="_blank">
          GitHub
        </a>
        .
      </p>
    </Section>
  );
}
