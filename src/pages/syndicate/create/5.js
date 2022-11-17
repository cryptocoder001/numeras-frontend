import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AvatarEditor from "react-avatar-editor";
import Stepper from '../../../components/create/stepper';
import { BsPlusCircleDotted } from "react-icons/bs";
import { useApiContext } from '../../../contexts';

function Create5() {
  const history = useHistory();
  const [state, { setInfo }] = useApiContext();
  const [isAvatar, setIsAvatar] = useState(false);
  const [isImg, setIsImg] = useState(false);

  //Avatar 
  var editor = "";
  const [picture, setPicture] = useState({
    cropperOpen: false,
    img: '',
    zoom: 1,
    croppedImg: "none"
  });

  const handleSlider = (value) => {
    setPicture({
      ...picture,
      zoom: value
    });
  };

  const setEditorRef = (ed) => {
    editor = ed;
  };

  const handleSave = (e) => {
    setIsAvatar(false);
    setIsImg(true);
    if (setEditorRef) {
      const canvasScaled = editor.getImageScaledToCanvas();
      const croppedImg = canvasScaled.toDataURL();
      setPicture({
        ...picture,
        img: '',
        cropperOpen: false,
        croppedImg: croppedImg
      });
    }
  };

  const handleFileChange = (e) => {
    let url = URL.createObjectURL(e.target.files[0]);
    setIsAvatar(true);
    setPicture({
      ...picture,
      img: url,
      cropperOpen: true
    });
  };

  const handleCreateSyndicate = async () => {
    await setInfo(4, "");
    history.push("/join-syndicate")
  }

  return (
    <div className="x-create1 container">
      <div className="row">
        <div className="col-sm-12 col--md10">
          <div className='x-font13 mt-5'>
            Create a Listing
          </div>
          <div className="x-font7 font-22 mt-3">
            Tell us about your syndicate.
          </div>
          <div className='my-4'>
            <Stepper
              step="4"
              path="/create-syndicate"
              steps={['Personal info', 'Syndicate info', 'Syndicate Category', 'Create Prospectus', 'Upload Media']}
            />
          </div>
          <div className="x-font5 mt-3 italic">
            Upload media
          </div>
          <div className="row">
            <div className="x-font5 mt-5">
              {!isAvatar ?
                <>
                  <div>
                    {!isImg ?
                      <div >
                        <div onClick={() => { document.getElementById('fileinput-avatar').click(); }} className="dis-f" >
                          <BsPlusCircleDotted fontSize={'40px'} color="#2232cd" className='cu-po mauto' />
                          <input id='fileinput-avatar' style={{ display: 'none' }} type="file" accept="img/*" onChange={handleFileChange} />
                        </div>
                        <p className='mauto dis-f jc-c mt-2'>Upload a picture</p>
                      </div>
                      : <div className='justify'>
                        <img className="croppedImg-avatar mauto" src={picture.croppedImg} alt=""></img>
                      </div>
                    }

                  </div>
                </>
                : <>
                  <div>

                    <div className='avater-bg'>
                      <div className='justify-start'>
                        <p >Zoom </p>
                        {/* <Slider aria-label='slider-ex-6' min={1}
                                                        max={10} defaultValue={1} step={0.1} onChange={(val) => handleSlider(val)}>
                                                        <SliderTrack>
                                                            <SliderFilledTrack />
                                                        </SliderTrack>
                                                        <SliderThumb />
                                                    </Slider> */}

                        {/* <label for="customRange3" className="form-label">Zoom</label> */}
                        <div style={{ width: '100%' }}>
                          <input type="range" defaultValue={1} className="form-range" min={1} max={10} step={0.1} onChange={(e) => handleSlider(e.target.value)} id="customRange3" />
                        </div>
                      </div>

                      {picture.cropperOpen && (
                        <div style={{ display: 'block', cursor: 'crosshair' }}>
                          <AvatarEditor
                            className="avatar-editor"
                            ref={setEditorRef}
                            image={`${picture.img}`}
                            width={270}
                            height={350}
                            border={0}
                            // color={[255, 255, 255, 0.6]} // RGBA
                            rotate={0}
                            scale={picture.zoom}
                          />

                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <button className="x-button2 x-font3" onClick={handleSave} >Done</button>
                  </div>
                </>
              }
            </div>
            <div className="mt-5">
              <button className="x-button2 x-font3" onClick={handleCreateSyndicate}>FINISH</button>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-2">

        </div>
      </div>


    </div>
  )
}

export default Create5;