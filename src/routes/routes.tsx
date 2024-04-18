import * as React from "react";
import { Grid, CardMedia, CircularProgress, Toolbar } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Navbar from "@/components/navBar/navBar";
import NavbarDrawer from "@/components/navBar/navBarDrawer";
import AlertGlobal from "@/components/alert/alert";
import ModalGlobal from "@/components/modal/modal";

const Home = React.lazy(() => import("@/screens/home"));
const NotFoundPage = React.lazy(() => import("@/screens/notFoundPage"));
const MigrationTest = React.lazy(() => import("@/screens/migrationTest"));
const Excalidraw = React.lazy(() => import("@/screens/excalidraw"));
const ExcalidrawFiles = React.lazy(() => import("@/screens/excalidrawFiles"));
const ExcalidrawFilesSection = React.lazy(
  () => import("@/screens/excalidrawFilesSection")
);
const ExcalidrawFiles2 = React.lazy(() => import("@/screens/excalidrawFiles2"));

export default function Navigator() {
  let Logo = "";

  return (
    <React.Suspense
      fallback={
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            backgroundColor: "common.tree",
            width: "100%",
            height: "100vh",
          }}
        >
          <CardMedia
            component="img"
            image={Logo}
            alt="Logo"
            sx={{
              width: { xs: 150, sm: 150, md: 200, lg: "497px", xl: 300 },
              objectFit: "cover",
            }}
          />
          <CircularProgress
            style={{ color: "#C02327" }}
            sx={{ m: 2 }}
            size="68px"
          />
        </Grid>
      }
    >
      {/*Navbar primary */}
      {/* <Navbar /> */}
      {/* <Toolbar sx={{m:"10px"}} /> */}

      {/*Navbar secondary */}

      <Routes>
        <Route
          path="/excalidrawFiles/section"
          element={<ExcalidrawFilesSection />}
        />
        <Route path="/excalidrawFiles2" element={<ExcalidrawFiles2 />} />
        <Route path="/excalidrawFiles" element={<ExcalidrawFiles />} />
        <Route path="/excalidraw" element={<Excalidraw />} />
        <Route path="/testing" element={<MigrationTest />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/*other tools */}
      <AlertGlobal />
      <ModalGlobal />
    </React.Suspense>
  );
}
