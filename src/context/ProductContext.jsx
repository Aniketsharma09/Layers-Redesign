import productData from "./ProductData";
import ProductContext from "./ProductContextOnly";

export const ProductProvider = ({ children }) => {
  return (
    <ProductContext.Provider value={{ products: productData }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext };
