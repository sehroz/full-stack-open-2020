import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Select from "react-select";
import { EDIT_AUTHOR } from "../queries";

const AuthorForm = ({ authors }) => {
  const [name, setName] = useState("");
  const [born, setBorn] = useState("");
  const [changeAuthor, result] = useMutation(EDIT_AUTHOR);

  const submit = (event) => {
    event.preventDefault();

    changeAuthor({
      variables: { name: name.value, born: born == "" ? 0 : born },
    });

    setBorn("");
  };

  const options = authors.map((a) => ({ value: a.name, label: a.name }));
  console.log(options);
  return (
    <div>
      <h2>Set birthyear</h2>

      <form onSubmit={submit}>
        <div>
          name
          <Select defaultValue={name} onChange={setName} options={options} />
        </div>
        <div>
          born
          <input
            value={born}
            onChange={({ target }) => setBorn(Number(target.value))}
          />
        </div>
        <button type="submit">update author</button>
      </form>
    </div>
  );
};

export default AuthorForm;
