import React from "react";

const Posts = () => {
  return (
    <>
      <div className="row d-flex align-items-center justify-content-center mt-4">
        <div className="col-md-8">
          <form action="">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Search By Id:
              </label>
              <input
                type="number"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Fetch Post
            </button>
            <button type="button" class="btn btn-info ms-4">
              Create Post
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Posts;
