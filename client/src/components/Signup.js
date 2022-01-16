import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export const Signup = (props) => {
  let navigate = useNavigate();

  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
    classsp: "",
    role: "mentor",
    interest: "",
    work: "",
    company: "",
    experience: "",
    img: "",
    subject: "",
  });

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const onPhoto = (e) => {
    setcredentials({ ...credentials, img: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", credentials.name);
    formData.append("email", credentials.email);
    formData.append("password", credentials.password);
    formData.append("classsp", credentials.classsp);
    formData.append("role", credentials.role);
    formData.append("interest", credentials.interest);
    formData.append("work", credentials.work);
    formData.append("company", credentials.company);
    formData.append("experience", credentials.experience);
    formData.append("img", credentials.img);
    formData.append("subject", credentials.subject);

    const response = await axios.post(
      "http://localhost:5000/api/auth/signup",
      formData
    );
    const json = response.data;
    if (json.success) {
      // save tha uth and redirect
      localStorage.setItem("token", json.authToken);
      navigate("/");
      props.showAlert("Account Created Succesfully", "success");
    } else {
      props.showAlert("Invalid Details", "danger");
    }
  };
  return (
    <div>
      <section className="h-100 gradient-form">
        <div className="h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <form
                        onSubmit={handleSubmit}
                        encType="multipart/form-data"
                      >
                        <h2>Create an account</h2>

                        <div className="form-outline">
                          <label
                            htmlFor="name"
                            className="form-label"
                            style={{ fontSize: "14px" }}
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            id="name"
                            value={credentials.name}
                            onChange={onChange}
                            minLength={3}
                            required
                          />
                        </div>
                        <div className="mb-1">
                          <label
                            htmlFor="email"
                            className="form-label"
                            style={{ fontSize: "14px" }}
                          >
                            Email address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            onChange={onChange}
                            value={credentials.email}
                            aria-describedby="emailHelp"
                            required
                          />
                        </div>
                        <div className="mb-1">
                          <label
                            htmlFor="password"
                            className="form-label"
                            style={{ fontSize: "14px" }}
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                            value={credentials.password}
                            onChange={onChange}
                            minLength={5}
                            required
                          />
                        </div>
                        <div className="mb-1">
                          <label
                            htmlFor="classsp"
                            className="form-label"
                            style={{ fontSize: "14px" }}
                          >
                            Class Specialization
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            name="classsp"
                            id="classsp"
                            value={credentials.classsp}
                            onChange={onChange}
                          />
                        </div>
                        <div className="mb-1">
                          <label
                            htmlFor="work"
                            className="form-label"
                            style={{ fontSize: "14px" }}
                          >
                            Work
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="work"
                            id="work"
                            value={credentials.work}
                            onChange={onChange}
                          />
                        </div>
                        <div className="mb-1">
                          <label
                            htmlFor="company"
                            className="form-label"
                            style={{ fontSize: "14px" }}
                          >
                            Company
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="company"
                            id="company"
                            value={credentials.company}
                            onChange={onChange}
                          />
                        </div>
                        <div className="mb-1">
                          <label
                            htmlFor="experience"
                            className="form-label"
                            style={{ fontSize: "14px" }}
                          >
                            Years of Experience
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            name="experience"
                            id="experience"
                            value={credentials.experience}
                            onChange={onChange}
                            required
                          />
                        </div>
                        <div className="mb-1">
                        <label
                            htmlFor="experience"
                            className="form-label"
                            style={{ fontSize: "14px" }}
                          >
                            Subject
                          </label>
                          <select
                            className="form-select"
                            name="subject"
                            onChange={onChange}
                            aria-label="Default select example"
                            required
                          >
                            <option selected>Select Subject</option>
                            <option value="math">Math</option>
                            <option value="science">Science</option>
                            <option value="english">English</option>
                          </select>
                        </div>
                        <div className="mb-1">
                          <label
                            htmlFor="img"
                            className="form-label"
                            style={{ fontSize: "14px" }}
                          >
                            Upload image
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            name="img"
                            id="img"
                            onChange={onPhoto}
                          />
                        </div>
                        <div className="text-center mt-4 mb-3 pb-1">
                          <button type="submit" className="btn btn-primary">
                            Submit
                          </button>
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Already have an account?</p>
                          <Link
                            type="button"
                            className="btn btn-outline-danger"
                            to="/login"
                            role="button"
                          >
                            Login
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">We are more than just a company</h4>
                      <p className="small mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
