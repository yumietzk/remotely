import { useState } from "react";
import TextInput from "../../components/form/TextInput";
import Modal from "../../components/layout/Modal";
import Button from "../../components/elements/Button";

function TitleSettingModal({ setShowModal, setStatusTitle }) {
  const [title, setTitle] = useState("");

  function handleTitleChange(e) {
    e.preventDefault();

    setStatusTitle(title);
    setShowModal(false);
  }

  return (
    <Modal title="Edit title" setShowModal={setShowModal} width="250px">
      <form className="flex flex-col" onSubmit={handleTitleChange}>
        <TextInput
          inputClasses="mb-3"
          type="text"
          name="title"
          placeholder="Enter title"
          // value={title}
          handleChange={(value) => setTitle(value)}
        />
        <Button
          classes="w-full bg-white px-2 py-1 rounded-lg hover:bg-gray-50"
          type="submit"
        >
          Change
        </Button>
      </form>
    </Modal>
  );
}

export default TitleSettingModal;
