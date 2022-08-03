import AWS from "aws-sdk"
import InputImage from "./Components/InputImage";

function App() {

  AWS.config.region= process.env.REACT_APP_REGION as string
    AWS.config.credentials = new AWS.CognitoIdentityCredentials( {
        IdentityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID as string
    })
  return (
    <div>
      <InputImage/>
    </div>
  );
}

export default App;
