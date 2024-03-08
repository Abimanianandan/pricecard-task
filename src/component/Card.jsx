import React from "react";

const Card = ({ item, index }) => {
  return (
    <>
      <div key={index}>
        <div class="row">
          <div
            class="card p-4 rounded-pil text-align-center "
            style={{ width: "20rem" }}
          >
            <span class="card-title text-center fw-bold opacity-50">
              {item.Title}
            </span>
            <h2 class="text-center">{item.Price}/month</h2>
            <hr />
            <div class="card-body">
             
              {item.features.map((feature, index) => {
                return (
                  <p key={index}>
                    <p class={feature.enabled ? "fw-bold" : "opacity-50"}>
                      <i
                        class={
                          feature.enabled
                            ? "fa-solid fa-check"
                            : "fa-solid fa-xmark"
                        }
                      ></i>
                      {feature.name}
                    </p>
                  </p>
                );
              })}
              <p class="card-text">
                <small class="text-body-secondary">
                  <button class="btn btn-primary w-100 rounded-pill">
                    Button
                  </button>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
