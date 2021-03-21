import React from "react";

function Shop(p) {
  return (
    <div class="col-lg-4 col-md-6 mb-4 my-4">
      <div class="card h-100">
        <a href="#">
          <img class="card-img-top" src="http://placehold.it/700x400" alt="" />
        </a>
        <div class="card-body">
          <h4 class="card-title">
            <a href="#">{p.data.name}</a>
          </h4>
          <h5>Rs {p.data.price}</h5>
          <p class="card-text">{p.data.descrip}</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">★ ★ ★ ★ ☆</small>
          <button class="btn btn-success float-right" id={p.data.name} onClick={
              (prop) => {
                  p.customEvent(p.data)
                  prop.target.classList.add("disabled");
              }
          }>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Shop;
