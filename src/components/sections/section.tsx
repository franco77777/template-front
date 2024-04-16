import "react-quill/dist/quill.snow.css";

import iconGrid from "../../../public/icons/icon_grid.svg";
import iconHorizontal from "../../../public/icons/icon_horizontal.svg";
import iconVertical from "../../../public/icons/icon_vertical.svg";
import { EditConfig } from "../editConfig/editConfig";
import { Editor } from "../editor/editor";

import { HomeControl } from "./home_control";
import { LearnMore } from "./learn_more";
import { MediaEntertainment } from "./media_entertainment";
import { NetworkMonitoring } from "./network_monitoring";
import { Networking } from "./networking";
import { Productivity } from "./productivity";
import { SystemMonitoring } from "./system_monitoring";

// import img from 'next/img'
import { useState } from "react";

export const Section = () => {
  const [displayStore, setDisplayStore] = useState({
    display:
      "grid grid-cols-3 max-lg:grid-cols-2 max-sm:flex max-sm:flex-col max-w-[80%]",
    buttons: "flex flex-col",
    displayButtons: "grid grid-cols-3",
    displayMediaButtons: "grid-cols-6 max-md:grid-cols-4",
    widthIcon: 35,
    displayEdit: "hidden",
    filterText: "",
  });
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayStore((prevState) => ({
      ...prevState,
      filterText: event.target.value,
    }));
  };

  const setSmallIcons = () => {
    setDisplayStore((prevState) => ({
      ...prevState,
      buttons: "flex flex-row-reverse justify-center ",
      widthIcon: 20,
    }));
  };

  const setMediumIcons = () => {
    setDisplayStore((prevState) => ({
      ...prevState,
      buttons: "flex flex-col",
      widthIcon: 35,
    }));
  };

  const setBigIcons = () => {
    setDisplayStore((prevState) => ({
      ...prevState,
      buttons: "flex flex-row-reverse justify-center flex-col",
      widthIcon: 55,
    }));
  };

  const setDisplayGrid = () => {
    setDisplayStore((prevState) => ({
      ...prevState,
      display:
        "grid grid-cols-4 max-lg:grid-cols-2 max-sm:flex max-sm:flex-col max-w-[80%] ",
      displayMediaButtons: "grid-cols-6 max-md:grid-cols-4",
      displayButtons: "grid grid-cols-3",
    }));
  };

  const setDisplayFlex = () => {
    setDisplayStore((prevState) => ({
      ...prevState,
      display:
        "flex max-w-[95%] max-2xl:overflow-x-scroll max-lg:max-w-[90%] max-md:grid max-md:grid-cols-2 max-md:overflow-x-hidden max-sm:flex max-sm:flex-col",
      displayButtons: "flex flex-col",
      displayMediaButtons: "grid-cols-2 max-md:grid-cols-2",
    }));
  };

  const setDisplayFlexCol = () => {
    setDisplayStore((prevState) => ({
      ...prevState,
      display: "flex flex-col max-w-[80%]",
      displayMediaButtons: "grid-cols-6 max-md:grid-cols-4",
      displayButtons: "grid grid-cols-3",
    }));
  };

  const setEdit = () => {
    setDisplayStore((prevState) => ({
      ...prevState,
      displayEdit: prevState.displayEdit === "flex" ? "hidden" : "flex",
    }));
  };

  const Menu = () => {
    return (
      <div className="mx-auto my-5 flex w-[80%] justify-evenly gap-5">
        <div className="flex flex-col gap-2 max-sm:hidden">
          <p className="text-white">Diseño</p>
          <div className="flex gap-2">
            <button onClick={setDisplayGrid}>
              <img
                src={iconGrid}
                alt="grid"
                width={30}
                height={30}
                className="bg-white p-1 transition-all hover:p-2"
              />
            </button>
            <button onClick={setDisplayFlexCol}>
              <img
                src={iconHorizontal}
                alt="grid"
                width={30}
                height={30}
                className="h-full bg-white p-1 transition-all hover:p-2"
              />
            </button>
            <button onClick={setDisplayFlex}>
              <img
                src={iconVertical}
                alt="grid"
                width={30}
                height={30}
                className="bg-white p-1 transition-all hover:p-2"
              />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 max-sm:hidden">
          <p className="text-white">Tamaño de los items</p>
          <div className="flex gap-2">
            <button onClick={setSmallIcons}>
              <img
                src="./icons/small_icon.svg"
                alt="icon"
                width={30}
                height={30}
                className="bg-white p-1 transition-all hover:p-2"
              />
            </button>
            <button onClick={setMediumIcons}>
              <img
                src="./icons/medium_icon.svg"
                alt="icon"
                width={30}
                height={30}
                className="bg-white p-1 transition-all hover:p-2"
              />
            </button>
            <button onClick={setBigIcons}>
              <img
                src="./icons/big_icon.svg"
                alt="icon"
                width={30}
                height={30}
                className="bg-white p-1 transition-all hover:p-2"
              />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-white">Configuración</p>
          <div className="flex gap-2">
            <button>
              <img
                src="./icons/config.svg"
                alt="config"
                width={30}
                height={30}
                className="bg-white p-1 transition-all hover:p-2"
              />
            </button>
            <button onClick={setEdit}>
              <img
                src="./icons/edit.svg"
                alt="edit"
                width={30}
                height={30}
                className="bg-white p-1 transition-all hover:p-2"
              />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="flex w-[80vw]  text-[calc(8px+1vw)] mr-auto ml-auto">
        <div className="flex  items-center gap-5 rounded-b-md p-3">
          <label className="text-white font-medium">Buscar</label>
          <input
            className="bg-black p-2 text-white font-medium"
            type="text"
            placeholder="Filter..."
            value={displayStore.filterText}
            onInput={handleFilterChange}
          />
        </div>
        <Menu />
      </div>
      <div
        className={`mx-auto mb-20 ${displayStore.display} text-[calc(10px+0.5vw)] text-black`}
      >
        <div className="col-span-2 mx-auto w-full px-5 max-md:col-span-1">
          <MediaEntertainment
            widthButton={displayStore.buttons}
            widthIcon={displayStore.widthIcon}
            displayButtons={displayStore.displayMediaButtons}
            setEdit={displayStore.displayEdit}
            filterText={displayStore.filterText}
          />
        </div>
        <Networking
          widthButton={displayStore.buttons}
          widthIcon={displayStore.widthIcon}
          displayButtons={displayStore.displayButtons}
          setEdit={displayStore.displayEdit}
          filterText={displayStore.filterText}
        />

        <NetworkMonitoring
          widthButton={displayStore.buttons}
          widthIcon={displayStore.widthIcon}
          displayButtons={displayStore.displayButtons}
          setEdit={displayStore.displayEdit}
          filterText={displayStore.filterText}
        />

        <SystemMonitoring
          widthButton={displayStore.buttons}
          widthIcon={displayStore.widthIcon}
          displayButtons={displayStore.displayButtons}
          setEdit={displayStore.displayEdit}
          filterText={displayStore.filterText}
        />

        <HomeControl
          widthButton={displayStore.buttons}
          widthIcon={displayStore.widthIcon}
          displayButtons={displayStore.displayButtons}
          setEdit={displayStore.displayEdit}
          filterText={displayStore.filterText}
        />

        <Productivity
          widthButton={displayStore.buttons}
          widthIcon={displayStore.widthIcon}
          displayButtons={displayStore.displayButtons}
          setEdit={displayStore.displayEdit}
          filterText={displayStore.filterText}
        />

        <LearnMore
          widthButton={displayStore.buttons}
          widthIcon={displayStore.widthIcon}
          displayButtons={displayStore.displayButtons}
          setEdit={displayStore.displayEdit}
          filterText={displayStore.filterText}
        />
      </div>
    </div>
  );
};
