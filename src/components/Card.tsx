import Datetime from "./Datetime";
import type { BlogFrontmatter } from "@content/_schemas";

export interface Props {
  href?: string;
  frontmatter: BlogFrontmatter;
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, description } = frontmatter;
  const HeadingTag = secHeading ? "h2" : "h3";

  return (
    <li className="my-6">
      <a
        href={href}
        className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        <HeadingTag className="text-lg font-medium decoration-dashed hover:underline">
          {title}
        </HeadingTag>
      </a>
      <Datetime datetime={pubDatetime} />
      {description && <p>{description}</p>}
    </li>
  );
}
