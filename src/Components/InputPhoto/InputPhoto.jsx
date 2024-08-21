import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';

function InputPhoto({ setUrlImg }, ref) {
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [base64, setBase64] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  useEffect(() => {
    if (imagePreview) {
      const canvas = document.createElement("canvas");
      const image = new Image();
      image.src = imagePreview;
      image.onload = () => {
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;
        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0);
        const base64 = canvas.toDataURL();
        setBase64(base64);
        setUrlImg(base64);
      };
    }
  }, [imagePreview, setUrlImg]);

  const resetField = () => {
    setFile(null);
    setImagePreview(null);
    setBase64('');
    setUrlImg('');
  };

  useImperativeHandle(ref, () => ({
    resetField: resetField
  }));

  return (
    <div>
      <textarea
        onChange={(e) => setUrlImg(e.target.value)}
        name="urlImg"
        value={base64}
        required
        className="appearance-none border border-[#51C8FC] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Añade una foto"
        id="photo"
      />
      <input className="w-full" type="file" onChange={handleFileChange} />
    </div>
  );
}

export default forwardRef(InputPhoto);
