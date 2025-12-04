import React, { useState, useEffect } from "react"; 
import SkillCard from "./SkillCard";
import { Link } from "react-router";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; 

// Configuration
const SKILLS_PER_PAGE = 8; 

const Skills = () => {
  // 1. STATE FOR DATA & LOADING
  const [data, setData] = useState(null); 
  const [loading, setLoading] = useState(true); 
  
  // States for sorting and pagination
  const [sortedData, setSortedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("priceAsc"); // State to track current sort selection

  // 2. EFFECT HOOK FOR DATA FETCHING (Runs on mount/refresh)
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Start loading state
        const response = await fetch("/skillsData.json"); 
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const json = await response.json();
        
        // 🚨 IMPORTANT: Initialize data based on the default sort order 🚨
        const initialSortedData = [...json].sort((a, b) => a.price - b.price); 

        setData(json); 
        setSortedData(initialSortedData);
        setLoading(false);
        setCurrentPage(1); // Reset page on successful fetch
      } catch (error) {
        console.error("Failed to fetch skills data:", error);
        setLoading(false);
      }
    };
    
    fetchData();
  }, []); // Empty dependency array means it only runs once on mount

  // 3. HANDLER FUNCTIONS

  const handleSort = (e) => {
    const value = e.target.value;
    setSortOrder(value); // Update sort order state
    
    // Use the clean 'data' state for sorting, not the currently displayed 'sortedData'
    let sorted = [...data]; 

    if (value === "priceAsc") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (value === "priceDesc") {
      sorted.sort((a, b) => b.price - a.price);
    }
    
    setSortedData(sorted);
    setCurrentPage(1); // Reset to page 1 after sorting
  };
  
  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 300, behavior: 'smooth' }); 
    }
  };

  const goToPrevPage = () => paginate(currentPage - 1);
  const goToNextPage = () => paginate(currentPage + 1);

  // 4. CONDITIONAL RENDERING (Loading/No Data)

  if (loading) {
    return (
        <div className="text-center py-20 text-xl font-semibold text-blue-600">
            Fetching skills from server...
        </div>
    );
  }

  if (!data || data.length === 0) {
    return (
        <div className="text-center py-20 text-xl text-red-600">
            Error: No skills data available. Please check the file path `/skillsData.json`.
        </div>
    );
  }

  // 5. PAGINATION CALCULATIONS
  const totalSkills = sortedData.length;
  const totalPages = Math.ceil(totalSkills / SKILLS_PER_PAGE);

  const indexOfLastSkill = currentPage * SKILLS_PER_PAGE;
  const indexOfFirstSkill = indexOfLastSkill - SKILLS_PER_PAGE;
  const currentSkills = sortedData.slice(indexOfFirstSkill, indexOfLastSkill);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Tailwind classes (for brevity, keeping them as variables)
  const baseButtonClass = "flex items-center justify-center px-4 py-2 mx-1 rounded-lg transition-all duration-300 text-sm";
  const activeClass = "bg-blue-600 text-white font-bold shadow-lg";
  const inactiveClass = "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-600 hover:text-blue-700 dark:hover:text-white";
  const disabledClass = "opacity-50 cursor-not-allowed";

  // 6. RENDER
  return (
    <div id="popular-skills" className="max-w-7xl w-full mx-auto py-12" >
        <div className="text-center py-10 px-4 my-5" >
            {/* Title & Description */}
            <h2 className="text-3xl md:text-5xl font-extrabold text-blue-600 mb-4">
                Learn, Share & Trade Skills Locally
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
                SkillSwap is your community platform to offer your talents, find local
                experts, and exchange knowledge in music, coding, language, fitness,
                cooking, and more. Connect, learn, and grow together!
            </p>
            
            {/* Sort By Price */}
            <div className="flex justify-center mt-4 text-gray-800 dark:text-gray-200">
                <label htmlFor="sort" className="mr-2 ">Sort by:</label>
                <select
                    id="sort"
                    onChange={handleSort}
                    className="border border-gray-300 rounded-md px-2 py-1"
                    value={sortOrder} // Control the select input with state
                >
                    <option value="priceAsc">Price: Low to High</option>
                    <option value="priceDesc">Price: High to Low</option>
                </select>
            </div>
        </div>

        {/* SKILLS GRID - MAPPING currentSkills */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 px-6 md:px-0 lg:px-0" >
            {currentSkills.map((skill) => (
                <SkillCard key={skill.skillId} skill={skill} ></SkillCard> 
            ))}
        </div>

        {/* PAGINATION CONTROLS */}
        {totalPages > 1 && (
            <div className="flex justify-center mt-10">
                <nav className="flex items-center space-x-2" aria-label="Pagination">
                    {/* Previous Button */}
                    <button onClick={goToPrevPage} disabled={currentPage === 1} className={`${baseButtonClass} ${currentPage === 1 ? disabledClass : inactiveClass}`}>
                        <FaArrowLeft className="mr-2" /> Previous
                    </button>
                    {/* Page Number Buttons */}
                    <div className="hidden sm:flex space-x-2">
                        {pageNumbers.map(number => (
                            <button key={number} onClick={() => paginate(number)} className={`${baseButtonClass} ${number === currentPage ? activeClass : inactiveClass}`}>
                                {number}
                            </button>
                        ))}
                    </div>
                    {/* Next Button */}
                    <button onClick={goToNextPage} disabled={currentPage === totalPages} className={`${baseButtonClass} ${currentPage === totalPages ? disabledClass : inactiveClass}`}>
                        Next <FaArrowRight className="ml-2" />
                    </button>
                </nav>
            </div>
        )}

        {/* Back To Home Link */}
        <div className="flex justify-center">
            <Link to="/" className="mt-10 inline-block font-semibold px-10 py-3 rounded-lg text-white shadow-md transition-all duration-500 ease-in-out transform bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 hover:from-purple-700 hover:via-pink-600 hover:to-red-600 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 dark:hover:from-gray-700 dark:hover:via-gray-600 dark:hover:to-gray-500 hover:shadow-lg hover:scale-105 hover:shadow-purple-400/30 dark:hover:shadow-gray-500/30">
                Back To Home
            </Link>
        </div>
    </div>
  );
};

export default Skills;