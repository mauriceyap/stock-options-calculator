import { GitHub } from "@mui/icons-material";
import { Box, Container, Divider, Link, Typography } from "@mui/material";

import { contributors } from "../config/contributors";

export const Footer = () => (
  <Container maxWidth="md">
    <Divider />
    <Box my={2} display="flex" gap={2} justifyContent="space-between">
      <Box>
        <Typography paragraph color="text.secondary" variant="body2">
          Created by{" "}
          <Link href="https://linked.in/in/mauriceyap">Maurice Yap</Link>.
        </Typography>
        {contributors.length > 0 && (
          <Typography paragraph color="text.secondary" variant="body2">
            Additional contributions by:
            <ul>
              {contributors.map(({ name, href }) => (
                <li key={name}>
                  {href === undefined ? name : <Link href={href}>{name}</Link>}
                </li>
              ))}
            </ul>
          </Typography>
        )}
      </Box>
      <Box>
        <Typography paragraph color="text.secondary" variant="body2">
          <Link href="https://github.com/mauriceyap/stock-options-calculator">
            View this project on GitHub
          </Link>{" "}
          <GitHub fontSize="inherit" />
        </Typography>
      </Box>
    </Box>
  </Container>
);
