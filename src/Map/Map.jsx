import React, { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const places = [
  {
    id: 1,
    name: "Al-Zawraa Park",
    position: [33.31516578841361, 44.377821385432],
    description: "Amusement park",
    link: "https://maps.app.goo.gl/1gfkTYMCcnYEDJt27",
    iconUrl: "/assets/Al-Zawraa.jpg",
  },
  {
    id: 2,
    name: "Baghdad Tower",
    position: [33.3032419436174, 44.354558744782906],
    description: "204 m, formerly known as International Saddam Tower",
    link: "https://maps.app.goo.gl/HYwYdmbZc5niBRJZ8",
    iconUrl: "/assets/BaghdadTower.jpg",
  },
  {
    id: 3,
    name: "Baghdad Mall",
    position: [33.31180980314147, 44.36461922649844],
    description: "Mall",
    link: "https://maps.app.goo.gl/8M4rQXv9ehbcsbR27",
    iconUrl: "/assets/BaghdadMall.jpg",
  },
  {
    id: 4,
    name: "Baghdad International Fair",
    position: [33.314488903074306, 44.36204635911121],
    description:
      "Baghdad International Fair is an international fair held in Baghdad on land belonging to the Ministry of Trade, which is specialized in organizing exhibitions, conferences, and holding international events and festivals.",
    link: "https://maps.app.goo.gl/ELugNTZj31oC37Ev5",
    iconUrl: "/assets/BaghdadInternationalFair.jpg",
  },
  {
    id: 5,
    name: "Adamiyah",
    position: [33.37156271753935, 44.36820324699999],
    description: "A great place worth visit",
    link: "https://maps.app.goo.gl/jRxJSMTK5GNg2N1H7",
    iconUrl: "/assets/Adamiyah.jpg",
  },
  {
    id: 6,
    name: "Ameria",
    position: [33.297174429542984, 44.29069719512314],
    description:
      "Al-A'amiriya is a neighborhood in the Mansour district of western Baghdad, Iraq, on the way to Anbar Province",
    link: "https://maps.app.goo.gl/FkC7aNTX3vevYtZh7",
    iconUrl: "/assets/Ameria.jpg",
  },
  {
    id: 7,
    name: "Al-Mutanabbi",
    position: [33.34001013655195, 44.387872037543225],
    description:
      "Abu al-Tayyib Ahmad ibn al-Husayn al-Mutanabbi,commonly known as Al-Mutanabbi,  was an Abbasid-era Arab poet at the court of the Hamdanid emir Sayf al-Dawla in Aleppo, and for whom he composed 300 folios of poetry  ",
    link: "https://maps.app.goo.gl/vzAS4UchwMFbSjsx8",
    iconUrl: "/assets/Al-Mutanabbi.jpg",
  },
  {
    id: 8,
    name: "Yarmouk",
    position: [33.301292354138056, 44.33732732098437],
    description: "A place full of restaurants",
    link: "https://maps.app.goo.gl/c3MTxqvzzxT6AKd16",
    iconUrl: "/assets/Yarmouk.jpg",
  },
  {
    id: 9,
    name: "Grape Leaves",
    position: [33.288355229260056, 44.38187405862789],
    description: "A nice resturant",
    link: "https://maps.app.goo.gl/5p2nbSUDW9r2PtgJ9",
    iconUrl: "/assets/GrapeLeaves.jpg",
  },
  {
    id: 10,
    name: "Dijlah Village",
    position: [33.29253192810402, 44.437148801885776],
    description:
      "Dijlah Village is a modern riverside complex in Baghdad, featuring restaurants, cafés, shops, and entertainment facilities. A great spot for dining, shopping, and leisure by the Tigris River",
    link: "https://maps.app.goo.gl/dhGU89xC5BQxBNen6",
    iconUrl: "/assets/DijlahVillage.jpg",
  },
  {
    id: 11,
    name: "Babylon Rotana",
    position: [33.29128480907673, 44.39049012335133],
    description:
      "Babylon Rotana is a five-star hotel located in Baghdad's Al-Jadriya ",
    link: "https://maps.app.goo.gl/7vJ6ooxhukiXLABt5",
    iconUrl: "/assets/BabylonRotana.png",
  },
  {
    id: 12,
    name: "Karada",
    position: [33.311265096070564, 44.436530717031246],
    description:
      "Karrada is a prominent district in Baghdad, Iraq, known for its vibrant commercial activity and cultural diversity. Situated on the eastern bank of the Tigris River, Karrada is a bustling area where locals and visitors alike engage in shopping, dining, and socializing.",
    link: "https://maps.app.goo.gl/wYaEZbTQ8QNqsyuq5",
    iconUrl: "/assets/WathiqSquare.png",
  },
  {
    id: 13,
    name: "Thousand and One Nights Park",
    position: [33.36376563382876, 44.366038661396274],
    description:
      "is a prominent recreational and cultural destination in Baghdad, Iraq. Situated along the Tigris River in the Adhamiya district",
    link: "https://maps.app.goo.gl/kuT33MAbqajnGRRG9",
    iconUrl: "/assets/andOneNightsPark.png",
  },
  {
    id: 14,
    name: "Liberation Square",
    position: [33.32782175025674, 44.408309126832975],
    description:
      "Liberation Square, locally known as Al-Tahrir Square, is a central and historically significant public space in Baghdad, Iraq. Established in 1937 during the Royal era, the square has been a focal point for cultural, political, and social events in the city.",
    link: "https://maps.app.goo.gl/JEif7U3yuF4gTyrF8",
    iconUrl: "/assets/Liberation Square.png",
  },
  {
    id: 15,
    name: "Rasul Kahi Geymar",
    position: [33.33859830752606, 44.402734628496],
    description:
      "Rasul Kahi Geymar is a renowned breakfast establishment in Baghdad, celebrated for its traditional Iraqi delicacies, particularly kahi and geymar",
    link: "https://maps.app.goo.gl/CKLZ3yJpzpM95MFj8",
    iconUrl: "/assets/Adamiyah.jpg",
  },
  {
    id: 16,
    name: "Al-Mustansiriya School",
    position: [33.338245442174774, 44.390215279179124],
    description:
      " A historic 13th-century Islamic school from the Abbasid era.",
    link: "https://maps.app.goo.gl/1DGSVjSTWP39H7hYA",
    iconUrl: "/assets/Al-MustansiriyaSchool.png",
  },
  {
    id: 17,
    name: "Abbasid Palace",
    position: [33.34304032778374, 44.38332995431713],
    description:
      " A surviving structure from Baghdad’s golden age under the Abbasid Caliphate.",
    link: "https://maps.app.goo.gl/xZH3g8vQstMhyDcv7",
    iconUrl: "/assets/Abbasid Palace.png",
  },
  {
    id: 18,
    name: "Iraqi National Museum",
    position: [33.328148088689154, 44.385035453969245],
    description:
      " also known as the Iraq Museum, is one of the most significant museums in the Middle East, showcasing the rich and ancient history of Mesopotamia.",
    link: "https://maps.app.goo.gl/hkuVCVYVaDGvDaRg6",
    iconUrl: "/assets/IraqiNationalMuseum.png",
  },
  {
    id: 19,
    name: "Iraqi National Theater",
    position: [33.30391657834125, 44.432105762421365],
    description:
      "The Iraqi National Theater is one of the most prominent cultural landmarks in Baghdad, Iraq, serving as a hub for performing arts, drama, and cultural events. It is located in the Karrada district, an area known for its vibrant cultural scene.",
    link: "https://maps.app.goo.gl/Z1qBMd6BPTC2noJf8",
    iconUrl: "/assets/IraqiNationalTheater.png",
  },
  {
    id: 20,
    name: "Iraqi Martyr Monument",
    position: [33.343311854019845, 44.44620117995229],
    description:
      "A striking blue dome-shaped monument honoring fallen soldiers.",
    link: "https://maps.app.goo.gl/4wrXGum9AWBizE5z7",
    iconUrl: "/assets/IraqiMartyrMonument.png",
  },
  {
    id: 21,
    name: "Abu Nuw'as Street",
    position: [33.32644078736199, 44.40652059769681],
    description:
      "A scenic riverside promenade lined with restaurants and cafes.",
    link: "https://maps.app.goo.gl/qamL5WX79XtQEGWY9s",
    iconUrl: "/assets/AbuNuw'asStreet.png",
  },
  {
    id: 22,
    name: "Abu Nuw'as Street",
    position: [33.32644078736199, 44.40652059769681],
    description:
      "A scenic riverside promenade lined with restaurants and cafes.",
    link: "https://maps.app.goo.gl/qamL5WX79XtQEGWY9s",
    iconUrl: "/assets/AbuNuw'asStreet.png",
  },
];

const getCustomIcon = (iconUrl) => {
  return L.icon({
    iconUrl: iconUrl || L.Icon.Default.prototype._getIconUrl("icon"),
    iconSize: [42, 42],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38],
  });
};

const Map = ({ searchQuery }) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  useEffect(() => {
    if (!mapRef.current) return;

    const map = L.map(mapRef.current).setView([33.3152, 44.3661], 12);
    mapInstanceRef.current = map;

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    places.forEach((place) => {
      L.marker(place.position, { icon: getCustomIcon(place.iconUrl) }).addTo(
        map
      ).bindPopup(`
          <div>
            <h3>${place.name}</h3>
            <p>${place.description}</p>
            ${
              place.link
                ? `<a href="${place.link}" target="_blank">Visit site</a>`
                : ""
            }
          </div>
        `);
    });

    return () => {
      map.remove();
    };
  }, []);

  useEffect(() => {
    if (!mapInstanceRef.current || !searchQuery) return;

    const filteredPlaces = places.filter((place) =>
      place.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filteredPlaces.length > 0) {
      const firstResult = filteredPlaces[0];
      mapInstanceRef.current.setView(firstResult.position, 14);

      L.popup()
        .setLatLng(firstResult.position)
        .setContent(`<h3>${firstResult.name}</h3>`)
        .openOn(mapInstanceRef.current);
    }
  }, [searchQuery]);

  return <div ref={mapRef} style={{ width: "100%", height: "874px" }}></div>;
};

export default Map;
