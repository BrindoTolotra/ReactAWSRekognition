import AWS, { AWSError } from 'aws-sdk'
import { DetectFacesResponse } from 'aws-sdk/clients/rekognition'
import React, { useState } from 'react'
import { ProcessImage } from '../Function/ProcessImage'
import ListResponse from './ListResponse'

const InputImage = () => {
  const [image,setImage] = useState()
  const [dataValues,setDataValues] = useState<DetectFacesResponse | null>(null)
  const [isUpload,setIsUpload] = useState<boolean>(false)

  // 
  const rekognition = new AWS.Rekognition()
  const DetectFaces = (ImageData : ArrayBuffer) => {
    AWS.config.region = process.env.REACT_APP_REGION as string;
    const params= {
      Image: {
        Bytes: ImageData
      },
      Attributes : [
        'ALL',
      ]
    }
  
    rekognition.detectFaces(params, function (err: AWSError, data:DetectFacesResponse){
      if (err) {
        console.log(err,err.stack)
      }
      else {
        console.log(data);
        setDataValues(data);
        setIsUpload(true)
        
      }
  })
    
  }
  const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    //@ts-ignore
    ProcessImage(e.target.files[0], DetectFaces)
    //@ts-ignore
    setImage(URL.createObjectURL(e.target.files[0]))
  }
  return (
    <div className='container-fluid bg-dark'>
      {isUpload? 
        (
          <div className='d-flex'>
            <div className=''>
              <img src={image} alt="" className='img'/>
            </div>
            <div className='border'>
              {
                //@ts-ignore
                <ListResponse result={dataValues?.FaceDetails[0]}/> 
              }
          </div>
        </div>    
      ) : 
      <input type="file" name="fileToUpload" id="fileToUpload" accept="image/*" onChange={handleInputChange}/>
      }
    </div>
    
  )
}

export default InputImage