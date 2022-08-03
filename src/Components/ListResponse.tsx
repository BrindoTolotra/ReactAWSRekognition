import React from 'react'
import  './ListResponse.css'

export interface BoundingBox {
  Width: number;
  Height: number;
  Left: number;
  Top: number;
}

export interface AgeRange {
  Low: number;
  High: number;
}

export interface BoolValueAndConfidence {
  Value: boolean;
  Confidence: number;
}

export interface Gender {
  Value: string;
  Confidence: number;
}

export interface Emotion {
  Type: string;
  Confidence: number;
}

export interface Landmark {
  Type: string;
  X: number;
  Y: number;
}

export interface Pose {
  Roll: number;
  Yaw: number;
  Pitch: number;
}

export interface Quality {
  Brightness: number;
  Sharpness: number;
}

export interface RootObject {
  BoundingBox: BoundingBox;
  AgeRange: AgeRange;
  Smile: BoolValueAndConfidence;
  Eyeglasses: BoolValueAndConfidence;
  Sunglasses: BoolValueAndConfidence;
  Gender: Gender;
  Beard: BoolValueAndConfidence;
  Mustache: BoolValueAndConfidence;
  EyesOpen: BoolValueAndConfidence;
  MouthOpen: BoolValueAndConfidence;
  Emotions: Emotion[];
  Landmarks: Landmark[];
  Pose: Pose;
  Quality: Quality;
  Confidence: number;
}




const ListResponse: React.FC<{result : RootObject}> = (props : { result : RootObject}) => {
  return (
    <div id='listResponse' className='d-flex flex-wrap justify-content-center'>
      <div className='divList'>
        <h1>AgeRange</h1>
        <p>Low {props.result.AgeRange.Low}</p>
        <p>High {props.result.AgeRange.High}</p>
      </div>
      <div className='divList'>
        <h1>Smile</h1>
        <p>Low {props.result.AgeRange.Low}</p>
        <p>High {props.result.AgeRange.High}</p>
      </div>
      <div className='divList'>
        <h1>Eyeglasses</h1>
        <p> Confidence{props.result.Eyeglasses.Confidence}</p>
      </div>
      <div className='divList'>
        <h1>Sunglasses</h1>
        <p>Confidence {props.result.Sunglasses.Confidence}</p>
      </div>
      <div className='divList'>
        <h1>Gender</h1>
        <p>Confidence {props.result.Gender.Confidence}</p>
      </div>
      <div className='divList'>
        <h1>Beard</h1>
        <p>Confidence {props.result.Beard.Confidence}</p>
      </div>
      <div className='divList'>
        <h1>Mustache</h1>
        <p>Confidence {props.result.Mustache.Confidence}</p>
      </div>
      <div className='divList'>
        <h1>EyesOpen</h1>
        <p>Confidence {props.result.EyesOpen.Confidence}</p>
      </div>
      <div className='divList'>
        <h1>MouthOpen</h1>
        <p>Confidence {props.result.MouthOpen.Confidence}</p>
      </div>
      <div className='divList'>
        <h1>Pose</h1>
        <p>Pitch {props.result.Pose.Pitch}</p>
        <p>Roll {props.result.Pose.Roll}</p>
        <p> Yaw{props.result.Pose.Yaw}</p>
      </div>
      <div className='divList'>
        <h1>Quality</h1>
        <p>Brightness {props.result.Quality.Brightness}</p>
      </div>
    </div>
  )
}

export default ListResponse