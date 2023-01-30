import React from "react";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
class Mapfn extends React.Component {
  btnclick() {
    alert("You clicked this button !");
  }
  render() {
    this.state = [
      { name: "Shiva", age: 22, city: { pincode: 626001, country: "India" } },
      { name: "Abdul", age: 23, city: { pincode: 571983, country: "Iran" } },
      {
        name: "Mangala",
        age: 23,
        city: { pincode: 481994, country: "South Africa" },
      },
    ];

    return (
      <>
        <div>
          <center>
            <table className="table table-striped-columns tablecss">
              <tr>
                <th>Name:</th>
                <th>Age:</th>
                <th>Pincode:</th>
                <th>Country:</th>
              </tr>
              {this.state.map((kundan) => {
                return (
                  <tr>
                    <td>{kundan.name}</td>
                    <td>{kundan.age}</td>
                    <td>{kundan.city.pincode}</td>
                    <td>{kundan.city.country}</td>
                  </tr>
                );
              })}
            </table>
          </center>
        </div>
        <div id="luckysingh">Nothing</div>
        <div>
          <button type="button" class="btn btn-primary" onClick={this.btnclick}>
            Primary
          </button>
        </div>
        <div></div>
        <div class="w-full max-w-xs">
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Username
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
              <p class="text-red-500 text-xs italic">
                Please choose a password.
              </p>
            </div>
            <div class="flex items-center justify-between">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
              <a
                class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
          <p class="text-center text-gray-500 text-xs">
            &copy;2020 Acme Corp. All rights reserved.
          </p>
        </div>
      </>
    );
  }
}
export default Mapfn;
