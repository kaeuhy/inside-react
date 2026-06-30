interface ProductListProps {
  products: { id: number; name: string; price: number }[];
  searchTerm: string;
  onAddToCart: (productId: number) => void;
}

function ProductList({ products, searchTerm, onAddToCart }: ProductListProps) {
  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  if (filteredProducts.length === 0 && searchTerm) {
    return <p>"{searchTerm}"에 해당 하는 제품이 없습니다.</p>;
  }

  return (
    <div>
      {filteredProducts.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}
