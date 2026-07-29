export interface ContentBlock {
  type: "h1" | "h2" | "h3" | "h4" | "p" | "ul" | "ol" | "table";
  text?: string;
  items?: string[];
  rows?: string[][];
}

// Renders migrated article body content. h1 is skipped here because the page
// component renders its own single <h1> from the article title (keeping
// exactly one h1 per page is a deliberate SEO requirement, not an oversight.
export default function ContentBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`;
        switch (block.type) {
          case "h1":
            return null;
          case "h2":
            return <h2 key={key}>{block.text}</h2>;
          case "h3":
            return <h3 key={key}>{block.text}</h3>;
          case "h4":
            return <h4 key={key}>{block.text}</h4>;
          case "p":
            return <p key={key}>{block.text}</p>;
          case "ul":
            return (
              <ul key={key}>
                {block.items?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={key}>
                {block.items?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ol>
            );
          case "table":
            if (!block.rows || block.rows.length === 0) return null;
            const [headerRow, ...bodyRows] = block.rows;
            return (
              <table key={key}>
                <thead>
                  <tr>
                    {headerRow.map((cell, i) => (
                      <th key={i}>{cell}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {bodyRows.map((row, r) => (
                    <tr key={r}>
                      {row.map((cell, c) => (
                        <td key={c}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            );
          default:
            return null;
        }
      })}
    </>
  );
}
