import CartItems from './CartItems';
import ResumeCart from './ResumeCart';

export default function Container() {
  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Carrinho de produtos</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <CartItems />
        <ResumeCart />
      </div>
    </div>
  );
}
