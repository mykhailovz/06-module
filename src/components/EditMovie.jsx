import Modal from './Modal';
import MovieForm from './MovieForm';

export default function EditMovie({movie}) {
  function onSubmitEdit() {
    console.log('on-submit-edit-movie');
  }

  function onClose() {
    document.getElementById('edit-movie').close();
  }

  return (
    <div>
      <Modal modalId="edit-movie">
        <MovieForm modalId="edit-movie" headerText="Edit Movie" onClose={onClose} onSubmit={onSubmitEdit} movie={movie} />
      </Modal>
    </div>
  );
}
