import React, { useContext } from 'react';
import {
  Button,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Link,
  FormControl,
  MenuItem,
  Select,
} from '@mui/material';
import { AuthContext } from 'contexts/authContext';

const leetcodeAPIURL = process.env.REACT_APP_LEETCODE_API_URL;

const AllProblemTable = ({ data, filter, onCheckboxChange, selectedTypes }) => {
  const { uuid } = useContext(AuthContext);

  console.log(filter);
  const filteredData =
    filter === 'All' ? data : data.filter((problem) => problem.type === filter);

  const handleSubmit = async () => {
    const selectedProblems = filteredData.filter((problem) =>
      selectedTypes.includes(problem.name)
    );
    console.log(selectedProblems);
    console.log(uuid);

    // const selectedProblems = filteredData //hacky
    //   .filter((problem) => selectedTypes.includes(problem.name))
    //   .map((problem) => ({
    //     ...problem,
    //     user_id: uuid, // Add the user_id property here
    //   }));

    try {
      for (const problem of selectedProblems) {
        console.log(problem);
        const payload = {
          // difficulty: problem.difficulty, //todo - add a thing here
          difficulty: 2,
          id: problem.id,
          isInBlind50: problem.isInBlind50,
          isInBlind75: problem.isInBlind75,
          isInGrind75: problem.isInGrind75,
          isInNeetcode: problem.isInNeetcode,
          isInSeanPrasadList: problem.isInSeanPrasadList,
          link: problem.link,
          name: problem.name,
          tag: problem.tag,
          type: problem.type,
          user_id: uuid,

          attempted: true,
        };

        // const payload = {
        //   data: selectedProblems, // Wrap the selectedProblems array inside an object with the key 'data'
        //   user_id: uuid,
        // };
        await fetch(`${leetcodeAPIURL}/space_repetition/${problem.id}/submit`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
      }
      alert('Submitted successfully');
    } catch (error) {
      console.error('Error submitting data', error);
      alert('Failed to submit');
    }
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Mark as Attempted</TableCell>
              <TableCell>Id</TableCell>
              <TableCell>Problem Name</TableCell>
              <TableCell>Difficulty</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((problem) => (
              <TableRow key={problem.id}>
                <TableCell padding='checkbox'>
                  <Checkbox
                    checked={selectedTypes.includes(problem.name)}
                    onChange={() => onCheckboxChange(problem.name)}
                  />
                </TableCell>
                <TableCell>{problem.id}</TableCell>
                <TableCell>
                  {/* <Link
                  href={`https://leetcode.com/problems/${problem.slug}`}
                  target='_blank'
                  rel='noopener'
                > */}
                  {problem.name}
                  {/* </Link> */}
                </TableCell>
                <TableCell>{problem.difficulty}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant='contained' color='primary' onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default AllProblemTable;
