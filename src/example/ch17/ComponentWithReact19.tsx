interface productProps {
  name: string;
  description: string;
}

export default function ComponentWithReact19({
  product,
}: {
  product: productProps;
}) {
  return (
    <div>
      <title>{product.name} - 리액트 19</title>
      <meta name="description" content={product.description} />
      <meta property="og:title" content={product.name} />
      <meta property="og:description" content={product.description} />
      <link rel="canonical" href={`https://../products/${product.id}`} />
      <h1>{product.name}</h1>
      <link rel="stylesheet" href="/style-first.css" precedence="foo" />
      <link rel="stylesheet" href="/style-third.css" precedence="bar" />
      <link rel="stylesheet" href="/style-second.css" precedence="foo" />
      <link rel="stylesheet" href="/style-wrong.css" />
    </div>
  );
}
