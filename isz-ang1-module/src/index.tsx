import * as React from "react";
import { PiletApi } from "isz-app";
import { ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
import { Javascript } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import "./theme.scss";

export function setup(app: PiletApi) {
  const AngularPage = React.lazy(() =>
    System.import("@angular/compiler@^14").then(() =>
      System.import(`${app.meta.basePath}angular-page.js`)
    )
  );

  app.registerPage("/angular-page", AngularPage);

  app.registerMenu(() =>
    <ListItemButton
      component={Link}
      to="/angular-page"
      sx={{
        minHeight: 48,
        justifyContent: open ? 'initial' : 'center',
        px: 2.5,
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: open ? 3 : 'auto',
          justifyContent: 'center',
        }}
      >
        <Javascript />
      </ListItemIcon>
      <ListItemText primary="Angular Page" sx={{ opacity: open ? 1 : 0 }} />
    </ListItemButton>
  );
}