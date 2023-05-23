import React, { Component } from "react";
import axios from "axios";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchTerm: "",
    };
    this.searchRef = React.createRef(); // Reference to the search input element
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside); // Add event listener for clicks outside the component
    this.fetchData();
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside); // Remove event listener on component unmount
  }

  fetchData = async () => {
    const { endpoints } = this.props;
    const { searchTerm } = this.state;
    try {
      const promises = endpoints.map((endpoint) =>
        axios.get(`${endpoint}/search/${searchTerm}`)
      );
      const responses = await Promise.all(promises);

      let combinedData = [];
      responses.forEach((response) => {
        if (response.data && Array.isArray(response.data.events)) {
          combinedData = combinedData.concat(response.data.events);
        } else if (response.data && Array.isArray(response.data.blogs)) {
          combinedData = combinedData.concat(response.data.blogs);
        }
      });

      this.setState({ data: combinedData });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  handleSearchInputChange = (e) => {
    const searchTerm = e.target.value.trim();
    if (searchTerm === "") {
      this.setState({ searchTerm: "", data: [] });
      return;
    }
    this.setState({ searchTerm }, this.fetchData);
  };

  handleClickOutside = (e) => {
    if (this.searchRef.current && !this.searchRef.current.contains(e.target)) {
      this.setState({ searchTerm: "", data: [] });
    }
  };

  renderItemList() {
    const { data, searchTerm } = this.state;

    const filteredData = data.filter((item) => {
      const title = item.name || item.title;
      const description = item.description || item.content;
      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    return (
      <ul className="mt-4 border border-gray-300 rounded p-4">
        {filteredData.length === 0 ? (
          <p className="text-gray-500 mt-4">No results</p>
        ) : (
          filteredData.map((item) => {
            const title = item.name || item.title;
            const description = item.description || item.content;
            const truncatedDescription = description
              .split(" ")
              .slice(0, 5)
              .join(" ");
            const highlightedTitle = title.replace(
              new RegExp(searchTerm, "gi"),
              (match) => `<mark class="bg-yellow-200">${match}</mark>`
            );
           

            return (
              <li
                key={item._id}
                className="border-b border-gray-300 py-2 flex items-center"
              >
                <h3
                  className="text-lg font-semibold mr-2"
                  dangerouslySetInnerHTML={{ __html: highlightedTitle }}
                />
                <p className="text-sm flex-1">
                  <span
                    dangerouslySetInnerHTML={{
                      __html:
                        truncatedDescription +
                        (description.length > 5 ? "..." : ""),
                    }}
                  />
                </p>
              </li>
            );
          })
        )}
      </ul>
    );
  }

  render() {
    const { data } = this.state;
    return (
      <div ref={this.searchRef}>
        <input
          type="text"
          onChange={this.handleSearchInputChange}
          className="border border-gray-300 rounded p-2 mb-4"
          placeholder="Search"
        />
        {data.length > 0 && this.renderItemList()}
      </div>
    );
  }
}

export default SearchBar;
