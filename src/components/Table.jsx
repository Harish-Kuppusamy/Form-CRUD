const Table = ({ tableData, handleEdit, handleDelete }) => {
  return (
    <table className="w-full border mt-6 max-w-4xl mx-auto overflow-x-scroll">
      <thead>
        <tr className="bg-gray-400">
          <th className="border p-2">Name</th>
          <th className="border p-2">Email</th>
          <th className="border p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((data, index) => {
          return (
            <tr key={index}>
              <td className="border border-gray-400 px-3 py-2 text-center">
                {data.name}
              </td>
              <td className="border border-gray-400 px-3 py-2 text-center">
                {data.email}
              </td>

              <td className="border border-gray-400 px-3 py-2 text-center">
                <div className="flex gap-2 justify-center items-center">
                  <button
                    className="bg-blue-600 rounded-md px-4 py-2 text-white"
                    onClick={() => {
                      handleEdit(index);
                    }}
                  >
                    Edit
                  </button>

                  <button
                    className=" ml-3 bg-red-600 rounded-md px-4 py-2 text-white"
                    onClick={() => {
                      handleDelete(index);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
