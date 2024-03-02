import SignUpFormMultiStep from './SignupFormMultiStep';

const signUpView = () => {
  //check to see if this user exists in the database
  // if so, redirect to login
  // if not, create a new user and redirect to signUp Forms
  return (
    <div>
      <SignUpFormMultiStep />
    </div>
  );
};

export default signUpView;
