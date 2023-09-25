import Modal from './Modal';

export default function DeleteMovie() {

  function handleDelete() {
    console.log('delete movie');
    document.getElementById('delete-movie').close();
  }

  return (
    <>
      <Modal modalId="delete-movie">
        <h1 className="uppercase">Delete movie</h1>
        <p>Are you sure you want to delete the movie?</p>
        <button
          onClick={handleDelete}
          className="uppercase bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded">
            confirm
        </button>
      </Modal>
    </>
  );
}
