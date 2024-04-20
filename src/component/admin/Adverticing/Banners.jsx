import React from "react";
import { Link, useParams } from "react-router-dom";

function Banners() {
  const {id} = useParams();
  return (
    <>
      <div className="flex-col flex-wrap justify-center gap-5 sm:gap-10 mt-5 sm:mt-16">
        <div className="bg-green-500 p-8 rounded-md sm:p-16">
          <Link to={'/admin/addbanner1'}>
            <p className="sm:text-lg text-xs flex items-center gap-2">
              Banner 1 <i class="fa-sharp fa-solid fa-plus"></i>
            </p>
          </Link>
        </div>

        <div className="bg-green-300 p-8 rounded-md sm:p-16">
          <Link to={'/admin/addbanner2'}>
            <p className="sm:text-lg text-xs flex items-center gap-2">
              Banner 2 <i class="fa-sharp fa-solid fa-plus"></i>
            </p>
          </Link>
        </div>

        <div className="bg-green-200 p-8 rounded-md sm:p-16">
          <Link to={'/admin/addbanner3'}>
            <p className="sm:text-lg text-xs flex items-center gap-2">
              Banner 3 <i class="fa-sharp fa-solid fa-plus"></i>
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Banners;
