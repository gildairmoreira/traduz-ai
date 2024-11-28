import React from "react";
import { IconPaperclip } from "@tabler/icons-react";

interface FileUploadProps {
  handleFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileUpload = ({ handleFileUpload }: FileUploadProps) => (
  <label htmlFor="file-upload" className="cursor-pointer">
    <IconPaperclip size={21} />
    <input
      type="file"
      id="file-upload"
      onChange={handleFileUpload}
      className="hidden"
    />
  </label>
);

export default FileUpload;
