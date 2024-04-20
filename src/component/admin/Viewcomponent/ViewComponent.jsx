function ViewComponent({ headings, datas }) {
    const { headingOne, headingTwo, headingThree, headingFour} =
      headings;
  
    return (
      <div className="">
        <table className=" w-[80%] m-auto">
          <tr className="">
            <th className="text-white">{headingOne}</th>
            <th className="text-white">{headingTwo}</th>
            <th className="text-white">{headingThree}</th>
            <th className="text-white">{headingFour}</th>
            <th className="text-white"></th>
            <th className="text-white"></th>
          </tr>
          {datas.map(
            (
              {
                imageLink,
                title,
                quantity,
                price,
                onclickView,
                onclickEdit,
                onclickDelete,
                _id,
              },
              index
            ) => {
              return (
                <tr key={index} className="text-center">
                  <td className="w-[100px] h-[50px]">
                    <img
                      className="w-full h-full object-contain"
                      src={imageLink}
                      alt=""
                    />
                  </td>
                  <td className="text-white">{title}</td>
                  <td className="text-white">{quantity}</td>
                  <td className="text-white">{price}</td>
                  <td
                    className="text-yellow-400"
                    onClick={() => onclickView(_id)}
                  >
                    View All
                  </td>
                  <td className="text-green-600" onClick={() => onclickEdit(_id)}>
                    Edit
                  </td>
                  <td className="text-red-500" onClick={() => onclickDelete(_id)}>
                    Remove
                  </td>
                </tr>
              );
            }
          )}
        </table>
      </div>
    );
  }
  
  export default ViewComponent;
  