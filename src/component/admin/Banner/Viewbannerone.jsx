import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { errorToast, successToast } from "../../toast";

const Viewbannerone = () => {
  const navigate = useNavigate();

  const [banner, setBanner] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetchData();
  }, [refresh]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/bannerone");
      setBanner(response.data.result);
    } catch (error) {
      console.log(error);
      errorToast(error.response.data.message || "Try Again");
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/bannerone/${id}`
      );
      setRefresh(!refresh);
      successToast(response.data.message);
      navigate("/admin/viewBannerone");
    } catch (error) {
      errorToast(error.message || "Try Again");
    }
  };

  return (
    <div className="ms-[30%] mt-[5%] font-sans">
      <Link to={"/admin/addBannerone"} className="hover:underline">
        <span className="text-[25px] text-emerald-950"> Add Banner 1</span>
      </Link>

      <div className="relative overflow-x-auto mt-[20px]">
        <table className="w-[600px] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 h-[180px]">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>

              <th scope="col" className="px-6 py-3">
                Content
              </th>

              <th scope="col" className="px-6 py-3">
                Actions
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            <>
              {banner?.map((item, index) => {
                return (
                  <>
                    <tr
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      key={index}
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <img src={item.image} />
                      </th>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
                      >
                        {item.title}
                      </th>

                      <td className="px-6 py-4 font-medium text-white">
                        {item.content}
                      </td>

                      <td className="px-6 py-4">
                        {" "}
                        <NavLink
                          to={`/admin/editbannerone/${item._id}`}
                          state={item}
                        >
                          <button className="text-white bg-emerald-950 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">
                            Edit
                          </button>
                        </NavLink>
                      </td>
                      <td
                        className="px-6 py-4"
                        onClick={() => handleDelete(item._id)}
                      >
                        {" "}
                        <button className=" text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Viewbannerone;