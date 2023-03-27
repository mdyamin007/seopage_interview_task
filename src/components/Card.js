import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaLayerGroup } from "react-icons/fa";
import { BsCalendar2Date } from "react-icons/bs";
import { IoChatbubbles } from "react-icons/io5";
import { RiAttachment2 } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";

const Card = () => {
  const [openModal, setOpenModal] = useState(false);
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    setFiles([...files, ...e.target.files]);
  };

  const ClickAttachment = () => {
    setOpenModal(true);
  };

  const removeFile = (indexToRemove) => {
    const updatedFiles = files.filter((file, index) => index !== indexToRemove);
    setFiles(updatedFiles);
  };

  if (openModal === true) {
    return (
      <div className="absolute inset-0 bg-gray-500 h-screen w-screen sm:px-8 md:px-16 sm:py-8">
        <main className="container mx-auto max-w-screen-lg h-full">
          <article
            aria-label="File Upload Modal"
            className="relative h-full flex flex-col justify-center items-center  bg-white shadow-xl rounded-md"
          >
            <div className="flex flex-col space-y-4">
              <label className="block text-gray-700 font-bold mb-2">
                Upload Files
              </label>
              <input type="file" multiple onChange={handleFileChange} />
              {files.length > 0 && (
                <ul className="space-y-2">
                  {files.map((file, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center bg-gray-100 p-2 rounded-md"
                    >
                      <div className="text-gray-800">{file.name}</div>
                      <div className="text-gray-500 text-sm">
                        {file.name.split(".").pop()}
                      </div>
                      <button
                        className="text-red-500"
                        onClick={() => removeFile(index)}
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <footer className="flex justify-end px-8 pb-8 pt-4">
              <button
                id="submit"
                className="rounded-sm px-3 py-1 bg-blue-700 hover:bg-blue-500 text-white focus:shadow-outline focus:outline-none"
              >
                Upload now
              </button>
              <button
                onClick={() => setOpenModal(false)}
                className="ml-3 rounded-sm px-3 py-1 hover:bg-gray-300 focus:shadow-outline focus:outline-none"
              >
                Cancel
              </button>
            </footer>
          </article>
        </main>
      </div>
    );
  }

  return (
    <div className="bg-white my-2 p-2 w-full">
      <div className="flex items-center justify-between">
        <div className="flex space-x-1">
          <CgProfile />
          <p className="text-xs">Client Name</p>
        </div>
        <div className="flex space-x-1">
          <CgProfile />
          <p className="text-xs">Md Yamin</p>
        </div>
      </div>
      <div className="flex justify-between my-4">
        <div className="flex space-x-1">
          <FaLayerGroup />
          <p className="text-xs text-ellipsis">lorem ipsum dolor sit... </p>
        </div>
        <div className="flex space-x-1">
          <BsCalendar2Date />
          <p className="text-xs">1/2</p>
        </div>
      </div>
      <div className="flex space-x-2 items-center">
        <CgProfile />
        <CgProfile />
        <div className="p-1 bg-gray-300 text-xs rounded-full">12+</div>
        <div className="flex items-center">
          <IoChatbubbles />
          <div className="p-1 text-xs">15</div>
        </div>
        <div className="flex items-center space-x-1">
          <button onClick={ClickAttachment}>
            <RiAttachment2 />
          </button>
          <p className="text-xs">10</p>
        </div>
        <div className="flex items-center space-x-1">
          <FaCalendarAlt />
          <p className="text-xs">30-12-2022</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
