import pb from '@/api/pocketbase';
import { getPbImageURL } from '@/utils';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const resetData = {
  title: '',
  color: '',
  price: '',
  photo: '',
};

function ProductEdit() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const formRef = useRef(null);
  const titleRef = useRef(null);
  const colorRef = useRef(null);
  const priceRef = useRef(null);
  const photoRef = useRef(null);

  useEffect(() => {
    async function getProduct() {
      try {
        const product = await pb.collection('products').getOne(productId);
        const { title, color, price } = product;
        resetData.title = titleRef.current.value = title;
        resetData.color = colorRef.current.value = color;
        resetData.price = priceRef.current.value = price.toString();
        const photoUrl = (resetData.photo = getPbImageURL(product, 'photo'));
        setFileImages((fileImages) => [
          ...fileImages,
          { image: photoUrl, label: photoUrl },
        ]);
      } catch (error) {
        console.error(error);
      }
    }

    getProduct();
  }, [productId]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const titleValue = titleRef.current.value;
    const colorValue = colorRef.current.value;
    const priceValue = Number(priceRef.current.value);
    const photoValue = photoRef.current.files;

    if (!titleValue && !colorValue && !priceValue) {
      toast('이름, 색상, 가격 정보 입력이 필요합니다.', {
        icon: '🚨',
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });

      return;
    }

    const formData = new FormData();

    formData.append('title', titleValue);
    formData.append('color', colorValue);
    formData.append('price', priceValue);

    console.log(photoValue);

    if (photoValue.length > 0) {
      formData.append('photo', photoValue[0]);
    }

    try {
      await pb.collection('products').update(productId, formData);
      navigate('/products');
    } catch (error) {
      console.error(error);
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    titleRef.current.value = resetData.title;
    colorRef.current.value = resetData.color;
    priceRef.current.value = resetData.price.toString();
    setFileImages(() => [{ image: resetData.photo, label: resetData.photo }]);
  };

  const [fileImages, setFileImages] = useState([]);

  const handleUpload = (e) => {
    const { files } = e.target;
    const fileImages = Array.from(files).map((file) => ({
      image: URL.createObjectURL(file),
      label: file.name,
    }));
    setFileImages(fileImages);
  };

  return (
    <div className="container mx-auto max-w-lg">
      <h2 className="my-5 text-center text-2xl font-medium text-blue-950 dark:text-sky-500/90">
        상품 수정
      </h2>
      <form
        encType="multipart/form-data"
        ref={formRef}
        onSubmit={handleUpdate}
        className="flex flex-col items-center gap-2"
      >
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="title">이름</label>
          <input
            ref={titleRef}
            type="text"
            name="title"
            id="title"
            placeholder="Slim Fit Ribbed Sleeveless"
            className="
              w-full rounded-md border border-slate-300 px-4 py-1.5 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
              dark:border-zinc-300/40 dark:bg-black dark:text-sky-400 dark:placeholder:text-zinc-600 dark:focus:ring-1 dark:focus:ring-sky-400 dark:focus:ring-offset-1
            "
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="color">색상</label>
          <input
            type="text"
            ref={colorRef}
            name="color"
            id="color"
            placeholder="Black"
            className="
              w-full rounded-md border border-slate-300 px-4 py-1.5 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
              dark:border-zinc-300/40 dark:bg-black dark:text-sky-400 dark:placeholder:text-zinc-600 dark:focus:ring-1 dark:focus:ring-sky-400 dark:focus:ring-offset-1
            "
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="price">가격</label>
          <input
            type="number"
            ref={priceRef}
            name="price"
            id="price"
            placeholder="49000"
            step="100"
            className="
              w-full rounded-md border border-slate-300 px-4 py-1.5 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
              dark:border-zinc-300/40 dark:bg-black dark:text-sky-400 dark:placeholder:text-zinc-600 dark:focus:ring-1 dark:focus:ring-sky-400 dark:focus:ring-offset-1
            "
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="photo">사진</label>
          <div className="relative">
            <input
              type="file"
              accept="*.jpg,*.png,*.jpeg,*.webp,*.avif"
              ref={photoRef}
              name="photo"
              id="photo"
              // multiple
              onChange={handleUpload}
              className="absolute z-10 h-full w-full cursor-pointer opacity-0"
            />
            <div className="flex h-36 w-full gap-2 overflow-x-auto bg-slate-100 p-2 dark:rounded dark:bg-black dark:outline-double dark:outline-[1px] dark:outline-zinc-100/40">
              {fileImages.map((file) => {
                return (
                  <img key={file.label} src={file.image} alt={file.label} />
                );
              })}
            </div>
          </div>
        </div>
        <div className="mb-6 mt-4 flex w-full justify-center gap-2">
          <button
            type="submit"
            className="
              rounded-full border-2 border-slate-300 px-3.5 py-1 hover:border-slate-400
              dark:border-[1px] dark:border-sky-400 dark:text-sky-400 dark:hover:border-sky-500 dark:hover:bg-sky-400 dark:hover:text-sky-50
            "
          >
            수정
          </button>
          <button
            type="reset"
            onClick={handleReset}
            className="
              rounded-full border-2 border-slate-200 bg-slate-200 px-3.5 py-1 hover:border-slate-300 hover:bg-slate-300
              dark:border-zinc-400 dark:bg-zinc-400
            "
          >
            취소
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductEdit;
