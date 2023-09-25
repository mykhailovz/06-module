import Modal from './Modal';
import MovieForm from './MovieForm';

export default function AddMovie() {
  function onSubmitAdd() {
    console.log('on-submit-add-movie');
  }

  function onClose() {
    document.getElementById('add-movie').close();
  }

  return (
    <div>
      <Modal modalId="add-movie">
        <MovieForm modalId="add-movie" headerText="Add Movie" onSubmit={onSubmitAdd} onClose={onClose} />
      </Modal>
    </div>
  );
}
