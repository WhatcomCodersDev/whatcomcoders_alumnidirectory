import React, { useContext, useState, useEffect } from "react";
import ReviewProblemsTable from "./ReviewProblemTable";
import ProblemCategoriesTable from "./ProblemCategoriesTable";
import { AuthContext } from "contexts/authContext";
import { Button } from "@mui/material";
import EditButton from "../common/EditButton";
import { PREDEFINED_PROBLEM_CATEGORIES } from "services/leetcode_review/constants";
import { fetchProblemCategoriesMarkedForReviewByUser } from "services/leetcode_review/apiFetchProblemCategoriesMarkedForReview";
import { fetchUserSubmissions } from "services/leetcode_review/apiFetchUserSubmissions";

const LeetcodeView = () => {
  const { uuid } = useContext(AuthContext);
  const [filter, setFilter] = useState("All");
  const [view, setView] = useState("categories");
  const [loading, setLoading] = useState(true);
  const [userProblemSubmissions, setUserProblemSubmissions] = useState([]);
  const [
    problemCategoriesMarkedForReview,
    setProblemCategoriesMarkedForReview,
  ] = useState([]);
  const [, setSelectedCategory] = useState(null);
  const [editMode, setEditMode] = useState(false); // State to manage edit mode

  useEffect(() => {
    if (uuid) {
      fetchUserSubmissions(uuid, setLoading, setUserProblemSubmissions);

      fetchProblemCategoriesMarkedForReviewByUser(
        uuid,
        setLoading,
        setProblemCategoriesMarkedForReview
      );
    }
  }, [uuid]);

  /** All problem categories and how many problems were done for each category */
  const userSubmissionsByReviewCategory = PREDEFINED_PROBLEM_CATEGORIES.map(
    (category) => {
      const count =
        userProblemSubmissions.length > 0
          ? userProblemSubmissions.filter(
              (problem) => problem.category === category.name
            ).length
          : 0;
      return { ...category, count };
    }
  );

  console.log("userProblemSubmissions", userProblemSubmissions);

  const handleTypeClick = (category) => {
    setSelectedCategory(category);
    setFilter(category);
    setView("problems");
  };

  const handleCheckboxChange = (category) => {
    setProblemCategoriesMarkedForReview((prevSelectedCategories) =>
      prevSelectedCategories.includes(category)
        ? prevSelectedCategories.filter((c) => c !== category)
        : [...prevSelectedCategories, category]
    );
  };

  const handleBackClick = () => {
    setView("categories");
    setSelectedCategory(null);
    setFilter("All");
  };

  return (
    <div>
      {loading && <p>Loading...</p>}

      <EditButton editMode={editMode} setEditMode={setEditMode} />
      {view === "categories" && !loading && (
        <ProblemCategoriesTable
          userSubmissionsByReviewCategory={userSubmissionsByReviewCategory}
          problemCategoriesMarkedForReview={problemCategoriesMarkedForReview}
          userProblemSubmissions={userProblemSubmissions}
          onTypeClick={handleTypeClick}
          onCheckboxChange={handleCheckboxChange}
          editMode={editMode}
        />
      )}
      {view === "problems" && !loading && (
        <div>
          <Button variant="contained" onClick={handleBackClick}>
            Back to Categories
          </Button>
          <ReviewProblemsTable
            data={userProblemSubmissions}
            filter={filter}
            editMode={editMode}
          />
        </div>
      )}
    </div>
  );
};

export default LeetcodeView;
