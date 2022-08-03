import AWS from "aws-sdk";

//
export const AnonLog = () => {
    AWS.config.region= process.env.REACT_APP_REGION as string
    AWS.config.credentials = new AWS.CognitoIdentityCredentials( {
        IdentityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID as string
    })
}