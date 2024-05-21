import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carrousel from "../../components/Carrousel/Carrousel";
import Collapse from "../../components/Collapse/Collapse";
import Host from "../../components/Host/Host";
import Rate from "../../components/Rate/Rate";
import Tag from "../../components/Tag/Tag";

export default function FicheLogement() {
  const params = useParams();
  const navigate = useNavigate();

  const [pickedAppart, setPickedAppart] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("/logements.json");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const picked = data.find(({ id }) => id === params.id);
        if (picked) {
          setPickedAppart(picked);
        } else {
          navigate("/404", { state: { message: "Can't get data" } });
        }
      } catch (error) {
        console.error('Une erreur s\'est produite lors du chargement du fichier JSON :', error);
        navigate("/404", { state: { message: "Can't get data" } });
      }
    };

    getData();
  }, [params.id, navigate]); // Ajout de dépendances appropriées

  if (!pickedAppart) {
    return <div>Loading...</div>; // Affichage pendant le chargement
  }

  const { title, location, host, rating, description, pictures, tags, equipments } = pickedAppart;
  
  return (
    <div key={params.id} className="fiche-container">
      <Carrousel slides={pictures} />
      <section className="hostInfo-container">
        <div className="title-tags-container">
          <div className="title-container redFont">
            <h1>{title}</h1>
            <h3>{location}</h3>
          </div>
          <div className="tags-container">
            {tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
        </div>
        <div className="rate-host-container">
          <div className="host-container redFont">
            <Host hostName={host.name} hostPic={host.picture} />
          </div>
          <div className="rate-container">
            <Rate score={rating} />
          </div>
        </div>
      </section>
      <div className="collapse-fiche-container">
        <Collapse title="Description" content={description} />
        <Collapse title="Équipements" content={<ul>{equipments.map((item, index) => (
          <li key={index} className="equipList">{item}</li>
        ))}</ul>} />
      </div>
    </div>
  );
}


