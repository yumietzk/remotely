import { useState } from "react";
import TextInput from "../../components/form/TextInput";
import Modal from "../../components/layout/Modal";

function TitleSettingModal({ setShowModal }) {
  // const [title, setTitle] = useState("");

  return (
    <Modal title="Edit title" setShowModal={setShowModal} width="250px">
      <form className="flex flex-col">
        <TextInput
          type="text"
          name="title"
          placeholder="Enter title"
          // value={title}
          // handleChange={(e) => setTitle(e.target.value)}
        />
        <button>Change</button>
      </form>
    </Modal>
  );
}

export default TitleSettingModal;
