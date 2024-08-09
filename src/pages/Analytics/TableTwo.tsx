import { Product } from '../../types/product';
import UserOne from '../../images/user/user-01.png';
import UserTwo from '../../images/user/user-02.png';
import UserThree from '../../images/user/user-03.png';
import UserFour from '../../images/user/user-04.png';

const productData: Product[] = [
  {
    rank:1,
    image: UserOne,
    name: 'Santina_Spinka',
    messages: 36,
    constribution:"0.74%",
  },
  { 
    rank:2,
    image: UserTwo,
    name: 'Cotin_Feeney',
    messages: 31,
    constribution:"0.64%",
  },
  {
    rank:3,
    image: UserThree,
    name: 'Samanth Altenwerth',
    messages: 30,
    constribution:"0.62%",
  },
  {
    rank:3,
    image: UserFour,
    name: 'Meda Starck',
    messages: 29,
    constribution:"0.60%",
  },
];

const TableTwo = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Top Constributers
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Rank</p>
        </div>
        <div className="col-span-3 flex items-center">
          <p className="font-medium">User Image/Name</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Message Count</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Constribution %</p>
        </div>
      </div>

      {productData.map((product, key) => (
        <div
          className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
          key={key}
        > 
         <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              {product.rank}
            </p>
          </div>
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="h-12.5 w-15 rounded-md">
                <img src={product.image} alt="Product" />
              </div>
              <p className="text-sm text-black dark:text-white">
                {product.name}
              </p>
            </div>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              {product.messages}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              ${product.constribution}
            </p>
          </div>
          {/* <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">{product.sold}</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-meta-3">${product.profit}</p>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default TableTwo;
