import React, { useContext, useState, useEffect } from 'react';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  LinearProgress,
  Box,
  Typography,
} from '@mui/material';
import { AuthContext } from 'contexts/authContext';
import CustomCheckbox from '../common/CustomCheckbox';
import { fetchAllLeetcodeQuestionsNonBlocking } from 'services/leetcode_review/apiFetchAllLeetcodeQuestions';
import { updateProblemReviewCategories } from 'services/leetcode_review/apiUpdateProblemReviewCategories';
import ProgressBar from '../common/ProgressBar';
import SubmitButton from '../common/SubmitButton';

const ProblemCategoriesTable = ({
  userSubmissionsByReviewCategory,
  problemCategoriesMarkedForReview,
  userProblemSubmissions,
  onTypeClick,
  onCheckboxChange,
  editMode,
}) => {
  const { uuid } = useContext(AuthContext);
  const [filter, setFilter] = useState('All');
  const [, setAllProblemData] = useState([]); // To hold all problem data

  useEffect(() => {
    // Fetch problem data once when the component mounts
    fetchAllLeetcodeQuestionsNonBlocking(setAllProblemData);
  }, []);

  const handleSubmit = async () => {
    updateProblemReviewCategories(uuid, problemCategoriesMarkedForReview);
  };

  const filteredProblemCategories =
    filter === 'All'
      ? userSubmissionsByReviewCategory
      : userSubmissionsByReviewCategory.filter((category) =>
          problemCategoriesMarkedForReview.includes(category.name)
        );

  return (
    <div>
      <FormControl
        variant='outlined'
        fullWidth
        margin='normal'
        sx={{
          maxWidth: 180,
          borderRadius: '50px',
          // overflow: 'hidden',
        }}
      >
        <InputLabel id='problem-type-filter-label'>Filter</InputLabel>
        <Select
          labelId='problem-type-filter-label'
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          label='Filter'
          sx={{
            borderRadius: '50px',
          }}
        >
          <MenuItem value='All'>All</MenuItem>
          <MenuItem value='Marked for Review'>Marked for Review</MenuItem>
        </Select>
      </FormControl>
      <TableContainer component={Paper} sx={{ backgroundColor: 'white' }}>
        <Table>
          <TableHead>
            <TableRow>
              {editMode && (
                <TableCell sx={{ backgroundColor: '#333', color: 'white' }}>
                  Reviewing?
                </TableCell>
              )}
              <TableCell sx={{ backgroundColor: '#333', color: 'white' }}>
                Category
              </TableCell>
              <TableCell sx={{ backgroundColor: '#333', color: 'white' }}>
                Progress
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProblemCategories.map((category) => {
              return (
                <TableRow
                  key={category.name}
                  sx={{
                    backgroundColor: problemCategoriesMarkedForReview.includes(
                      category.name
                    )
                      ? 'rgba(0, 0, 0, 0.2)'
                      : 'inherit',
                  }}
                >
                  {editMode && (
                    <CustomCheckbox
                      checked={problemCategoriesMarkedForReview.includes(
                        category.name
                      )}
                      onChange={() => onCheckboxChange(category.name)}
                    />
                  )}
                  <TableCell onClick={() => onTypeClick(category.name)}>
                    {category.name}
                  </TableCell>
                  <ProgressBar
                    userProblemSubmissions={userProblemSubmissions}
                    category={category}
                  />
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {editMode && <SubmitButton handleSubmit={handleSubmit} />}
    </div>
  );
};

export default ProblemCategoriesTable;
