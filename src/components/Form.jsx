function Form({ handleFormData, handleSubmit, formData, editIndex }) {
  return (
    <>
      <h2 className="text-xl font-semibold mb-2 mt-2 text-center">USER FORM</h2>

      <div className="p-6 mx-auto max-w-2xl ">
        <form className="border rounded-md p-6" onSubmit={handleSubmit}>
          <input
            className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 "
            type="text"
            placeholder="Name"
            onChange={(e) => {
              const { value } = e.target;
              handleFormData("name", value);
            }}
            required
            value={formData.name}
          />
          <input
            className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2"
            type="email"
            placeholder="Email"
            onChange={(e) => {
              const { value } = e.target;
              handleFormData("email", value);
            }}
            required
            value={formData.email}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
            type="submit"
          >
            {editIndex === null ? "Add" : "Update"}
          </button>
        </form>
      </div>
    </>
  );
}

export default Form