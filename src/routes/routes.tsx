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
const ExcalidrawFiles2Section = React.lazy(
  () => import("@/screens/excalidrawFiles2Section")
);

const Administration = React.lazy(() => import("@/screens/administration"));
const Administration2 = React.lazy(() => import("@/screens/administration2"));
const Administration3 = React.lazy(() => import("@/screens/administration3"));
const Administration4 = React.lazy(() => import("@/screens/administration4"));
const Administration6 = React.lazy(() => import("@/screens/administration6"));
const Administration7 = React.lazy(() => import("@/screens/administration7"));
const GlobalAdmin = React.lazy(() => import("@/screens/globalAdmin"));
const GlobalAdmin2 = React.lazy(() => import("@/screens/globalAdmin2"));
const GlobalAdmin3 = React.lazy(() => import("@/screens/globalAdmin3"));
const GlobalAdmin4 = React.lazy(() => import("@/screens/globalAdmin4"));
const Canvas = React.lazy(() => import("@/screens/canvas"));
const UserProfile = React.lazy(() => import("@/screens/userProfile"));

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
          path="/excalidrawFiles2/section"
          element={<ExcalidrawFiles2Section />}
        />
        <Route path="/excalidrawFiles2" element={<ExcalidrawFiles2 />} />
        <Route
          path="/excalidrawFiles/section"
          element={<ExcalidrawFilesSection />}
        />
        <Route path="/excalidrawFiles" element={<ExcalidrawFiles />} />
        <Route path="/sign-up" element={<Excalidraw />} />
        <Route path="/testing" element={<MigrationTest />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/administration" element={<Administration />} />
        <Route path="/administration-2" element={<Administration2 />} />
        <Route path="/administration-3" element={<Administration3 />} />
        <Route path="/administration-4" element={<Administration4 />} />
        <Route path="/administration-6" element={<Administration6 />} />
        <Route path="/administration-7" element={<Administration7 />} />
        <Route path="/global-admin" element={<GlobalAdmin />} />
        <Route path="/global-admin-2" element={<GlobalAdmin2 />} />
        <Route path="/global-admin-3" element={<GlobalAdmin3 />} />
        <Route path="/global-admin-4" element={<GlobalAdmin4 />} />
        <Route path="/canvas" element={<Canvas />} />
        <Route path="/user-profile" element={<UserProfile />} />
      </Routes>

      {/*other tools */}
      <AlertGlobal />
      <ModalGlobal />
    </React.Suspense>
  );
}
