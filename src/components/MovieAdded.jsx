import Modal from './Modal';

export default function MovieAdded() {

  function handleClose() {
    document.getElementById('movie-added').close();
  }

  return (
    <>
      <Modal modalId="movie-added">
        <div className="flex flex-wrap">
          <h1 className="uppercase">Congratulations!</h1>
          <button onClick={handleClose} className="ml-20">X</button>
        </div>

        <p>The movie has been added to database successfully</p>
      </Modal>
    </>
  );
}
