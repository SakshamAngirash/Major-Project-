import { useState } from "react";
import axios from "axios";
import "./FileUpload.css";

const FileUpload = ({ contract, account }) => {
  const [file, setFile] = useState(null);
  const [FileName, setFileName] = useState(null);
  //Handle Image - to upload the image on Ipfs
  //retrieve file

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);
        console.log("hello");
        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: `
            dd13c7bbfc77eb566513`,
            pinata_secret_api_key: `42cf97fba646c98b185dfdf3be627de5667f4f43a4dce40b97cfd85c100efa8f`,
            "Content-Type": "multipart/form-data",
          },
        });

        const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
        //console.log(ImgHash)
        contract.add(account, ImgHash);
        alert("Image Uploaded : Successfully !");
        setFileName("No image Selected");
        setFile(null);
      } catch (error) {
        alert("Unable to upload image to pinata");
      }
    }
  };

  const retrieveFile = (event) => {
    const data = event.target.files[0];
    //iterate
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setFile(event.target.files[0]);
    };
    //console.log(event.target.files[0].name);
    setFileName(event.target.files[0].name);
    event.preventDefault();
  };
  return (
    <div className="top">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="file-upload" className="choose">
          Select Images
        </label>
        <input
          disabled={!account}
          type="file"
          id="file-upload"
          name="data"
          onChange={retrieveFile}
        />
        <span className="textArea">Image: {FileName}</span>
        <button type="submit" className="upload" disabled={!file}>
          Upload File
        </button>
      </form>
    </div>
  );
};

export default FileUpload;
