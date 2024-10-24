import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";
import TableRow from "./tableRow";
import { useState } from "react";
import image1 from "../assets/profile1.jpg";
import image2 from "../assets/profile2.jpg";
import image3 from "../assets/profile3.jpg";
import image4 from "../assets/profile4.jpg";
import image5 from "../assets/profile5.jpg";

function Home() {
  const [data, setData] = useState([
    {
      Name: "Adhavan",
      Role: "Fullstack Developer",
      Dept: "Development",
      letters: ["Y", "B", "F", "C", "A"],
      ReportingTo: "Midhun",
      email: "adhvan1311@gmail.com",
      Experience: ["3", "2"],
      color: ["#008000", "#ffff17", "#adff2f", "#ff0000", "#ffff00"],
      image: image1,
    },
    {
      Name: "Rajesh",
      Role: "UI/UX Designer",
      Dept: "Design",
      letters: ["C", "A", "D", "B", "E"],
      ReportingTo: "Anjali",
      email: "rajesh@gmail.com",
      Experience: ["2", "1"],
      color: ["#ff4500", "#00ced1", "#ff6347", "#008080", "#ffa500"],
      image: image2,
    },
    {
      Name: "Priya",
      Role: "Project Manager",
      Dept: "Management",
      letters: ["E", "U", "I", "A", "O"],
      ReportingTo: "Ravi",
      email: "priya@example.com",
      Experience: ["5", "3"],
      color: ["#d2691e", "#ff69b4", "#ffff17", "#9370db", "#3cb371"],
      image: image3,
    },
    {
      Name: "Vikram",
      Role: "Data Analyst",
      Dept: "Analytics",
      letters: ["A", "Y", "B", "Z", "X"],
      ReportingTo: "Suresh",
      email: "vikram@gmail.com",
      Experience: ["4", "2"],
      color: ["#ffb6c1", "#f0e68c", "#4682b4", "#20b2aa", "#ffd700"],
      image: image4,
    },
    {
      Name: "Sneha",
      Role: "Backend Developer",
      Dept: "Development",
      letters: ["B", "C", "Y", "A", "F"],
      ReportingTo: "Anil",
      email: "sneha@example.com",
      Experience: ["3", "1"],
      color: ["#8b0000", "#ff8c00", "#ff1493", "#adff2f", "#f5deb3"],
      image: image5,
    },
    {
      Name: "Amit",
      Role: "DevOps Engineer",
      Dept: "Operations",
      letters: ["N", "Q", "O", "M", "P"],
      ReportingTo: "Gaurav",
      email: "amit@gmail.com",
      Experience: ["4", "2"],
      color: ["#7fff00", "#ff4500", "#dcdcdc", "#f5deb3", "#00ced1"],
      image: image1,
    },
    {
      Name: "Nisha",
      Role: "Content Writer",
      Dept: "Marketing",
      letters: ["J", "G", "K", "L", "H"],
      ReportingTo: "Rahul",
      email: "nisha@example.com",
      Experience: ["3", "1"],
      color: ["#cd5c5c", "#6a5acd", "#7b68ee", "#ff6347", "#32cd32"],
      image: image2,
    },
    {
      Name: "Karan",
      Role: "QA Engineer",
      Dept: "Quality Assurance",
      letters: ["D", "F", "G", "A", "I"],
      ReportingTo: "Suman",
      email: "karan@gmail.com",
      Experience: ["5", "4"],
      color: ["#ff69b4", "#b0c4de", "#ff7f50", "#4682b4", "#8a2be2"],
      image: image3,
    },
    {
      Name: "Deepak",
      Role: "System Administrator",
      Dept: "IT Support",
      letters: ["Z", "B", "X", "C", "V"],
      ReportingTo: "Pooja",
      email: "deepak@example.com",
      Experience: ["6", "5"],
      color: ["#7fff00", "#dc143c", "#8b4513", "#ffdab9", "#f5f5dc"],
      image: image4,
    },
    {
      Name: "Geeta",
      Role: "Business Analyst",
      Dept: "Business Development",
      letters: ["G", "D", "F", "E", "A"],
      ReportingTo: "Niraj",
      email: "geeta@gmail.com",
      Experience: ["2", "1"],
      color: ["#b22222", "#7fff00", "#ff69b4", "#f0e68c", "#d2691e"],
      image: image5,
    },
    {
      Name: "Aishwarya",
      Role: "Sales Executive",
      Dept: "Sales",
      letters: ["K", "P", "O", "L", "N"],
      ReportingTo: "Varun",
      email: "aishwarya@example.com",
      Experience: ["3", "2"],
      color: ["#ff69b4", "#4682b4", "#f08080", "#7b68ee", "#d8bfd8"],
      image: image1,
    },
    {
      Name: "Rohan",
      Role: "Network Engineer",
      Dept: "Networking",
      letters: ["U", "P", "Y", "O", "I"],
      ReportingTo: "Neha",
      email: "rohan@gmail.com",
      Experience: ["4", "3"],
      color: ["#dc143c", "#adff2f", "#f0e68c", "#ffa500", "#00ff00"],
      image: image2,
    },
    {
      Name: "Anita",
      Role: "HR Manager",
      Dept: "Human Resources",
      letters: ["E", "A", "R", "T", "Q"],
      ReportingTo: "Raj",
      email: "anita@example.com",
      Experience: ["5", "4"],
      color: ["#ff4500", "#00ced1", "#8b0000", "#ff8c00", "#ff1493"],
      image: image3,
    },
    {
      Name: "Manoj",
      Role: "Marketing Manager",
      Dept: "Marketing",
      letters: ["P", "S", "I", "Y", "U"],
      ReportingTo: "Simran",
      email: "manoj@gmail.com",
      Experience: ["2", "1"],
      color: ["#4682b4", "#00ff00", "#ff69b4", "#7fff00", "#d2691e"],
      image: image4,
    },
    {
      Name: "Divya",
      Role: "Graphic Designer",
      Dept: "Design",
      letters: ["L", "A", "F", "K", "Q"],
      ReportingTo: "Rajesh",
      email: "divya@gmail.com",
      Experience: ["4", "2"],
      color: ["#ff6347", "#8b0000", "#8a2be2", "#00ced1", "#ffa500"],
      image: image5,
    },
    {
      Name: "Siddharth",
      Role: "Frontend Developer",
      Dept: "Development",
      letters: ["N", "Q", "M", "K", "B"],
      ReportingTo: "Aditi",
      email: "siddharth@example.com",
      Experience: ["5", "3"],
      color: ["#ffb6c1", "#ff1493", "#adff2f", "#ff4500", "#d2691e"],
      image: image1,
    },
    {
      Name: "Krishna",
      Role: "Data Scientist",
      Dept: "Data Science",
      letters: ["Z", "V", "C", "W", "X"],
      ReportingTo: "Rina",
      email: "krishna@gmail.com",
      Experience: ["6", "5"],
      color: ["#ff6347", "#7fff00", "#dcdcdc", "#8b0000", "#00ced1"],
      image: image2,
    },
    {
      Name: "Pooja",
      Role: "Customer Support",
      Dept: "Support",
      letters: ["Q", "R", "S", "T", "U"],
      ReportingTo: "Neha",
      email: "pooja@example.com",
      Experience: ["3", "2"],
      color: ["#ff69b4", "#f08080", "#d2691e", "#20b2aa", "#ff4500"],
      image: image3,
    },
    {
      Name: "Nikhil",
      Role: "SEO Specialist",
      Dept: "Marketing",
      letters: ["K", "L", "M", "N", "O"],
      ReportingTo: "Rahul",
      email: "nikhil@gmail.com",
      Experience: ["4", "1"],
      color: ["#8b0000", "#f5f5dc", "#dcdcdc", "#ff6347", "#3cb371"],
      image: image4,
    },
    {
      Name: "Sakshi",
      Role: "Product Owner",
      Dept: "Product Management",
      letters: ["D", "H", "E", "T", "X"],
      ReportingTo: "Priya",
      email: "sakshi@example.com",
      Experience: ["2", "1"],
      color: ["#dc143c", "#00ced1", "#8b4513", "#ff8c00", "#ffa500"],
      image: image5,
    },
    {
      Name: "Vikrant",
      Role: "Cloud Engineer",
      Dept: "Cloud Services",
      letters: ["F", "A", "B", "C", "D"],
      ReportingTo: "Sonal",
      email: "vikrant@gmail.com",
      Experience: ["5", "3"],
      color: ["#ff4500", "#d2691e", "#8b0000", "#7fff00", "#20b2aa"],
      image: image1,
    },
    {
      Name: "Shweta",
      Role: "Social Media Manager",
      Dept: "Marketing",
      letters: ["T", "A", "R", "G", "Z"],
      ReportingTo: "Mohan",
      email: "shweta@example.com",
      Experience: ["4", "2"],
      color: ["#ff6347", "#dcdcdc", "#00ff00", "#f08080", "#7b68ee"],
      image: image2,
    },
    {
      Name: "Ramesh",
      Role: "Technical Support",
      Dept: "Support",
      letters: ["H", "I", "J", "A", "D"],
      ReportingTo: "Suresh",
      email: "ramesh@gmail.com",
      Experience: ["3", "1"],
      color: ["#4682b4", "#ff4500", "#f5deb3", "#adff2f", "#b0c4de"],
      image: image3,
    },
    {
      Name: "Surya",
      Role: "Risk Analyst",
      Dept: "Finance",
      letters: ["K", "L", "M", "Q", "R"],
      ReportingTo: "Gaurav",
      email: "surya@example.com",
      Experience: ["5", "4"],
      color: ["#ff69b4", "#ff8c00", "#8b0000", "#adff2f", "#ff6347"],
      image: image4,
    },
    {
      Name: "Komal",
      Role: "Operations Manager",
      Dept: "Operations",
      letters: ["A", "E", "I", "O", "U"],
      ReportingTo: "Simran",
      email: "komal@gmail.com",
      Experience: ["6", "5"],
      color: ["#ff6347", "#dcdcdc", "#f5f5dc", "#ff4500", "#7fff00"],
      image: image5,
    },
  ]);
  

  const [rowPerPage, setRowPerPage] = useState(5);
  const totalPage = Math.ceil(data.length / rowPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const endIndex = currentPage * rowPerPage;
  const startIndex = endIndex - rowPerPage;
  const pageData = data.slice(startIndex, endIndex);


  const startRow = startIndex + 1;
  const endRow = endIndex > data.length ? data.length : endIndex;
  const totalRows = data.length;

  const handleRowsPerPageChange = (event) => {
    setRowPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

    return (
      <div className="main">
        <table className="table">
          <thead>
            <tr className="heading">
              <th scope="col">Name</th>
              <th scope="col">Designation</th>
              <th scope="col">Department</th>
              <th scope="col">Signal</th>
              <th scope="col">Over Performance</th>
              <th scope="col">Reporting To</th>
              <th scope="col">Role</th>
              <th scope="col">Email</th>
              <th scope="col">Experience</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {pageData.map((value, index) => {
              return <TableRow key={index} datas={value} />;
            })}
          </tbody>
        </table>
        <div className="pagination-container">
          <div className="pagination-info">
            <label htmlFor="rows-per-page">Rows per page: </label>
            <select
              id="rows-per-page"
              value={rowPerPage}
              onChange={handleRowsPerPageChange}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>
            <span>
              {startRow}-{endRow} of {totalRows}
            </span>
          </div>
    
          <div className="pagination-buttons">
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>
              &lt;
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPage}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    );
    
}

export default Home;
