import React from 'react';

const Card = ({data}) => {
    return (
      <div>
        <div class="card-group justify-content-center justify-content-center " >
            {data.map((item,index)=>{
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
                            <p class={item.isUser ? "fw-bold" : "opacity-50"}>
                              <i
                                class={
                                  item.isUser
                                    ? "fa-solid fa-check"
                                    : "fa-solid fa-xmark"
                                }
                              ></i>{" "}
                              {item.User}
                            </p>
                            <p
                              class={item.isStorage ? "fw-bold" : "opacity-50"}
                            >
                              <i
                                class={
                                  item.isStorage
                                    ? "fa-solid fa-check"
                                    : "fa-solid fa-xmark"
                                }
                              ></i>{" "}
                              {item.Storage}
                            </p>
                            <p
                              class={
                                item.isPublicProjects ? "fw-bold" : "opacity-50"
                              }
                            >
                              <i
                                class={
                                  item.isPublicProjects
                                    ? "fa-solid fa-check"
                                    : "fa-solid fa-xmark"
                                }
                              ></i>{" "}
                              {item.PublicProjects}
                            </p>
                            <p class={item.isAccess ? "fw-bold" : "opacity-50"}>
                              <i
                                class={
                                  item.isAccess
                                    ? "fa-solid fa-check"
                                    : "fa-solid fa-xmark"
                                }
                              ></i>{" "}
                              {item.Access}
                            </p>
                            <p
                              class={
                                item.isPrivateProjects
                                  ? "fw-bold"
                                  : "opacity-50"
                              }
                            >
                              <i
                                class={
                                  item.isPrivateProjects
                                    ? "fa-solid fa-check"
                                    : "fa-solid fa-xmark"
                                }
                              ></i>{" "}
                              {item.PrivateProjects}
                            </p>
                            <p
                              class={
                                item.isPhoneSupport ? "fw-bold" : "opacity-50"
                              }
                            >
                              <i
                                class={
                                  item.isPhoneSupport
                                    ? "fa-solid fa-check"
                                    : "fa-solid fa-xmark"
                                }
                              ></i>{" "}
                              {item.PhoneSupport}
                            </p>
                            <p class={item.isDomain ? "fw-bold" : "opacity-50"}>
                              <i
                                class={
                                  item.isDomain
                                    ? "fa-solid fa-check"
                                    : "fa-solid fa-xmark"
                                }
                              ></i>{" "}
                              {item.Domain}
                            </p>
                            <p class={item.isStatus ? "fw-bold" : "opacity-50"}>
                              <i
                                class={
                                  item.isStatus
                                    ? "fa-solid fa-check"
                                    : "fa-solid fa-xmark"
                                }
                              ></i>{" "}
                              {item.Status}
                            </p>
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
            })}
          
        </div>
      </div>
    );
};

export default Card;