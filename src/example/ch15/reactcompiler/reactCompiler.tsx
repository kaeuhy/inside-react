interface ProductItemProps {
  product: { id: number; name: string; price: number };
  onAddToCart: (productId: number) => void;
}

const ProductItem = ({ product, onAddToCart }: ProductItemProps) => {
  return (
    <div>
      <p>
        <strong>{product.name}</strong>- {product.price.toLocaleString()}원
      </p>
      <button type="button" onClick={() => onAddToCart(product.id)}>
        장바구니에 추가
      </button>
    </div>
  );
};
