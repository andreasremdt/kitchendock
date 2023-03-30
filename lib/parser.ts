import { generateHTML, JSONContent } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Underline from "@tiptap/extension-underline";
import Heading from "@tiptap/extension-heading";
import Italic from "@tiptap/extension-italic";
import Bold from "@tiptap/extension-bold";
import Text from "@tiptap/extension-text";
import { Recipe } from "@/types";

interface Node {
  type: string;
  content: string;
}

function findHeading(node: JSONContent, json: JSONContent): JSONContent | null {
  if (json.content) {
    const index = json.content.indexOf(node);
    let heading: JSONContent | null = null;

    for (let i = index; i >= 0; i--) {
      if (json.content[i].type === "heading") {
        heading = json.content[i];
        break;
      }
    }

    return heading;
  }

  return null;
}

function getTextContent(node: JSONContent): string {
  return generateHTML(node, [Document, Paragraph, Text, Heading, Bold, Underline, Italic]);
}

function transformNode(node: JSONContent): Node {
  return {
    type: node.type!,
    content: getTextContent(node),
  };
}

function hasContent(node: JSONContent): boolean {
  if (!node.content) {
    return false;
  }

  return getTextContent(node).trim().length > 0;
}

export function parseIngredients(value?: JSONContent) {
  if (!value || !value.content) {
    return [];
  }

  const categorized = new Map<JSONContent, Node[]>();
  const uncategorized = new Set<Node>();

  for (const entry of value.content) {
    if (hasContent(entry)) {
      if (entry.type === "heading" && !categorized.has(entry)) {
        categorized.set(entry, []);
      } else if (entry.type === "paragraph") {
        const heading = findHeading(entry, value);

        if (heading) {
          categorized.get(heading)!.push(transformNode(entry));
        } else {
          uncategorized.add(transformNode(entry));
        }
      }
    }
  }

  const results = Array.from(categorized).map(([heading, children]) => ({
    ...transformNode(heading),
    children,
  }));

  if (uncategorized.size > 0) {
    results.push({
      type: "heading",
      content: "",
      children: Array.from(uncategorized),
    });
  }

  return results;
}

export function parseInstructions(value?: JSONContent) {
  if (!value || !value.content) {
    return [];
  }

  const sections = [];

  for (const entry of value.content) {
    if (hasContent(entry)) {
      sections.push(transformNode(entry));
    }
  }

  return sections;
}

export function transformHeadingsTo(level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6", html: string): string {
  try {
    const dom = new DOMParser().parseFromString(html, "text/html");
    const headings = dom.querySelectorAll("h1, h2, h3, h4, h5, h6");

    headings.forEach((heading) => {
      const h3 = document.createElement(level);
      h3.textContent = heading.textContent;

      heading.replaceWith(h3);
    });

    return new XMLSerializer().serializeToString(dom);
  } catch (ex) {
    console.warn("Could not transform HTML:", ex);
    return html;
  }
}

export function stringifyRecipe(recipe: Partial<Recipe>): string {
  return JSON.stringify({
    ...recipe,
    ingredients: JSON.stringify(recipe.ingredients),
    instructions: JSON.stringify(recipe.instructions),
  });
}
