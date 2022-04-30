import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { withErrorApi } from "../../hoc/withErrorApi";
import { getResourses } from "../../utils/network";
import { GET_ALL_PEOPLE } from "../../constants/api";
import PersonPhoto from "../../components/PersonPage/PersonPhoto/PersonPhoto";
import PersonInfo from "../../components/PersonPage/PersonInfo/PersonInfo";
import { Button } from "react-bootstrap";
import styles from "./PersonPage.module.css";
import { useParams } from "react-router";
import PersonOccupation from "../../components/PersonPage/PersonOccupation/PersonOccupation";
import PersonLinkBack from "../../components/PersonPage/PersonLinkBack/PersonLinkBack";
import { addToFavourite, removeFromFavourite } from "../../store/actions";

const PersonPage = ({ setErrorApi }) => {
  const [personId, setPersonId] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);
  const [personInfo, setPersonInfo] = useState(null);
  const [occupation, setOccupation] = useState([]);
  const [personFavourite, setPersonFavourite] = useState(false);

  const storeData = useSelector((state) => state.favouriteReducer);
  // console.log(storeData);

  //idперсонажа из параметров url
  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    (async () => {
      const res = await getResourses(`${GET_ALL_PEOPLE}/${id}`);
      if (res) {
        setPersonInfo([
          { title: "Nickname", data: res[0].nickname },
          { title: "Birthday", data: res[0].birthday },
          { title: "Portrayed", data: res[0].portrayed },
          { title: "Status", data: res[0].status },
        ]);
        setPersonName(res[0].name);
        setPersonPhoto(res[0].img);
        setPersonId(id);
        storeData[id] ? setPersonFavourite(true) : setPersonFavourite(false);
        setOccupation(res[0].occupation);
        setErrorApi(false);
        // console.log(res);
      } else {
        setErrorApi(true);
      }
    })();
  }, []);

  return (
    <>
      <PersonLinkBack />
      <div className={styles.wrapper}>
        <span className={styles.person_name}>{personName}</span>
        <div className={styles.container}>
          <PersonPhoto
            personPhoto={personPhoto}
            personName={personName}
            personId={personId}
            personFavourite={personFavourite}
            setPersonFavourite={setPersonFavourite}
          />

          {personInfo && <PersonInfo personInfo={personInfo} />}
          {occupation && <PersonOccupation occupation={occupation} />}
        </div>
      </div>
    </>
  );
};

PersonPage.propTypes = {
  text: PropTypes.string,
};

export default withErrorApi(PersonPage);
