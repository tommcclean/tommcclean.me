import { useState, useMemo, useCallback  } from 'react'
import debounce from 'lodash.debounce';
import styles from './todo.module.css'

export default function Todo({ todo, handleDelete, handleRename}) {
  const { title, id } = todo
  const [ newTitle, setNewTitle ] = useState(title)

  const saveChanges = useCallback((value: string) => {
    handleRename({
        title: value,
        id: id
      })
  }, []);

  const debouncedSendRequest = useMemo(() => {
    return debounce(saveChanges, 1000);
  }, [saveChanges]);

  const onChange = (event) => {
    setNewTitle(event.target.value);
    debouncedSendRequest(event.target.value);
  };

  return (
    <li className={styles.todo}>
      <input onChange={onChange} value={newTitle}></input>
      <button type="button" onClick={() => handleDelete(id)}>Delete</button>
    </li>
  )
}