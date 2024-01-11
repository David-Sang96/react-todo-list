/* eslint-disable react/prop-types */
const List = ({ data, handleDelete, handleUpdate }) => {
  const confirmBox = (id) => {
    if (confirm("Are you sure?")) {
      handleDelete(id);
    }
  };

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <ol className="list-group ">
            <div
              className={`list-group-item shadow-sm mb-1 ${
                item.complete ? `border-color` : ""
              }`}
            >
              <div className="row ">
                <div
                  className={`col-10  ${item.complete ? `line-through` : ""}`}
                >
                  <input
                    checked={item.complete}
                    type="checkbox"
                    onChange={() => handleUpdate(item.id, !item.complete)}
                    className="mx-2"
                  />
                  {item.task}
                </div>
                <div className="col-2 d-flex justify-content-end px-4 align-items-center  ">
                  <i
                    className="fa-regular fa-trash-can cursor-pointer"
                    onClick={() => confirmBox(item.id)}
                  ></i>
                </div>
              </div>
            </div>
          </ol>
        </div>
      ))}
    </div>
  );
};

export default List;
