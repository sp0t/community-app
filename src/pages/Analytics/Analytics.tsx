import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import TableTwo from './TableTwo';

const Tables = () => {
  return (
    <>
      <Breadcrumb pageName="Constributer Analytics" />
      <div className="flex flex-col gap-10">
        <TableTwo />
      </div>
      <div className="mt-6 overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="px-4 pb-4 text-center">
          <div className="mt-4">
            <h4 className=" text-center text-2xl font-semibold text-black dark:text-white text-left"> Constribution Insights </h4>
              <div className=" grid grid-cols-1 gap-4 md:gap-6 2xl:gap-7.5">
                <p>Total Constributers:5</p>
              </div>
              <div className=" grid grid-cols-1 gap-4 md:gap-6 2xl:gap-7.5">
                <p>Total Constributers:5</p>
              </div>
          </div>
        </div>
       </div>
      
    </>
  );
};

export default Tables;
