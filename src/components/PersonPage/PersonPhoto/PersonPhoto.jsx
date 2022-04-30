import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addToFavourite, removeFromFavourite } from "../../../store/actions";
import styles from "./PersonPhoto.module.css";
import add from "../../../image/add-friend.png";
import remove from "../../../image/addTo.png";
import { removeFromStorage } from "../../../utils/LocalStorage";
const PersonPhoto = ({
  personPhoto,
  personName,
  personId,
  personFavourite,
  setPersonFavourite,
}) => {
  const dispatch = useDispatch();
  //функция добавления в store
  const addToStore = () => {
    dispatch(
      addToFavourite({
        [personId]: {
          name: personName,
          img: personPhoto,
        },
      })
    );
    setPersonFavourite(true);
  };
  //функция удаления из store
  const rmFromStore = () => {
    dispatch(removeFromFavourite(personId));
    removeFromStorage(personId);
    setPersonFavourite(false);
  };
  const addOrRemove = () => {
    if (personFavourite) {
      rmFromStore();
    } else {
      addToStore();
    }
  };
  return (
    <div className={styles.container}>
      <img
        src={personFavourite ? remove : add}
        className={styles.icon}
        onClick={addOrRemove}
      />
      <img className={styles.photo} src={personPhoto} alt={personName} />
    </div>
  );
};

PersonPhoto.propTypes = {
  personPhoto: PropTypes.string,
  personName: PropTypes.string,
  personId: PropTypes.string,
  personFavourite: PropTypes.bool,
};

export default PersonPhoto;
