import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carrousel from "../../components/Carrousel/Carrousel";
import Collapse from "../../components/Collapse/Collapse";
import Host from "../../components/Host/Host";
import Rate from "../../components/Rate/Rate";
import Tag from "../../components/Tag/Tag";

export default function FicheLogement() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [pickedAppart, setPickedAppart] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`/logements.json`);
                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await res.json();
                const picked = data.find(appart => appart.id === id);
                if (picked) {
                    setPickedAppart(picked);
                } else {
                    navigate("/404", { state: { message: "Can't get data" } });
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                navigate("/404", { state: { message: "Can't get data" } });
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id, navigate]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!pickedAppart) {
        return <div>Data not found.</div>;
    }

    const { pictures, tags, equipments, title, location, host, rating, description } = pickedAppart;

    const equip = equipments.map((item, index) => (
        <li key={index} className="equipList">
            {item}
        </li>
    ));

    return (
        <div key={id} className="fiche-container">
            <Carrousel slides={pictures} />
            <section className="hostInfo-container">
                <div className="title-tags-container">
                    <div className="title-container redFont">
                        <h1>{title}</h1>
                        <h3>{location}</h3>
                    </div>
                    <div className="tags-container">
                        {tags.map(tag => (
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
                <Collapse aboutTitle="Description" aboutText={description} />
                <Collapse aboutTitle="Équipements" aboutText={equip} />
            </div>
        </div>
    );
}

