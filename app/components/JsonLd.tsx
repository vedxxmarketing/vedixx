// Renders a JSON-LD <script> tag for structured data. Safe to use in server
// components; the data is serialized at build time into the static HTML.
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
