import React,{ useState }from 'react';
import classes from "./FileForm.module.css";
import { Modal} from 'antd';
import ResultTable from './ResultTables';

const FileForm = () => {
 const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectFile, setSelectFile] = useState(null);
  const [respFromServer, setRespromServer] = useState(null);

  function FileHandler(event) {
    console.log(event.target.value);
    setSelectFile(event.target.files[0]);
  }

  async function UploadHandler(event) {
    event.preventDefault();

    const url = "http://127.0.0.1:8000/predictionfile/";

    var formdata = new FormData();
    formdata.append("filePath", selectFile, "selectfile");

    const reqOpt = { method: "POST", body: formdata };

    const resp = await fetch(url, reqOpt);
    const resp2 = await resp.json();
    console.log(resp)
    setRespromServer(resp2.prediction);

    console.log(resp2.prediction);
    // console.log(respFromServer);
  }
  const showModal = () => {
    setIsModalVisible(true);
    console.log("clicked")
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  for(var key in respFromServer) {
    console.log(key + " : " + respFromServer[key]);
 }

  return (
    <React.Fragment>
      <div className={classes.main}>
        <h3 className={classes.UploadingTitle}>Batch processing</h3>
        <form onSubmit={UploadHandler} className={classes.FormContainer}>
          <input type="file" name="selectfile" onChange={FileHandler}></input>
          <div className={classes.actions}>
            <button type="submit" onClick={showModal}  className={classes.SubmitBtn}>Submit</button>
          </div>
        </form>
        <div>
      <ResultTable RESPONSE={respFromServer}/>
      </div>
      </div>
      
    </React.Fragment>
  );
};

export default FileForm;
