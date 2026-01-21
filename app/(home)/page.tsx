import { Card, Cards } from "fumadocs-ui/components/card";
import { source } from "@/lib/source";
import { icons as lucideIcons } from "lucide-react";
import { createElement } from "react";

const SECTIONS = [
  {
    title: "General",
    href: "/docs/general",
    slug: "general",
    icon: "sailboat",
  },
  {
    title: "Anywhere",
    href: "/docs/anywhere",
    slug: "anywhere",
    icon: "microchip",
  },
  {
    title: "Community",
    href: "/docs/community",
    slug: "community",
    icon: "message-circle-heart",
  },
  {
    title: "Linux Concepts",
    href: "/docs/linux",
    slug: "linux",
    icon: "graduation-cap",
  },
] as const;

function getIcon(iconName: string | undefined): React.ReactNode | undefined {
  if (!iconName) return undefined;
  if (iconName in lucideIcons) {
    return createElement(lucideIcons[iconName as keyof typeof lucideIcons]);
  }
  return undefined;
}

export default function HomePage() {
  const sections = SECTIONS.map((section) => ({
    ...section,
    description: source.getPage([section.slug])?.data.description ?? "",
    icon: getIcon(section.icon),
  }));

  return (
    <div className="flex flex-col flex-1 container mx-auto max-w-5xl p-8 prose">
      <header>
        <h1>Welcome to the Ultramarine Wiki!</h1>
        <p>Text here</p>
      </header>

      <section>
        <Cards>
          {sections.map((section) => (
            <Card
              key={section.slug}
              title={section.title}
              href={section.href}
              description={section.description}
              icon={section.icon}
            />
          ))}
        </Cards>
      </section>

      <section>
        <h2>Community</h2>
        <p>
          Stuck? Have a question? Join our{" "}
          <a href="https://fyralabs.com/discord">Discord</a> community. Our
          community is friendly and always willing to help.
        </p>
      </section>

      <section>
        <h2>Contributing</h2>
        <p>
          This site is open source and contributions are welcome. Check out the{" "}
          <a href="https://github.com/ultramarine-linux/wiki-fumadocs">
            GitHub repository
          </a>{" "}
          for more information.
        </p>
      </section>
    </div>
  );
}
