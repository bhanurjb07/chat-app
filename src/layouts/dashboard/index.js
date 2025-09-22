import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data";
import { Divider, IconButton } from "@mui/material";
import { Gear } from "phosphor-react";

const DashboardLayout = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(0);

  return (
    <>
      <Box
        p={2}
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 1.25)",
          height: "100vh",
          width: "100px",
        }}
      >
        <Stack direction="column" alignItems="center" sx={{ width: "100%" }}>
          {/* Logo */}
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              height: 60,
              width: 60,
              borderRadius: 1.5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 3,
            }}
          >
            <img src={Logo} alt="Logo" style={{ width: "80%", height: "auto" }} />
          </Box>

          {/* Navigation */}
          <Stack
            sx={{ width: "max-content" }}
            direction="column"
            alignItems="center"
            spacing={3}
          >
            {Nav_Buttons.map((el) => (
              <Box
                key={el.index}
                sx={{
                  backgroundColor:
                    el.index === selected ? theme.palette.primary.main : "transparent",
                  borderRadius: 1.5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconButton
                  onClick={() => setSelected(el.index)}
                  sx={{
                    color: el.index === selected ? "#fff" : "#000",
                  }}
                >
                  {el.icon}
                </IconButton>
              </Box>
            ))}
            <Divider sx={{ width: "60%" }} />
            <IconButton>
              <Gear size={28} />
            </IconButton>
          </Stack>
        </Stack>
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
